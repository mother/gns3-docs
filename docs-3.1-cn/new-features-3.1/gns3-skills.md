---
title: GNS3 Skills 仓库
功能标签: [新特性]
难度: 入门
预计阅读时间: 5 分钟
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# GNS3 Skills 仓库

GNS3 Skills 是一个网络故障排查技能库仓库，用于扩展 AI 助手能力。包含 50 个 YAML 技能文件、815 个故障注入场景，覆盖 60+ 种网络协议和技术（从 PPP 到 SRv6、EVPN），集成到 GNS3 网络仿真环境中，提供自动化故障诊断和学习辅助。

## 目录结构

- `injection/` — 50 个故障注入技能（OSPF、BGP、VXLAN、EVPN 等）
- `device/` — 设备接口定义（如 VPCS 虚拟 PC 命令）
- `packet_analysis/` — 数据包分析规则（tshark 字段提取）
- `prompts/` — LLM 系统提示词（故障排查、教学助理、实验自动化）

## 技术规格

- 每个故障包含：严重级别、难度等级、症状、排查提示
- CI/CD 验证：YAML 语法、技能格式、tshark 字段有效性
- 本地预提交钩子支持

## 仓库地址

[https://github.com/yueguobin/GNS3-Skills](https://github.com/yueguobin/GNS3-Skills)

用于网络工程师的实验、故障排查训练和自动化测试场景。
