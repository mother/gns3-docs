---
title: Web Wireshark
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Web Wireshark

Web Wireshark lets you analyze network packets directly in your browser. You do not need to install Wireshark software. It uses xpra technology inside a Docker container to give you the full Wireshark graphical interface. It supports real-time capture and deep packet inspection.

<img style={{ width: '100%' }} alt="Web Wireshark Interface" src={useBaseUrl('img/web-ui/zh/web-wireshark-hero.jpeg')} />

## 1. Installation Prerequisites

As shown in the figure below, select Web Wireshark in the GNS3 VM interface, then select the OK button and press Enter. The system will first try to pull the `gns3/web-wireshark:latest` container from Docker Hub.

<img style={{ width: '100%' }} alt="Web Wireshark installation selection interface" src={useBaseUrl('img/web-ui/zh/web-wireshark-install.jpeg')} />

If the pull from Docker Hub fails, it will try to build the `gns3/web-wireshark:latest` container locally. During the build process, it needs to pull the Debian 13 base image from Docker Hub, and the subsequent software package installation will automatically switch to the Alibaba Cloud mirror source.

## 2. Core Architecture

### How It Works

Web Wireshark uses a container architecture. It turns a traditional desktop application into a browser service:

```
Browser -> GNS3 Server -> Docker Container -> xpra + Xvfb -> Wireshark -> pcap data stream
```

**Core technologies:**
- Container isolation: Each project gets its own Docker container (`gns3-wireshark-{project_id}`)
- Virtual display: Xvfb virtual frame buffer (1920x1080x24)
- Remote display: xpra HTML5 client
- Real-time streaming: WebSocket two-way proxy

### Resource Settings

**Default settings:**
- Container memory: 2GB
- CPU allocation: 1.0 core
- Process limit: 1000
- Network subnet: 172.31.0.0/22

**Resource use for each Wireshark instance:**
- Memory: 150-250 MB
- CPU: 0.5-2% (idle to active)
- Threads: about 30

## 3. Main Features

### 2.1 Two Display Modes

**New tab mode:**
- Opens Web Wireshark in a separate browser tab
- Good for full-screen analysis and multi-monitor work
- Does not take space in the project map
- Note: If the window exceeds 1920x1080px, mouse clicks will not work in the area beyond 1080px height; this can be mitigated by zooming the webpage

**Inline window mode:**
- Shows as a floating window in the project map
- Can be dragged, resized, and minimized
- Supports opening many Web Wireshark windows at the same time (one per link)
- Click a window to bring it to the front
- The taskbar shows all minimized windows

**Window limits:**
- Minimum size: 800x600px
- Maximum size: 1920x1080px
- Always stays inside the browser viewport

### 2.2 Packet Capture Control

**Capture actions:**

| Action | Description | How to Access |
|--------|-------------|---------------|
| Start capture | Start capturing packets on a link | Right-click link -> "Start capture" |
| Open Web Wireshark | View real-time capture data | Right-click link -> "Start Web Wireshark" |
| Open Web Wireshark (Inline) | View in a floating window | Right-click link -> "Start Web Wireshark (Inline)" |
| Restart capture | Restart the capture process | Restart button in the Web Wireshark window |
| Stop capture | Stop capture and free resources | Right-click link -> "Stop capture" |

**Requirements before starting:**
- At least one device at either end of the link must be running

### 2.3 Automatic File Naming

The system creates descriptive file names automatically.

**Format:** `{source_device}_{source_port}_to_{destination_device}_{destination_port}`

**Examples:**
- `R1_GigabitEthernet0_0_to_R2_GigabitEthernet0_0`
- `PC1_eth0_to_Switch1_FastEthernet0_1`

Special characters are removed automatically to make sure the file name is valid.

### 2.4 Capture Configuration Options

Settings in the start capture dialog:

- **Capture file name**: Name of the capture file (you can set your own, or use the auto-generated name)
- **Link type**: Type of link (for example Ethernet, UDP)
- **Data link type**: Data link layer type
- **Start Web Wireshark**: Check this to open Web Wireshark automatically
- **Start program**: Start local Wireshark (needs to be installed)

<img style={{ width: '100%' }} alt="Capture Configuration Dialog" src={useBaseUrl('img/web-ui/zh/web-wireshark-capture-config.jpeg')} />

## 4. Multi-Session Management

### Project-Level Container

- One container per project: `gns3-wireshark-{project_id}`
- The container stops when the project closes and is deleted when the project is deleted

### Link-Level Sessions

- One xpra session per link
- Deterministic port assignment: display = port = 10000 + hash(link_id) % 10000
- Port range: 10000-19999

### Performance

- First start: about 6 seconds (includes container startup)
- Later starts: about 5 seconds (container is already running)
- Stop and clean up: about 2 seconds

## 5. Configuration File Settings

You can change Web Wireshark performance settings in the `gns3_server.conf` file.

Add a `[WebWireshark]` section to the `gns3_server.conf` file:

```
[WebWireshark]
# Enable or disable Web Wireshark
enabled = true

# Docker image name
image = gns3/web-wireshark:latest

# Docker network subnet
network_subnet = 172.31.0.0/22

# Container memory limit
memory = 2g

# CPU core allocation
cpus = 1.0

# Process limit
pids_limit = 1000
```

### Parameter Description

| Parameter | Default | Description |
|-----------|---------|-------------|
| enabled | true | Enable or disable Web Wireshark |
| image | gns3/web-wireshark:latest | Docker image name and tag |
| network_subnet | 172.31.0.0/22 | Docker network subnet (for container communication) |
| memory | 2g | Container memory limit (supports units: k, m, g) |
| cpus | 1.0 | Container CPU cores (can be a decimal, like 1.5) |
| pids_limit | 1000 | Process limit inside the container |

## 6. Performance Tuning

### Memory Settings

Adjust memory based on how many Web Wireshark instances you use at the same time:

| Concurrent instances | Recommended memory | Description |
|---------------------|--------------------|-------------|
| 4-6 | memory = 2g | Default, medium use |
| 7-10 | memory = 4g | Heavy use |
| 10+ | memory = 8g | Large topologies |

### CPU Settings

| Use case | Recommended setting | Description |
|----------|-------------------|-------------|
| Occasional use | cpus = 1.0 | Default |
| Frequent use | cpus = 2.0 | Better response |
| Many instances at once | cpus = 4.0 | Dedicated server for large projects |

## 7. Configuration Examples

### Standard Configuration

```
[WebWireshark]
enabled = true
memory = 2g
cpus = 1
pids_limit = 1000
```

### High Performance Configuration

```
[WebWireshark]
enabled = true
memory = 4g
cpus = 2.0
pids_limit = 2000
```

## 8. Network Configuration

### Change the Default Network Subnet

If the default subnet conflicts with your network, you can change it:

```
[WebWireshark]
# Use a different subnet
network_subnet = 192.168.100.0/22
```

**Important notes:**
- Make sure the subnet does not conflict with your host network
- The subnet must be at least /22 (supports about 1000 IP addresses)
- You need to restart the GNS3 server after making changes

### Configuration File Location

In GNS3 VM, the configuration file is at `/opt/gns3/server/gns3_server.conf`. For Linux manual installations, the default configuration file is at `~/.config/GNS3/3.1/gns3_server.conf`.

### How to Apply Changes

1. After changing the configuration file, restart the GNS3 server to apply the changes
2. New containers will use the new settings

## 9. Troubleshooting

### Network Connection Issues

- Check if network_subnet conflicts with existing networks
- Use `docker network ls` to see existing networks
- If needed, delete the old network: `docker network rm gns3-wireshark`

## Web Wireshark vs Local Wireshark

| Feature | Web Wireshark | Local Wireshark |
|---------|---------------|-----------------|
| Installation | No installation needed | Needs to install Wireshark |
| How to access | Open in browser | Standalone application |
| Display location | Browser tab or inline window | Separate window |
| Cross-platform | Any modern browser | Depends on operating system |
| Remote access | Through Web UI | Needs remote desktop |
