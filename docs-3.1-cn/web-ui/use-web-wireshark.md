---
title: 如何使用 Web Wireshark
功能标签: [新特性]
难度: 入门
预计阅读时间: 5 分钟
---


# 如何使用 Web Wireshark

Web Wireshark 让您直接在浏览器中分析网络数据包，无需安装 Wireshark 软件。它通过 Docker 容器中的 xpra 技术提供完整的 Wireshark 图形界面，支持实时捕获和深度包检测。

![Web Wireshark界面](/img/web-ui/zh/web-wireshark-hero.jpeg)

## 安装 Web Wireshark

如下图所示，在 GNS3 VM 界面选择 Web Wireshark，然后选择 OK 按钮回车。系统会先尝试从 Docker Hub 拉取 `gns3/web-wireshark:latest` 容器。

![Web Wireshark安装选择界面](/img/web-ui/zh/web-wireshark-install.jpeg)

如果 Docker Hub 拉取失败，会尝试在本地构建 `gns3/web-wireshark:latest` 容器。构建过程中需要从 Docker Hub 拉取 Debian 13 的基础镜像，之后的软件包安装等会自动替换为阿里云的镜像源。

如果确定无法连接 Docker Hub 站点，可以通过以下百度网盘链接下载 `gns3/web-wireshark` 打包文件，上传到 GNS3 VM 中，使用 `docker load -i` 命令导入这个容器。

**百度网盘分享链接：**

链接: https://pan.baidu.com/s/1jcYif0NnQtcY9OCdSnptkg?pwd=z6yu 提取码: z6yu

## 使用 Web Wireshark

**步骤1：启动捕获**

在项目拓扑中启动需要抓包的网络设备，然后在链路上右键点击，选择"Start capture"。

![右键链路启动捕获](/img/web-ui/zh/web-wireshark-right-click-start-capture.jpeg)



在弹出的"Packet capture"对话框中，勾选"Web Wireshark"选项，然后点击 OK。

![配置 Web Wireshark 捕获](/img/web-ui/zh/web-wireshark-capture-settings-dialog.jpeg)

等待 3-6 秒，系统会自动启动 Web Wireshark 容器。

![正在启动 Web Wireshark](/img/web-ui/zh/web-wireshark-starting-status.jpeg)

启动完成后，链路中间会显示一个抓包图标。

![链路上的抓包图标](/img/web-ui/zh/web-wireshark-capture-icon-on-link.jpeg)

**步骤2：打开 Web Wireshark**

在抓包图标上右键点击，选择"Open Web Wireshark(Inline)"选项。

![右键选择内联模式](/img/web-ui/zh/web-wireshark-right-click-open-inline.jpeg)

**步骤3：分析数据包**

Web Wireshark 窗口会在拓扑中以悬浮窗口显示。您可以拖动窗口、调整大小或最小化。

![Web Wireshark 内联窗口](/img/web-ui/zh/web-wireshark-inline-window-display.jpeg)

现在可以像使用桌面 Wireshark 一样，在搜索框中进行数据包过滤和分析。

:::note
**窗口约束：**
- 最小尺寸：800×600px
- 最大尺寸：1920×1080px
- 始终保持在浏览器视口内
:::


## 配置管理

### 基础配置

Web Wireshark 的性能参数可以通过 `gns3_server.conf` 配置文件修改。

在 `gns3_server.conf` 文件中添加 `[WebWireshark]` 部分：

```ini
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

### 网络配置

#### 修改默认网络子网

如果默认网络子网与您的网络冲突，可以修改：

```ini
[WebWireshark]
# 使用不同的子网
network_subnet = 192.168.100.0/22
```

**注意事项：**
- 确保子网不会与主机网络冲突
- 子网大小至少为 /22（支持约 1000 个 IP 地址）
- 修改后需要重启 GNS3 服务器

#### 配置文件位置

- **GNS3 VM**：`/opt/gns3/server/gns3_server.conf`
- **Linux 手动安装**：`~/.config/GNS3/3.1/gns3_server.conf`

#### 配置生效

1. 修改配置文件后，重启 GNS3 服务器使配置生效
2. 新创建的容器使用新配置

## 技术架构

### 系统架构

Web Wireshark 采用容器化架构，将传统桌面应用转换为浏览器服务：

![Web Wireshark 架构概览](/img/web-ui/zh/web-wireshark-architecture-cn.svg)

**核心技术：**
- 容器化隔离：每个项目独立的 Docker 容器（`gns3-wireshark-{project_id}`）
- 虚拟显示：Xvfb 虚拟帧缓冲（1920×1080×24）
- 远程显示：xpra HTML5 客户端
- 实时流式传输：WebSocket 双向代理

### 多会话机制

#### 项目级容器

- 每个项目一个容器：`gns3-wireshark-{project_id}`
- 容器在项目关闭时停止，项目删除时删除

#### 链路级会话

- 每个链路一个 xpra 会话
- 确定性端口分配：display = port = 10000 + hash(link_id) % 10000
- 端口范围：10000-19999

#### 性能特征

- 首次启动：约 6 秒（包含容器启动）
- 后续启动：约 5 秒（容器已运行）
- 停止清理：约 2 秒

### 资源配置与性能调优

**默认配置：**
- 容器内存：2GB
- CPU 分配：1.0 核心
- 进程数限制：1000
- 网络子网：172.31.0.0/22

**每个 Wireshark 实例资源消耗：**
- 内存：150-250 MB
- CPU：0.5-2%（空闲到活跃状态）
- 线程数：约 30 个

#### 内存配置建议

根据同时使用的 Web Wireshark 实例数量调整内存：

| 并发实例数  | 建议内存配置      | 说明        |
| ------ | ----------- | --------- |
| 4-6 个  | memory = 2g | 默认配置，中等使用 |
| 7-10 个 | memory = 4g | 重度使用      |
| 10+ 个  | memory = 8g | 大型拓扑      |

#### CPU 配置建议

| 使用场景  | 建议配置       | 说明        |
| ----- | ---------- | --------- |
| 偶尔使用  | cpus = 1.0 | 默认配置      |
| 频繁使用  | cpus = 2.0 | 更好的响应性能   |
| 多实例并发 | cpus = 4.0 | 大型项目专用服务器 |

## 参考信息

### Web Wireshark vs 本地 Wireshark

| 特性 | Web Wireshark | 本地 Wireshark |
|------|--------------|----------------|
| 安装 | 无需安装 | 需要安装 Wireshark |
| 访问方式 | 浏览器中打开 | 独立应用程序 |
| 显示位置 | 浏览器标签页或内联窗口 | 独立窗口 |
| 跨平台 | 任何现代浏览器 | 依赖操作系统 |
| 远程访问 | ✅ 通过 Web UI 访问 | ❌ 需要远程桌面 |

### 故障排查

#### 网络连接问题

- 检查 network_subnet 是否与现有网络冲突
- 使用 `docker network ls` 查看现有网络
- 必要时删除旧网络：`docker network rm gns3-wireshark`

## 功能贡献者

Web Wireshark 功能由 [YueGuobin](https://github.com/yueguobin) 开发和贡献。

- **知乎：** [蛋炒饭](https://www.zhihu.com/people/qin-lao-de-cai-niao)
