---
title: How to configure and use AI Assistant
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::tip Project Origin

GNS3 AI Assistant (GNS3 Copilot) started as a separate project. See [github.com/yueguobin/gns3-copilot](https://github.com/yueguobin/gns3-copilot) for details. It was created by community developer YueGuobin. It is a network automation assistant based on large language models. It supports managing network devices, diagnosing faults, and automating configuration using natural language. It has been included in GNS3 3.1.
:::

# How to configure and use AI Assistant

The AI Assistant (GNS3 Copilot) is a smart assistant feature in GNS3 3.1. It uses large language models (LLMs) to provide intelligent network topology management, fault diagnosis, and automated configuration.

**Technical Architecture**: The backend is built with LangChain/LangGraph for intelligent workflow orchestration, and device configuration tools use Nornir/Netmiko for automated network device management.

:::note Testing Scope Note
Currently, this feature has been primarily tested with Cisco IOS images that do not have a console login password set.
:::

## Configure AI Model Access

**Development Testing Note:** During the development and testing phase, this feature was primarily tested using DeepSeek models. The former `deepseek-chat` is now renamed to `deepseek-v4-flash` or `deepseek-v4-pro`.

On the project home page, click the three dots at the top right and select "AI Profile" to go to the configuration page.

<img style={{ width: '100%' }} alt="AI Configuration Entry" src={useBaseUrl('img/web-ui/zh/ai-config-menu.jpeg')} />

- On the AI Profile screen, add an AI configuration for the user. Click the "New Configuration" button.

<img style={{ width: '100%' }} alt="New Configuration" src={useBaseUrl('img/web-ui/zh/ai-new-config.jpeg')} />

On the "Create LLM Model Configuration" page, select the "Base Models" tab. Follow the steps and enter:

1. **Configuration Name** — The name of your configuration
2. **Select LLM provider** — Choose an LLM provider (options are OpenRouter and DeepSeek)
3. **Model Name** — The model name
   - OpenRouter offers quick selection for x-ai / z-ai / openai / google / anthropic
   - DeepSeek offers quick selection for deepseek-v4-flash / deepseek-v4-pro
4. **API Key** — Enter your API Key
5. **Copilot Mode** — AI Assistant mode
   - Teaching Assistant
   - Lab Automation Assistant

:::note
Custom Mode has more configuration options. It is good for users with some experience. This page has field documentation to help you.
:::

After filling in the fields, click the "Create" button.

:::note API Key Security
- Encrypted using Python's `cryptography.fernet` module (AES-128-CBC algorithm), with the key file in the same directory as the configuration file
- API Key is encrypted before being stored in the database. All API query endpoints return `api_key: null`
- The system only decrypts the key internally when the AI Assistant needs to make an API call
:::

<img style={{ width: '100%' }} alt="Create Configuration" src={useBaseUrl('img/web-ui/zh/ai-create-config.jpeg')} />

After creation, it will look like the image below.

<img style={{ width: '100%' }} alt="Configuration Ready" src={useBaseUrl('img/web-ui/zh/ai-config-ready.jpeg')} />

## Use the AI Assistant in a Project Topology

- On the project topology page, click the AI button on the left to open the AI Assistant. Next to the input box on the AI Assistant page, you can click to select the configured model and assistant mode.

<img style={{ width: '100%' }} alt="AI Assistant Panel" src={useBaseUrl('img/web-ui/zh/ai-assistant-panel.jpeg')} />

- The sidebar of the AI Assistant shows your chat history.

<img style={{ width: '100%' }} alt="Chat History" src={useBaseUrl('img/web-ui/zh/ai-session-history.jpeg')} />

## Emulator Configuration

You need to add Tags to your emulators. The AI Assistant uses the `device_type` tag to identify device types and call appropriate configuration skills.

:::note
We mainly test with the following device types:
- **Cisco IOS** — `device_type:cisco_ios_telnet` — Configuration command generation is most mature and smooth
- **Huawei CE** — `device_type:gns3_huawei_telnet_ce` — Requires accurate skills configuration
- **Ruijie** — `device_type:gns3_ruijie_telnet` — Requires accurate skills configuration
- **VPCS** — `device_type:gns3_vpcs_telnet` — Requires accurate skills configuration

For more supported Telnet device types, see: [GNS3 Server - Netmiko Supported Devices](https://github.com/GNS3/gns3-server/blob/ca2004e715cd1f9b860b28bc371fd814b554a93d/docs/gns3-copilot/netmiko_devices.md)
:::

<img style={{ width: '100%' }} alt="Device Tags Configuration" src={useBaseUrl('img/web-ui/zh/ai-device-tags.png')} />

## Architecture Overview

### Overall Architecture

<img style={{ width: '100%' }} alt="Overall Architecture" src={useBaseUrl('img/web-ui/zh/ai-assistant-overview-en-overall-architecture.svg')} />

### API Endpoints

| Endpoint | Function |
|---|---|
| `POST /v3/projects/{pid}/chat/stream` | Streaming conversation (SSE), supports three copilot modes |
| `POST /v3/projects/{pid}/chat/inject` | Fault injection entry, auto-switches to `troubleshooting_injection` mode |
| `GET /v3/projects/{pid}/chat/sessions` | List sessions (supports filtering, pagination) |
| `DELETE /v3/projects/{pid}/chat/sessions/{sid}` | Delete session |
| `PATCH /v3/projects/{pid}/chat/sessions/{sid}` | Update session (rename, pin) |
| `POST /v3/projects/{pid}/chat/sessions/{sid}/abort` | Abort an active session |

### LangGraph Agent Workflow

<img style={{ width: '100%' }} alt="Agent Workflow" src={useBaseUrl('img/web-ui/zh/ai-assistant-overview-en-langgraph-agent-workflow.svg')} />

### Three Copilot Modes

**Mode Comparison**

| Mode | Tool Scope | Use Case |
|---|---|---|
| `teaching_assistant` (default) | Diagnostic read-only + packet analysis + node management | Teaching demos, troubleshooting guidance |
| `lab_automation_assistant` | All tools (including config changes) | Lab automation, device configuration |
| `troubleshooting_injection` | Fault injection tool set | Troubleshooting practice, fault simulation |

**Tool Binding Details**

| Tool | teaching_assistant | lab_automation_assistant | troubleshooting_injection |
|---|---|---|---|
| `GNS3TemplateTool` get templates | ✓ | ✓ | |
| `GNS3CreateNodeTool` create nodes | ✓ | ✓ | |
| `GNS3LinkTool` create links | ✓ | ✓ | |
| `GNS3StartNodeTool` start nodes | ✓ | ✓ | |
| `GNS3UpdateNodeNameTool` rename | ✓ | ✓ | |
| `GNS3StopNodeTool` stop nodes | | ✓ | |
| `GNS3SuspendNodeTool` suspend nodes | | ✓ | |
| `ExecuteMultipleDeviceCommands` read-only commands | ✓ | ✓ | ✓ |
| `ExecuteMultipleDeviceConfigCommands` config commands | | ✓ | ✓ |
| `VPCSCommands` VPCS commands | | ✓ | |
| `PacketAnalysisTool` live packet analysis | ✓ | ✓ | |
| `PacketAnalysisSkillsTool` protocol knowledge | ✓ | ✓ | |
| `DeviceSkillsTool` device skills | ✓ | ✓ | |
| `GNS3PacketFilterTool` link filters | | | ✓ |
| `InjectionSkillsTool` fault injection skills | | | ✓ |
| `GNS3TopologyTool` topology info | | | ✓ |

The mode is selected in the `llm_call` node via `copilot_mode`, which picks the corresponding tool list and binds it to the LLM model instance through `create_base_model_with_tools(mode_tools, llm_config)`.

### Context Window Management

<img style={{ width: '100%' }} alt="Context Window Management" src={useBaseUrl('img/web-ui/zh/ai-assistant-overview-en-context-window-management.svg')} />

- Accurate token counting via tiktoken (`cl100k_base`)
- Three trimming strategies: conservative / balanced / aggressive
- Auto-injects `{{topology_info}}` into System Prompt

### Session Management

- Per-project independent SQLite database (`gns3-copilot/copilot_checkpoints.db`)
- Supports pin, rename, delete, history query
- Auto-records token usage, message count, LLM call count

### LLM Config System

| Feature | Description |
|---|---|
| User-level configs | Each user can independently configure provider / model / api_key |
| Group inheritance | Users auto-inherit group config when no personal config is set |
| API key encryption | Auto-encrypted at database storage |
| Optimistic locking | `version` field prevents concurrent modification conflicts |

### Key Design Points

1. **Project-level Isolation** — Each GNS3 project has its own Agent instance and SQLite storage
2. **ContextVars Safe Passing** — JWT token, API key exist only in memory, auto-cleared when request ends
3. **LangGraph StateGraph** — Custom nodes + conditional edges, supports ReAct loop and recursion limits
4. **SSE Streaming** — Real-time push of content / tool_call / tool_start / tool_end / error / done events
5. **Hot Reload** — System Prompt, Skills, Protocols all support runtime reload
6. **Mode-based Tool Sets** — Three copilot modes bind different tools, safely isolated by scenario

## Feature Contributor

AI Assistant feature was developed and contributed by [YueGuobin](https://github.com/yueguobin).

- **LinkedIn:** [Guobin Yue](https://www.linkedin.com/in/guobin-yue/)

## License

This document is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
Author: YueGuobin
