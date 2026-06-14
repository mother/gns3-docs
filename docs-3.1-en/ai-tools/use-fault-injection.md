---
title: How to inject faults for testing
---

import Mermaid from '@theme/Mermaid';


# How to inject faults for testing

Fault injection is a feature of the GNS3 AI Assistant. It simulates network problems in your topology. This helps you practice your network troubleshooting skills. The feature uses AI to automatically analyze your network topology, choose the right fault type, and inject it into the project.

## Steps to Use

1. On the project topology page, click the fault injection button in the left toolbar (shown in the image below).

   ![Fault Injection Button in Toolbar](/img/web-ui/zh/fault-injection-button.jpeg)

2. In the "Fault Injection" dialog, click the "Inject Fault" button.

   ![Fault Injection Dialog](/img/web-ui/zh/fault-injection-dialog.jpeg)

3. Choose how many faults to inject (you can pick 1-3 faults or a random number). Then click the "Confirm & Inject" button.

   ![Choose Fault Count](/img/web-ui/zh/fault-injection-count.jpeg)

4. Wait for the fault injection to finish. The screen shows real-time progress.

   ![Fault Injection in Progress](/img/web-ui/zh/fault-injection-progress.jpeg)

5. After the fault injection is done, you can see the results.

   ![Fault Injection Complete](/img/web-ui/zh/fault-injection-done.jpeg)

6. Check the AI Assistant for the detailed steps of the fault injection. This can help you if you are not sure about the cause of the problem.

   ![View Details in AI Assistant](/img/web-ui/zh/fault-injection-details.jpeg)

## Architecture Overview

### Core Flow

<Mermaid value={`flowchart TB
    subgraph S1["① API Trigger & Mode Switch"]
        A["POST /chat/inject\nUser requests fault injection"] --> B["Verify project is opened"]
        B --> C["Set copilot_mode =\ntroubleshooting_injection"]
        C --> D["Start Agent\nwith fault injection tool set"]
    end

    subgraph S2["② Topology Analysis & Fault Selection"]
        D --> E["GNS3TopologyTool\nget topology info"]
        E --> F["ExecuteMultipleDeviceCommands\nget device configs"]
        F --> G["InjectionSkillsTool\nquery available fault types"]
        G --> H{"Injection Skills Repository\ngns3/gns3-skills"}
        H --> I["Return matching fault definitions\nwith config injection commands"]
    end

    subgraph S3["③ Fault Injection"]
        I --> J["Choose injection method"]
        J --> K["ExecuteMultipleDeviceConfigCommands\ninject config changes"]
        J --> L["GNS3PacketFilterTool\ninject link-layer faults"]
    end

    subgraph S4["④ Result Confirmation"]
        K --> M["Verify fault is active"]
        L --> M
        M --> N["Document fault details\nincluding restore commands"]
    end
`} />

### Tool Overview

| Tool | Source File | Purpose | Available Modes |
|---|---|---|---|
| `InjectionSkillsTool` | `registry.py` (skills module) | Query protocol-level fault definitions (config change commands) | troubleshooting_injection |
| `GNS3PacketFilterTool` | `gns3_packet_filter.py` | Link-layer fault injection (delay, loss, corruption, BPF) | troubleshooting_injection |
| `ExecuteMultipleDeviceConfigCommands` | `config_tools_nornir.py` | Batch execute device config changes | troubleshooting_injection |
| `ExecuteMultipleDeviceCommands` | `display_tools_nornir.py` | Read device configuration (read-only) | troubleshooting_injection |
| `GNS3TopologyTool` | `gns3_client` | Get project topology info | troubleshooting_injection |

### Fault Injection API

| Endpoint | Function |
|---|---|
| `POST /v3/projects/{pid}/chat/inject` | Trigger fault injection, set troubleshooting_injection mode and start Agent |

**Prerequisite**: Project must be in `opened` state, otherwise returns 403.

### GNS3PacketFilterTool Link Filters

Simulates network impairment at the link layer by applying delay, packet loss, corruption, or dropping matching traffic to disrupt link quality. The `bpf` filter matches packets using BPF expressions and drops them, enabling precise link interference.

| Filter Type | Function | Parameters |
|---|---|---|
| `delay` | Latency + jitter | `[latency(0-32767), jitter(0-32767)]` |
| `packet_loss` | Packet loss rate | `[chance(0-100)]` |
| `corrupt` | Packet corruption rate | `[chance(0-100)]` |
| `frequency_drop` | Drop every Nth packet | `[frequency(-1~32767)]` |
| `bpf` | Berkeley Packet Filter (standard BPF syntax) | Text expression, supports protocol (arp/icmp/tcp), port (port 80), host (host 10.0.0.1), net (net 192.168.0.0/16), logical combos (and/or/not), same as tcpdump syntax |

### Agent Workflow (LangGraph)

<Mermaid value={`sequenceDiagram
    participant U as User
    participant API as POST /chat/inject
    participant LLM as LLM Node
    participant Topo as GNS3TopologyTool
    participant DC as ExecuteMultipleDeviceCommands
    participant CC as ExecuteMultipleDeviceConfigCommands
    participant Skill as InjectionSkillsTool
    participant Filter as GNS3PacketFilterTool

    U->>API: Inject an OSPF fault
    API->>LLM: set mode=troubleshooting_injection
    LLM->>Topo: get topology
    Topo-->>LLM: topology info
    LLM->>DC: read device configs
    DC-->>LLM: running configs
    LLM->>Skill: list context=["ospf"]
    Skill-->>LLM: matching fault types
    LLM->>Skill: get device_type=injection_ospf
    Skill-->>LLM: fault definition + injection commands
    LLM->>CC: execute config injection
    CC-->>LLM: injection result
    LLM->>Filter: set filters={delay:[200,50]}
    Filter-->>LLM: link delay injected successfully
    LLM-->>U: Fault injected, restore commands included
`} />

### Key Design Points

1. **Dedicated API Endpoint** — `POST /chat/inject` is specifically for fault injection, automatically switches to `troubleshooting_injection` mode
2. **LLM-driven Fault Selection** — LLM analyzes topology, queries matching protocol faults via `InjectionSkillsTool`, no hardcoded scenarios
3. **Dual-layer Injection** — Device-level config changes + link-level network impairment for complete troubleshooting coverage
4. **Reversible Faults** — Each injection includes recovery commands; link filters can be cleared with `action: clear`
5. **Safety First** — BPF syntax pre-validated via tshark; config commands restricted by `command_filter`
6. **Context Filtering** — `InjectionSkillsTool` requires `context` parameter, returns only faults matching the topology protocol

## Feature Contributor

Fault Injection feature was developed and contributed by [YueGuobin](https://github.com/yueguobin).

- **LinkedIn:** [Guobin Yue](https://www.linkedin.com/in/guobin-yue/)

## License

This document is licensed under [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/) (Attribution-NonCommercial-NoDerivatives).
Author: YueGuobin
