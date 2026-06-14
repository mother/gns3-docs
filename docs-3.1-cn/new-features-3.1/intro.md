---
title: 3.1 新特性概览
功能标签: [新特性]
难度: 入门
预计阅读时间: 5 分钟
---


# 3.1 新特性概览

GNS3 3.1 版本的核心特性是全面 Web 化，所有操作（控制台、VNC、Wireshark）都可在浏览器中完成，同时引入 AI 辅助和故障注入功能，大幅提升用户体验和网络仿真能力。

Web UI 项目从 Angular 14 跨代升级到 Angular 21，得益于 AI 辅助完成了大量代码迁移工作。

## 🌐 Web 功能

### [如何使用 Web 控制台](../web-ui/use-web-console) 🆕

在浏览器中直接访问节点控制台，无需外部终端软件。基于 xterm.js 的嵌入式终端，支持多标签、拖拽。

![Web Console](/img/web-ui/zh/feature-console.jpeg)

### [如何使用 Web VNC](../web-ui/use-web-vnc) 🆕

在浏览器中通过 VNC 协议访问图形界面节点，前端基于 noVNC，用于访问有图形界面的虚拟机（如 Linux Desktop）。

![Web VNC](/img/web-ui/zh/feature-vnc.jpeg)

### [如何使用 Web Wireshark](../web-ui/use-web-wireshark) 🆕

在浏览器中直接进行网络抓包分析，前端使用 xpra-html5 client，支持内联窗口显示、多链路同时抓包。

![Web Wireshark](/img/web-ui/zh/feature-wireshark.jpeg)

## 🤖 AI 辅助工具

### [如何使用 AI 助手](../ai-tools/use-ai-assistant) 🆕

基于大语言模型的智能助手，基于 LangChain/LangGraph 构建，使用 Nornir/Netmiko 进行设备配置。支持自然语言交互设计拓扑、配置建议和故障诊断、自动化任务辅助，实施抓包数据分析。

![AI Assistant](/img/web-ui/zh/feature-ai.jpeg)

### [如何使用 MCP 服务](../ai-tools/use-mcp-service) 🆕

提供标准 MCP（Model Context Protocol）接口，允许 Claude Code、Claude Desktop 等外部 AI 客户端通过 SSE 传输协议直接管理 GNS3 项目、节点、链路、模板和计算节点。

### [如何使用 AI 技能包](../ai-tools/use-ai-skills) 🆕

在线 AI 技能包仓库，方便更新。位于 GitHub [gns3-skills](https://github.com/gns3/gns3-skills)，用于扩展 AI 助手能力。

### [如何使用故障注入](../ai-tools/use-fault-injection) 🆕

使用 AI 结合拓扑中设备的实际配置，调用 GNS3-Skills 仓库预定义的故障集，模拟网络故障环境。通过配置命令注入故障，用于故障恢复演练、协议学习等。

![故障注入](/img/web-ui/zh/feature-fault-inject.jpeg)

---

:::tip 快速导航

详细的配置和使用步骤，请点击上方各个功能的链接查看完整文档。

:::

