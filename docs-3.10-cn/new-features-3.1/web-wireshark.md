---
title: Web Wireshark
功能标签: [新特性]
难度: 入门
预计阅读时间: 5 分钟
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Web Wireshark

Web Wireshark 让您直接在浏览器中分析网络数据包，无需安装 Wireshark 软件。它通过 Docker 容器中的 xpra 技术提供完整的 Wireshark 图形界面，支持实时捕获和深度包检测。

<img style={{ width: '100%' }} alt="Web Wireshark界面" src={useBaseUrl('img/web-ui/zh/web-wireshark-hero.jpeg')} />

## 1. 核心架构

### 技术实现

Web Wireshark 采用容器化架构，将传统桌面应用转换为浏览器服务：

```
浏览器 → GNS3 服务器 → Docker 容器 → xpra + Xvfb → Wireshark → pcap数据流
```

**核心技术：**
- 容器化隔离：每个项目独立的 Docker 容器（`gns3-wireshark-{project_id}`）
- 虚拟显示：Xvfb 虚拟帧缓冲（1920x1080x24）
- 远程显示：xpra HTML5 客户端
- 实时流式传输：WebSocket 双向代理

### 资源配置

**默认配置：**
- 容器内存：2GB
- CPU 分配：1.0 核心
- 进程数限制：1000
- 网络子网：172.31.0.0/22

**每个 Wireshark 实例资源消耗：**
- 内存：150-250 MB
- CPU：0.5-2%（空闲到活跃状态）
- 线程数：约 30 个

## 2. 主要功能

### 2.1 两种显示模式

**新标签页模式：**
- 在独立浏览器标签页中打开 Web Wireshark
- 适合全屏分析和多显示器工作
- 不占用项目地图空间
- 注意：如果窗口大于1920×1080px，底部超出高度1080的区域鼠标将无法点击，可通过放大网页来缓解

**内联窗口模式：**
- 在项目地图中以浮动窗口显示
- 可拖动、调整大小、最小化
- 支持同时打开多个 Web Wireshark 窗口（每个链路一个）
- 点击窗口自动置顶
- 任务栏显示所有最小化的窗口

**窗口约束：**
- 最小尺寸：800×600px
- 最大尺寸：1920×1080px
- 始终保持在浏览器视口内

### 2.2 数据包捕获控制

**捕获操作：**

| 操作 | 说明 | 访问方式 |
|------|------|----------|
| 启动捕获 | 开始在链路上捕获数据包 | 右键链路 → "Start capture" |
| 打开 Web Wireshark | 查看实时捕获数据 | 右键链路 → "Start Web Wireshark" |
| 打开 Web Wireshark（内联） | 在浮动窗口中查看 | 右键链路 → "Start Web Wireshark (Inline)" |
| 重启捕获 | 重新启动捕获进程 | Web Wireshark 窗口中的重启按钮 |
| 停止捕获 | 停止捕获并释放资源 | 右键链路 → "Stop capture" |

**启动前提条件：**
- 链路两端至少有一个设备处于运行状态

### 2.3 自动文件命名

系统自动生成描述性文件名：


**格式：** `{源设备}_{源端口}_to_{目标设备}_{目标端口}`

**示例：**
- `R1_GigabitEthernet0_0_to_R2_GigabitEthernet0_0`
- `PC1_eth0_to_Switch1_FastEthernet0_1`

特殊字符会被自动移除，确保文件名合法。

### 2.4 捕获配置选项

启动捕获对话框中的设置：

- **Capture file name**：捕获文件名称（可自定义，或使用自动生成的名称）
- **Link type**：链路类型（如 Ethernet、UDP 等）
- **Data link type**：数据链路层类型
- **Start Web Wireshark**：勾选后自动打开 Web Wireshark
- **Start program**：启动本地 Wireshark（需要安装）

<img style={{ width: '100%' }} alt="捕获配置对话框" src={useBaseUrl('img/web-ui/zh/web-wireshark-capture-config.jpeg')} />

## 3. 多会话管理

### 项目级容器

- 每个项目一个容器：`gns3-wireshark-{project_id}`
- 容器在项目关闭时停止，项目删除时删除


### 链路级会话

- 每个链路一个 xpra 会话
- 确定性端口分配：display = port = 10000 + hash(link_id) % 10000
- 端口范围：10000-19999

### 性能特征

- 首次启动：约 6 秒（包含容器启动）
- 后续启动：约 5 秒（容器已运行）
- 停止清理：约 2 秒

## 4. 配置文件设置

Web Wireshark 的性能参数可以通过 `gns3_server.conf` 配置文件修改。

在 `gns3_server.conf` 文件中添加 `[WebWireshark]` 部分：

```
[WebWireshark]
# 启用/禁用 Web Wireshark 功能
enabled = true

# Docker 镜像名称
image = gns3/web-wireshark:latest

# Docker 网络子网
network_subnet = 172.31.0.0/22

# 容器内存限制
memory = 2g

# CPU 核心数分配
cpus = 1.0

# 进程数限制
pids_limit = 1000
```

### 参数说明

| 参数 | 默认值 | 说明 |
|------|--------|------|
| enabled | true | 启用或禁用 Web Wireshark 功能 |
| image | gns3/web-wireshark:latest | Docker 镜像名称和标签 |
| network_subnet | 172.31.0.0/22 | Docker 网络子网（用于容器间通信） |
| memory | 2g | 容器内存限制（支持单位：k, m, g） |
| cpus | 1.0 | 容器 CPU 核心数（可以是小数，如 1.5） |
| pids_limit | 1000 | 容器内进程数限制 |

## 5. 性能调优

### 内存配置

根据同时使用的 Web Wireshark 实例数量调整内存：

| 并发实例数  | 建议内存配置      | 说明        |
| ------ | ----------- | --------- |
| 4-6 个  | memory = 2g | 默认配置，中等使用 |
| 7-10 个 | memory = 4g | 重度使用      |
| 10+ 个  | memory = 8g | 大型拓扑      |

### CPU 配置

| 使用场景  | 建议配置       | 说明        |
| ----- | ---------- | --------- |
| 偶尔使用  | cpus = 1.0 | 默认配置      |
| 频繁使用  | cpus = 2.0 | 更好的响应性能   |
| 多实例并发 | cpus = 4.0 | 大型项目专用服务器 |

## 6. 配置示例

### 标准配置

```
[WebWireshark]
enabled = true
memory = 2g
cpus = 1
pids_limit = 1000
```

### 高性能配置

```
[WebWireshark]
enabled = true
memory = 4g
cpus = 2.0
pids_limit = 2000
```

## 7. 网络配置

### 修改默认网络子网

如果默认网络子网与您的网络冲突，可以修改：

```
[WebWireshark]
# 使用不同的子网
network_subnet = 192.168.100.0/22
```

**注意事项：**
- 确保子网不会与主机网络冲突
- 子网大小至少为 /22（支持约 1000 个 IP 地址）
- 修改后需要重启 GNS3 服务器

### 配置文件位置

GNS3 VM 中配置文件位于 `/opt/gns3/server/gns3_server.conf`。 Linux 用户手动安装时，默认配置文件位于 `~/.config/GNS3/3.1/gns3_server.conf`。


### 生效方式

1. 修改配置文件后，重启 GNS3 服务器使配置生效
2. 新创建的容器使用新配置

## 8. 故障排查

### 网络连接问题

- 检查 network_subnet 是否与现有网络冲突
- 使用 `docker network ls` 查看现有网络
- 必要时删除旧网络：`docker network rm gns3-wireshark`


## Web Wireshark vs 本地 Wireshark

| 特性 | Web Wireshark | 本地 Wireshark |
|------|--------------|----------------|
| 安装 | 无需安装 | 需要安装 Wireshark |
| 访问方式 | 浏览器中打开 | 独立应用程序 |
| 显示位置 | 浏览器标签页或内联窗口 | 独立窗口 |
| 跨平台 | 任何现代浏览器 | 依赖操作系统 |
| 远程访问 | ✅ 通过 Web UI 访问 | ❌ 需要远程桌面 |

