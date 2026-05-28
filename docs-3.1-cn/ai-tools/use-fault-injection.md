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

## 技术参考

### 工作流程

1. **拓扑分析** — AI 分析当前拓扑，识别设备类型、路由协议和服务
2. **故障选择** — AI 匹配当前拓扑推荐合适的故障类型
3. **故障注入** — AI 连接目标设备并执行配置修改
4. **结果反馈** — AI 生成故障描述、诊断步骤和排查建议

### 技能仓库

故障注入技能定义在 [GNS3-Skills](https://github.com/gns3/gns3-skills) 仓库的 `injection/` 目录下，支持 OSPF、BGP、VLAN、STP 等协议的故障类型。
