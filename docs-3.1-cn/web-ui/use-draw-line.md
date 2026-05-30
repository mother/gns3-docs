---
title: 如何使用Draw a line
功能标签: [操作]
难度: 入门
前置知识: "熟悉 GNS3 Web UI 项目拓扑基本操作"
预计阅读时间: 5 分钟
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 如何使用 Draw a line

Draw a Line（绘制线条）功能允许用户在 GNS3 网络拓扑图上绘制直线，用于创建连线或路径标识。

## 使用流程

**激活工具**

点击工具栏的线条图标按钮（工具提示："Draw a line"）。鼠标光标变为十字线。

**点击地图**

在地图上点击想要放置线条的位置。线条会自动创建并显示。

**继续绘制或退出**

工具保持激活，可继续绘制。再次点击按钮退出绘制模式。

## 默认属性

| 属性 | 默认值 |
|---|---|
| 线条颜色 | 黑色（#000000） |
| 线条宽度 | 2 像素 |
| 起点 X1 | 15 像素 |
| 起点 Y1 | 5 像素 |
| 终点 X2 | 5 像素 |
| 终点 Y2 | 15 像素 |
| 线条样式 | 实线 |
| 箭头 | 无 |

## Style Editor

鼠标在线条上右键，选择 **Edit style** 选项，进入 Style editor 对话框。

### 线条独有字段

**Border Color（边框颜色）** — 颜色选择器。

**Border Width（边框宽度）** — 数字输入框（范围：0–100）。

**Border Style（边框样式）** — 6 个选项：Solid（实线）、Dash（虚线）、Dot（点线）、Dash Dot（点划线）、Dash Dot Dot（双点划线）、No border（无边框）。

**Arrow Direction（箭头方向）** — 4 个选项：No Arrow（无箭头）、End Arrow（终点箭头）、Start Arrow（起点箭头）、Both Arrows（两端箭头）。

**Drawing Type（绘图类型）** — 2 个选项：Straight Line（直线）、Freeform (Control Point)（自由曲线）。

**Rotation（旋转角度）** — 数字输入框。

### 操作按钮

- **Cancel（取消）** — 取消更改
- **Apply（应用）** — 保存更改
