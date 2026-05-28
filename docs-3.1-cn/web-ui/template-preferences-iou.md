---
title: 如何配置 IOU 模板
功能标签: [操作]
难度: 入门
预计阅读时间: 10 分钟
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 如何配置 IOU 模板

IOU 是直接运行在 Linux 上的原生 Cisco IOS ELF 二进制文件（.iol），无需 Dynamips 硬件模拟，性能远高于 Dynamips。

## 创建模板

1. 点击"IOS on Unix"选项进入。
   <img style={{ width: '100%' }} alt="进入 IOU" src={useBaseUrl('img/web-ui/zh/iou-create-01-enter.jpeg')} />

2. 点击右上角的 + 号按钮添加新模板。
   <img style={{ width: '100%' }} alt="点击添加" src={useBaseUrl('img/web-ui/zh/iou-create-02-add.jpeg')} />

3. 按照引导步骤依次操作，点击"Name"。
   <img style={{ width: '100%' }} alt="向导开始" src={useBaseUrl('img/web-ui/zh/iou-create-03-name.jpeg')} />

4. 在 Name 中输入模板名称，然后点击"Image"。
   <img style={{ width: '100%' }} alt="输入名称" src={useBaseUrl('img/web-ui/zh/iou-create-04-name-input.jpeg')} />

5. 在 Image 中，选择"New Image"，Type 选择"L2 Image"或"L3 Image"，然后点击"Browse"上传本地镜像文件。
   <img style={{ width: '100%' }} alt="上传镜像" src={useBaseUrl('img/web-ui/zh/iou-create-05-image-new.jpeg')} />

6. 如果已有上传的镜像，选择"Existing Image"，选择对应的 Type 和镜像文件，点击"Add Template"完成创建。
   <img style={{ width: '100%' }} alt="选择已有镜像" src={useBaseUrl('img/web-ui/zh/iou-create-06-image-existing.jpeg')} />

7. 创建完成后，在列表中可以看到新模板。点击右侧的三个点按钮，可以选择删除（Delete）、复制（Copy）或编辑（Edit）。
   <img style={{ width: '100%' }} alt="创建完成" src={useBaseUrl('img/web-ui/zh/iou-create-07-created.jpeg')} />

## 与 Dynamips 的根本区别

| 对比 | IOU | Dynamips |
|------|-----|----------|
| 运行方式 | 原生 Linux 进程（ELF 可执行） | 模拟整个路由器硬件 |
| 性能 | 高（接近物理机） | 低（需 Idle-PC 降 CPU） |
| 模板 | 单一 IOUTemplate，无平台子类 | 7 个平台子类 |
| 适配器 | 统一 ethernet_adapters + serial_adapters 整数 | 插槽（slot0~6）+ WIC 精确配置 |
| 镜像格式 | .iol ELF 二进制 | .bin IOS 超级镜像 |
| 图标默认 | multilayer_switch | router |
| 名称格式 | `IOU{0}` | `R{0}` |
| 应用 ID | 需要 application_id（1-1024） | 无 |
| 许可证 | 需要 iourc + hostid 校验 | 无 |
| 挂起 | 不支持 | 支持 |
| 配置复杂度 | 需要理解 Slot 架构和 PA 类型 | 更简单，两个数字即可 |

## IOU 模板配置详解

### 通用设置（General settings）

| 字段 | 类型 | 用途 |
|------|------|------|
| Template name | 文本 | 模板名称，在列表中显示 |
| Default name format | 文本 | 实例自动命名格式，如 {name}-{0} |
| Category | 下拉选择 | 设备分类，决定在拓扑面板中的分组 |
| Symbol | 文本 + 按钮 | 拓扑图上显示的图标 |
| Tags | Chip 输入框 | 标签，用于分类/筛选 |
| IOU image path | 文本 + Browse | IOU 镜像文件路径，支持 .iol / .bin / .image |

:::note
例如在 Cisco IOU 设备中，需要在 Tags 中添加 `device_type` 标签来让 AI Copilot 识别设备类型，例如 `device_type:cisco_ios_telnet`。如果没有添加正确的标签，AI Copilot 将无法操作该设备。
:::

<img style={{ width: '100%' }} alt="通用设置" src={useBaseUrl('img/web-ui/zh/iou-config-01-general.jpeg')} />

### 配置相关字段

| 字段 | 类型 | 用途 |
|------|------|------|
| Startup config | 文本 | 启动配置文件（仅文件名） |
| Private config | 文本 | 私有配置文件（仅文件名） |
| Console type | 下拉选择 | 控制台类型：telnet / ssh / none |
| Auto start console | 复选框 | 启用后自动打开控制台窗口 |
| Enable layer 1 keepalive messages (non-functional) | 复选框 | L1 保活消息，当前版本不生效 |
| Use default IOU values for memories | 复选框 | 勾选后隐藏 RAM/NVRAM，由 IOU 内部管理 |
| RAM size | 数值（MB） | 取消默认值后显示，分配内存大小 |
| NVRAM size | 数值（KB） | 取消默认值后显示，分配 NVRAM 大小 |

### Network

| 字段 | 类型 | 用途 |
|------|------|------|
| Ethernet adapters | 数值 | 以太网适配器数量，每个适配器提供 4 个接口 |
| Serial adapters | 数值 | 串行适配器数量 |

默认值及接口分配：

| 字段                | 默认值 | 适配器数 | 每适配器接口数 | 总接口数 | 接口命名                         |
| ----------------- | --- | ---- | ------- | ---- | ---------------------------- |
| ethernet_adapters | 2   | 2    | 4       | 8    | Ethernet0/0-3, Ethernet1/0-3 |
| serial_adapters   | 2   | 2    | 4       | 8    | Serial0/0-3,Serial1/0-3      |

<img style={{ width: '100%' }} alt="网络配置" src={useBaseUrl('img/web-ui/zh/iou-config-02-network.jpeg')} />

