---
title: 3.1 新特性概览
功能标签: [新特性]
难度: 入门
预计阅读时间: 5 分钟
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 3.1 新特性概览

GNS3 3.1 版本的核心特性是全面 Web 化，所有操作（控制台、VNC、Wireshark）都可在浏览器中完成，同时引入 AI 辅助和故障注入功能，大幅提升用户体验和网络仿真能力。

Web UI 项目从 Angular 14 跨代升级到 Angular 21，得益于 AI 辅助完成了大量代码迁移工作。

## 1. Web Console

- **功能**：在浏览器中直接访问节点控制台，无需外部终端软件
- **实现**：基于 xterm.js 的嵌入式终端
- **特点**：支持多标签、拖拽。

<img style={{ width: '100%' }} alt="Web Console" src={useBaseUrl('img/web-ui/zh/feature-console.jpeg')} />

## 2. Web VNC

- **功能**：在浏览器中通过 VNC 协议访问图形界面节点
- **实现**：前端基于 noVNC
- **用途**：访问有图形界面的虚拟机（如 Linux Desktop）

<img style={{ width: '100%' }} alt="Web VNC" src={useBaseUrl('img/web-ui/zh/feature-vnc.jpeg')} />

## 3. Web Wireshark

- **功能**：在浏览器中直接进行网络抓包分析
- **实现**：前端使用 xpra-html5 client
- **特点**：支持内联窗口显示、多链路同时抓包

<img style={{ width: '100%' }} alt="Web Wireshark" src={useBaseUrl('img/web-ui/zh/feature-wireshark.jpeg')} />

## 4. AI 助手

- **功能**：基于大语言模型的智能助手
- **实现**：基于 LangChain/LangGraph 构建，使用 Nornir/Netmiko 进行设备配置
- **能力**：自然语言交互设计拓扑、配置建议和故障诊断、自动化任务辅助，实施抓包数据分析。


<img style={{ width: '100%' }} alt="AI Assistant" src={useBaseUrl('img/web-ui/zh/feature-ai.jpeg')} />

## 5. 故障注入

- **功能**：使用AI结合拓扑中设备的实际配置，调用GNS3-Skills仓库预定义的故障集，模拟网络故障环境
- **实现**：通过配置命令注入故障
- **用途**：故障恢复演练、协议学习等。

<img style={{ width: '100%' }} alt="故障注入" src={useBaseUrl('img/web-ui/zh/feature-fault-inject.jpeg')} />

## 6. GNS3 Skills 仓库

- **功能**：在线 AI 技能包仓库，方便更新。
- **内容**：提示词和技能定义
- **仓库**：位于 GitHub [gns3-skills](https://github.com/gns3/gns3-skills)
- **用途**：扩展 AI 助手能力。

