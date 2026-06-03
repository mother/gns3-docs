---
title: Docker Container Stop Delay
featureTag: [Reference]
difficulty: Beginner
readingTime: 5 minutes
---

# Docker Container Stop Delay

### Some Docker containers take ~5 seconds to stop when closing a project while others stop instantly. Why?

This is caused by differences in how the PID 1 process inside each container handles the `SIGTERM` signal.

**Example log timeline (2026-06-03):**

| Time | Event |
|------|-------|
| 22:32:58 | Start fix ownership (AlpineLinux-1, Chromium-1, OstinatoWireshark-1) |
| 22:32:58 | **Chromium-1** stopped ✅ |
| 22:32:59 | **webterm-1** stopped ✅ |
| 22:33:03 | **AlpineLinux-1** stopped ❌ (~5s) |
| 22:33:03 | **OstinatoWireshark-1** stopped ❌ (~5s) |

**Root cause:** Docker's `stop` command sends `SIGTERM` to PID 1 inside the container, waits `t` seconds (GNS3 sets `t=5`), then sends `SIGKILL`. Slow containers have a PID 1 process that **does not respond to SIGTERM** and must wait for the timeout.

**Container analysis:**

| Container | PID 1 | SIGTERM behavior | Time |
|-----------|-------|-----------------|------|
| Chromium | `/usr/bin/chromium` ✅ | Native signal handling, exits immediately | ~0s |
| webterm | `dumb-init` → firefox ✅ | Firefox responds to SIGTERM | ~0s |
| **AlpiNet** | `dumb-init` → **`bash -i`** ❌ | Interactive bash (`-i`) ignores SIGTERM | **~5s** |
| **OstinatoWireshark** | **`bash` (PID 1)** ❌ | Linux kernel does not apply default SIGTERM action to PID 1 | **~5s** |

**Details:**

- **AlpiNet** entry script ends with `bash -i -l` (interactive mode). Interactive bash ignores SIGTERM by design
- **OstinatoWireshark** entry script ends at `/bin/bash` running as PID 1. Without an explicit signal handler, the Linux kernel **drops SIGTERM** for PID 1

:::note
This is a container image entry script design issue, not a GNS3 defect. GNS3's Docker stop logic (SIGTERM with 5s timeout then SIGKILL) follows standard Docker behavior.
:::
