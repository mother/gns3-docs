---
title: VirtualBox Guide
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# VirtualBox Guide

:::tip Video Tutorial

📺 **[Watch the Video Tutorial](https://www.youtube.com/watch?v=9sql9jCSo_E)** - Follow along step-by-step to import GNS3 VM to VirtualBox

:::

Run GNS3 VM in VirtualBox. This is good for personal use and learning.

## Before You Start

- You have VirtualBox installed
- You downloaded the GNS3 VM (.ova file) from the [GNS3 website](https://gns3.com/software/download-vm) or from the [gns3-gui Release](https://github.com/GNS3/gns3-gui/releases) page

## Step 1: Set Up the Network

Set up a "Host-Only Network" for GNS3 VM in VirtualBox.

- Click "Network", choose "Host-Only Network", then click "Create".

<img style={{ width: '100%' }} alt="Create a Host-Only Network" src={useBaseUrl('img/gns3-vm/virtualbox/en/01-host-only-network.jpeg')} />

- Select the new network, then choose "DHCP Server".


<img style={{ width: '100%' }} alt="DHCP Server settings" src={useBaseUrl('img/gns3-vm/virtualbox/en/02-dhcp-server.jpeg')} />

- Check "Enable Server", then click "OK".

<img style={{ width: '100%' }} alt="Enable DHCP server" src={useBaseUrl('img/gns3-vm/virtualbox/en/03-enable-dhcp.jpeg')} />


## Step 2: Import the Virtual Machine

Download the GNS3 VM image from the GNS3 website, then import it into VirtualBox.

> `Main menu` → `Import` → Choose `GNS3 VM.ova` → `Import`
<img style={{ width: '100%' }} alt="Import the OVA file" src={useBaseUrl('img/gns3-vm/virtualbox/en/04-import-ova.jpeg')} />


- Import is done.

<img style={{ width: '100%' }} alt="Import complete" src={useBaseUrl('img/gns3-vm/virtualbox/en/05-import-done.jpeg')} />


## Step 3: Start the Virtual Machine

Start the GNS3 VM. Wait for it to fully boot (about 2-3 minutes). Then write down the IP address shown on the screen.

After it starts, you will see the GNS3 VM console screen. It shows login information and the IP address.

<img style={{ width: '100%' }} alt="GNS3 VM console showing the IP address" src={useBaseUrl('img/gns3-vm/virtualbox/zh/06-vm-console-ip-display.jpeg')} />

## Step 4: Log In to the Web UI

Open your browser and go to the GNS3 Web UI. Log in with username `admin` and password `admin`.

<img style={{ width: '100%' }} alt="Web UI login page" src={useBaseUrl('img/gns3-vm/virtualbox/zh/07-web-ui-login.jpeg')} />

- The page after you log in.

<img style={{ width: '100%' }} alt="Web UI dashboard overview" src={useBaseUrl('img/gns3-vm/virtualbox/zh/08-dashboard-overview.jpeg')} />


---
**Document Version**: 3.10.0
**Last Updated**: 2026-05-15
