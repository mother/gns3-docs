---
title: 如何进行故障注入测试
功能标签: [新特性]
难度: 入门
预计阅读时间: 5 分钟
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 如何进行故障注入测试

故障注入是 GNS3 AI Assistant 的一项功能，用于在网络拓扑中模拟网络故障，帮助用户练习网络故障排查技能。该功能通过 AI 自动分析您的网络拓扑，选择合适的故障类型并注入到项目中。

## 使用步骤

1. 在项目拓扑页面，点击左侧工具栏的故障注入按钮（如下图所示位置）。

   <img style={{ width: '100%' }} alt="工具栏故障注入按钮" src={useBaseUrl('img/web-ui/zh/fault-injection-button.jpeg')} />

2. 在"Fault Injection"对话框中，点击"Inject Fault"按钮。

   <img style={{ width: '100%' }} alt="故障注入对话框" src={useBaseUrl('img/web-ui/zh/fault-injection-dialog.jpeg')} />

3. 选择要注入的故障数量（可选 1-3 个或随机数量），然后点击"Confirm & Inject"按钮。

   <img style={{ width: '100%' }} alt="选择故障数量" src={useBaseUrl('img/web-ui/zh/fault-injection-count.jpeg')} />

4. 等待故障注入完成，界面会显示实时执行进度。

   <img style={{ width: '100%' }} alt="故障注入进行中" src={useBaseUrl('img/web-ui/zh/fault-injection-progress.jpeg')} />

5. 故障注入完成后，可以查看注入结果。

   <img style={{ width: '100%' }} alt="故障注入完成" src={useBaseUrl('img/web-ui/zh/fault-injection-done.jpeg')} />

6. 在 AI 助手界面查看故障注入的详细步骤，以便在不确定故障原因时获取更多信息。

   <img style={{ width: '100%' }} alt="AI助手查看详情" src={useBaseUrl('img/web-ui/zh/fault-injection-details.jpeg')} />

## 架构概览

### 核心流程

<img style={{ width: '600px', maxWidth: '100%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} alt="故障注入核心流程" src={useBaseUrl('img/web-ui/zh/fault-injection-core-flow-cn.svg')} />

### 工具总览

| 工具 | 源文件 | 作用 | 可用模式 |
|---|---|---|---|
| `InjectionSkillsTool` | `registry.py`（skills 模块） | 查询协议级故障定义（配置变更命令） | troubleshooting_injection |
| `GNS3PacketFilterTool` | `gns3_packet_filter.py` | 链路层故障注入（延迟、丢包、损坏、BPF） | troubleshooting_injection |
| `ExecuteMultipleDeviceConfigCommands` | `config_tools_nornir.py` | 批量执行设备配置变更 | troubleshooting_injection |
| `ExecuteMultipleDeviceCommands` | `display_tools_nornir.py` | 读取设备配置（只读） | troubleshooting_injection |
| `GNS3TopologyTool` | `gns3_client` | 获取项目拓扑信息 | troubleshooting_injection |

### 故障注入 API

| 端点 | 功能 |
|---|---|
| `POST /v3/projects/{pid}/chat/inject` | 触发故障注入，设置 `troubleshooting_injection` 模式后启动 Agent |

**前置条件**：项目必须为 `opened` 状态，否则返回 403。

### GNS3PacketFilterTool 链路滤波器

用于在链路层模拟网络损伤，通过对指定流量施加延迟、丢包、损坏或丢弃来破坏链路通信质量。其中 `bpf` 过滤器根据 BPF 表达式匹配报文并丢弃，实现精准的链路干扰。

| 滤波器类型 | 功能 | 参数 |
|---|---|---|
| `delay` | 延迟 + 抖动 | `[latency(0-32767), jitter(0-32767)]` |
| `packet_loss` | 丢包率 | `[chance(0-100)]` |
| `corrupt` | 包损坏率 | `[chance(0-100)]` |
| `frequency_drop` | 每 N 包丢弃一个 | `[frequency(-1~32767)]` |
| `bpf` | Berkeley Packet Filter（标准 BPF 语法） | 表达式文本，支持协议（arp/icmp/tcp）、端口（port 80）、主机（host 10.0.0.1）、网段（net 192.168.0.0/16）、逻辑组合（and/or/not）等，与 tcpdump 语法一致 |

### Agent 工作流（LangGraph）

<img style={{ width: '100%' }} alt="故障注入 Agent 工作流" src={useBaseUrl('img/web-ui/zh/fault-injection-agent-workflow-cn.svg')} />

### 关键设计要点

1. **专用 API 入口** — `POST /chat/inject` 端点专门用于故障注入，自动切换为 `troubleshooting_injection` 模式
2. **LLM 主导故障选型** — LLM 分析拓扑后通过 `InjectionSkillsTool` 查询匹配协议栈的故障，不硬编码故障场景
3. **双层注入** — 设备级配置变更 + 链路级网络损伤，覆盖完整排错场景
4. **故障可逆** — 每条注入均附带恢复命令，链路滤波器可通过 `action: clear` 一键清除
5. **安全前置** — BPF 语法通过 tshark 预验证，配置命令受 `command_filter` 限制
6. **上下文过滤** — `InjectionSkillsTool` 强制要求传入 `context` 参数，只返回与拓扑协议匹配的故障

## License

本文档采用 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.zh) 许可协议。
作者: 岳国宾
