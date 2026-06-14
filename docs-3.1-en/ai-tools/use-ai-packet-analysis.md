---
title: How to use AI real-time packet analysis
---

import Mermaid from '@theme/Mermaid';


# How to use AI real-time packet analysis

## Architecture Overview

AI real-time packet analysis is powered by the GNS3 AI Assistant. The LLM constructs tshark parameters autonomously — the framework does not hardcode protocols, only performs safety validation.

## How to Use

1. In the project topology page, right-click the link you want to capture and select "Start capture" to begin packet capture. You can also select "Start Web Wireshark" to view live capture data directly in your browser.
2. Open the AI Assistant window and describe your analysis requirement, for example: "Analyze OSPF protocol between r2 and r3".
3. Wait for the AI Assistant to analyze and return the results.

![AI packet analysis usage example](/img/web-ui/zh/ai-packet-analysis-usage-en.jpeg)

## Core Flow

<Mermaid value={`flowchart TB
    subgraph S1["① Analysis Trigger & Knowledge Query"]
        A["User asks\n'e.g. Analyze OSPF neighbor state'"] --> B["LLM calls\nPacketAnalysisSkillsTool"]
        B --> C{"Protocol Knowledge Repository\ngns3/gns3-skills"}
        C --> D["Returns protocol definition\nfields/base_filter/check_rules"]
        B --> E["LLM calls\nsearch_fields mode"]
        E --> F["tshark -G fields\nfield name search"]
        F --> G["Returns valid field names"]
    end

    subgraph S2["② Live Capture & Analysis"]
        D --> H["LLM constructs tshark_args"]
        G --> H
        H --> I["PacketAnalysisTool\ncapture analysis mode"]
        I --> J["GET /capture/file\ndownload live PCAP"]
        J --> K["Pre-validate -e field names"]
        K --> L["tshark -r pcap\nrun analysis"]
        L --> M["Return analysis results"]
    end
`} />

## Tool Overview

| Tool | Source File | Purpose | Available Modes |
|---|---|---|---|
| `PacketAnalysisTool` | `packet_analysis_tool.py` | Download live PCAP + tshark analysis | teaching / lab_automation |
| `PacketAnalysisSkillsTool` | `registry.py` (skills module) | Query protocol-level analysis knowledge (fields, filters) | teaching / lab_automation |

## Agent Workflow (LangGraph)

<Mermaid value={`sequenceDiagram
    participant U as User
    participant LLM as LLM Node
    participant Skills as PacketAnalysisSkillsTool
    participant Pcap as PacketAnalysisTool

    U->>LLM: OSPF neighbors can't establish, analyze
    LLM->>Skills: get protocol=ospf
    Skills-->>LLM: OSPF fields, filter definitions
    LLM->>Pcap: search_fields query=ospf.hello
    Pcap-->>LLM: valid -e field names
    LLM->>Pcap: download PCAP + tshark_args
    Pcap-->>LLM: tshark output results
    LLM->>LLM: analysis reveals Dead interval mismatch
    LLM-->>U: OSPF Dead interval mismatch detected
`} />

## Server Capture API

| Endpoint | Function |
|---|---|
| `POST /v3/projects/{pid}/links/{lid}/capture/start` | Start packet capture on a link |
| `POST /v3/projects/{pid}/links/{lid}/capture/stop` | Stop packet capture |
| `GET /v3/projects/{pid}/links/{lid}/capture/file` | Download PCAP file (available even while capture is active) |
| `GET /v3/projects/{pid}/links/{lid}/capture/stream` | Stream PCAP data |
| `WS /v3/projects/{pid}/links/{lid}/capture/web-wireshark` | Web Wireshark WebSocket proxy |

## Key Design Points

1. **LLM-driven Analysis** — The LLM constructs tshark parameters itself; the framework does not hardcode protocol logic, only performs safety validation
2. **Live PCAP** — Captures can be downloaded and analyzed while running, no need to stop capturing
3. **Dual Knowledge Sources** — External repository provides protocol-specific knowledge; local tshark field registry provides exact field names
4. **Safety First** — Pre-validation of tshark field names prevents execution failures from invalid fields

## Feature Contributor

AI Real-time Packet Analysis feature was developed and contributed by [YueGuobin](https://github.com/yueguobin).

- **LinkedIn:** [Guobin Yue](https://www.linkedin.com/in/guobin-yue/)

## License

This document is licensed under [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/) (Attribution-NonCommercial-NoDerivatives).
Author: YueGuobin
