---
title: AI 助手
功能标签: [参考]
难度: 入门
预计阅读时间: 10 分钟
---

# AI 助手

### 如何获取 AI 助手的 API Key？支持哪些 LLM 提供商？

AI 助手需要您自行提供 LLM 的 API Key：

- **DeepSeek**：在 [platform.deepseek.com](https://platform.deepseek.com) 注册获取，支持 `deepseek-v4-flash` 和 `deepseek-v4-pro` 模型
- **OpenRouter**：在 [openrouter.ai](https://openrouter.ai) 注册获取，可访问 x-ai、OpenAI、Google、Anthropic 等多种模型

在 AI Profile 配置页面中选择提供商并填入 API Key 即可使用。

### 除了 DeepSeek，如何选择和配置其他模型？

目前文档演示主要使用 DeepSeek 模型，但 AI 助手也支持通过 OpenRouter 接入其他模型。

**Base Models 标签页**提供快速选择：
- **DeepSeek**：`deepseek-v4-flash` / `deepseek-v4-pro`
- **OpenRouter**：`x-ai`、`z-ai`、`openai`、`google`、`anthropic` 等

如果想使用快速选择列表之外的模型，可以切换到 **Custom Mode** 标签页自定义配置（如自定义 API 端点、模型名称、温度参数等）。

:::warning
不建议使用本地部署的小参数模型。AI 助手需要较大的上下文窗口来容纳拓扑信息、会话历史以及工具调用记录，小参数模型的上下文窗口过小，会导致功能异常或响应质量严重下降。
:::

### 我的 API Key 在 GNS3 中存储安全吗？

安全。API Key 受到以下保护：

1. 使用 Python `cryptography.fernet` 模块（AES-128-CBC 算法）加密存储
2. 加密后存入数据库，所有 API 查询接口返回的 `api_key` 字段均为 `null`
3. 仅在 AI 助手实际调用 LLM 时，系统内部才用密钥解密使用

### AI 助手是否需要互联网连接？

**需要。** AI 助手需要连接到您配置的 LLM 提供商 API 端点才能工作。如果在内网环境中，需要确保可以访问配置的 LLM API 地址，或部署本地 LLM 服务。

### AI 助手支持哪些设备类型？

目前经过测试验证的设备类型如下：

| 设备类型 | device_type 标签 | 说明 |
|---------|-----------------|------|
| **Cisco IOS** | `cisco_ios_telnet` | 配置命令生成最为成熟流畅 |
| **Huawei CE** | `gns3_huawei_telnet_ce` | 需要准确配置 skills |
| **锐捷 Ruijie** | `gns3_ruijie_telnet` | 需要准确配置 skills |
| **VPCS** | `gns3_vpcs_telnet` | 已内置 skills |

:::note
设备需要配置正确的 `device_type` 标签，AI 助手通过标签区分设备类型并调用相应的配置技能。更多支持的 Telnet 设备类型请参考 [GNS3 Server - Netmiko Supported Devices](https://github.com/GNS3/gns3-server/blob/ca2004e715cd1f9b860b28bc371fd814b554a93d/docs/gns3-copilot/netmiko_devices.md)。
:::

目前主要针对未设置 console 登录密码的 Cisco IOS 镜像进行了充分的测试验证。

### Teaching Assistant（技术指导）和 Lab Automation Assistant（自动化）有什么区别？

| 模式 | 工具范围 | 适用场景 |
|------|---------|---------|
| **Teaching Assistant** | 诊断只读 + 数据包分析 + 节点管理 | 教学演示、故障排查指导 |
| **Lab Automation Assistant** | 全部工具（含配置变更） | 实验自动化、设备批量配置 |

Teaching Assistant 只能执行只读命令（查看配置、诊断），适合学习和故障排查。Lab Automation Assistant 可以执行配置变更命令，适合自动化部署。
