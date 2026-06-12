---
title: 如何配置 QEMU 模板
功能标签: [操作]
难度: 入门
预计阅读时间: 15 分钟
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 如何配置 QEMU 模板

QEMU 是 GNS3 中功能最复杂、配置选项最多的节点类型，支持完整的硬件虚拟化。

## 创建模板

以下以 Cisco IOSv 镜像为例，介绍如何创建 QEMU 模板。

1. 点击"QEMU"选项进入。
   <img style={{ width: '100%' }} alt="进入 QEMU" src={useBaseUrl('img/web-ui/zh/qemu-create-01-enter.jpeg')} />

2. 点击右上角的 + 号按钮添加新模板。
   <img style={{ width: '100%' }} alt="点击添加" src={useBaseUrl('img/web-ui/zh/qemu-create-02-add.jpeg')} />

3. 按照引导步骤依次操作，点击"QEMU VM Name"。
   <img style={{ width: '100%' }} alt="向导开始" src={useBaseUrl('img/web-ui/zh/qemu-create-03-name.jpeg')} />

4. 输入模板名称，然后点击"Platform and memory"。
   <img style={{ width: '100%' }} alt="输入名称" src={useBaseUrl('img/web-ui/zh/qemu-create-04-name-input.jpeg')} />

5. 选择 Platform 和 RAM，然后点击"Console type"。
   <img style={{ width: '100%' }} alt="平台与内存" src={useBaseUrl('img/web-ui/zh/qemu-create-05-platform.jpeg')} />

6. 选择 Console type 为 telnet，然后点击"Auxiliary console type"。
   <img style={{ width: '100%' }} alt="控制台类型" src={useBaseUrl('img/web-ui/zh/qemu-create-06-console.jpeg')} />

7. Auxiliary console type 选择 none，然后点击"Disk image"。
   <img style={{ width: '100%' }} alt="辅助控制台" src={useBaseUrl('img/web-ui/zh/qemu-create-07-aux-console.jpeg')} />

8. 上传镜像文件。
   <img style={{ width: '100%' }} alt="上传磁盘" src={useBaseUrl('img/web-ui/zh/qemu-create-08-disk-upload.jpeg')} />

9. 如果已有镜像，选择 Existing Image 和对应的镜像文件，点击 "Add Template" 完成创建。
   <img style={{ width: '100%' }} alt="选择已有镜像" src={useBaseUrl('img/web-ui/zh/qemu-create-09-disk-existing.jpeg')} />

10. 创建完成后，在列表中可以看到新模板。
    <img style={{ width: '100%' }} alt="创建完成" src={useBaseUrl('img/web-ui/zh/qemu-create-10-created.jpeg')} />

11. 点击右侧的三个点按钮，可以选择删除（Delete）、复制（Copy）或编辑（Edit）。
    <img style={{ width: '100%' }} alt="操作菜单" src={useBaseUrl('img/web-ui/zh/qemu-create-11-menu.jpeg')} />

## 与其他节点类型的区别

与其他节点类型的主要差异在于 QEMU 功能最全面、配置选项最多。各节点类型的具体对比请参见对应模板文档。

### 平台支持（28 种）

| 架构系列 | 包含平台 | 数量 |
|---------|---------|------|
| x86 | i386, x86_64 | 2 |
| ARM | arm, aarch64 | 2 |
| MIPS | mips, mips64, mips64el, mipsel | 4 |
| PowerPC | ppc, ppc64, ppcemb | 3 |
| SPARC | sparc, sparc64 | 2 |
| SuperH | sh4, sh4eb | 2 |
| Xtensa | xtensa, xtensaeb | 2 |
| Microblaze | microblaze, microblazeel | 2 |
| 其他 | alpha, cris, lm32, m68k, moxie, or32, s390x, tricore, unicore32 | 9 |

#### 常用平台说明

| 平台 | 架构 | 典型用途 | 性能 |
|------|------|---------|------|
| x86_64 | 64-bit x86 | 通用 PC/服务器虚拟机（推荐） | ★★★★★（KVM 加速） |
| i386 | 32-bit x86 | 老旧 OS（Windows XP、老 Linux） | ★★★☆☆ |
| aarch64 | 64-bit ARM | ARM 服务器、树莓派 4+、现代手机 | ★★★★☆ |
| arm | 32-bit ARM | 树莓派、嵌入式设备 | ★★★☆☆ |
| mips64 | 64-bit MIPS | MIPS 路由器（OpenWrt） | ★★★☆☆ |
| ppc64 | 64-bit PowerPC | IBM Power 服务器 | ★★☆☆☆ |
| s390x | IBM System z | 大型机模拟 | ★★☆☆☆ |

#### 后缀含义

| 后缀 | 说明 |
|------|------|
| 无 | 默认字节序 |
| el | Little Endian（小端） |
| eb | Big Endian（大端） |

例如：`mips64` = MIPS64 big endian，`mips64el` = MIPS64 little endian

### 网卡类型（25 种）

| 系列 | 数量 | 类型 |
|------|------|------|
| e1000 系列 | 4 | e1000, e1000-82544gc, e1000-82545em, e1000e |
| i8255x 系列 | 11 | i82550, i82551, i82557a/b/c, i82558a/b, i82559a/b/c/er, i82562, i82801 |
| 其他 Intel | 1 | igb |
| 传统网卡 | 3 | ne2k_pci, pcnet, rtl8139 |
| 高性能网卡 | 4 | virtio, virtio-net-pci, vmxnet3, rocker |

默认网卡类型为 e1000，这是最通用的 Intel 千兆网卡模拟，适用于大多数 Linux/Windows 客户机。

### 磁盘接口类型（10 种）

| 接口类型 | 典型用途 | 性能 | 客户机支持 |
|---------|---------|------|-----------|
| ide | 传统硬盘、光驱 | 低（模拟 IDE） | 通用，所有 OS 都支持 |
| sata | 现代 SATA 硬盘、光驱 | 中等（AHCI） | Windows Vista+, Linux 2.6+ |
| scsi | SCSI 硬盘、磁带机 | 高（LSI Logic） | 服务器 OS、Linux |
| virtio | 半虚拟化磁盘（性能最优） | 最高（virtio-blk） | Linux/KVM/BSD 推荐 |
| nvme | NVMe SSD | 极高（现代 SSD） | Linux 3.19+, Windows 8+ |
| sd | SD 卡（嵌入式设备） | 低 | ARM 嵌入式、树莓派 |
| mtd | Memory Technology Device（Flash） | 极低 | 嵌入式 Linux、OpenWrt |
| floppy | 软盘驱动器 | 极低 | 老旧 OS（MS-DOS、Windows 95） |
| pflash | Parallel Flash（BIOS/UEFI 固件） | N/A | UEFI 固件存储 |
| none | 不附加驱动器（仅定义，不连接） | N/A | 高级用法（手动 hotplug） |

### 控制台类型（7 种）

| 类型 | 说明 |
|------|------|
| vnc | VNC 协议 |
| telnet | Telnet（默认） |
| ssh | SSH |
| spice | SPICE 协议 |
| spice_agent | SPICE with guest agent |
| none | 无控制台 |

### 启动优先级

单选：c（硬盘）、d（光驱）、n（网络）  
组合：cn, cd, dn, dc, nc, nd

### 关键特性

1. **Linked Clone** — 使用 qcow2 backing file，多个 VM 共享同一基础镜像，只保存差异数据
2. **Config Disk** — 自动在 HDD 接口创建配置磁盘，通过 mcopy 导入导出配置
3. **硬件加速检测** — Linux 检测 KVM，macOS 检测 HAXM，自动降级到 TCG 软件模拟
4. **安全限制** — 禁止的 QEMU 参数（防止逃逸）：`-blockdev`, `-drive`, `-hda`, `-hdb`, `-hdc`, `-hdd`, `-fsdev`, `-virtfs`, `-nic`, `-netdev`
5. **网络状态同步** — 自动发送 set_link 命令模拟网线插拔状态

## QEMU 模板配置详解

### 通用设置（General settings）

| 字段 | 类型 | 用途 |
|------|------|------|
| Template name | 文本 | 模板名称，在列表中显示 |
| Default name format | 文本 | 实例自动命名格式，如 `{name}-{0}` |
| Category | 下拉选择 | 设备分类：Router/Switch/End devices 等 |
| Symbol | 文本 + 按钮 | 拓扑图图标，可从图标库选择 |
| Tags | Chip 输入框 | 标签，用于分类/筛选 |
| Platform | 下拉选择 | 系统架构，共 35 种，必须与镜像架构匹配 |
| RAM | 数值（MB） | 分配给 VM 的内存大小 |
| vCPUs | 数值 | 虚拟 CPU 核心数 |
| Boot priority | 下拉选择 | 启动顺序：HDD / CD/DVD-ROM / Network |
| On close | 下拉选择 | 关闭 VM 时的行为 |
| Console type | 下拉选择 | 主控制台类型：telnet / ssh / vnc / spice / none |
| Auxiliary console type | 下拉选择 | 辅助控制台类型 |
| Auto start console | 复选框 | VM 启动时自动打开控制台 |

<img style={{ width: '100%' }} alt="通用设置" src={useBaseUrl('img/web-ui/zh/qemu-config-01-general.jpeg')} />

### 硬盘（HDD）配置

共支持 4 个 IDE 通道（HDA/HDB/HDC/HDD），每个通道独立配置：

| 通道 | 说明 |
|------|------|
| HDA (Primary Master) | 主盘，通常为系统盘 |
| HDB (Primary Slave) | 主盘从盘 |
| HDC (Secondary Master) | 从盘主 |
| HDD (Secondary Slave) | 从盘从 |

每个盘包含：

| 子字段 | 类型 | 用途 |
|--------|------|------|
| Disk image | 文本 + 自动完成 | 磁盘镜像文件路径 |
| Disk interface | 下拉选择 | 接口类型：ide / sata / scsi / sd / virtio / nvme / mtd / floppy / pflash / none |

接口类型说明：
- **ide** — 传统 IDE 接口，兼容性好，性能低
- **sata** — 现代 SATA 接口，推荐用于 Windows/Linux VM
- **scsi** — SCSI 接口，高性能，用于服务器系统
- **virtio** — 半虚拟化驱动，性能最高，需 OS 安装 virtio 驱动
- **nvme** — NVMe SSD 接口，超高性能，现代 Linux 和 Windows 10+ 支持

<img style={{ width: '100%' }} alt="硬盘配置" src={useBaseUrl('img/web-ui/zh/qemu-config-02-hdd.jpeg')} />

### 光驱（CD/DVD）配置

| 字段 | 类型 | 用途 |
|------|------|------|
| Upload | 按钮 | 上传本地 ISO 镜像 |
| Image | 文本 + 自动完成 | ISO 镜像路径 |

<img style={{ width: '100%' }} alt="光驱配置" src={useBaseUrl('img/web-ui/zh/qemu-config-03-cdrom.jpeg')} />

### 网络（Network）配置

| 字段 | 类型 | 用途 |
|------|------|------|
| Adapters | 数值 | 网络适配器数量 |
| First port | 文本 | 第一个网口名称，如 eth0 |
| Name format | 文本 | 网口命名格式，如 `eth{0}` |
| Segment size | 数值 | 端口分段大小 |
| Base MAC | 文本（格式 xx:xx:xx:xx:xx:xx） | 基 MAC 地址 |
| Type | 下拉选择 | 网卡型号，共 24 种 |
| Configure custom adapters | 按钮 | 为每个端口单独指定网卡型号 |
| Replicate network connection state | 复选框 | 保存/恢复时复制网络连接状态 |

常用网卡型号：e1000 系列、virtio（性能最高）、rtl8139（兼容极好）、vmxnet3（VMware 优化）

<img style={{ width: '100%' }} alt="网络配置" src={useBaseUrl('img/web-ui/zh/qemu-config-04-network.jpeg')} />

#### 自定义适配器配置

点击 "Configure custom adapters" 打开对话框，每行一个适配器：

| 列名 | 字段类型 | 用途 |
|------|---------|------|
| Adapter | 只读标签 | 适配器编号，自动递增 |
| Port name | 文本输入 | 端口名称，可自定义 |
| Type | 下拉选择 | 网卡型号，可覆盖模板默认值 |
| MAC address | 文本输入 | MAC 地址，留空自动生成 |
| 操作 | 删除按钮 | 删除此适配器 |

对话框采用**增量保存**策略：只保存与默认值不同的适配器配置。

<img style={{ width: '100%' }} alt="自定义适配器" src={useBaseUrl('img/web-ui/zh/qemu-config-05-adapters.jpeg')} />

### 高级设置（Advanced）

#### Linux boot specific settings

| 字段 | 类型 | 用途 |
|------|------|------|
| Initial RAM disk (initrd) | 文件 + 上传 | Linux initrd 镜像 |
| Kernel image | 文件 + 上传 | Linux 内核镜像 |
| Kernel command line | 文本 | 内核启动参数，如 console=ttyS0 |

#### BIOS

| 字段 | 类型 | 用途 |
|------|------|------|
| Bios image | 文件 + 上传 | 自定义 BIOS 镜像（如 SeaBIOS、UEFI 固件） |

#### Optimization

| 字段 | 类型 | 用途 |
|------|------|------|
| Activate CPU throttling | 复选框 | 启用 CPU 限流 |
| Percentage of CPU allowed | 数值 | 允许的 CPU 使用百分比（0-100） |
| Process priority | 下拉选择 | QEMU 进程优先级 |

#### Additional settings

| 字段 | 类型 | 用途 |
|------|------|------|
| Custom Qemu binary path | 文本 | 自定义 QEMU 可执行文件路径 |
| Options | 文本 | 额外 QEMU 命令行参数 |
| Use as a linked base VM | 复选框 | 链接克隆模式，共享基础镜像 |
| Enable TPM | 复选框 | TPM 2.0 模块，Windows 11 要求 |
| Enable UEFI boot mode | 复选框 | UEFI 引导模式（需要 OVMF 固件） |
| Max CPUs (hot-plug) | 数值 | 最大 CPU 数量（热插拔上限） |
| Auto-create config disk | 复选框 | 自动创建配置磁盘 |

<img style={{ width: '100%' }} alt="高级设置" src={useBaseUrl('img/web-ui/zh/qemu-config-06-advanced.jpeg')} />
