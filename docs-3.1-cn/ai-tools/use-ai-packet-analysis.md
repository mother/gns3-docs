---
title: 如何使用 AI 实时数据包分析
功能标签: [新特性]
难度: 入门
预计阅读时间: 5 分钟
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 如何使用 AI 实时数据包分析

## 架构概览

AI 实时数据包分析功能由 GNS3 AI Assistant 驱动，LLM 自行构造 tshark 参数完成分析，框架不做协议硬编码，只做安全验证。

## 使用方法

1. 在项目拓扑页面，右键点击需要抓包的链路，选择"Start capture"开启数据包捕获。也可以选择"Start Web Wireshark"直接在浏览器中查看实时捕获数据。
2. 打开 AI Assistant 窗口，在输入框中描述分析需求，例如："r2-r3 之间的 OSPF 协议分析一下"。
3. 等待 AI Assistant 自动分析并返回结果。

<img style={{ width: '100%' }} alt="AI 数据包分析使用示例" src={useBaseUrl('img/web-ui/zh/ai-packet-analysis-usage.jpeg')} />

## 核心流程

<img style={{ width: '480px', maxWidth: '100%' }} alt="核心流程图" src={useBaseUrl('img/web-ui/zh/ai-packet-core-flow-cn.jpeg')} />

## 工具总览

| 工具 | 源文件 | 作用 | 可用模式 |
|---|---|---|---|
| `PacketAnalysisTool` | `packet_analysis_tool.py` | 下载实时 PCAP + tshark 分析 | teaching / lab_automation |
| `PacketAnalysisSkillsTool` | `registry.py`（skills 模块） | 查询协议级分析知识（字段、过滤规则） | teaching / lab_automation |

## Agent 工作流（LangGraph）

<img style={{ width: '889px', maxWidth: '100%' }} alt="Agent 工作流" src={useBaseUrl('img/web-ui/zh/ai-packet-agent-workflow-cn.jpeg')} />

## 服务端 Capture API

| 端点 | 功能 |
|---|---|
| `POST /v3/projects/{pid}/links/{lid}/capture/start` | 启动链路上的数据包捕获 |
| `POST /v3/projects/{pid}/links/{lid}/capture/stop` | 停止捕获 |
| `GET /v3/projects/{pid}/links/{lid}/capture/file` | 下载 PCAP 文件（捕获进行中也可下载） |
| `GET /v3/projects/{pid}/links/{lid}/capture/stream` | 流式传输 PCAP 数据 |
| `WS /v3/projects/{pid}/links/{lid}/capture/web-wireshark` | Web Wireshark WebSocket 代理 |

## 关键设计要点

1. **LLM 主导分析** — LLM 自行构造 tshark 参数，框架不做协议硬编码，只做安全验证
2. **实时 PCAP** — 捕获运行时即可下载分析，无需停止抓包
3. **双重知识源** — 外部仓库提供协议预定义知识，本地 tshark field registry 提供精确字段名
4. **安全前置** — tshark 字段名预验证，避免无效字段导致执行失败

## License

本文档采用 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.zh) 许可协议。
作者: 岳国宾
