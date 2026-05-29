---
title: How to Use Packet Filter
功能标签: [操作]
难度: 入门
预计阅读时间: 5 分钟
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# How to Use Packet Filter

Packet Filter is a network impairment simulation feature provided by GNS3. It allows you to simulate real-world network issues at the link layer, such as latency, packet loss, and packet corruption.

:::note
Only supported on specific node types: VPCS, Dynamips, QEMU, IOU, Cloud, NAT, Docker.
:::

## Quick Start

**Step 1: Open the Packet Filter Interface**

In the project topology, **right-click** on the link you want to configure and select **Packet filters**.

<img style={{ display: 'block', margin: '0 auto' }} alt="Right-click to select Packet filters" src={useBaseUrl('img/web-ui/zh/packet-filter-right-click.jpeg')} />

**Step 2: Select Filter Type**

In the **Packet filters** dialog, select the corresponding tab to configure the filter.

<img style={{ display: 'block', margin: '0 auto' }} alt="Packet filters dialog" src={useBaseUrl('img/web-ui/zh/packet-filter-dialog.jpeg')} />

**Step 3: Configure Filter Parameters**

Choose the filter type and configure its parameters:

| Filter Type | Function | Parameters |
|---|---|---|
| **Delay Latency** | Latency | 0-32767ms |
| **Delay Jitter** | Jitter | 0-32767ms |
| **Packet loss** | Random packet drop | Chance (0-100%) |
| **Packet corruption** | Packet corruption | Chance (0-100%) |
| **Frequency drop** | Drop one packet every N packets | Frequency (1-32767) |
| **BPF** | Precise traffic filtering | BPF expression (e.g., `icmp`, `port 80`) |

**Step 4: Apply Configuration**

After configuring the parameters, click the **Apply** button. A Packet Filter icon will appear on the link.

<img style={{ display: 'block', margin: '0 auto' }} alt="Packet Filter icon on link" src={useBaseUrl('img/web-ui/zh/packet-filter-apply.jpeg')} />

## Clearing Filters

**Method 1: Reset Parameters**

Open the Packet filters dialog and click the **Reset** button to quickly clear all parameters.

<img style={{ display: 'block', margin: '0 auto' }} alt="Reset button" src={useBaseUrl('img/web-ui/zh/packet-filter-reset.jpeg')} />

**Method 2: Delete the Link**

Deleting the link will automatically clear all filter configurations.

## BPF Expression Examples

BPF (Berkeley Packet Filter) supports precise traffic filtering using the same syntax as tcpdump:

| Expression | Function |
|---|---|
| `icmp` | Drop all ICMP traffic |
| `port 80` | Drop traffic on port 80 |
| `host 10.0.0.1` | Drop traffic to/from a specific host |
| `dst host 192.168.1.100 and port 80` | Drop traffic to a web server |
| `src net 10.0.0.0/24` | Drop traffic from a specific subnet |
| `tcp and not port 53` | Drop TCP traffic except DNS |
