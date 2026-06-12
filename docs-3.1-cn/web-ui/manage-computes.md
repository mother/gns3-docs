---
title: 如何添加计算节点
功能标签: [操作]
难度: 入门
预计阅读时间: 10 分钟
---


# 如何添加计算节点

本文档描述设置 GNS3 控制器与远程计算节点所需的最低配置。

## 架构概述

- **Compute（计算节点）**：运行单个节点（QEMU、Docker 等）并提供资源监控
- **Controller（控制器）**：管理多个计算节点、项目，并提供 REST API
- **Database（数据库）**：控制器使用 SQLite 存储项目、节点和计算节点注册信息

## 最低配置

### 1. 计算节点配置

GNS3 VM 中配置文件位于 `/opt/gns3/server/gns3_server.conf`。
Linux 用户手动安装时，默认配置文件位于 `~/.config/GNS3/3.1/gns3_server.conf`。

```ini
[Server]
host = 0.0.0.0
port = 3080
compute_username = gns3
compute_password = gns3
```


### 2. 控制器节点配置

GNS3 VM 中配置文件位于 `/opt/gns3/server/gns3_server.conf`。
Linux 用户手动安装时，默认配置文件位于 `~/.config/GNS3/3.1/gns3_server.conf`。

```ini
[Server]
host = 192.168.56.9
port = 3080
compute_username = gns3
compute_password = gns3
```

### 3. 重启 GNS3 Server

配置完成后，重启 GNS3 Server 使配置生效。

![重启 GNS3 Server](/img/web-ui/zh/compute-restart.jpeg)

### 4. 将计算节点注册到控制器

在项目首页点击左上角的 GNS3 Logo，选择"Compute"（计算节点管理），可以查看和管理所有已添加的计算节点。

![进入计算节点管理](/img/web-ui/zh/compute-01-enter.jpeg)

点击右上角的 + 号按钮添加新的计算节点。

![添加计算节点](/img/web-ui/zh/compute-04-add.jpeg)

依次输入以下字段后点击"Add"按钮：

| 字段 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| Name | 文本输入 | 空 | 计算节点的友好显示名称（可选） |
| Protocol | 下拉选择 | http | 通信协议：http 或 https |
| Host | 文本输入 | 空 | 服务器地址（IP 或域名） |
| Port | 数值输入 | 3080 | GNS3 compute 服务端口 |
| User | 文本输入 | gns3 | 认证用户名 |
| Password | 密码输入 | gns3 | 认证密码 |

![添加表单](/img/web-ui/zh/compute-05-form.jpeg)

添加完成后，该计算节点默认为 offline（离线）状态。点击右侧的三个点按钮，选择"Connect"进行连接。

![连接计算节点](/img/web-ui/zh/compute-06-connect.jpeg)

连接成功后，将实时显示该节点的 CPU、内存、硬盘使用情况。

![连接成功](/img/web-ui/zh/compute-07-connected.jpeg)

## 重要说明

### 主机配置

- **控制器 `host`**：如果设置为 `0.0.0.0`，控制器会将自己注册为 `127.0.0.1`，这会破坏远程计算节点的连接
- **症状**：即使计算节点在同一网络，仍报告 "No common subnet for compute X (controller) and Y" 错误
- **解决方案**：控制器的 `host` 字段始终使用实际的 LAN IP 地址（例如 `host = 192.168.1.104`）
- **动态 IP**：如果控制器机器使用 DHCP，请在路由器上设置静态租约或使用 mDNS（`.local` 域名）

### 密码配置

- 如果未设置 `compute_password`，启动时会自动生成随机的 16 位字符密码
- 控制器必须使用与计算节点配置相同的凭证

### 网络要求

- 控制器和计算节点必须在同一 LAN 上，跨计算节点的链接才能工作
- 跨计算节点链接使用 UDP 隧道，需要 UDP 端口的网络连接

### 配置文件位置

- GNS3 VM：`/opt/gns3/server/gns3_server.conf`
- Linux 手动安装：`~/.config/GNS3/3.1/gns3_server.conf`

### 安全说明：Docker UsernsMode

Docker 容器在运行时配置了 `UsernsMode: host`，即容器与宿主机共享用户命名空间。这意味着容器内的用户权限与宿主机用户空间直接对应，存在潜在安全风险。因此：

- **不推荐在裸机（bare metal）上安装 gns3server**，建议使用 GNS3 VM 作为计算节点
- **多用户共享同一台 GNS3 Server 时需谨慎**，因为 `UsernsMode: host` 使得容器内外的用户 ID 未做映射隔离

## 故障排除

### 计算节点连接时出现 401 Unauthorized

1. 检查计算节点的 `compute_username` 和 `compute_password` 是否与 API 传递的匹配
2. 验证计算节点的配置文件是否正确加载
3. 确保使用 `[Server]` 部分（而不是 `[Controller]`）

### 无共同子网错误

如果计算节点报告：
```
Cannot get an IP address on same subnet: No common subnet for compute X (controller) and Y
```

1. **主要原因**：控制器的 `host` 设置为 `0.0.0.0`，它会注册为 `127.0.0.1`，计算节点无法访问
2. 检查控制器的 `/v3/version` 端点，如果 `controller_host` 显示 `127.0.0.1`，这就是问题所在
3. 将控制器的 `host` 设置为其实际的 LAN IP 地址（例如 `192.168.1.104`）
4. 验证两台机器在同一网络上且可以互相 ping 通
5. 检查防火墙规则允许所需端口上的 TCP/UDP 通信：

**GNS3 Server 端口使用**
- 主服务端口：80（GNS3 VM默认）/ 443（HTTPS）/ 3080（默认）
- Console 端口：5000-10000
- VNC 端口：5900-10000
- UDP 通信端口：10000-30000

> 所有端口范围可在 `gns3_server.conf` 配置文件中自定义修改

### WebSocket 控制台认证失败

通过 WebSocket 连接到远程计算节点的控制台时，连接可能失败。

**原因**：控制器在连接到计算节点的 WebSocket 端点时，会转发自己的 `compute_username` 和 `compute_password` 凭证。如果计算节点没有配置匹配的凭证，认证就会失败。

**解决方案**：确保计算节点的配置文件具有匹配的凭证：

```ini
[Server]
enable_http_auth = True
compute_username = gns3
compute_password = your_password
```

**注意**：如果计算节点的配置中未明确设置 `compute_password`，启动时会自动生成随机的 16 位字符密码，使得任何外部控制器都无法进行认证。
