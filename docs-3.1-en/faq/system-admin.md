---
title: System Administration
featureTag: [Reference]
difficulty: Beginner
readingTime: 5 minutes
---

# System Administration

### Which ports does GNS3 3.1 use? How to change port ranges?

| Purpose | Default Port Range | Description |
|---------|-------------------|-------------|
| Main service | 80 / 443 / 3080 | GNS3 VM default ports |
| Console ports | 5000-10000 | Device console connections |
| VNC ports | 5900-10000 | VNC connections |
| UDP communication | 10000-30000 | Inter-device link communication |

All port ranges can be customized in `gns3_server.conf`.

### Compute node connection returns 401 Unauthorized?

1. Check that `compute_username` and `compute_password` in the compute node config match the controller credentials
2. Verify the compute node configuration is loaded correctly
3. Ensure the `[Server]` section is used (not `[Controller]`)

If `compute_password` is not set, the server generates a random 16-character password on startup, which will cause authentication failures.

### Compute node reports "No common subnet" error?

**Main cause:** The controller's `host` is set to `0.0.0.0`, causing it to register as `127.0.0.1`, which is unreachable from the compute node.

**Solution:** Set the controller's `host` to its actual LAN IP address (e.g., `host = 192.168.1.104`) instead of `0.0.0.0`. If using DHCP, configure a static lease on your router or use mDNS (`.local` domain).
