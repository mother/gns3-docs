---
title: 如何配置 VPCS 模板
功能标签: [操作]
难度: 入门
预计阅读时间: 10 分钟
---


# 如何配置 VPCS 模板

VPCS（Virtual PC Simulator）是 GNS3 中模拟 PC 的轻量级工具。与路由器/交换机不同，VPCS 只模拟一个极简的虚拟 PC 环境，用于测试网络连通性。

## 特点

| 对比项 | VPCS | 真实虚拟机（VMware/QEMU） |
|--------|------|--------------------------|
| 资源占用 | 极低（< 5MB RAM） | 高（数百 MB 到数 GB） |
| 启动速度 | 秒级 | 分钟级 |
| 功能 | 仅 IP/网络工具 | 完整 OS |
| 适用场景 | 网络连通性测试、协议实验 | 需要完整应用/服务的测试 |

## 创建模板

1. 点击"VPCS"选项进入。
   ![进入 VPCS](/img/web-ui/zh/vpcs-create-01-enter.jpeg)

2. 点击右上角的 + 号按钮添加新模板。
   ![点击添加](/img/web-ui/zh/vpcs-create-02-add.jpeg)

3. 输入模板名称（Template Name），点击 "Add Template" 完成创建。
   ![配置模板](/img/web-ui/zh/vpcs-create-03-configure.jpeg)

4. 点击右侧的三个点按钮，可以选择删除（Delete）或编辑（Edit）。
   ![操作菜单](/img/web-ui/zh/vpcs-create-04-menu.jpeg)

## VPCS 模板配置详解

### 通用设置（General settings）

| 字段 | 类型 | 必填 | 用途 |
|------|------|------|------|
| Template name | 文本 | 是 | 模板名称，在列表和创建实例时显示 |
| Default name format | 文本 | 是 | 实例自动命名格式，如 `{name}-{0}` |
| Base script file | 文本 | 是 | 启动脚本路径，启动时自动执行的 VPCS 命令 |
| Symbol | 文本 + 按钮 | 是 | 拓扑图上显示的图标 |
| Tags | Chip 输入框 | 否 | 标签，用于分类/筛选 |
| Category | 下拉选择 | 否 | 设备分类，决定在设备面板中的位置 |
| Console type | 下拉选择 | 否 | 控制台类型：telnet / ssh / none |
| Auto start console | 复选框 | 否 | 启用后 VPCS 启动时自动打开控制台 |

![通用设置](/img/web-ui/zh/vpcs-config-01-general.jpeg)

### Base Script File 详解

Base script file 是 VPCS 的核心配置。脚本格式为 VPCS 命令序列，常用命令：

| VPCS 命令 | 说明 | 示例 |
|-----------|------|------|
| `ip <address> <mask> <gateway>` | 设置 IP、掩码、网关 | `ip 192.168.1.10 255.255.255.0 192.168.1.1` |
| `dhcp` | 通过 DHCP 获取 IP | `dhcp -6` |
| `ping <host>` | Ping 测试 | `ping 192.168.1.1` |
| `trace <host>` | 路由追踪 | `trace 8.8.8.8` |
| `show ip` | 显示当前 IP 配置 | — |
| `show arp` | 显示 ARP 表 | — |
| `save` | 保存配置到 startup-config | — |

示例 Base Script：

```
# VPCS startup script
ip 192.168.1.10 255.255.255.0 192.168.1.1
# 或者使用 DHCP
# dhcp -6
```

VPCS 启动后会按顺序执行脚本中的命令，自动配置好网络，无需手动输入。
