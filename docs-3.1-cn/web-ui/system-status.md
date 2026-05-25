---
title: 系统状态
功能标签: [操作]
难度: 入门
预计阅读时间: 10 分钟
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 系统状态

在项目首页点击右上角的三个点按钮，选择"System Status"进入系统状态页面。

<img style={{ width: '100%' }} alt="进入系统状态" src={useBaseUrl('img/web-ui/zh/status-01-enter.jpeg')} />

System Status 页面显示 GNS3 控制器和所有计算节点（Compute）的实时系统资源统计信息，帮助管理员监控和规划系统资源。页面每 20 秒自动刷新一次数据。

## 页面内容

### 1. Projects & Nodes（项目和节点统计）

显示项目的总体统计和节点/连接线的数量汇总：

- **Total Projects**：系统中所有项目总数
- **Open Projects**：当前打开的项目数量
- **Closed Projects**：当前关闭的项目数量
- **Total Nodes**：所有项目中的节点总数
- **Total Links**：所有连接线的总数
- **Capturing**：正在捕获数据包的连接线数量

### 2. Nodes by Type（按类型统计节点）

按节点类型分类显示每种类型的节点数量，常见类型包括：vpcs、docker、qemu、dynamips、iou 等。

### 3. Nodes by Status（按状态统计节点）

按运行状态分类显示节点的数量：started（运行中）、suspended（已暂停）、stopped（已停止）、queued（排队中）。

### 4. Compute 节点统计

每个计算节点（包括 local 和 remote）显示独立的资源使用统计卡片。

#### 资源使用率

- **CPU Usage**：CPU 使用百分比（0-100%）
- **Disk Usage**：磁盘空间使用百分比（0-100%）
- **Memory Usage**：内存使用百分比（0-100%）
- **SWAP Usage**：交换空间使用百分比（0-100%）

#### 详细系统信息

- **Load Average（1m / 5m / 15m）**：系统负载平均值
- **Memory**：内存使用详情，格式：已用 / 总计（剩余）
- **SWAP**：交换空间使用详情，格式：已用 / 总计（剩余）

<img style={{ width: '100%' }} alt="系统状态页面" src={useBaseUrl('img/web-ui/zh/status-02-overview.jpeg')} />

## 自动刷新机制

页面数据每 20 秒自动刷新一次。如果刷新失败（如连接中断），会显示错误提示。


## 数据来源

统计数据来自 GNS3 控制器的 `/statistics` API，该接口聚合了：
- 所有计算节点的系统信息（CPU、内存、磁盘、负载）
- 所有项目的统计信息（项目数量、节点数量）
- 所有节点的分类统计（按类型、按状态）
- 所有连接线的统计信息
