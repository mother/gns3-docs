---
title: 如何使用 AI 实时数据包分析
功能标签: [新特性]
难度: 入门
预计阅读时间: 5 分钟
---

import Mermaid from '@theme/Mermaid';


# 如何使用 AI 实时数据包分析

## 架构概览

AI 实时数据包分析功能由 GNS3 AI Assistant 驱动，LLM 自行构造 tshark 参数完成分析，框架不做协议硬编码，只做安全验证。

## 使用方法

1. 在项目拓扑页面，右键点击需要抓包的链路，选择"Start capture"开启数据包捕获。也可以选择"Start Web Wireshark"直接在浏览器中查看实时捕获数据。
2. 打开 AI Assistant 窗口，在输入框中描述分析需求，例如："r2-r3 之间的 OSPF 协议分析一下"。
3. 等待 AI Assistant 自动分析并返回结果。

![AI 数据包分析使用示例](/img/web-ui/zh/ai-packet-analysis-usage.jpeg)

## 核心流程

<Mermaid value={`flowchart TB
    subgraph S1["① 分析触发 & 知识查询"]
        A["用户提问\n'例如：分析 OSPF 邻居状态'"] --> B["LLM 调用\nPacketAnalysisSkillsTool"]
        B --> C{"协议知识仓库\ngns3/gns3-skills"}
        C --> D["返回协议定义\nfields/base_filter/check_rules"]
        B --> E["LLM 调用\nsearch_fields 模式"]
        E --> F["tshark -G fields\n字段名搜索"]
        F --> G["返回有效字段名"]
    end

    subgraph S2["② 实时抓包 & 分析"]
        D --> H["LLM 构建 tshark_args"]
        G --> H
        H --> I["PacketAnalysisTool\n抓包分析模式"]
        I --> J["GET /capture/file\n下载实时 PCAP"]
        J --> K["预验证 -e 字段名"]
        K --> L["tshark -r pcap\n运行分析"]
        L --> M["返回分析结果"]
    end
`} />

## 工具总览

| 工具 | 源文件 | 作用 | 可用模式 |
|---|---|---|---|
| `PacketAnalysisTool` | `packet_analysis_tool.py` | 下载实时 PCAP + tshark 分析 | teaching / lab_automation |
| `PacketAnalysisSkillsTool` | `registry.py`（skills 模块） | 查询协议级分析知识（字段、过滤规则） | teaching / lab_automation |

## Agent 工作流（LangGraph）

<Mermaid value={`sequenceDiagram
    participant U as User
    participant LLM as LLM Node
    participant Skills as PacketAnalysisSkillsTool
    participant Pcap as PacketAnalysisTool

    U->>LLM: OSPF 邻居无法建立，分析一下
    LLM->>Skills: get protocol=ospf
    Skills-->>LLM: OSPF 字段、过滤定义
    LLM->>Pcap: search_fields query=ospf.hello
    Pcap-->>LLM: 有效的 -e 字段名
    LLM->>Pcap: download PCAP + tshark_args
    Pcap-->>LLM: tshark 输出结果
    LLM->>LLM: 分析发现 Dead interval 不匹配
    LLM-->>U: 检测到 OSPF Dead interval 不匹配
`} />

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

## 功能贡献者

AI 实时数据包分析功能由 [YueGuobin](https://github.com/yueguobin) 开发和贡献。

- **知乎：** [蛋炒饭](https://www.zhihu.com/people/qin-lao-de-cai-niao)

## License

本文档采用 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh) 许可协议（署名-非商业性使用-禁止演绎）。
作者: 岳国宾
