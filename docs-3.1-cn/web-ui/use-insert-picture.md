---
title: 如何插入图片
功能标签: [操作]
难度: 入门
前置知识: "熟悉 GNS3 Web UI 项目拓扑基本操作"
预计阅读时间: 5 分钟
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 如何插入图片

"Insert a picture"（插入图片）功能允许用户在 GNS3 网络拓扑图上插入图片，用于添加图例、Logo 或其他视觉元素。

## 使用流程

**点击按钮**

点击项目地图工具栏的 "image" 图标按钮（工具提示："Insert a picture"），触发文件选择对话框。

<img style={{ display: 'block', margin: '0 auto' }} alt="工具栏按钮" src={useBaseUrl('img/web-ui/zh/insert-picture-01-toolbar-button.jpeg')} />

**选择图片文件**

系统打开文件选择器。支持的格式：BMP、JPEG、JPG、GIF、PNG。SVG 格式不支持，会显示错误提示。

**自动处理和插入**

系统自动读取文件，获取图片尺寸（宽度和高度），将图片转换为 SVG 格式，计算居中位置（图片中心对齐到坐标原点），自动上传到服务器并显示在地图上。

:::note
目前不支持在拓扑中调整插入的图片的大小。
:::

- SVG（矢量图形）— 会显示错误提示："SVG images are not supported. Please use PNG, JPG, GIF or BMP format."
