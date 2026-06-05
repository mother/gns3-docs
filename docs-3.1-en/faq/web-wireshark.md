---
title: Web Wireshark
featureTag: [Reference]
difficulty: Beginner
readingTime: 5 minutes
---

# Web Wireshark

### Web Wireshark won't start or connect?

Troubleshooting steps:

1. **Verify Docker is running**: Run `docker ps` on the GNS3 VM to confirm the Docker daemon is active
2. **Check network connectivity**: Ensure the GNS3 VM can reach Docker Hub (or has the image pre-loaded)
3. **Review configuration**: Confirm the `[WebWireshark]` section in `gns3_server.conf` is correct
4. **Check logs**: Look for error messages in the GNS3 log console
5. **Inspect container logs**: Run `docker logs gns3-wireshark-{project_id}`

### How to adjust Web Wireshark resource allocation (memory, CPU)?

Edit the `[WebWireshark]` section in `gns3_server.conf`:

```ini
[WebWireshark]
memory = 4g   # Container memory limit (default 2g)
cpus = 2.0    # CPU cores (default 1.0)
```

Recommended configuration by concurrent instances:

| Concurrent instances | Recommended memory | Usage |
|---------------------|-------------------|-------|
| 4-6 | 2g | Default, moderate usage |
| 7-10 | 4g | Heavy usage |
| 10+ | 8g | Large topologies |
