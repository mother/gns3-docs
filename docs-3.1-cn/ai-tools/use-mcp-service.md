---
title: 如何使用 MCP 服务
功能标签: [新特性]
难度: 入门
前置知识: "了解 GNS3 服务端的基本概念，可参考 [服务端配置](/docs-3.1-cn/management/manage-computes)。"
预计阅读时间: 10 分钟
---

import Mermaid from '@theme/Mermaid';


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

MCP 服务支持两种凭证方式：JWT Token（24小时有效期）或 API Key（永久有效，可吊销）。

### 创建 API Key（推荐）

- 如下图所示，登录服务器后，点击右侧三个点按钮，然后选择 **API Key** 选项。

![API Key 菜单选项](/img/web-ui/zh/mcp-api-key-menu-option.jpeg)

- 在弹出的 API Keys 对话框中，点击 **Create your first API key** 按钮。

![创建第一个 API Key](/img/web-ui/zh/mcp-api-key-create-first.jpeg)

- 为即将创建的 API Key 输入一个名称，然后点击 **Create** 按钮。

![输入 API Key 名称](/img/web-ui/zh/mcp-api-key-input-name.jpeg)

- 后端创建完成后，会显示 API Key Created 对话框，**复制并保存此 Key**。

![API Key 创建成功](/img/web-ui/zh/mcp-api-key-created-dialog.jpeg)

:::warning
此 API Key **只显示一次**，复制保存后，将不会再次显示。请立即妥善保存。
:::

- 创建完成后，列表中将显示该 Key。

![API Key 列表](/img/web-ui/zh/mcp-api-key-list.jpeg)

- 在 Actions 中，可以点击 Revoke 按钮吊销某个 Key。

![吊销 API Key](/img/web-ui/zh/mcp-api-key-revoke.jpeg)

- 吊销后，可以点击 **Restore** 恢复或 **Delete** 永久删除。

![吊销后状态](/img/web-ui/zh/mcp-api-key-revoked.jpeg)

- 点击Restore恢复

![恢复确认对话框](/img/web-ui/zh/mcp-api-key-restore-confirm.jpeg)

- 点击Delete永久删除

![删除确认对话框](/img/web-ui/zh/mcp-api-key-delete-confirm.jpeg)



## 快速开始

### 在 Claude Code 中使用

```bash
# 添加 MCP 服务器
claude mcp add --transport sse My_GNS3_Server \
  http://localhost:3080/v3/mcp/transport/sse \
  -H "Authorization: Bearer $API_KEY"
```

参数说明：
- `--transport sse` — 使用 SSE（Server-Sent Events）传输协议，MCP 的标准传输方式，支持远程连接
- `My_GNS3_Server` — 自定义的 MCP 服务器名称，可任意命名，用于在 Claude Code 中标识该服务器
- `http://localhost:3080/v3/mcp/transport/sse` — GNS3 服务端的 MCP SSE 端点地址，`localhost` 为 GNS3 服务端地址，`3080` 为默认端口
- `-H "Authorization: Bearer $API_KEY"` — 携带 API Key 的认证请求头，`$API_KEY` 替换为上一步获取的 API Key 值

添加完成后，在 Claude Code 中即可通过自然语言管理 GNS3，例如：
- "列出所有 GNS3 项目"
- "创建一个名为'OSPF 实验'的新项目"
- "在项目中添加一个 Cisco 路由器"
- "启动节点并检查状态"

### 在 Claude Desktop 中使用

Claude Desktop 不支持自定义请求头，需要通过 URL 查询参数传递凭证。

编辑 `claude_desktop_config.json`：

```json
{
  "mcpServers": {
    "My_GNS3_Server": {
      "url": "http://localhost:3080/v3/mcp/transport/sse?token=$API_KEY"
    }
  }
}
```

## 可用工具

MCP 服务提供 **82 个工具**，分为 12 大类：

### 项目（15 个）

| 工具 | 说明 | 必需参数 |
|------|------|---------|
| `project_list` | 列出所有项目 | 无 |
| `project_get` | 获取项目详情 | `project_id` |
| `project_create` | 创建项目 | `name` |
| `project_delete` | 删除项目 | `project_id` |
| `project_open` | 打开已关闭的项目 | `project_id` |
| `project_close` | 关闭已打开的项目 | `project_id` |
| `project_stats` | 获取项目统计信息 | `project_id` |
| `project_update` | 更新项目属性 | `project_id` |
| `project_duplicate` | 复制项目 | `project_id`, `name` |
| `project_readme_get` | 获取项目说明内容 | `project_id` |
| `project_readme_update` | 更新项目说明 | `project_id`, `content_markdown` |
| `project_lock` | 锁定项目（防止编辑） | `project_id` |
| `project_unlock` | 解锁项目 | `project_id` |
| `project_load` | 从路径加载项目 | `path` |
| `project_locked` | 检查项目是否已锁定 | `project_id` |

:::note
调用 `project_unlock` 解锁后，查询项目状态可能仍然显示 `locked=true`，这是状态同步的正常延迟。
:::

### 节点（22 个）

| 工具 | 说明 | 必需参数 |
|------|------|---------|
| `node_list` | 列出项目中所有节点 | `project_id` |
| `node_get` | 获取节点详情 | `project_id`, `node_id` |
| `node_create` | 从模板创建节点 | `project_id`, `template_id` |
| `node_delete` | 删除节点 | `project_id`, `node_id` |
| `node_update` | 更新节点属性 | `project_id`, `node_id` |
| `node_start` | 启动节点 | `project_id`, `node_id` |
| `node_stop` | 停止节点 | `project_id`, `node_id` |
| `node_reload` | 重启节点 | `project_id`, `node_id` |
| `node_suspend` | 挂起节点 | `project_id`, `node_id` |
| `node_console` | 获取控制台 WebSocket 地址 | `project_id`, `node_id` |
| `node_file_list` | 列出节点目录中的文件 | `project_id`, `node_id` |
| `node_file_get` | 读取文件（支持偏移/限制） | `project_id`, `node_id`, `path` |
| `node_file_write` | 写入文件 | `project_id`, `node_id`, `path`, `content` |
| `node_file_delete` | 删除文件 | `project_id`, `node_id`, `path` |
| `node_start_all` | 启动项目中所有节点 | `project_id` |
| `node_stop_all` | 停止项目中所有节点 | `project_id` |
| `node_suspend_all` | 挂起项目中所有节点 | `project_id` |
| `node_reload_all` | 重启项目中所有节点 | `project_id` |
| `node_duplicate` | 复制节点 | `project_id`, `node_id` |
| `node_isolate` | 隔离节点（挂起其链路） | `project_id`, `node_id` |
| `node_unisolate` | 取消隔离节点（恢复链路） | `project_id`, `node_id` |
| `node_links` | 列出连接到节点的所有链路 | `project_id`, `node_id` |

:::note
`node_console` 返回的 WebSocket 地址需要使用 `websocat` 工具连接，请确保在运行 Claude Code 的系统中已安装该工具。安装方法：`cargo install websocat`（需 Rust 环境）或从 [GitHub Releases](https://github.com/vi/websocat/releases) 下载预编译二进制。
:::

:::warning
`node_suspend` 的行为因节点类型而异：
- **Docker / Dynamips / QEMU**：完全支持挂起 — 状态变为 `suspended`
- **VPCS / IOU**：不支持挂起 — 返回 405（被 controller 吞掉，状态仍为 `started`）
- **Cloud / NAT / Ethernet switch**：无独立进程可挂起 — 仅标记状态，无实际效果
使用挂起前请确认节点类型，并通过 status 字段验证实际操作是否生效。
:::

### 链路（9 个）

| 工具 | 说明 | 必需参数 |
|------|------|---------|
| `link_list` | 列出项目中所有链路 | `project_id` |
| `link_get` | 获取链路详情 | `project_id`, `link_id` |
| `link_create` | 创建链路 | `project_id`, `nodes` |
| `link_delete` | 删除链路 | `project_id`, `link_id` |
| `link_update` | 更新链路（挂起、过滤） | `project_id`, `link_id` |
| `link_reset` | 重置链路（删除后重建） | `project_id`, `link_id` |
| `link_capture_start` | 开始抓包 | `project_id`, `link_id` |
| `link_capture_stop` | 停止抓包 | `project_id`, `link_id` |
| `link_capture_download` | 获取 PCAP 下载地址 | `project_id`, `link_id`, `capture_file_name` |

:::note
`link_reset` **不会**清除已有的 filter 设置——仅重建 UDP 连接。节点连接和过滤规则保持不变。
:::

### 模板（5 个）

| 工具 | 说明 | 必需参数 |
|------|------|---------|
| `template_list` | 列出所有模板 | 无 |
| `template_get` | 获取模板详情 | `template_id` 或 `name` |
| `template_create` | 创建模板（Docker 需要 `image`） | `name`, `template_type` |
| `template_update` | 更新模板 | `template_id` 或 `name` |
| `template_delete` | 删除模板 | `template_id` 或 `name` |

### 计算节点（3 个）

| 工具 | 说明 | 必需参数 |
|------|------|---------|
| `compute_list` | 列出所有注册的远程计算节点 | 无 |
| `compute_get` | 获取计算节点详情 | `compute_id` |
| `compute_images` | 列出计算节点上的仿真器镜像 | `compute_id`, `emulator` |

:::note
`compute_images` 专用于**远程**计算节点。要查询本地计算节点的镜像，请使用 `image_list`。
:::

### 快照（4 个）

| 工具 | 说明 | 必需参数 |
|------|------|---------|
| `snapshot_list` | 列出快照 | `project_id` |
| `snapshot_create` | 创建快照 | `project_id`, `name` |
| `snapshot_delete` | 删除快照 | `project_id`, `snapshot_id` |
| `snapshot_restore` | 恢复快照 | `project_id`, `snapshot_id` |

### 绘图（5 个）

| 工具 | 说明 | 必需参数 |
|------|------|---------|
| `drawing_list` | 列出画布上的绘图 | `project_id` |
| `drawing_get` | 获取绘图详情 | `project_id`, `drawing_id` |
| `drawing_create` | 创建绘图（SVG 标签/形状/图片） | `project_id`, `svg` |
| `drawing_update` | 更新绘图（位置、旋转、SVG） | `project_id`, `drawing_id` |
| `drawing_delete` | 删除绘图 | `project_id`, `drawing_id` |

:::warning
GNS3 的 SVG 渲染器与标准 SVG 规范存在以下差异：
- `<rect>` **必须**使用有效的颜色填充值（如 `fill="#FF0000"`），否则无法显示。不支持 `fill="none"`。
- `<ellipse>` 无此限制。
- `<path>` 的 Z（闭合）命令可能无法正常生效。
创建自定义绘图 SVG 时请注意这些渲染差异。
:::

### 符号（6 个）

| 工具 | 说明 | 必需参数 |
|------|------|---------|
| `symbol_list` | 列出所有符号 | 无 |
| `symbol_get` | 获取符号下载地址 | `symbol_id` |
| `symbol_dimensions` | 获取符号尺寸 | `symbol_id` |
| `symbol_defaults` | 获取默认符号映射 | 无 |
| `symbol_upload` | 上传自定义符号（SVG） | `symbol_id`, `svg_content` |
| `symbol_delete` | 删除自定义符号 | `symbol_id` |

### 应用模板（3 个）

| 工具 | 说明 | 必需参数 |
|------|------|---------|
| `appliance_list` | 列出模板库中的应用模板 | 无 |
| `appliance_get` | 获取应用模板详情 | `appliance_id` |
| `appliance_install` | 从应用模板创建模板 | `appliance_id` |

### 镜像（5 个）

| 工具 | 说明 | 必需参数 |
|------|------|---------|
| `image_list` | 列出所有镜像 | 无 |
| `image_get` | 获取镜像详情 | `image_id` |
| `image_delete` | 删除镜像 | `image_id` |
| `image_prune` | 清理未被任何模板引用的镜像 | 无 |
| `image_install` | 根据校验和从已上传镜像自动创建模板 | 无 |

:::warning
使用 `image_install` 前，需要先将镜像文件手动放到服务端的 `~/GNS3/images/` 目录下。该工具不会自动下载镜像——它仅通过校验和匹配从已有镜像文件创建模板。
:::

### 服务器（2 个）

| 工具 | 说明 | 必需参数 |
|------|------|---------|
| `server_version` | 获取 GNS3 服务端版本 | 无 |
| `server_statistics` | 获取服务器统计信息（计算节点、项目、节点数） | 无 |

### 设备配置（3 个）

| 工具 | 说明 | 必需参数 |
|------|------|---------|
| `device_config_send` | 通过控制台推送配置命令到设备（Nornir + Netmiko） | `project_id`, `device_name`, `config_commands` |
| `device_command_run` | 在设备上执行只读 show 命令 | `project_id`, `device_name`, `commands` |
| `vpcs_config_set` | 配置 VPCS 设备（IP、网关等） | `project_id`, `device_name`, `ip`, `netmask`, `gateway` |

:::note
设备配置工具需要先启动节点。设备类型会从节点的 `device_type:<type>` 标签自动识别。
:::

## 测试报告

82 个工具的完整测试结果保存在 [gns3-api-mcp-test](https://github.com/yueguobin/gns3-api-mcp-test) 仓库中：

- **[中文测试报告](https://github.com/yueguobin/gns3-api-mcp-test/tree/main/mcp_test_docs/zh)** — 13 个阶段覆盖全部工具

## 演示视频

📺 **[观看中文演示视频](https://www.zhihu.com/pin/2048932087688966201?page=video_pin&scene=share)**

## 架构概览

下图展示客户端从连接认证到工具发现与调用的完整交互流程：

<Mermaid value={`sequenceDiagram
    participant Client as Claude Code / Claude Desktop
    participant MCP as MCP Service
    participant Auth as Auth
    participant GNS3 as GNS3 REST API

    Note over Client: 1. 获取凭证
    Note over Client: 方式 A: JWT Token（24h 有效）
    Client->>GNS3: POST /v3/access/users/authenticate
    GNS3-->>Client: { access_token: "jwt..." }
    Note over Client: 方式 B: API Key（永久有效）
    Client->>GNS3: POST /v3/access/api-keys
    GNS3-->>Client: { api_key: "gns3_..." }

    Note over Client: 2. 使用凭证连接
    Client->>MCP: GET /sse (Authorization: Bearer <jwt_or_api_key>)
    MCP->>Auth: 验证凭证
    Auth-->>MCP: 有效
    MCP-->>Client: event: endpoint /messages/?session_id=xxx

    Note over Client: 3. 初始化
    Client->>MCP: POST /messages/ (initialize)
    MCP-->>Client: event: message (protocolVersion, capabilities)

    Note over Client: 4. 列出并调用工具
    Client->>MCP: POST /messages/ (tools/list)
    MCP-->>Client: event: message (tools list)

    Client->>MCP: POST /messages/ (tools/call project_list)
    MCP->>GNS3: Gns3Connector HTTP 请求
    GNS3-->>MCP: 返回数据
    MCP-->>Client: event: message (tool result)
`} />

## 传输安全配置

GNS3 Server 的 MCP 服务默认允许所有主机连接，与 GNS3 server 监听 `0.0.0.0`（所有网络接口）的策略一致。

如需限制访问来源，可在 `gns3_server.conf` 中启用 DNS 反绑定保护。`mcp_allowed_hosts` 填写**客户端访问 GNS3 server 时使用的地址**，而非客户端自身的地址：

```ini
[Server]
; 启用 MCP 传输安全保护（默认 False）
mcp_enable_dns_rebinding_protection = True
; 允许客户端访问的 GNS3 server 地址列表（"host:port" 格式）
; 例如 GNS3 server IP 为 192.168.1.3，则填写 192.168.1.3:*
mcp_allowed_hosts = 127.0.0.1:*,localhost:*,192.168.1.3:*
; 允许的来源列表（CORS Origin）
mcp_allowed_origins = http://127.0.0.1:*,http://localhost:*,http://192.168.1.3:*
```

:::tip
默认配置下所有主机均可连接，适合大多数场景。仅在需要严格限制访问来源时启用保护。
:::
- SSE 应用作为 Starlette 子应用挂载在 `/v3/mcp/transport` 路径下
- JWT Token 通过 `contextvars.ContextVar` 存储，Python ≥ 3.9 的 `asyncio.to_thread` 会自动传播到工具处理器线程
- 工具处理器通过 `Gns3Connector` 调用 GNS3 自身的 REST API，MCP 层保持解耦

## 常见问题

### MCP 和 GNS3 Copilot 有什么区别？

- **GNS3 Copilot（AI 助手）**：内置于 GNS3 GUI 的 AI 功能，通过 LLM 实现拓扑管理、故障诊断和自动化配置
- **MCP 服务**：提供标准化的 MCP 协议接口，允许外部 AI 客户端（如 Claude Code、Claude Desktop）以统一方式调用 GNS3 功能

两者可以配合使用：MCP 服务于工具调用场景，AI 助手服务于 GUI 内交互式使用场景。

### 是否支持远程连接？

支持。将 `localhost` 替换为 GNS3 服务端的实际 IP 地址或域名即可远程连接。注意确保网络可达且服务端端口（默认 3080，GNS3 VM默认80）已开放。

## 功能贡献者

MCP 服务功能由 [YueGuobin](https://github.com/yueguobin) 开发和贡献。

## License

本文档采用 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.zh) 许可协议。
作者: 岳国宾
