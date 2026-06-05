---
title: 如何使用 MCP 服务
功能标签: [新特性]
难度: 入门
前置知识: "了解 GNS3 服务端的基本概念，可参考 [服务端配置](/docs-3.1-cn/management/manage-computes)。"
预计阅读时间: 10 分钟
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 如何使用 MCP 服务

MCP（Model Context Protocol，模型上下文协议）是一种开放标准，用于让 AI 助手与外部工具和服务进行安全交互。GNS3 Server 提供了标准的 MCP 接口，允许 AI 助手（如 Claude Code、Claude Desktop）通过 SSE（Server-Sent Events）传输协议与 GNS3 网络模拟进行交互。

通过 MCP 服务，您可以直接使用自然语言命令 AI 助手来管理 GNS3 项目、节点、链路、模板和计算节点，无需手动操作 GNS3 GUI。

## 前置条件

- GNS3 服务端已启动运行
- 拥有 GNS3 的用户账号（默认用户名/密码：`admin`/`admin`）

## 服务端点

| 路径 | 方法 | 说明 |
|------|------|------|
| `/v3/mcp/` | GET | MCP 服务元数据 |
| `/v3/mcp/transport/sse` | GET | SSE 流（MCP 连接入口） |
| `/v3/mcp/transport/messages/` | POST | JSON-RPC 消息 |

## 认证方式

MCP 服务需要有效的 GNS3 JWT Token，支持两种方式传递：

### 1. 获取 Token

如下图所示，登陆服务器后，点击右侧三个点按钮，然后选择User info选项。

<img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} alt="User Info菜单入口" src={useBaseUrl('img/web-ui/zh/mcp-user-info-menu.jpeg')} />

在弹出的logged in user info 对话框中，如下图所示，点击copy access token按钮，复制你的jwt 认证token。

<img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} alt="复制Access Token" src={useBaseUrl('img/web-ui/zh/mcp-copy-access-token.jpeg')} />


### Token 有效期

默认 JWT Token 有效期为 **1440 分钟（24 小时）**。可在 `gns3_server.conf` 中配置：

```ini
jwt_access_token_expire_minutes = 1440  ; 24 小时
```

## 快速开始

### 在 Claude Code 中使用

```bash
# 添加 MCP 服务器
claude mcp add --transport sse My_GNS3_Server \
  http://localhost:3080/v3/mcp/transport/sse \
  -H "Authorization: Bearer $TOKEN"
```

参数说明：
- `--transport sse` — 使用 SSE（Server-Sent Events）传输协议，MCP 的标准传输方式，支持远程连接
- `My_GNS3_Server` — 自定义的 MCP 服务器名称，可任意命名，用于在 Claude Code 中标识该服务器
- `http://localhost:3080/v3/mcp/transport/sse` — GNS3 服务端的 MCP SSE 端点地址，`localhost` 为 GNS3 服务端地址，`3080` 为默认端口
- `-H "Authorization: Bearer $TOKEN"` — 携带 JWT Token 的认证请求头，`$TOKEN` 替换为上一步获取的 access_token 值

添加完成后，在 Claude Code 中即可通过自然语言管理 GNS3，例如：
- "列出所有 GNS3 项目"
- "创建一个名为'OSPF 实验'的新项目"
- "在项目中添加一个 Cisco 路由器"
- "启动节点并检查状态"

## 可用工具

MCP 服务提供 **30 个工具**，分为 5 大类：

### 项目管理（7 个）

| 工具 | 说明 | 必需参数 |
|------|------|---------|
| `list_projects` | 列出所有项目 | 无 |
| `get_project` | 获取项目详情 | `project_id` |
| `create_project` | 创建项目 | `name` |
| `delete_project` | 删除项目 | `project_id` |
| `open_project` | 打开项目 | `project_id` |
| `close_project` | 关闭项目 | `project_id` |
| `get_project_stats` | 获取项目统计信息 | `project_id` |

### 节点管理（10 个）

| 工具 | 说明 | 必需参数 |
|------|------|---------|
| `get_nodes` | 列出项目中所有节点 | `project_id` |
| `get_node` | 获取节点详情 | `project_id`, `node_id` |
| `start_node` | 启动节点 | `project_id`, `node_id` |
| `stop_node` | 停止节点 | `project_id`, `node_id` |
| `reload_node` | 重启节点 | `project_id`, `node_id` |
| `suspend_node` | 挂起节点 | `project_id`, `node_id` |
| `create_node` | 从模板创建节点 | `project_id`, `template_id` |
| `delete_node` | 删除节点 | `project_id`, `node_id` |
| `update_node` | 更新节点属性 | `project_id`, `node_id` |
| `get_node_console_info` | 获取节点控制台 WebSocket 地址 | `project_id`, `node_id` |

:::note
`get_node_console_info` 返回的 WebSocket 地址需要使用 `websocat` 工具连接，请确保在运行 Claude Code 的系统中已安装该工具。安装方法：`cargo install websocat`（需 Rust 环境）或从 [GitHub Releases](https://github.com/vi/websocat/releases) 下载预编译二进制。
:::

### 链路管理（5 个）

| 工具 | 说明 | 必需参数 |
|------|------|---------|
| `get_links` | 列出项目中所有链路 | `project_id` |
| `get_link` | 获取链路详情 | `project_id`, `link_id` |
| `create_link` | 创建链路 | `project_id`, `nodes` |
| `delete_link` | 删除链路 | `project_id`, `link_id` |
| `update_link` | 更新链路属性 | `project_id`, `link_id` |

### 模板管理（5 个）

| 工具 | 说明 | 必需参数 |
|------|------|---------|
| `list_templates` | 列出所有模板 | 无 |
| `get_template` | 获取模板详情 | `template_id` 或 `name` |
| `create_template` | 创建模板 | `name`, `template_type` |
| `update_template` | 更新模板 | `template_id` 或 `name` |
| `delete_template` | 删除模板 | `template_id` 或 `name` |

### 计算节点管理（3 个）

| 工具 | 说明 | 必需参数 |
|------|------|---------|
| `list_computes` | 列出所有计算节点 | 无 |
| `get_compute` | 获取计算节点详情 | `compute_id` |
| `get_compute_images` | 列出仿真器可用镜像 | `emulator` |

## 演示视频

📺 **[观看中文演示视频](https://www.zhihu.com/pin/2046032031797213055?page=video_pin&scene=share)**

## 架构概览

### 整体架构

```
AI 助手 (Claude Code / Desktop)
        │
        │ SSE 传输 (MCP 协议)
        ▼
  ┌─────────────────────┐
  │    JWT 认证层        │  ← Authorization 请求头 或 ?token= 查询参数
  └────────┬────────────┘
           ▼
  ┌─────────────────────┐
  │   FastMCP 服务端     │  ← Anthropic MCP SDK
  │   (mcp.sse_app)     │
  └────────┬────────────┘
           ▼
  ┌─────────────────────┐
  │   MCP 工具处理器     │  ← projects.py / nodes.py / links.py / templates.py / computes.py
  │   (asyncio.to_thread)│
  └────────┬────────────┘
           ▼
  ┌─────────────────────┐
  │   Gns3Connector      │  ← custom_gns3fy HTTP 客户端
  └────────┬────────────┘
           ▼
  ┌─────────────────────┐
  │   GNS3 REST API      │  ← GNS3 服务端内部 API
  └─────────────────────┘
```

### 认证流程

```
1. 客户端获取 JWT Token
   POST /v3/access/users/authenticate → { access_token: "..." }

2. 客户端连接 SSE
   GET /v3/mcp/transport/sse (Authorization: Bearer <jwt>)

3. 服务端验证 Token
   通过 auth_service.get_username_from_token() 验证

4. 验证通过后建立 SSE 连接
   服务端返回 session endpoint: /messages/?session_id=xxx

5. 客户端发送 JSON-RPC 初始化
   POST /messages/ → initialize

6. 工具发现与调用
   tools/list → 获取工具列表
   tools/call → 调用具体工具
```

### 内部实现要点

- **FastMCP**（Anthropic MCP SDK）用于工具注册和 SSE 传输
- SSE 应用作为 Starlette 子应用挂载在 `/v3/mcp/transport` 路径下
- JWT Token 通过 `contextvars.ContextVar` 存储，Python ≥ 3.9 的 `asyncio.to_thread` 会自动传播到工具处理器线程
- 工具处理器通过 `Gns3Connector` 调用 GNS3 自身的 REST API，MCP 层保持解耦

## 常见问题

### MCP 和 GNS3 Copilot 有什么区别？

- **GNS3 Copilot（AI 助手）**：内置于 GNS3 GUI 的 AI 功能，通过 LLM 实现拓扑管理、故障诊断和自动化配置
- **MCP 服务**：提供标准化的 MCP 协议接口，允许外部 AI 客户端（如 Claude Code、Claude Desktop）以统一方式调用 GNS3 功能

两者可以配合使用：MCP 服务于工具调用场景，AI 助手服务于 GUI 内交互式使用场景。

### 如何配置 Token 有效期？

在 `gns3_server.conf` 中设置：

```ini
jwt_access_token_expire_minutes = 1440  ; 默认 24 小时
```

### 是否支持远程连接？

支持。将 `localhost` 替换为 GNS3 服务端的实际 IP 地址或域名即可远程连接。注意确保网络可达且服务端端口（默认 3080，GNS3 VM默认80）已开放。

## 功能贡献者

MCP 服务功能由 [YueGuobin](https://github.com/yueguobin) 开发和贡献。

## License

本文档采用 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.zh) 许可协议。
作者: 岳国宾
