---
title: How to Use the MCP Service
featureTag: [New Feature]
difficulty: Beginner
prerequisite: "Understand basic GNS3 server concepts, refer to [Server Configuration](/docs-3.1-en/management/manage-computes)."
readingTime: 10 minutes
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# How to Use the MCP Service

MCP (Model Context Protocol) is an open standard that enables AI assistants to interact with external tools and services securely. GNS3 Server provides a standard MCP interface over SSE (Server-Sent Events) transport, allowing AI assistants like Claude Code and Claude Desktop to interact with GNS3 network simulations.

With the MCP service, you can use natural language commands to manage GNS3 projects, nodes, links, templates, and compute nodes without manually using the GNS3 GUI.

## Prerequisites

- GNS3 server is running
- You have a GNS3 user account (default username/password: `admin`/`admin`)

## Endpoints

| Path | Method | Description |
|------|--------|-------------|
| `/v3/mcp/` | GET | MCP service metadata |
| `/v3/mcp/transport/sse` | GET | SSE stream (MCP connection entry point) |
| `/v3/mcp/transport/messages/` | POST | JSON-RPC messages |

## Authentication

The MCP service requires a valid GNS3 JWT token.

### 1. Get a Token

After logging into the server, click the three dots button on the right side, then select the `User info` option.

<img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} alt="User Info menu entry" src={useBaseUrl('img/web-ui/zh/mcp-user-info-menu.jpeg')} />

In the `logged in user info` dialog, click the `copy access token` button to copy your JWT token.

<img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} alt="Copy Access Token" src={useBaseUrl('img/web-ui/zh/mcp-copy-access-token.jpeg')} />

### Token Expiry

The default JWT token lifetime is **1440 minutes (24 hours)**. This can be configured in `gns3_server.conf`:

```ini
jwt_access_token_expire_minutes = 1440  ; 24 hours
```

## Quick Start

### Using with Claude Code

```bash
# Add MCP server
claude mcp add --transport sse My_GNS3_Server \
  http://localhost:3080/v3/mcp/transport/sse \
  -H "Authorization: Bearer $TOKEN"
```

Parameter explanation:
- `--transport sse` — Use SSE (Server-Sent Events) transport, the standard MCP transport protocol that supports remote connections
- `My_GNS3_Server` — A custom name for the MCP server, can be any name, used to identify this server in Claude Code
- `http://localhost:3080/v3/mcp/transport/sse` — The GNS3 server MCP SSE endpoint URL, `localhost` is the GNS3 server address, `3080` is the default port
- `-H "Authorization: Bearer $TOKEN"` — The authentication header carrying the JWT token, replace `$TOKEN` with the access_token value obtained in the previous step

Once configured, you can manage GNS3 using natural language in Claude Code, for example:
- "List all GNS3 projects"
- "Create a new project named 'OSPF Lab'"
- "Add a Cisco router to the project"
- "Start the node and check its status"

## Available Tools

The MCP service provides **30 tools** across 5 categories:

### Project Management (7)

| Tool | Description | Required Parameters |
|------|-------------|-------------------|
| `list_projects` | List all projects | none |
| `get_project` | Get project details | `project_id` |
| `create_project` | Create a project | `name` |
| `delete_project` | Delete a project | `project_id` |
| `open_project` | Open a project | `project_id` |
| `close_project` | Close a project | `project_id` |
| `get_project_stats` | Get project statistics | `project_id` |

### Node Management (10)

| Tool | Description | Required Parameters |
|------|-------------|-------------------|
| `get_nodes` | List all nodes in a project | `project_id` |
| `get_node` | Get node details | `project_id`, `node_id` |
| `start_node` | Start a node | `project_id`, `node_id` |
| `stop_node` | Stop a node | `project_id`, `node_id` |
| `reload_node` | Reload a node | `project_id`, `node_id` |
| `suspend_node` | Suspend a node | `project_id`, `node_id` |
| `create_node` | Create a node from template | `project_id`, `template_id` |
| `delete_node` | Delete a node | `project_id`, `node_id` |
| `update_node` | Update node properties | `project_id`, `node_id` |
| `get_node_console_info` | Get console WebSocket URL | `project_id`, `node_id` |

:::note
The WebSocket URL returned by `get_node_console_info` requires the `websocat` tool to connect. Make sure it is installed on the system running Claude Code. Install via: `cargo install websocat` (requires Rust toolchain) or download a prebuilt binary from [GitHub Releases](https://github.com/vi/websocat/releases).
:::

### Link Management (5)

| Tool | Description | Required Parameters |
|------|-------------|-------------------|
| `get_links` | List all links in a project | `project_id` |
| `get_link` | Get link details | `project_id`, `link_id` |
| `create_link` | Create a link between nodes | `project_id`, `nodes` |
| `delete_link` | Delete a link | `project_id`, `link_id` |
| `update_link` | Update link properties | `project_id`, `link_id` |

### Template Management (5)

| Tool | Description | Required Parameters |
|------|-------------|-------------------|
| `list_templates` | List all templates | none |
| `get_template` | Get template details | `template_id` or `name` |
| `create_template` | Create a template | `name`, `template_type` |
| `update_template` | Update a template | `template_id` or `name` |
| `delete_template` | Delete a template | `template_id` or `name` |

### Compute Node Management (3)

| Tool | Description | Required Parameters |
|------|-------------|-------------------|
| `list_computes` | List all compute nodes | none |
| `get_compute` | Get compute details | `compute_id` |
| `get_compute_images` | List available images for an emulator | `emulator` |

## Demo Video

📺 **[Watch the English Demo](https://youtu.be/uzufwS-sPD8)**

## Architecture Overview

### Overall Architecture

```
AI Assistant (Claude Code / Desktop)
        │
        │ SSE Transport (MCP Protocol)
        ▼
  ┌─────────────────────┐
  │   JWT Auth Layer     │  ← Authorization header or ?token= query parameter
  └────────┬────────────┘
           ▼
  ┌─────────────────────┐
  │   FastMCP Server     │  ← Anthropic MCP SDK
  │   (mcp.sse_app)     │
  └────────┬────────────┘
           ▼
  ┌─────────────────────┐
  │   MCP Tool Handlers  │  ← projects.py / nodes.py / links.py / templates.py / computes.py
  │   (asyncio.to_thread)│
  └────────┬────────────┘
           ▼
  ┌─────────────────────┐
  │   Gns3Connector      │  ← custom_gns3fy HTTP client
  └────────┬────────────┘
           ▼
  ┌─────────────────────┐
  │   GNS3 REST API      │  ← GNS3 server internal API
  └─────────────────────┘
```

### Authentication Flow

```
1. Client obtains JWT Token
   Copy from GNS3 Web UI User Info dialog

2. Client connects to SSE
   GET /v3/mcp/transport/sse (Authorization: Bearer <jwt>)

3. Server validates Token
   Via auth_service.get_username_from_token()

4. SSE connection established
   Server returns: /messages/?session_id=xxx

5. Client sends JSON-RPC initialize
   POST /messages/ → initialize

6. Tool discovery and invocation
   tools/list → get tool list
   tools/call → invoke specific tool
```

### Implementation Highlights

- **FastMCP** (Anthropic MCP SDK) is used for tool registration and SSE transport

## Transport Security Configuration

By default, the GNS3 Server MCP service allows connections from all hosts, consistent with GNS3 server's policy of listening on `0.0.0.0` (all network interfaces).

To restrict access sources, enable DNS rebinding protection in `gns3_server.conf`. `mcp_allowed_hosts` should be set to the **address clients use to reach the GNS3 server**, not the client's own address:

```ini
[Server]
; Enable MCP transport security (default False)
mcp_enable_dns_rebinding_protection = True
; GNS3 server addresses that clients are allowed to connect to ("host:port" format)
; e.g. if GNS3 server IP is 192.168.1.3, add 192.168.1.3:*
mcp_allowed_hosts = 127.0.0.1:*,localhost:*,192.168.1.3:*
; Allowed origin list (CORS Origin)
mcp_allowed_origins = http://127.0.0.1:*,http://localhost:*,http://192.168.1.3:*
```

:::tip
With the default configuration, all hosts can connect — suitable for most scenarios. Only enable protection when you need to strictly restrict access sources.
:::
- The SSE app is mounted as a Starlette sub-application under `/v3/mcp/transport`
- JWT token is stored in a `contextvars.ContextVar` - Python ≥ 3.9's `asyncio.to_thread` automatically propagates it to tool handler threads
- Tool handlers use `Gns3Connector` to call GNS3's own REST API, keeping the MCP layer decoupled

## Frequently Asked Questions

### What's the difference between MCP and GNS3 Copilot?

- **GNS3 Copilot (AI Assistant)**: Built-in AI feature within the GNS3 GUI that provides topology management, fault diagnosis, and automated configuration through LLMs
- **MCP Service**: Provides a standardized MCP protocol interface for external AI clients (like Claude Code, Claude Desktop) to interact with GNS3 functionality in a unified way

They can be used together: MCP is for tool-calling scenarios, while the AI Assistant is for in-GUI interactive usage.

### How to configure token expiry?

Set in `gns3_server.conf`:

```ini
jwt_access_token_expire_minutes = 1440  ; default 24 hours
```

### Is remote connection supported?

Yes. Replace `localhost` with the actual IP address or domain name of your GNS3 server. Ensure network reachability and that the server port (default 3080, GNS3 VM default 80) is open.

## Feature Contributor

The MCP service feature was developed and contributed by [YueGuobin](https://github.com/yueguobin).

## License

This document is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
Author: YueGuobin
