---
title: AI Assistant
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::tip Project Origin

GNS3 AI Assistant (GNS3 Copilot) started as a separate project. See [github.com/yueguobin/gns3-copilot](https://github.com/yueguobin/gns3-copilot) for details. It was created by community developer YueGuobin. It is a network automation assistant based on large language models. It supports managing network devices, diagnosing faults, and automating configuration using natural language. It has been included in GNS3 3.1.
:::

# AI Assistant

The AI Assistant (GNS3 Copilot) is a smart assistant feature in GNS3 3.1. It uses large language models (LLMs) to provide intelligent network topology management, fault diagnosis, and automated configuration.

**Technical Architecture**: The backend is built with LangChain/LangGraph for intelligent workflow orchestration, and device configuration tools use Nornir/Netmiko for automated network device management.

## Configure AI Model Access

On the project home page, click the GNS3 Logo in the top-left corner. Select "Management" to go to the management page.

<img style={{ width: '100%' }} alt="Management Page Entry" src={useBaseUrl('img/web-ui/zh/ai-config-menu.jpeg')} />

- On the Users page, click the brain icon on the right side of the admin user, as shown below.

<img style={{ width: '100%' }} alt="Admin Brain Icon" src={useBaseUrl('img/web-ui/zh/ai-admin-brain.jpeg')} />

- In the AI Profile screen, add an AI configuration for the admin user. Click the "New Configuration" button.

<img style={{ width: '100%' }} alt="New Configuration" src={useBaseUrl('img/web-ui/zh/ai-new-config.jpeg')} />

- On the "Create LLM Model Configuration" page, select the "Base Models" tab. Follow the steps and enter:

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
