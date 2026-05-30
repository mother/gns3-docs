---
title: 如何绘制线条
功能标签: [操作]
难度: 入门
前置知识: "熟悉 GNS3 Web UI 项目拓扑基本操作"
预计阅读时间: 5 分钟
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 如何绘制线条

Draw a Line（绘制线条）功能允许用户在 GNS3 网络拓扑图上绘制直线，用于创建路径标识等。

## 使用流程

**激活工具**

点击工具栏的线条图标按钮（工具提示："Draw a line"）。鼠标光标变为十字线。

<img style={{ display: 'block', margin: '0 auto' }} alt="线条工具栏按钮" src={useBaseUrl('img/web-ui/zh/draw-line-01-toolbar.jpeg')} />

**点击地图**

在地图上点击想要放置线条的位置。线条会自动创建并显示。

<img style={{ display: 'block', margin: '0 auto' }} alt="线条创建完成" src={useBaseUrl('img/web-ui/zh/draw-line-02-created.jpeg')} />

## Style Editor

鼠标在线条上右键，选择 **Edit style** 选项，进入 Style editor 对话框。

<img style={{ display: 'block', margin: '0 auto' }} alt="线条样式编辑器" src={useBaseUrl('img/web-ui/zh/draw-line-03-style-editor.jpeg')} />

- **Border Color（边框颜色）** — 颜色选择器
- **Border Width（边框宽度）** — 数字输入框（范围：0–100）
- **Border Style（边框样式）** — 6 个选项：Solid（实线）、Dash（虚线）、Dot（点线）、Dash Dot（点划线）、Dash Dot Dot（双点划线）、No border（无边框）
- **Arrow Direction（箭头方向）** — 4 个选项：No Arrow（无箭头）、End Arrow（终点箭头）、Start Arrow（起点箭头）、Both Arrows（两端箭头）
- **Drawing Type（绘图类型）** — 2 个选项：Straight Line（直线）、Freeform (Control Point)（自由曲线）
- **Rotation（旋转角度）** — 数字输入框

### FreeForm（自由曲线）示例

<img style={{ display: 'block', margin: '0 auto' }} alt="自由曲线示例" src={useBaseUrl('img/web-ui/zh/draw-line-04-freeform.jpeg')} />
