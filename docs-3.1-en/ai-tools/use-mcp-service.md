---
title: How to Use the MCP Service
featureTag: [New Feature]
difficulty: Beginner
prerequisite: "Understand basic GNS3 server concepts, refer to [Server Configuration](/docs-3.1-en/management/manage-computes)."
readingTime: 10 minutes
---

import Mermaid from '@theme/Mermaid';


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

The MCP service supports two credential types: JWT Token (24-hour expiry) or API Key (permanent, revocable).

### Create an API Key (Recommended)

- After logging into the server, click the three dots button on the right side, then select the **API Key** option.

![API Key menu option](/img/web-ui/zh/mcp-api-key-menu-option.jpeg)

- In the API Keys dialog, click **Create your first API key**.

![Create first API Key](/img/web-ui/zh/mcp-api-key-create-first.jpeg)

- Enter a name for the API Key and click **Create**.

![Enter API Key name](/img/web-ui/zh/mcp-api-key-input-name.jpeg)

- Once created, the dialog displays the key. **Copy and save it now.**

![API Key created](/img/web-ui/zh/mcp-api-key-created-dialog.jpeg)

:::warning
This API Key is **only shown once**. After closing the dialog, it cannot be displayed again. Save it immediately.
:::

- The key appears in the list.

![API Key list](/img/web-ui/zh/mcp-api-key-list.jpeg)

- In the Actions column, click Revoke to revoke a key.

![Revoke API Key](/img/web-ui/zh/mcp-api-key-revoke.jpeg)

- After revocation, you can click **Restore** or **Delete**.

![Revoked state](/img/web-ui/zh/mcp-api-key-revoked.jpeg)

- Click **Restore** to restore the key

![Restore confirmation dialog](/img/web-ui/zh/mcp-api-key-restore-confirm.jpeg)

- Click **Delete** to permanently delete

![Delete confirmation dialog](/img/web-ui/zh/mcp-api-key-delete-confirm.jpeg)

### JWT Token

If you prefer to use a JWT Token (24-hour expiry), you can obtain it from the User Info dialog.


## Quick Start

### Using with Claude Code

```bash
# Add MCP server
claude mcp add --transport sse My_GNS3_Server \
  http://localhost:3080/v3/mcp/transport/sse \
  -H "Authorization: Bearer $API_KEY"
```

Parameter explanation:
- `--transport sse` — Use SSE (Server-Sent Events) transport, the standard MCP transport protocol that supports remote connections
- `My_GNS3_Server` — A custom name for the MCP server, can be any name, used to identify this server in Claude Code
- `http://localhost:3080/v3/mcp/transport/sse` — The GNS3 server MCP SSE endpoint URL, `localhost` is the GNS3 server address, `3080` is the default port
- `-H "Authorization: Bearer $API_KEY"` — The authentication header carrying the API Key, replace `$API_KEY` with the API Key value obtained in the previous step

Once configured, you can manage GNS3 using natural language in Claude Code, for example:
- "List all GNS3 projects"
- "Create a new project named 'OSPF Lab'"
- "Add a Cisco router to the project"
- "Start the node and check its status"

### Using with Claude Desktop

Claude Desktop does not support custom headers, so credentials must be passed as URL query parameters.

Edit `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "My_GNS3_Server": {
      "url": "http://localhost:3080/v3/mcp/transport/sse?token=$API_KEY"
    }
  }
}
```

## Available Tools

The MCP service provides **82 tools** across 12 categories:

### Project (15)

| Tool | Description | Required Parameters |
|------|-------------|-------------------|
| `project_list` | List all projects | none |
| `project_get` | Get project details | `project_id` |
| `project_create` | Create a project | `name` |
| `project_delete` | Delete a project | `project_id` |
| `project_open` | Open a closed project | `project_id` |
| `project_close` | Close an open project | `project_id` |
| `project_stats` | Get project statistics | `project_id` |
| `project_update` | Update project properties | `project_id` |
| `project_duplicate` | Duplicate a project | `project_id`, `name` |
| `project_readme_get` | Get project README content | `project_id` |
| `project_readme_update` | Update project README | `project_id`, `content_markdown` |
| `project_lock` | Lock project (prevent edits) | `project_id` |
| `project_unlock` | Unlock project | `project_id` |
| `project_load` | Load project from path | `path` |
| `project_locked` | Check if project is locked | `project_id` |

:::note
After calling `project_unlock`, the project status query may still show `locked=true` momentarily due to status sync delay.
:::

### Node (22)

| Tool | Description | Required Parameters |
|------|-------------|-------------------|
| `node_list` | List all nodes in a project | `project_id` |
| `node_get` | Get node details | `project_id`, `node_id` |
| `node_create` | Create a node from template | `project_id`, `template_id` |
| `node_delete` | Delete a node | `project_id`, `node_id` |
| `node_update` | Update node properties | `project_id`, `node_id` |
| `node_start` | Start a node | `project_id`, `node_id` |
| `node_stop` | Stop a node | `project_id`, `node_id` |
| `node_reload` | Reload a node | `project_id`, `node_id` |
| `node_suspend` | Suspend a node | `project_id`, `node_id` |
| `node_console` | Get WebSocket console URL | `project_id`, `node_id` |
| `node_file_list` | List files in node directory | `project_id`, `node_id` |
| `node_file_get` | Read a file (with offset/limit) | `project_id`, `node_id`, `path` |
| `node_file_write` | Write a file | `project_id`, `node_id`, `path`, `content` |
| `node_file_delete` | Delete a file | `project_id`, `node_id`, `path` |
| `node_start_all` | Start all nodes in a project | `project_id` |
| `node_stop_all` | Stop all nodes in a project | `project_id` |
| `node_suspend_all` | Suspend all nodes in a project | `project_id` |
| `node_reload_all` | Reload all nodes in a project | `project_id` |
| `node_duplicate` | Duplicate a node | `project_id`, `node_id` |
| `node_isolate` | Isolate a node (suspend its links) | `project_id`, `node_id` |
| `node_unisolate` | Un-isolate a node (resume links) | `project_id`, `node_id` |
| `node_links` | List links connected to a node | `project_id`, `node_id` |

:::note
The WebSocket URL returned by `node_console` requires the `websocat` tool to connect. Make sure it is installed on the system running Claude Code. Install via: `cargo install websocat` (requires Rust toolchain) or download a prebuilt binary from [GitHub Releases](https://github.com/vi/websocat/releases).
:::

:::warning
`node_suspend` behavior varies by node type:
- **Docker / Dynamips / QEMU**: Full suspend supported — status changes to `suspended`
- **VPCS / IOU**: Suspend not supported — returns 405 (swallowed by controller, status remains `started`)
- **Cloud / NAT / Ethernet switch**: No independent process to suspend — only status is marked, no actual effect
Check node type before using suspend and verify via the status field.
:::

### Link (9)

| Tool | Description | Required Parameters |
|------|-------------|-------------------|
| `link_list` | List all links in a project | `project_id` |
| `link_get` | Get link details | `project_id`, `link_id` |
| `link_create` | Create a link between nodes | `project_id`, `nodes` |
| `link_delete` | Delete a link | `project_id`, `link_id` |
| `link_update` | Update link (suspend, filters) | `project_id`, `link_id` |
| `link_reset` | Reset link (delete + recreate) | `project_id`, `link_id` |
| `link_capture_start` | Start packet capture on a link | `project_id`, `link_id` |
| `link_capture_stop` | Stop packet capture | `project_id`, `link_id` |
| `link_capture_download` | Get PCAP download URL | `project_id`, `link_id`, `capture_file_name` |

:::note
`link_reset` does **not** clear existing filter settings — only the UDP connection is torn down and rebuilt. Node connections and filters are preserved.
:::

### Template (5)

| Tool | Description | Required Parameters |
|------|-------------|-------------------|
| `template_list` | List all templates | none |
| `template_get` | Get template details | `template_id` or `name` |
| `template_create` | Create a template (Docker needs `image`) | `name`, `template_type` |
| `template_update` | Update a template | `template_id` or `name` |
| `template_delete` | Delete a template | `template_id` or `name` |

### Compute (3)

| Tool | Description | Required Parameters |
|------|-------------|-------------------|
| `compute_list` | List registered remote computes | none |
| `compute_get` | Get compute details | `compute_id` |
| `compute_images` | List emulator images on a compute | `compute_id`, `emulator` |

:::note
`compute_images` is designed for **remote** compute nodes. For images on the local compute, use `image_list` instead.
:::

### Snapshot (4)

| Tool | Description | Required Parameters |
|------|-------------|-------------------|
| `snapshot_list` | List snapshots | `project_id` |
| `snapshot_create` | Create a snapshot | `project_id`, `name` |
| `snapshot_delete` | Delete a snapshot | `project_id`, `snapshot_id` |
| `snapshot_restore` | Restore a snapshot | `project_id`, `snapshot_id` |

### Drawing (5)

| Tool | Description | Required Parameters |
|------|-------------|-------------------|
| `drawing_list` | List drawings on canvas | `project_id` |
| `drawing_get` | Get drawing details | `project_id`, `drawing_id` |
| `drawing_create` | Create drawing (SVG label/shape/image) | `project_id`, `svg` |
| `drawing_update` | Update drawing (position, rotation, SVG) | `project_id`, `drawing_id` |
| `drawing_delete` | Delete a drawing | `project_id`, `drawing_id` |

:::warning
GNS3's SVG renderer handles some SVG features differently from the standard:
- `<rect>` **must** have a valid color fill value (e.g. `fill="#FF0000"`), otherwise it won't display. `fill="none"` is not supported.
- `<ellipse>` does not have this limitation.
- `<path>` Z (close) command may not be properly supported.
Keep these differences in mind when creating custom drawing SVGs.
:::

### Symbol (6)

| Tool | Description | Required Parameters |
|------|-------------|-------------------|
| `symbol_list` | List all symbols | none |
| `symbol_get` | Get symbol download URL | `symbol_id` |
| `symbol_dimensions` | Get symbol dimensions | `symbol_id` |
| `symbol_defaults` | Get default symbol mapping | none |
| `symbol_upload` | Upload a custom symbol (SVG content) | `symbol_id`, `svg_content` |
| `symbol_delete` | Delete a custom symbol | `symbol_id` |

### Appliance (3)

| Tool | Description | Required Parameters |
|------|-------------|-------------------|
| `appliance_list` | List appliances from template library | none |
| `appliance_get` | Get appliance details | `appliance_id` |
| `appliance_install` | Create template from appliance | `appliance_id` |

### Image (5)

| Tool | Description | Required Parameters |
|------|-------------|-------------------|
| `image_list` | List all images | none |
| `image_get` | Get image details | `image_id` |
| `image_delete` | Delete an image | `image_id` |
| `image_prune` | Remove images not referenced by any template | none |
| `image_install` | Auto-create templates from uploaded images | none |

:::warning
Before using `image_install`, image files must be manually placed in the `~/GNS3/images/` directory on the server. The tool does not download images automatically — it only creates templates from existing image files by checksum matching.
:::

### Server (2)

| Tool | Description | Required Parameters |
|------|-------------|-------------------|
| `server_version` | Get GNS3 server version | none |
| `server_statistics` | Get server statistics (computes, projects, nodes) | none |

### Device Config (3)

| Tool | Description | Required Parameters |
|------|-------------|-------------------|
| `device_config_send` | Push config commands to devices via console (Nornir + Netmiko) | `project_id`, `device_name`, `config_commands` |
| `device_command_run` | Run read-only show commands on devices | `project_id`, `device_name`, `commands` |
| `vpcs_config_set` | Configure VPCS devices (IP, gateway, etc.) | `project_id`, `device_name`, `ip`, `netmask`, `gateway` |

:::note
Device Config tools require nodes to be started first. Device type is auto-detected from the node's `device_type:<type>` tag.
:::

## Test Report

Full 82-tool test results are available in the [gns3-api-mcp-test](https://github.com/yueguobin/gns3-api-mcp-test) repository:

- **[English Test Report](https://github.com/yueguobin/gns3-api-mcp-test/tree/main/mcp_test_docs/en)** — 13-stage coverage across all tools

## Demo Video

📺 **[Watch the English Demo](https://youtu.be/uzufwS-sPD8)**

## Architecture Overview

The sequence diagram below illustrates how a client connects, authenticates, discovers tools, and invokes them:

<Mermaid value={`sequenceDiagram
    participant Client as Claude Code / Claude Desktop
    participant MCP as MCP Service
    participant Auth as Auth
    participant GNS3 as GNS3 REST API

    Note over Client: 1. Obtain credential
    Note over Client: Option A: JWT Token (24h expiry)
    Client->>GNS3: POST /v3/access/users/authenticate
    GNS3-->>Client: { access_token: "jwt..." }
    Note over Client: Option B: API Key (permanent)
    Client->>GNS3: POST /v3/access/api-keys
    GNS3-->>Client: { api_key: "gns3_..." }

    Note over Client: 2. Connect with credential
    Client->>MCP: GET /sse (Authorization: Bearer <jwt_or_api_key>)
    MCP->>Auth: Validate credential
    Auth-->>MCP: Valid
    MCP-->>Client: event: endpoint /messages/?session_id=xxx

    Note over Client: 3. Initialize
    Client->>MCP: POST /messages/ (initialize)
    MCP-->>Client: event: message (protocolVersion, capabilities)

    Note over Client: 4. List & Call Tools
    Client->>MCP: POST /messages/ (tools/list)
    MCP-->>Client: event: message (tools list)

    Client->>MCP: POST /messages/ (tools/call project_list)
    MCP->>GNS3: Gns3Connector HTTP request
    GNS3-->>MCP: Projects data
    MCP-->>Client: event: message (tool result)
`} />

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

### Is remote connection supported?

Yes. Replace `localhost` with the actual IP address or domain name of your GNS3 server. Ensure network reachability and that the server port (default 3080, GNS3 VM default 80) is open.

## Feature Contributor

The MCP service feature was developed and contributed by [YueGuobin](https://github.com/yueguobin).

## License

This document is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
Author: YueGuobin
