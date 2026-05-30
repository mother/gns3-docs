---
title: 如何锁定或解锁所有项目
功能标签: [操作]
难度: 入门
前置知识: "熟悉 GNS3 Web UI 项目拓扑基本操作"
预计阅读时间: 10 分钟
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 如何锁定或解锁所有项目

Lock/Unlock Items（锁定/解锁项目）和 Show Lock Status（显示锁定状态）配合使用，用于管理 GNS3 网络拓扑图中节点和绘图元素的锁定状态，并提供可视化的锁定状态显示。

## 锁定或解锁所有项目

**点击锁定按钮**

点击工具栏的锁定/解锁图标（工具提示："Lock or unlock all items"）。

<img style={{ display: 'block', margin: '0 auto' }} alt="锁定按钮" src={useBaseUrl('img/web-ui/zh/lock-01-toolbar.jpeg')} />

**确认对话框**

弹出确认对话框：
- 标题："Confirm Lock All"（锁定所有）或 "Confirm Unlock All"（解锁所有）
- 内容："Are you sure you want to Lock/Unlock all devices?"
- 按钮：**No**（取消）/ **Yes**（确认，默认聚焦）

<img style={{ display: 'block', margin: '0 auto' }} alt="确认对话框" src={useBaseUrl('img/web-ui/zh/lock-02-dialog.jpeg')} />

**执行操作**

点击 **Yes** 执行锁定/解锁。所有节点和绘图的状态同步更新，按钮图标随之变化。

<img style={{ display: 'block', margin: '0 auto' }} alt="锁定后状态" src={useBaseUrl('img/web-ui/zh/lock-03-locked.jpeg')} />

### 锁定后的影响

**禁止的操作：**
- ❌ 无法移动节点位置
- ❌ 无法编辑绘图（矩形、椭圆、线条、曲线、文本）
- ❌ 无法删除节点或绘图
- ❌ 无法调整节点大小

**允许的操作：**
- ✅ 查看项目内容
- ✅ 使用其他非编辑功能（截图、AI 助手等）
- ✅ 连接到节点控制台

## 显示项目锁定状态

**使用方式**

在项目地图右上角的 Map Settings 菜单中，勾选 **Show item lock status**（显示项目锁定状态）复选框。默认关闭。

<img style={{ display: 'block', margin: '0 auto' }} alt="Map Settings 菜单" src={useBaseUrl('img/web-ui/zh/lock-04-settings-menu.jpeg')} />

### 开启效果

- 节点右上角显示锁定状态徽章 🔒（红色锁定）/🔓（绿色未锁定）
- 绘图元素（矩形、椭圆、图片）右上角显示锁定状态徽章
- 每个项目的锁定/解锁状态一目了然

<img style={{ display: 'block', margin: '0 auto' }} alt="锁定状态徽章" src={useBaseUrl('img/web-ui/zh/lock-05-badges.jpeg')} />

**哪些元素显示徽章：**
- ✅ 所有节点
- ✅ 矩形绘图
- ✅ 椭圆绘图
- ✅ 图片绘图
- ❌ 线条/曲线/文本/链接（不显示）

## 技术说明

- 锁定状态存储在服务器端（每个节点/绘图有 `locked` 属性）
- 显示状态存储在 localStorage 中，按项目分别保存
- 锁定状态同步到服务器，所有用户可见
- 显示状态仅影响本地视图，不影响实际锁定状态
