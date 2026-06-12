---
title: 如何配置 Docker 模板
功能标签: [操作]
难度: 入门
预计阅读时间: 10 分钟
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 如何配置 Docker 模板

Docker 是 GNS3 中基于容器技术的节点类型，与 QEMU/Dynamips 等虚拟机不同，它共享宿主机内核，启动速度极快。

## 创建模板

以下以 Ubuntu 容器为例，介绍如何创建 Docker 模板。

1. 点击"Docker"选项进入。
   <img style={{ width: '100%' }} alt="进入 Docker" src={useBaseUrl('img/web-ui/zh/docker-create-01-enter.jpeg')} />

2. 点击右上角的 + 号按钮添加新模板。
   <img style={{ width: '100%' }} alt="点击添加" src={useBaseUrl('img/web-ui/zh/docker-create-02-add.jpeg')} />

3. 按照引导步骤依次操作，点击"Docker Virtual Machine"。
   <img style={{ width: '100%' }} alt="向导开始" src={useBaseUrl('img/web-ui/zh/docker-create-03-name.jpeg')} />

4. 如果镜像已存在，点选"Existing image"并在列表中选择，然后点击"Container name"。
   <img style={{ width: '100%' }} alt="选择已有镜像" src={useBaseUrl('img/web-ui/zh/docker-create-04-existing-image.jpeg')} />

5. 如果镜像不存在，点选"New image"，在"Image name"中输入镜像名称（如 `ubuntu:latest`），然后点击"Container name"。
   <img style={{ width: '100%' }} alt="输入新镜像" src={useBaseUrl('img/web-ui/zh/docker-create-05-new-image.jpeg')} />

6. 在"Container name"中输入容器模板名称，然后点击"Network adapters"。
   <img style={{ width: '100%' }} alt="容器名称" src={useBaseUrl('img/web-ui/zh/docker-create-06-container-name.jpeg')} />

7. 在"Network adapters"中配置接口数量，然后点击"Start command"。
   <img style={{ width: '100%' }} alt="网络适配器" src={useBaseUrl('img/web-ui/zh/docker-create-07-network-adapters.jpeg')} />

8. 在"Start command"中输入启动参数，然后点击"Console type"。
   <img style={{ width: '100%' }} alt="启动命令" src={useBaseUrl('img/web-ui/zh/docker-create-08-start-command.jpeg')} />

9. 根据容器类型选择 console type（telnet/vnc 等），然后点击"Auxiliary console type"。
   <img style={{ width: '100%' }} alt="控制台类型" src={useBaseUrl('img/web-ui/zh/docker-create-09-console-type.jpeg')} />

10. "Auxiliary console type"选择"None"，然后点击"Environment"。
    <img style={{ width: '100%' }} alt="辅助控制台" src={useBaseUrl('img/web-ui/zh/docker-create-10-aux-console.jpeg')} />

11. 在"Environment"中配置容器的环境变量，然后点击"Add Template"完成创建。
    <img style={{ width: '100%' }} alt="环境变量" src={useBaseUrl('img/web-ui/zh/docker-create-11-environment.jpeg')} />

12. 创建完成后，在列表中可以看到新模板。
    <img style={{ width: '100%' }} alt="创建完成" src={useBaseUrl('img/web-ui/zh/docker-create-12-created.jpeg')} />

13. 点击右侧的三个点按钮，可以选择删除（Delete）、复制（Copy）或编辑（Edit）。
    <img style={{ width: '100%' }} alt="操作菜单" src={useBaseUrl('img/web-ui/zh/docker-create-13-menu.jpeg')} />

## 与其他节点类型的区别

| 特性 | Docker | QEMU | Dynamips | VPCS |
|------|--------|------|----------|------|
| 技术类型 | 容器（共享内核） | 全虚拟化 | 硬件模拟 | 模拟 PC |
| 启动速度 | 极快（秒级） | 慢（分钟级） | 慢 | 快 |
| 镜像大小 | 小（分层存储） | 大（几 GB） | 中等 | 极小 |
| 网卡数量 | 0-100 | 0-275 | 依赖平台 | 1 |
| 控制台类型 | 8 种 | 7 种 | telnet/ssh | telnet |
| 内存限制 | 可选（0=无限制） | 必填 | 必填 | 无 |
| CPU 限制 | 可选（支持小数） | 必填 | 必填 | 无 |

## Docker 模板配置详解

### 通用设置（General settings）

| 字段 | 类型 | 单位 | 用途 |
|------|------|------|------|
| Template name | 文本 | — | 模板名称，在列表中显示 |
| Default name format | 文本 | — | 实例自动命名格式，如 `{name}-{0}` |
| Image | 文本 | — | Docker 镜像名称（如 ubuntu:latest） |
| Category | 下拉选择 | — | 设备分类 |
| Symbol | 文本 + 按钮 | — | 拓扑图图标 |
| Tags | Chip 输入框 | — | 标签，用于分类/筛选 |
| Adapters | 数值 | 个 | 网络适配器数量，默认为 0 |
| Base MAC | 文本 | — | 基 MAC 地址，留空自动生成 |
| Maximum memory | 数值 | MB | 内存上限，0=无限制 |
| Maximum CPUs | 数值 | 个 | CPU 核心数上限，0=无限制 |
| Console type | 下拉选择 | — | telnet / ssh / vnc / http / https / none |
| Auxiliary console type | 下拉选择 | — | 辅助控制台类型 |
| VNC console resolution | 下拉选择 | — | VNC 分辨率，仅在 console_type 为 vnc 时有效 |
| HTTP port in the container | 数值 | — | 容器内 HTTP 端口号 |
| HTTP path | 文本 | — | HTTP 路径，如 `/`、`/gui` |
| Auto start console | 复选框 | — | 启用后自动打开控制台 |
| Edit network configuration | 按钮 | — | 自定义网卡 MAC 地址 |

<img style={{ width: '100%' }} alt="通用设置" src={useBaseUrl('img/web-ui/zh/docker-config-01-general.jpeg')} />

### 自定义网络配置

点击 "Edit network configuration" 打开对话框，每行一个网卡：

| 列名 | 字段类型 | 用途 |
|------|---------|------|
| Adapter | 只读标签 | 网卡编号，自动递增 |
| Port name | 只读文本 | 端口名称，固定为 eth0、eth1...（Docker 约定） |
| MAC address | 文本输入 | MAC 地址，可自定义，留空自动生成 |
| 操作 | 删除按钮 | 删除此网卡 |

<img style={{ width: '100%' }} alt="自定义网络" src={useBaseUrl('img/web-ui/zh/docker-config-02-network.jpeg')} />

### 高级设置（Advanced）

#### Start command

| 字段 | 类型 | 用途 |
|------|------|------|
| Start command | 文本域 | 容器启动命令，覆盖 Docker 镜像的默认 CMD |

#### Environment

| 字段 | 类型 | 用途 |
|------|------|------|
| Environment | 文本域 | 环境变量，每行一个，格式 `KEY=VALUE`。支持模板变量：`%vm-name%`、`%vm-id%`、`%project-id%`、`%project-path%` |

示例：
```
DB_HOST=192.168.1.10
DB_PORT=5432
API_KEY=%vm-id%
PROJECT=%project-id%
```

#### Extra volumes

| 字段 | 类型 | 用途 |
|------|------|------|
| Extra volumes | 文本域 | 额外挂载卷，每行一个容器内目录路径，容器删除后数据不丢失 |

示例：
```
/data
/config
/var/log/app
```

#### Extra hosts

| 字段 | 类型 | 用途 |
|------|------|------|
| Extra hosts | 文本域 | 额外主机名映射，每行一个，格式 `hostname:IP` |

示例：
```
gns3.local:192.168.100.10
database.internal:10.0.0.5
api.example.com:172.16.0.100
```

<img style={{ width: '100%' }} alt="高级设置" src={useBaseUrl('img/web-ui/zh/docker-config-03-advanced.jpeg')} />
