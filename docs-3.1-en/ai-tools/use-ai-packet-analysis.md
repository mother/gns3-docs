---
title: How to use AI real-time packet analysis
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# How to use AI real-time packet analysis

## Architecture Overview

AI real-time packet analysis is powered by the GNS3 AI Assistant. The LLM constructs tshark parameters autonomously — the framework does not hardcode protocols, only performs safety validation.

## How to Use

1. In the project topology page, right-click the link you want to capture and select "Start capture" to begin packet capture. You can also select "Start Web Wireshark" to view live capture data directly in your browser.
2. Open the AI Assistant window and describe your analysis requirement, for example: "Analyze OSPF protocol between r2 and r3".
3. Wait for the AI Assistant to analyze and return the results.

<img style={{ width: '100%' }} alt="AI packet analysis usage example" src={useBaseUrl('img/web-ui/zh/ai-packet-analysis-usage-en.jpeg')} />

## Core Flow

<img style={{ width: '600px', maxWidth: '100%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} alt="Core Flow" src={useBaseUrl('img/web-ui/zh/ai-packet-core-flow-en.svg')} />

## Tool Overview

| Tool | Source File | Purpose | Available Modes |
|---|---|---|---|
| `PacketAnalysisTool` | `packet_analysis_tool.py` | Download live PCAP + tshark analysis | teaching / lab_automation |
| `PacketAnalysisSkillsTool` | `registry.py` (skills module) | Query protocol-level analysis knowledge (fields, filters) | teaching / lab_automation |

## Agent Workflow (LangGraph)

<img style={{ width: '100%' }} alt="Agent Workflow" src={useBaseUrl('img/web-ui/zh/ai-packet-agent-workflow-en.svg')} />

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

## License

This document is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
Author: YueGuobin
