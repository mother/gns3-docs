---
title: 如何配置和使用 AI 助手
功能标签: [新特性]
难度: 入门
预计阅读时间: 10 分钟
---

import Mermaid from '@theme/Mermaid';


# 如何配置和使用 AI 助手

:::tip 项目出处

GNS3 AI Assistant（GNS3 Copilot）最初作为独立项目开发，详见 [github.com/yueguobin/gns3-copilot](https://github.com/yueguobin/gns3-copilot)。该项目由社区开发者 YueGuobin 创建，是一个基于大语言模型的网络自动化助手，支持通过自然语言管理网络设备、诊断故障和自动化配置，已合入 GNS3 3.1 版本。
:::

AI 助手（GNS3 Copilot）是 GNS3 3.1 的智能助手功能，通过大语言模型（LLM）提供智能化的网络拓扑管理、故障诊断和自动化配置功能。

:::note 测试范围说明
目前主要针对未设置 console 登录密码的 Cisco IOS 镜像进行了充分的测试验证。
:::

## 配置 AI 模型接入

**开发测试说明：** 本功能在开发测试验证阶段主要使用 DeepSeek 的模型进行测试验证，原 `deepseek-chat` 现已更名为 `deepseek-v4-flash` 或 `deepseek-v4-pro`。

### 普通用户配置

在项目首页点击右上角的三个点，选择 `AI Profile`，进入配置页面。

![AI配置入口](/img/web-ui/zh/ai-config-menu.jpeg)

### 管理员配置

管理员可以通过 `Controller Management` 页面为用户或用户组配置 `AI Profile`。

#### 为用户配置

在项目首页点击右上角的三个点，选择 `Management` 选项，进入 `Controller Management` 页面。

![Controller Management入口](/img/web-ui/zh/ai-config-management.jpeg)

如下图所示，点击 `Users` 标签，管理员可以为不同的用户进行 `AI Profile` 配置。

![Users标签配置](/img/web-ui/zh/ai-config-users-tab.jpeg)

#### 为用户组配置

如下图所示，点击 `Groups` 标签，管理员可以为不同的用户组配置 `AI Profile`。

用户组配置后，普通用户加入用户组后，可以选择使用用户组配置的 `AI Profile`（目前只能选择用户组配置的默认 `AI Profile`），也可以选择自己配置的 `AI Profile`。

![Groups标签配置](/img/web-ui/zh/ai-config-groups-tab.jpeg)

### 配置参数

- 在 `AI Profile` 界面，为用户添加 AI 配置，点击 `New Configuration` 按钮。

![新建配置](/img/web-ui/zh/ai-new-config.jpeg)

在 `Create LLM Model Configuration` 页面，选择 `Base Models` 标签页，按照步骤输入：

1. **Configuration Name** — 配置名称
2. **Select LLM provider** — 选择 LLM 提供商（提供 OpenRouter 和 DeepSeek 两个选项）
3. **Model Name** — 模型名称
   - OpenRouter 支持 x-ai / z-ai / openai / google / anthropic 的快速选择
   - DeepSeek 支持 deepseek-v4-flash / deepseek-v4-pro 的快速选择

:::warning 兼容性说明
支持兼容 **OpenAI API 接口格式**的大语言模型。如果你使用的模型服务商兼容 OpenAI API 格式（如 vLLM、Ollama 等），可以在 Custom Mode 中填入对应的 API 端点即可使用。
:::

4. **API Key** — 输入你的 API Key
5. **Copilot Mode** — AI 助手模式
   - Teaching Assistant（教学助手）
   - Lab Automation Assistant（实验自动化）

:::note
Custom Mode 有更多的配置选项可以定义，适合有一定基础的用户操作，该页面有 field documentation 帮助。
:::

填选后，点击 `Create` 按钮。

:::note API Key 安全说明
- 使用 Python 的 `cryptography.fernet` 模块（AES-128-CBC 算法）加密，密钥文件与配置文件在同一目录下
- API Key 加密后存入数据库，所有 API 查询接口都返回 `api_key: null`
- 只有 AI 助手需要调用时，系统内部才用密钥解密使用
:::

![创建配置](/img/web-ui/zh/ai-create-config.jpeg)

创建完成后，如下图所示。

![配置完成](/img/web-ui/zh/ai-config-ready.jpeg)


## 在项目拓扑中使用 AI 助手

- 在项目拓扑页面，点击左侧的 AI 按钮，打开 AI 助手。在 AI 助手页面的输入框旁边，可以点击选择配置的模型和助手模式。

![AI助手面板](/img/web-ui/zh/ai-assistant-panel.jpeg)

- AI 助手的侧边栏显示历史会话消息。

![历史会话](/img/web-ui/zh/ai-session-history.jpeg)

## 模拟器配置

需要为模拟器配置 Tags。AI 助手通过 `device_type` 标签来区分设备类型并调用相应的配置技能。

:::note
目前主要针对以下设备类型进行测试：
- **Cisco IOS** — `device_type:cisco_ios_telnet` — 配置命令生成最为成熟流畅
- **Huawei CE** — `device_type:gns3_huawei_telnet_ce` — 需要准确配置 skills
- **锐捷 Ruijie** — `device_type:gns3_ruijie_telnet` — 需要准确配置 skills
- **VPCS** — `device_type:gns3_vpcs_telnet` — 需要准确配置 skills

更多支持的 Telnet 设备类型请参考：[GNS3 Server - Netmiko Supported Devices](https://github.com/GNS3/gns3-server/blob/ca2004e715cd1f9b860b28bc371fd814b554a93d/docs/gns3-copilot/netmiko_devices.md)
:::

![设备Tags配置](/img/web-ui/zh/ai-device-tags.png)

## 使用场景

AI 助手提供两种核心模式，分别适用于不同的网络运维和学习场景。

### 技术指导模式（Teaching Assistant）

技术指导模式适合学习和故障诊断场景。您可以通过自然语言与 AI 助手交互，获得网络技术问题的解答和指导。

**使用示例：**

1. 在项目拓扑中打开 AI 助手面板，选择 `Select AI Mode` 为 `Teaching Assistant`。

2. 在输入框中描述您的需求，例如：
   - "解释这个拓扑中 OSPF 的邻居建立过程"
   - "检查设备 R1 的路由表"
   - "为什么 PC1 无法 ping 通 PC2？"

3. AI 助手会自动分析拓扑，连接设备执行诊断命令，并给出详细解释。

:::tip 视频教程

📺 **[观看视频教程](https://www.zhihu.com/pin/2043484932606099573?page=video_pin&scene=share)** - 跟随视频了解技术指导模式的使用方法
:::

### 自动化模式（Lab Automation Assistant）

自动化模式适合批量配置和实验自动化场景。您可以用自然语言描述配置目标，AI 助手自动生成并执行设备配置命令。

**使用示例：**

1. 在 AI 助手面板中，切换 `Select AI Mode` 为 `Lab Automation Assistant`。

2. 输入自动化任务描述，例如：
   - "在所有交换机上创建 VLAN 10、20、30"
   - "配置 R1-R3 之间的 OSPF 区域 0"
   - "将 PC1 到 PC5 的接口全部划入 VLAN 10"

1. AI 助手会解析您的需求，生成对应的设备配置命令自动下发到设备。

:::note
目前未实现人机交互确认（HITL，Human-in-the-Loop），AI在执行配置变更操作时不会进行二次确认。
:::

## 架构概览

### 整体架构

<Mermaid value={`flowchart TB
    subgraph Client["客户端"]
        A["Web UI"] --> B["SSE Streaming"]
    end

    subgraph FastAPI["FastAPI Route Layer"]
        B --> C["POST /chat/stream\nPOST /chat/inject"]
        C --> D["Auth + LLM Config Loading\nSet ContextVars"]
    end

    subgraph AgentService["AgentService (项目级)"]
        D --> E["LangGraph Agent\nStateGraph"]
        E --> F["SQLite Checkpointer\ncopilot_checkpoints.db"]
    end

    subgraph Workflow["LangGraph Workflow"]
        E --> G["llm_call node\n模型调用"]
        E --> H["tool_node\n工具执行"]
        E --> I["title_generator_node\n自动标题"]
        E --> J["abort_handler_node\n中断处理"]
    end

    subgraph Modes["三种 Copilot 模式"]
        G --> K["teaching_assistant\n诊断只读"]
        G --> L["lab_automation_assistant\n完全控制"]
        G --> M["troubleshooting_injection\n故障注入"]
    end

    subgraph Config["LLM 配置系统"]
        D --> N["用户配置\n组配置继承\nAPI Key 加密"]
    end
`} />

### API 端点

| 端点 | 功能 |
|---|---|
| `POST /v3/projects/{pid}/chat/stream` | 流式对话（SSE），支持三种 copilot 模式 |
| `POST /v3/projects/{pid}/chat/inject` | 故障注入入口，自动切换为 `troubleshooting_injection` 模式 |
| `GET /v3/projects/{pid}/chat/sessions` | 列出会话（支持过滤、分页） |
| `DELETE /v3/projects/{pid}/chat/sessions/{sid}` | 删除会话 |
| `PATCH /v3/projects/{pid}/chat/sessions/{sid}` | 更新会话（重命名、置顶） |
| `POST /v3/projects/{pid}/chat/sessions/{sid}/abort` | 终止正在进行的会话 |

### LangGraph Agent 工作流

<Mermaid value={`sequenceDiagram
    participant U as User
    participant API as FastAPI
    participant AS as AgentService
    participant LLM as LLM Node
    participant Tool as Tool Node
    participant TGen as Title Node

    U->>API: 发送消息
    API->>AS: stream_chat()
    AS->>AS: 设置 ContextVars<br/>(jwt_token, llm_config)

    Note over AS,LLM: llm_call node
    AS->>LLM: invoke pre-compiled model
    LLM->>LLM: pre_model_hook<br/>注入拓扑 + 裁剪上下文
    LLM-->>AS: AI 回复（可能包含 tool_calls）

    opt has tool calls
        AS->>Tool: 执行工具
        Tool-->>AS: 工具结果
        AS->>LLM: 继续 LLM 调用
    end

    opt first turn and no title
        AS->>TGen: 自动生成标题
        TGen-->>AS: 会话标题
    end

    AS-->>API: SSE 流式响应
    API-->>U: 流式输出
`} />

### 三种 Copilot 模式

**模式对照**

| 模式 | 工具范围 | 适用场景 |
|---|---|---|
| `teaching_assistant`（默认） | 诊断只读 + 数据包分析 + 节点管理 | 教学演示、故障排查指导 |
| `lab_automation_assistant` | 全部工具（含配置变更） | 实验自动化、设备配置 |
| `troubleshooting_injection` | 故障注入工具集 | 排错练习、故障模拟 |

**工具绑定明细**

| 工具 | teaching_assistant | lab_automation_assistant | troubleshooting_injection |
|---|---|---|---|
| `GNS3TemplateTool` 获取模板 | ✓ | ✓ | |
| `GNS3CreateNodeTool` 创建节点 | ✓ | ✓ | |
| `GNS3LinkTool` 创建链路 | ✓ | ✓ | |
| `GNS3StartNodeTool` 启动节点 | ✓ | ✓ | |
| `GNS3UpdateNodeNameTool` 更新名称 | ✓ | ✓ | |
| `GNS3StopNodeTool` 停止节点 | | ✓ | |
| `GNS3SuspendNodeTool` 挂起节点 | | ✓ | |
| `ExecuteMultipleDeviceCommands` 只读命令 | ✓ | ✓ | ✓ |
| `ExecuteMultipleDeviceConfigCommands` 配置命令 | | ✓ | ✓ |
| `VPCSCommands` VPCS命令 | | ✓ | |
| `PacketAnalysisTool` 实时抓包分析 | ✓ | ✓ | |
| `PacketAnalysisSkillsTool` 协议知识查询 | ✓ | ✓ | |
| `DeviceSkillsTool` 设备技能查询 | ✓ | ✓ | |
| `GNS3PacketFilterTool` 链路滤波器 | | | ✓ |
| `InjectionSkillsTool` 故障注入技能 | | | ✓ |
| `GNS3TopologyTool` 拓扑信息 | | | ✓ |

模式通过 `llm_call` 节点中的 `copilot_mode` 选择对应工具列表，调用 `create_base_model_with_tools(mode_tools, llm_config)` 将工具绑定到 LLM 模型实例。

### 上下文窗口管理

<Mermaid value={`flowchart LR
    A["LLM call triggered"] --> B["pre_model_hook"]
    B --> C["Inject topology\ninto System Prompt"]
    B --> D["Estimate tool definition\ntoken cost"]
    B --> E["trim_messages\nby strategy"]
    E --> F["conservative 60%\nbalanced 75%\naggressive 85%"]
    F --> G["Invoke LLM"]
`} />

- 使用 tiktoken（`cl100k_base`）精确计数
- 三层裁剪策略：conservative / balanced / aggressive
- 自动注入 `{{topology_info}}` 到 System Prompt

### 会话管理

- 每个项目独立的 SQLite 数据库（`gns3-copilot/copilot_checkpoints.db`）
- 支持置顶、重命名、删除、历史查询
- 自动记录 token 用量、消息数、LLM 调用次数（目前未提取到WEB UI界面显示）

### LLM 配置系统

| 特性 | 说明 |
|---|---|
| 用户级配置 | 每个用户可独立配置 provider / model / api_key |
| 用户组继承 | 用户未配置时自动继承所属组配置 |
| API 密钥加密 | 数据库存储时自动加密 |
| 乐观锁 | version 字段防止并发修改冲突 |

### 关键设计要点

1. **项目级隔离** — 每个 GNS3 项目拥有独立的 Agent 实例和 SQLite 存储
2. **ContextVars 安全传递** — JWT token、API key 仅存于内存，随请求结束自动清除
3. **LangGraph StateGraph** — 自定义节点 + 条件边，支持 ReAct 循环和递归限制
4. **流式 SSE** — 实时推送 content / tool_call / tool_start / tool_end / error / done 事件
5. **热重载** — System Prompt、Skills、Protocols 均支持运行时重载
6. **模式化工具集** — 三种 copilot 模式绑定不同工具组合，按场景安全隔离

## 功能贡献者

AI 助手功能由 [YueGuobin](https://github.com/yueguobin) 开发和贡献。

- **知乎：** [蛋炒饭](https://www.zhihu.com/people/qin-lao-de-cai-niao)

## License

本文档采用 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh) 许可协议（署名-非商业性使用-禁止演绎）。
作者: 岳国宾