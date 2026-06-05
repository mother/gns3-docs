---
title: uBridge Permission Issue
featureTag: [Reference]
difficulty: Beginner
readingTime: 3 minutes
---

# uBridge Permission Issue

### Docker container node fails to start with "uBridge requires root access" error?

**Cause:** uBridge needs to create TAP network interfaces to connect Docker containers to the GNS3 virtual network, requiring `CAP_NET_ADMIN` and `CAP_NET_RAW` capabilities. Other node types (e.g., QEMU) may have their own networking implementations that don't need uBridge.

**Solution:** Grant uBridge the necessary network capabilities:

```bash
sudo setcap cap_net_admin,cap_net_raw=eip /usr/bin/ubridge
```
