---
title: 如何使用Add a note
功能标签: [操作]
难度: 入门
前置知识: "熟悉 GNS3 Web UI 项目拓扑基本操作"
预计阅读时间: 5 分钟
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 如何使用 Add a note

"Add a Note" 是一个在 GNS3 网络拓扑图上添加文字注释的工具。用户可以在地图的任意位置点击并输入文本，用于记录网络设计说明、节点备注或其他标识信息。

## 使用流程

**第一步：激活工具**

点击项目地图工具栏左侧的第一个按钮（带有 "create" 铅笔图标）。鼠标光标变为十字线，表示已进入文本添加模式。
<img style={{ display: 'block', margin: '0 auto' }} alt="工具栏按钮" src={useBaseUrl('img/web-ui/zh/add-note-01-toolbar-button.jpeg')} />

**第二步：选择位置**

在地图上的任意位置点击鼠标左键。点击位置会出现一个临时的文本输入框。

**第三步：输入文本**

在弹出的输入框中直接输入文字内容。输入框会自动聚焦，无需额外点击。

**第四步：保存文本**

点击地图的其他位置或按 **Tab** 键使输入框失去焦点。输入的文本会自动保存并显示为 SVG 文本元素。工具状态自动重置，光标恢复为默认箭头。

## 编辑注释（Text Editor 对话框）

如需修改已添加的文本，**双击**文本元素，或**右键点击**选择 **Edit text**。

<img style={{ display: 'block', margin: '0 auto' }} alt="右键编辑文本" src={useBaseUrl('img/web-ui/zh/add-note-02-edit-right-click.jpeg')} />

打开 Text Editor 对话框，可以修改以下属性：

<img style={{ display: 'block', margin: '0 auto' }} alt="Text Editor 对话框" src={useBaseUrl('img/web-ui/zh/add-note-03-text-editor-dialog.jpeg')} />

### 文本内容

大型文本区域，支持多行输入，实时预览样式效果。

### 填充颜色

使用颜色选择器设置文本颜色。

### 字体族

8 种字体选项：

| 字体 | 说明 |
|---|---|
| TypeWriter | 打字机字体 |
| Arial | Arial 字体 |
| Courier New | Courier New 字体 |
| Times New Roman | Times New Roman 字体 |
| Helvetica | Helvetica 字体 |
| Verdana | Verdana 字体 |
| Georgia | Georgia 字体 |
| Comic Sans MS | Comic Sans MS 字体 |

### 字号

数字输入框，范围 1–200，步长 0.5。

### 字重

13 个选项：

| 值 | 名称 |
|---|---|
| Normal | 正常 |
| Bold | 粗体 |
| Lighter | 更细 |
| Bolder | 更粗 |
| 100 | 极细 (Thin) |
| 200 | 特细 (Extra Light) |
| 300 | 细 (Light) |
| 400 | 正常 (Normal) |
| 500 | 中等 (Medium) |
| 600 | 半粗 (Semi Bold) |
| 700 | 粗体 (Bold) |
| 800 | 特粗 (Extra Bold) |
| 900 | 黑体 (Black) |

### 文本装饰

4 种选项：无装饰、下划线、删除线、上划线。

### 旋转角度

文本输入框，支持输入角度值（经过验证器验证）。

### 操作按钮

- **Cancel（取消）** — 取消更改，关闭对话框
- **Apply（应用）** — 应用更改，保存并关闭对话框

## 功能特点

- **自由定位**：可以在地图上任意位置添加文本，不受网格限制
- **即时反馈**：输入框自动出现在点击位置，所见即所得
- **自动保存**：失去焦点时自动保存到服务器，无需手动确认
- **可编辑**：已添加的文本可以通过双击再次编辑内容
- **同步缩放**：文本会随地图缩放而调整大小，保持可读性

## 坐标系统

该功能使用 GNS3 的画布坐标系统，会自动处理地图的缩放和平移偏移，确保文本准确定位在用户点击的位置。

## 状态管理

工具激活后，如果再次点击工具栏按钮，会取消文本添加模式，光标恢复正常。添加完一条文本后，工具也会自动退出，需要重新点击按钮才能添加下一条文本。
