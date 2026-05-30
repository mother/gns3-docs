---
title: 如何绘制曲线
功能标签: [操作]
难度: 入门
前置知识: "熟悉 GNS3 Web UI 项目拓扑基本操作"
预计阅读时间: 5 分钟
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 如何绘制曲线

Draw a Curve（绘制曲线）功能允许用户在 GNS3 网络拓扑图上绘制平滑曲线，用于创建弯曲路径或标识连线。

## 使用流程

**激活工具**

点击工具栏的曲线图标按钮（工具提示："Draw a curve"）。鼠标光标变为十字线。

<img style={{ display: 'block', margin: '0 auto' }} alt="曲线工具栏按钮" src={useBaseUrl('img/web-ui/zh/draw-curve-01-toolbar.jpeg')} />

**拖拽绘制**

在地图上按住鼠标并拖拽，通过拖拽路径创建曲线形状。释放鼠标完成绘制。曲线自动保存到服务器。

<img style={{ display: 'block', margin: '0 auto' }} alt="曲线绘制中" src={useBaseUrl('img/web-ui/zh/draw-curve-02-drawing.jpeg')} />

## Style Editor

鼠标在曲线上右键，选择 **Edit style** 选项，进入 Style editor 对话框。

<img style={{ display: 'block', margin: '0 auto' }} alt="曲线样式编辑器" src={useBaseUrl('img/web-ui/zh/draw-curve-03-style-editor.png')} />

- **Border Color（边框颜色）** — 颜色选择器
- **Border Width（边框宽度）** — 数字输入框（范围：0–100）
- **Border Style（边框样式）** — 6 个选项：Solid（实线）、Dash（虚线）、Dot（点线）、Dash Dot（点划线）、Dash Dot Dot（双点划线）、No border（无边框）
- **Curve Type（曲线类型）** — 3 个选项：
  - Catmull-Rom (Smooth)（平滑曲线，默认）— 平滑通过所有点
  - Basis (B-spline)（B 样条曲线）— 更平滑但不一定经过所有点
  - Monotone（单调曲线）— 避免振荡
- **Arrow Direction（箭头方向）** — 4 个选项：No Arrow（无箭头）、End Arrow（终点箭头）、Start Arrow（起点箭头）、Both Arrows（两端箭头）

### Curve（曲线示例）

<img style={{ display: 'block', margin: '0 auto' }} alt="曲线示例" src={useBaseUrl('img/web-ui/zh/draw-curve-04-example.jpeg')} />

## 与其他绘图工具的区别

| 特性 | 矩形 / 椭圆 / 线条 | 曲线 |
|---|---|---|
| 绘制方式 | 点击创建 | 拖拽创建 |
| 工具状态 | 保持激活 | 自动退出 |
| 创建路径 | 单点 | 多点路径 |
| 曲线类型 | 无 | 3 种可选 |
