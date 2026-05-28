---
title: AI 助手
功能标签: [新特性]
难度: 入门
预计阅读时间: 10 分钟
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::tip 项目出处

GNS3 AI Assistant（GNS3 Copilot）最初作为独立项目开发，详见 [github.com/yueguobin/gns3-copilot](https://github.com/yueguobin/gns3-copilot)。该项目由社区开发者 YueGuobin 创建，是一个基于大语言模型的网络自动化助手，支持通过自然语言管理网络设备、诊断故障和自动化配置，已合入 GNS3 3.1 版本。
:::

# AI 助手

AI 助手（GNS3 Copilot）是 GNS3 3.1 的智能助手功能，通过大语言模型（LLM）提供智能化的网络拓扑管理、故障诊断和自动化配置功能。

**技术架构**：后端基于 LangChain/LangGraph 构建智能工作流，设备配置工具使用 Nornir/Netmiko 实现自动化网络设备管理。

:::note 测试范围说明
目前主要针对未设置 console 登录密码的 Cisco IOS 镜像进行了充分的测试验证。
:::

## 配置 AI 模型接入

**开发测试说明：** 本功能在开发测试验证阶段主要使用 DeepSeek 的模型进行测试验证，原 `deepseek-chat` 现已更名为 `deepseek-v4-flash` 或 `deepseek-v4-pro`。

在项目首页点击右上角的三个点，选择"AI Profile"（AI 助手配置），进入配置页面。

<img style={{ width: '100%' }} alt="AI配置入口" src={useBaseUrl('img/web-ui/zh/ai-config-menu.jpeg')} />

- 在 AI Profile 界面，为用户添加 AI 配置，点击"New Configuration"按钮。

<img style={{ width: '100%' }} alt="新建配置" src={useBaseUrl('img/web-ui/zh/ai-new-config.jpeg')} />
在"Create LLM Model Configuration"页面，选择"Base Models"标签页，按照步骤输入：

1. **Configuration Name** — 配置名称
2. **Select LLM provider** — 选择 LLM 提供商（提供 OpenRouter 和 DeepSeek 两个选项）
3. **Model Name** — 模型名称
   - OpenRouter 支持 x-ai / z-ai / openai / google / anthropic 的快速选择
   - DeepSeek 支持 deepseek-v4-flash / deepseek-v4-pro 的快速选择
4. **API Key** — 输入你的 API Key
5. **Copilot Mode** — AI 助手模式
   - Teaching Assistant（教学助手）
   - Lab Automation Assistant（实验自动化）

:::note
Custom Mode 有更多的配置选项可以定义，适合有一定基础的用户操作，该页面有 field documentation 帮助。
:::

填选后，点击"Create"按钮。

<img style={{ width: '100%' }} alt="创建配置" src={useBaseUrl('img/web-ui/zh/ai-create-config.jpeg')} />

创建完成后，如下图所示。

<img style={{ width: '100%' }} alt="配置完成" src={useBaseUrl('img/web-ui/zh/ai-config-ready.jpeg')} />


## 在项目拓扑中使用 AI 助手

- 在项目拓扑页面，点击左侧的 AI 按钮，打开 AI 助手。在 AI 助手页面的输入框旁边，可以点击选择配置的模型和助手模式。

<img style={{ width: '100%' }} alt="AI助手面板" src={useBaseUrl('img/web-ui/zh/ai-assistant-panel.jpeg')} />

- AI 助手的侧边栏显示历史会话消息。

<img style={{ width: '100%' }} alt="历史会话" src={useBaseUrl('img/web-ui/zh/ai-session-history.jpeg')} />

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

<img style={{ width: '100%' }} alt="设备Tags配置" src={useBaseUrl('img/web-ui/zh/ai-device-tags.png')} />