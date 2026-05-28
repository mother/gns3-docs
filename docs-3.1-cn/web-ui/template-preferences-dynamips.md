---
title: 如何配置 Dynamips 模板
功能标签: [操作]
难度: 入门
预计阅读时间: 10 分钟
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 如何配置 Dynamips 模板

Dynamips 是 GNS3 中用 IOS 镜像模拟 Cisco 路由器的引擎。与 builtin 模板不同，Dynamips 的 IOS 路由器模板需要用户手动创建——指定 IOS 镜像、选择平台、配置插槽等。

## 支持的平台（7 种）

| 平台 | 适用机型 | RAM（默认） | NVRAM | 特有字段 |
|------|---------|------------|-------|---------|
| c7200 | 7200 系列 | 512 MB | 512 KB | npe、midplane |
| c3745 | 3745 | 256 MB | 256 KB | — |
| c3725 | 3725 | 128 MB | 256 KB | — |
| c3600 | 3620 / 3640 / 3660 | 192 MB | 128 KB | chassis |
| c2691 | 2691 | 192 MB | 256 KB | — |
| c2600 | 2610~2651XM 等多种 chassis | 160 MB | 128 KB | chassis |
| c1700 | 1720~1760 | 160 MB | 128 KB | chassis |

## 创建模板

:::note
不同平台型号支持的 Network Adapters 各有差异，请根据实际设备选择。
:::

1. 点击”Dynamips”选项进入。
   <img style={{ width: '100%' }} alt="进入 Dynamips" src={useBaseUrl('img/web-ui/zh/dynamips-create-01-enter.jpeg')} />

2. 点击右上角的 + 号按钮添加新模板。
   <img style={{ width: '100%' }} alt="点击添加" src={useBaseUrl('img/web-ui/zh/dynamips-create-02-add.jpeg')} />

3. 按照引导步骤依次操作，点击”IOS Image”。
   <img style={{ width: '100%' }} alt="向导开始" src={useBaseUrl('img/web-ui/zh/dynamips-create-03-wizard-start.jpeg')} />

4. 在 IOS Image 步骤中，点击”Click to add image”上传本地的镜像文件，或从下方列表选择已上传的镜像，然后点击”Name and platform”。
   <img style={{ width: '100%' }} alt="选择镜像文件" src={useBaseUrl('img/web-ui/zh/dynamips-create-04-ios-image.jpeg')} />

5. 在 Name and platform 中，可以输入名称和选择平台，然后点击”Memory”。
   <img style={{ width: '100%' }} alt="名称与平台" src={useBaseUrl('img/web-ui/zh/dynamips-create-05-name-platform.jpeg')} />

6. 在 Memory 中可修改内存大小，使用默认值即可，然后点击”Network adapters”。
   <img style={{ width: '100%' }} alt="内存设置" src={useBaseUrl('img/web-ui/zh/dynamips-create-06-memory.jpeg')} />

7. 在 Network adapters 中为模板选择接口板卡，然后点击”Idle-PC”。
   <img style={{ width: '100%' }} alt="网络适配器" src={useBaseUrl('img/web-ui/zh/dynamips-create-07-network-adapters.jpeg')} />

8. 点击”Idle-PC finder”按钮计算 Idle-PC 值，这个数值用于降低 CPU 使用率。
   <img style={{ width: '100%' }} alt="Idle-PC 计算" src={useBaseUrl('img/web-ui/zh/dynamips-create-08-idlepc-finder.jpeg')} />

9. 计算完成后，点击”Add Template”按钮。
   <img style={{ width: '100%' }} alt="添加模板" src={useBaseUrl('img/web-ui/zh/dynamips-create-09-idlepc-result.jpeg')} />

10. 创建完成后，在列表中可以看到新模板。
    <img style={{ width: '100%' }} alt="创建完成" src={useBaseUrl('img/web-ui/zh/dynamips-create-10-created.jpeg')} />

11. 点击右侧的三个点按钮，可以选择删除（Delete）、复制（Copy）或编辑（Edit）。
    <img style={{ width: '100%' }} alt="操作菜单" src={useBaseUrl('img/web-ui/zh/dynamips-create-11-menu.jpeg')} />

## IOS 路由器模板配置详解

点击”Edit”按钮，进入配置详情。
<img style={{ width: '100%' }} alt="通用设置" src={useBaseUrl('img/web-ui/zh/dynamips-config-01-general.jpeg')} />

### 通用设置（General settings）详解（c7200）

以下是 IOS 路由器模板配置页面中通用设置区域的所有字段及其用途：

| 字段 | 类型 | 默认值 | 用途 |
|------|------|--------|------|
| Template name | 文本 | 必填，无默认 | 模板的名称，在列表中显示 |
| Default name format | 文本 | `R{0}` | 定义实例的自动命名格式，{0} 递增序号 |
| Category | 下拉选择 | router | 所属分类，决定在设备面板中的分组 |
| Symbol | 文本 + 按钮 | router | 拓扑图上显示的图标 |
| Platform | 只读显示 | c7200（创建后不可改） | 平台名称 |
| Chassis | 只读显示 | 不适用 | c7200 无 chassis 选项 |
| Tags | Chip 输入框 | [] | 标签，用于分类/筛选 |
| IOS image path | 文本 | 必填，无默认 | IOS 镜像文件路径 |
| Initial startup-config | 文本 | `ios_base_startup-config.txt` | 启动配置文件 |
| Initial private-config | 文本 | “”（空） | 私有配置文件 |
| Console type | 下拉选择 | telnet | 可选值 telnet / vnc / spice / none |
| Auxiliary console type | 下拉选择 | none | 辅助控制台类型 |
| Auto start console | 复选框 | False | 启用后自动打开控制台 |

:::note
例如在 Cisco IOS 设备中，需要在 Tags 中添加 `device_type` 标签来让 AI Copilot 识别设备类型，例如 `device_type:cisco_ios_telnet`。如果没有添加正确的标签，AI Copilot 将无法操作该设备。
:::

关于 c7200 的特殊说明：
- c7200 没有 Chassis 选项（与 c1700/c2600/c3600 不同），因此 General settings 中不会显示 Chassis
- c7200 的网络适配器在 Slots 区域配置
- Console type 选择 vnc 或 spice 时，服务器端需要相应的 VNC/SPICE 支持才能正常工作

<img style={{ width: '100%' }} alt="插槽配置" src={useBaseUrl('img/web-ui/zh/dynamips-config-02-slots.jpeg')} />

### 内存与磁盘（Memories and disks）详解

该区域分为 Memory 和 Disk 两个子部分。

#### Memory

| 字段 | 类型 | 单位 | 模板默认值 | compute 实际值 | 用途 |
|------|------|------|-----------|---------------|------|
| RAM size | 数值输入 | MB | 512 | 256 | 分配给路由器的内存大小 |
| NVRAM size | 数值输入 | KB | 512 | 128 | 非易失性 RAM，存储 startup-config |
| I/O memory | 数值输入 | % | 不适用 | — | c7200 无此字段，由 Slot 0 IO 控制器管理 |

#### Disk

| 字段 | 类型 | 单位 | 模板默认值 | compute 实际值 | 用途 |
|------|------|------|-----------|---------------|------|
| PCMCIA disk0 | 数值输入 | MB | 0 | 64 | ATA 闪存盘 disk0 大小，设为 0 禁用 |
| PCMCIA disk1 | 数值输入 | MB | 0 | 0 | 第二个存储设备 |

:::note
模板默认值与 Dynamips 进程实际默认值不一致——模板给的是推荐值，compute 侧才是 Dynamips 内部的硬默认值。
:::

关于 c7200 的特别说明：
- c7200 不显示 I/O memory 字段，I/O 内存由 Slot 0 上选择的 IO 控制器卡决定
- PCMCIA disk0/disk1 对应真实路由器上的 disk0: 和 disk1:，c7200 通常至少需要 disk0 来启动 IOS
- 底部有 Automatically delete NVRAM and disk files 复选框，勾选后实验被删除时自动清理 NVRAM 和磁盘文件

<img style={{ width: '100%' }} alt="内存与磁盘" src={useBaseUrl('img/web-ui/zh/dynamips-config-03-memory-disk.jpeg')} />

### 插槽（Slots）详解（c7200）

c7200 模拟的是 7206 路由器，有 7 个 slots（0-6）。Slot 0 为 IO 控制器（单选），Slots 1-6 为端口适配器（可多选，可留空）。

| 插槽 | 可选适配器 | 用途说明 |
|------|-----------|---------|
| Slot 0 | C7200-IO-FE、C7200-IO-2FE、C7200-IO-GE-E | IO 控制器 — 提供带外管理接口。1个/2个快速以太口或1个千兆口 |
| Slots 1-6 | PA-A1 | ATM 适配器，用于 ATM 网络接口 |
| | PA-FE-TX | 单端口快速以太网 |
| | PA-2FE-TX | 双端口快速以太网 |
| | PA-GE | 单端口千兆以太网 |
| | PA-4T+ | 4 端口串行（增强型） |
| | PA-8T | 8 端口串行 |
| | PA-4E | 4 端口以太网 |
| | PA-8E | 8 端口以太网 |
| | PA-POS-OC3 | Packet-over-SONET OC3 接口 |

行为特点：
- Slot 0 只允许选一个 IO 控制器（不提供空选项）
- Slots 1-6 允许多选，可留空
- 模板默认值：Slot 0 → None，Slots 1-6 → None（模板层面均为空）。客户端 UI 可能会自动填入第一个可用选项
- c7200 没有 WIC 插槽，WIC 功能由 Slot 0 的 IO 控制器提供

<img style={{ width: '100%' }} alt="插槽详情" src={useBaseUrl('img/web-ui/zh/dynamips-config-04-slot-detail.jpeg')} />

### 高级设置（Advanced）详解（c7200）

| 字段 | 类型 | 默认值 | 用途 |
|------|------|--------|------|
| System ID | 文本 | `FTX0945W0MY` | Cisco 路由器 System ID，用于解锁功能集 |
| Base MAC | 文本（格式 xxxx.xxxx.xxxx） | ""（空） | 基 MAC 地址，留空由服务器自动分配 |
| Idle-PC | 文本（十六进制 0x...） | ""（空） | 降低 CPU 占用的关键参数，通过 Idle-PC finder 检测 |
| Idlemax | 数值 | 500 | 空闲检测参数，控制 CPU 最大时间片 |
| Idlesleep | 数值 | 30 | 空闲时每次休眠时间（微秒级） |
| Exec area | 数值 | 64 | JIT 编译器执行区域大小 |
| Enable mmap support | 复选框 | True | 启用内存映射文件支持 |
| Enable sparse memory support | 复选框 | True | 稀疏内存支持，c7200 默认开启 |

关于 c7200 的重点说明：
- Idle-PC 是 c7200 必配项，不设置则 host CPU 会持续 100%
- mmap 和 sparsemem：对于 512MB 及以上 RAM 的 c7200，建议同时启用
- c7200 的 Idlemax 和 Idlesleep 可能需要比低端平台更保守的值

<img style={{ width: '100%' }} alt="高级设置" src={useBaseUrl('img/web-ui/zh/dynamips-config-05-advanced.jpeg')} />
