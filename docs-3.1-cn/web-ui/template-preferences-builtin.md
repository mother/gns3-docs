---
title: 如何配置 Built-in 内置模板
功能标签: [操作]
难度: 入门
预计阅读时间: 10 分钟
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 如何配置 Built-in 内置模板

点击"Built-in"选项进入。

<img style={{ width: '100%' }} alt="进入 Built-in" src={useBaseUrl('img/web-ui/zh/builtin-enter.jpeg')} />

Built-in 模板包含以下三种内置网络设备：

<img style={{ width: '100%' }} alt="内置分类列表" src={useBaseUrl('img/web-ui/zh/builtin-categories.jpeg')} />

- **Ethernet Hub**（以太网集线器）
- **Ethernet Switch**（以太网交换机）
- **Cloud Node**（云节点）

## Ethernet Hub

Ethernet Hub 是 GNS3 中的一个内置节点类型，模拟了一个简单的物理层（Layer 1）中继器 Hub。

### 核心特性

| 属性 | 值 |
|------|-----|
| 类别 | switch |
| 默认名称格式 | `Hub{0}` |
| 默认端口数 | 8 个（Ethernet0 ~ Ethernet7） |
| 图标符号 | hub |
| 启动/停止 | 否（创建即运行，builtin 节点） |
| 控制台 | 不支持 |

### 工作原理

- 实际实现：基于 Dynamips 的 nio_bridge hypervisor 命令
- 所有端口平铺：没有适配器概念，8 个端口直接编号 0-7
- 端口行为：Hub 收到数据后，会从除入口外的所有端口转发出去（纯物理层广播）
- 支持 PCAP 抓包：可在单个端口上启停抓包

### 用途

Ethernet Hub 主要用于教学和网络实验——模拟旧式以太网 Hub 的行为（共享带宽、冲突域），与 Ethernet Switch 形成对比，帮助学生理解冲突域、CSMA/CD 等概念。对大多数用户来说，开箱即用，无需手动添加。

### 创建模板


:::note
系统默认存在这些模板，一般无需手动创建。
:::

1. 点击"Ethernet Hub Templates"选项进入。
   <img style={{ width: '100%' }} alt="进入 Ethernet Hub" src={useBaseUrl('img/web-ui/zh/hub-create-01-enter.jpeg')} />

2. 点击右上角的 + 号按钮添加新模板。
   <img style={{ width: '100%' }} alt="点击添加" src={useBaseUrl('img/web-ui/zh/hub-create-02-add.jpeg')} />

3. 输入模板名称（Template Name）和端口数量（Number of Ports），点击 "Add Template" 完成创建。
   <img style={{ width: '100%' }} alt="配置模板" src={useBaseUrl('img/web-ui/zh/hub-create-03-configure.jpeg')} />

4. 创建完成后，在列表中可以看到新模板。
   <img style={{ width: '100%' }} alt="创建完成" src={useBaseUrl('img/web-ui/zh/hub-create-04-created.jpeg')} />

5. 点击右侧的三个点按钮，可以选择删除（Delete）或编辑（Edit）。
   <img style={{ width: '100%' }} alt="操作菜单" src={useBaseUrl('img/web-ui/zh/hub-create-05-menu.jpeg')} />

6. 点击 Edit 进入编辑界面，可配置以下内容：

    - Template Name（模板名称）
    - Default Name Format（默认名称格式）
    - Symbol（设备图标）
    - Choose Symbol（选择图标）
    - Tags（标签）
    - Category（类别）
    - Number of Ports（端口数量）
    - Usage（用途）

	修改后，点击右下角的 "Save" 按钮保存生效。
   <img style={{ width: '100%' }} alt="编辑模板" src={useBaseUrl('img/web-ui/zh/hub-create-06-edit.jpeg')} />


## Ethernet Switch

Ethernet Switch 是 GNS3 内置的二层交换机节点，基于 Dynamips hypervisor 的 ethsw 命令实现，支持 VLAN 划分和端口模式配置。

### 与 Ethernet Hub 的区别

| 特性 | Hub | Switch |
|------|-----|--------|
| 工作层级 | 物理层（L1） | 数据链路层（L2） |
| VLAN | 不支持 | 支持 Access / dot1q / QinQ |
| MAC 学习 | 广播所有端口 | Dynamips 内部维护 MAC 表 |
| 冲突域 | 共享（一个冲突域） | 每个端口独立冲突域 |

### 默认配置

- 端口数量：8 个（Ethernet0 ~ Ethernet7）
- 端口类型：全部为 access，VLAN 1
- 名称格式：`Switch{0}`
- 类型：builtin 节点，创建即运行，不可启停

### 端口模式说明

通过 ports_mapping 配置每个端口的行为，支持三种模式：

**1. Access 端口（接入端口）**

属于单个 VLAN，通常连接终端设备（PC、服务器）。

**2. dot1q 端口（802.1Q 中继端口）**

允许多个 VLAN 通过，设置一个本征 VLAN（native VLAN）。

**3. QinQ 端口（802.1ad 运营商中继）**

双层 VLAN 标记，用于运营商网络。可配置外层以太网类型。

支持的 ethertype 值：

| 值 | 标准 |
|----|------|
| 0x8100 | 标准 802.1Q（默认） |
| 0x88A8 | 运营商 802.1ad（QinQ） |
| 0x9100 | 旧式 QinQ |
| 0x9200 | 旧式 QinQ |

端口设置会在链接建立（NIO 绑定）时自动应用到 Dynamips hypervisor。

### 局限性

1. 不能启动/停止/挂起/重启 — builtin 节点，创建即运行
2. 控制台不可用 — 虽然留有 console_type 属性，但 telnet 会提示不可用
3. 纯二层功能 — 不支持三层路由、STP 生成树协议等高级交换特性
4. 端口配置在计算层 — 控制器只看到平铺端口列表，VLAN/类型信息仅在 Dynamips 层面生效

### 创建模板


:::note
系统默认存在这些模板，一般无需手动创建。
:::

1. 点击"Ethernet Switch Templates"选项进入。
   <img style={{ width: '100%' }} alt="进入 Ethernet Switch" src={useBaseUrl('img/web-ui/zh/switch-create-01-enter.jpeg')} />

2. 点击右上角的 + 号按钮添加新模板。
   <img style={{ width: '100%' }} alt="点击添加" src={useBaseUrl('img/web-ui/zh/switch-create-02-add.jpeg')} />

3. 输入模板名称（Template Name）和端口数量（Number of Ports），点击 "Add Template" 完成创建。
   <img style={{ width: '100%' }} alt="配置模板" src={useBaseUrl('img/web-ui/zh/switch-create-03-configure.jpeg')} />

4. 创建完成后，在列表中可以看到新模板。
   <img style={{ width: '100%' }} alt="创建完成" src={useBaseUrl('img/web-ui/zh/switch-create-04-created.jpeg')} />

5. 点击 Edit 进入编辑界面：

    **General Settings（常规设置）**
    - Template Name（模板名称）
    - Default Name Format（默认名称格式）
    - Symbol（设备图标）
    - Choose Symbol（选择图标）
    - Tags（标签）
    - Category（类别）
    - Console Type（控制台类型）

   <img style={{ width: '100%' }} alt="常规设置" src={useBaseUrl('img/web-ui/zh/switch-create-05-general.jpeg')} />

    **Port Settings（端口设置）**
    - Port Number（端口号）
    - VLAN（VLAN ID）
    - Type（端口类型）
    - EtherType（以太网类型）
    - Actions（操作）

   修改后，点击右下角的 "Save" 按钮保存生效。
   <img style={{ width: '100%' }} alt="端口设置" src={useBaseUrl('img/web-ui/zh/switch-create-06-port-settings.jpeg')} />


## Cloud Node

Cloud 节点是 GNS3 中桥接到宿主机网络的内置节点，属于 guest 类别，名称格式 `Cloud{0}`。

### 核心作用

Cloud 让拓扑中的虚拟设备能够与宿主机网络（或宿主机本身）通信。它本质上是一个网络桥接点——把拓扑里的链路映射到宿主机的真实网络接口上。

### 三种端口类型

Cloud 支持三种端口映射方式，对应不同的连接场景：

**1. Ethernet 端口（最常用）**

直接绑定到宿主机的一个物理或虚拟网卡。

**2. TAP 端口**

绑定到宿主机 TAP 虚拟接口。

**3. UDP 端口**

直接指定 UDP 隧道端点（极少用）。

### 自动发现接口

创建 Cloud 节点时如果不指定端口映射，系统会自动填充宿主机上非特殊的接口，排除以下类型：

- `lo`、`vmnet*`、`vboxnet*`、`docker*`、`lxcbr*`、`virbr*`
- `ovs-system`、`veth*`、`fw*`、`p2p*`、`bridge*`
- `vmware*`、`virtualbox*`、`gns3*`、`*-nic`

### 与 NAT 节点的区别

| 特性 | Cloud | NAT |
|------|-------|-----|
| 桥接到 | 任意宿主机接口 | 默认 virbr0（Linux） |
| 端口数量 | 可配置多个 | 固定单个 nat0 端口 |
| 接口可定制 | 自由选择 | 固定 |
| 端口映射可改 | 支持 | 只读 |
| 用途 | 灵活桥接到特定网络 | 快速提供 NAT 上网 |

### 限制

1. 不支持 Stop/Suspend — builtin 节点，只能 Start（实际创建即运行）
2. Cloud 到 Cloud 禁止直连 — controller/link.py 会阻止这种连接
3. 需要特权 — Ethernet 类型在 Linux 上需要 root 权限操作原始套接字或 TAP 设备
4. macOS 不支持 Wi-Fi 适配器桥接

### Cloud 节点的控制台

Cloud 节点本身不能通过控制台操作（它不是路由器/交换机）。虽然 Schema 中定义了 `remote_console_*` 字段（如 `remote_console_type`、`remote_console_host`、`remote_console_port`），数据库也会存储，API 也会传递，但服务端并没有实现任何对应的逻辑来处理这些字段。它们更像是预留的占位字段或废弃的遗留属性，Cloud 的控制台实际上不可用。

### 创建模板


:::note
系统默认存在这些模板，一般无需手动创建。
:::

1. 点击"Cloud Node Templates"选项进入。
   <img style={{ width: '100%' }} alt="进入 Cloud Node" src={useBaseUrl('img/web-ui/zh/cloud-create-01-enter.jpeg')} />

2. 点击右上角的 + 号按钮添加新模板。
   <img style={{ width: '100%' }} alt="点击添加" src={useBaseUrl('img/web-ui/zh/cloud-create-02-add.jpeg')} />

3. 输入模板名称（Template Name），点击 "Add Template" 完成创建。
   <img style={{ width: '100%' }} alt="配置模板" src={useBaseUrl('img/web-ui/zh/cloud-create-03-configure.jpeg')} />

4. 创建完成后，在列表中可以看到新模板。
   <img style={{ width: '100%' }} alt="创建完成" src={useBaseUrl('img/web-ui/zh/cloud-create-04-created.jpeg')} />

5. 点击 Edit 进入编辑界面：

    **General Settings（常规设置）**
    - Template Name（模板名称）
    - Default Name Format（默认名称格式）
    - Symbol（设备图标）
    - Choose Symbol（选择图标）
    - Tags（标签）
    - Category（类别）
    
    **这几个字段无实际使用**
    - Console Type（控制台类型）
    - Console Host
    - Console Port
    - Console HTTP Path

   <img style={{ width: '100%' }} alt="常规设置" src={useBaseUrl('img/web-ui/zh/cloud-create-05-general.jpeg')} />

6. Ethernet Interfaces — 在模板中没有数据，需要在项目中添加节点后配置。
   <img style={{ width: '100%' }} alt="Ethernet 接口" src={useBaseUrl('img/web-ui/zh/cloud-create-06-ethernet.jpeg')} />

7. TAP Interfaces — 添加 TAP 接口名称。
   <img style={{ width: '100%' }} alt="TAP 接口" src={useBaseUrl('img/web-ui/zh/cloud-create-07-tap.jpeg')} />

8. UDP Tunnels — 创建 UDP 隧道连接远端主机的指定端口。
   <img style={{ width: '100%' }} alt="UDP 隧道" src={useBaseUrl('img/web-ui/zh/cloud-create-08-udp.jpeg')} />
