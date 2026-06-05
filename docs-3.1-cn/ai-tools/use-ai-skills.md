---
title: 如何使用 AI Skills
功能标签: [新特性]
难度: 入门
预计阅读时间: 5 分钟
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 如何使用 AI Skills

GNS3-Skills 是 GNS3 Copilot 的领域知识库，包含 50 个 YAML 技能文件、815 个故障注入场景，覆盖 60+ 种网络协议和技术（从 PPP 到 SRv6、EVPN）。作为 GNS3 网络仿真环境的知识层，通过 LangChain 工具为 GNS3 Copilot 提供自动化故障诊断、实验自动化和学习辅助能力。

## 目录结构

- **injection/** — 50 个故障注入技能，覆盖 OSPF、BGP、VXLAN、EVPN 等 60+ 种网络协议和技术，每个技能包含多个故障场景，提供严重级别、难度等级、症状描述和排查提示
- **device/** — 设备接口定义，为不同网络设备（如 VPCS 虚拟 PC）提供命令语法、配置示例、诊断命令和故障排查指南
- **feature/** — 高级功能技能，如网络拓扑规划等复杂场景的自动化处理能力
- **prompts/** — LLM 系统提示词，定义 AI 助手在不同工作模式下的行为模式，包括故障排查、教学助理、实验自动化等
- **packet_analysis/** — 数据包分析规则，为 60+ 种网络协议提供 tshark 字段提取规则，支持自动化数据包解析和故障诊断
- **config/** — 安全和运行配置，定义禁止执行的命令列表，保护 GNS3 实验环境的安全性和稳定性

## 技术规格

- **故障场景格式**：严重级别、难度等级、症状描述、排查提示
- **CI/CD 验证**：YAML 语法、技能格式、tshark 字段有效性
- **本地验证**：预提交钩子支持

## 使用方式

### 使用官方仓库
GNS3-Skills 由 GNS3 Copilot 自动加载，无需手动配置。默认使用官方仓库，GNS3 服务器启动时会自动检查更新，也可在设置页面手动更新，请查阅[如何使用设置页面](../web-ui/configure-settings.md#3-updates)。技能文件通过 LangChain 工具暴露给 LLM，支持热更新。

### 使用自定义技能库
如果您的企业或团队需要使用定制的技能库，只需确保您的仓库内容格式与 GNS3-Skills 保持一致（格式规则请查阅官方仓库文档），然后在 `gns3_server.conf` 文件中配置：

```ini
[Server]
# 自定义技能库仓库地址
skills_repo_url = https://github.com/your-org/your-custom-skills.git
# 仓库分支（默认：main）
skills_repo_branch = main
# 是否自动更新技能库（默认：true）
skills_auto_update = true
```
## 统计信息

详细统计和分类请查看：[SKILLS_SUMMARY.md](https://github.com/GNS3/gns3-skills/blob/main/SKILLS_SUMMARY.md)

## 仓库信息

- **地址**：https://github.com/GNS3/gns3-skills
- **许可证**：GPL-3.0-or-later
- **用途**：网络工程师的实验、故障排查训练和自动化测试场景
