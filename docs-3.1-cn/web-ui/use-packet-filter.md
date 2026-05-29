---
title: 如何使用Packet Filter
功能标签: [操作]
难度: 入门
预计阅读时间: 5 分钟
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 如何使用 Packet Filter

Packet Filter（包过滤器）是 GNS3 提供的网络损伤模拟功能，可以在链路层模拟真实的网络环境问题，如延迟、丢包、包损坏等。

:::note
仅支持特定节点类型：VPCS、Dynamips、QEMU、IOU、Cloud、NAT、Docker。
:::

## 快速开始

**步骤 1：打开 Packet Filter 界面**

在项目拓扑图中，**右键点击**要应用过滤器的链路，选择 **Packet filters** 选项。

<img style={{ display: 'block', margin: '0 auto' }} alt="右键菜单选择 Packet filters" src={useBaseUrl('img/web-ui/zh/packet-filter-right-click.jpeg')} />

**步骤 2：选择过滤器类型**

在弹出的 **Packet filters** 对话框中，选择相应的标签页配置过滤器。

<img style={{ display: 'block', margin: '0 auto' }} alt="Packet filters 对话框" src={useBaseUrl('img/web-ui/zh/packet-filter-dialog.jpeg')} />

**步骤 3：配置过滤器参数**

根据需要选择过滤器类型并配置参数：

| 过滤器类型 | 功能 | 参数 |
|---|---|---|
| **Delay Latency** | 延迟 | 0-32767ms |
| **Delay Jitter** | 抖动 | 0-32767ms |
| **Packet loss** | 随机丢包 | Chance（0-100%） |
| **Packet corruption** | 包损坏 | Chance（0-100%） |
| **Frequency drop** | 每 N 包丢弃一个 | Frequency（1-32767） |
| **BPF** | 精准流量过滤 | BPF 表达式（如 `icmp`、`port 80`） |

**步骤 4：应用配置**

配置完参数后，点击 **Apply** 按钮应用过滤器。在链路上会出现 Packet Filter 的图标。

<img style={{ display: 'block', margin: '0 auto' }} alt="链路 Packet Filter 图标" src={useBaseUrl('img/web-ui/zh/packet-filter-apply.jpeg')} />

## 清除过滤器

**方法一：重置参数**

打开 Packet filters 对话框，点击 **Reset** 按钮，快速清理参数。

<img style={{ display: 'block', margin: '0 auto' }} alt="Reset 按钮" src={useBaseUrl('img/web-ui/zh/packet-filter-reset.jpeg')} />

**方法二：删除链路**

删除链路会自动清除所有过滤器配置。

## BPF 表达式示例

BPF（Berkeley Packet Filter）支持精准流量过滤，语法与 tcpdump 一致：

| 表达式 | 功能 |
|---|---|
| `icmp` | 丢弃所有 ICMP 流量 |
| `port 80` | 丢弃端口 80 的流量 |
| `host 10.0.0.1` | 丢弃来自/到特定主机的流量 |
| `dst host 192.168.1.100 and port 80` | 丢弃到 Web 服务器的流量 |
| `src net 10.0.0.0/24` | 丢弃来自特定子网的流量 |
| `tcp and not port 53` | 丢弃 TCP 流量但保留 DNS |
