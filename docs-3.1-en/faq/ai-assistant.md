---
title: AI Assistant
featureTag: [Reference]
difficulty: Beginner
readingTime: 10 minutes
---

# AI Assistant

### How to get an API Key for AI Assistant? Which LLM providers are supported?

You need to provide your own LLM API Key:

- **DeepSeek**: Register at [platform.deepseek.com](https://platform.deepseek.com), supports `deepseek-v4-flash` and `deepseek-v4-pro` models
- **OpenRouter**: Register at [openrouter.ai](https://openrouter.ai), supports x-ai, OpenAI, Google, Anthropic and more

Configure the provider and API Key in the AI Profile settings page.

### How to choose and configure models other than DeepSeek?

The documentation primarily demonstrates using DeepSeek, but the AI Assistant also supports other models through OpenRouter.

**Base Models tab** quick-select:
- **DeepSeek**: `deepseek-v4-flash` / `deepseek-v4-pro`
- **OpenRouter**: `x-ai`, `z-ai`, `openai`, `google`, `anthropic` and more

To use models not listed in the quick-select, switch to the **Custom Mode** tab for custom configuration (custom API endpoints, model names, temperature, etc.).

:::warning
Local small-parameter models are not recommended. The AI Assistant requires a large context window to accommodate topology information, conversation history, and tool call records. Small-parameter models have insufficient context windows, which may cause functional issues or severely degraded response quality.
:::

### Is my API Key stored securely in GNS3?

Yes. API Keys are protected by:

1. Encryption using Python's `cryptography.fernet` module (AES-128-CBC algorithm)
2. Stored encrypted in the database; all API query endpoints return `api_key: null`
3. Only decrypted internally when the AI Assistant actually calls the LLM

### Does AI Assistant require internet access?

**Yes.** The AI Assistant needs to connect to the configured LLM provider's API endpoint. In air-gapped environments, ensure access to the LLM API is available or deploy a local LLM service.

### What device types does AI Assistant support?

The following device types have been tested and verified:

| Device Type | `device_type` tag | Notes |
|------------|-------------------|-------|
| **Cisco IOS** | `cisco_ios_telnet` | Configuration command generation is most mature and smooth |
| **Huawei CE** | `gns3_huawei_telnet_ce` | Requires accurate skills configuration |
| **Ruijie** | `gns3_ruijie_telnet` | Requires accurate skills configuration |
| **VPCS** | `gns3_vpcs_telnet` | Skills built-in |

:::note
Devices must have the correct `device_type` tag configured. The AI Assistant uses this tag to identify device types and call appropriate configuration skills. For more supported Telnet device types, refer to [GNS3 Server - Netmiko Supported Devices](https://github.com/GNS3/gns3-server/blob/ca2004e715cd1f9b860b28bc371fd814b554a93d/docs/gns3-copilot/netmiko_devices.md).
:::

Currently, testing has primarily focused on Cisco IOS images without a console login password set.

### What's the difference between Teaching Assistant and Lab Automation Assistant modes?

| Mode | Tool Scope | Use Case |
|------|-----------|----------|
| **Teaching Assistant** | Read-only diagnostics + packet analysis + node management | Teaching, fault diagnosis guidance |
| **Lab Automation Assistant** | All tools (including configuration changes) | Lab automation, batch device configuration |

Teaching Assistant only executes read-only commands (view config, diagnostics), suitable for learning and troubleshooting. Lab Automation Assistant can execute configuration changes, suitable for automated deployment.
