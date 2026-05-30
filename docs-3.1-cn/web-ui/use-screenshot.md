---
title: 如何使用Take a screenshot
功能标签: [操作]
难度: 入门
前置知识: "熟悉 GNS3 Web UI 项目拓扑基本操作"
预计阅读时间: 5 分钟
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 如何使用 Take a screenshot

Take a Screenshot（截图）功能可以捕获 GNS3 网络拓扑图的当前状态，保存为 SVG 或 PNG 格式的图片文件，用于文档、演示或备份。

## 使用流程

**点击截图按钮**

点击工具栏的相机图标（工具提示："Take a screenshot"），打开截图配置对话框。

**配置截图选项**

对话框包含以下设置：

- **File type（文件类型）** — SVG（默认）或 PNG
- **Screenshot name（截图名称）** — 文本输入框，默认值：`screenshot-{时间戳}`，必填
- **按钮** — Cancel（取消）/ Take a screenshot（截图）

**保存文件**

点击 **Take a screenshot** 按钮，自动生成并下载文件到本地。文件名格式：`{输入的名称}.{扩展名}`。

### 键盘快捷键

- **Enter 键** — 直接执行截图
- **Esc 键** — 关闭对话框（不截图）

## 文件格式对比

| 特性 | SVG | PNG |
|---|---|---|
| 格式类型 | 矢量图形 | 位图图像 |
| 文件大小 | 小（文本格式） | 大（压缩图像） |
| 缩放质量 | 无损（任意缩放） | 有损（固定分辨率） |
| 可编辑性 | 可用文本/矢量编辑器编辑 | 需图像编辑器 |
| 兼容性 | 需浏览器/SVG 查看器 | 所有图像查看器 |
| 适用场景 | 文档、打印、后续编辑 | 分享、演示、快速查看 |

### 使用 SVG 截图的场景

- 需要后续编辑网络拓扑
- 打印高质量文档
- 发布到网页（可缩放）
- 存档备份（文件小）
- 可无限缩放不失真
- 文本可选中复制

### 使用 PNG 截图的场景

- 快速分享给他人
- 插入到 Word/PPT 文档
- 发布到社交媒体
- 不需要后续编辑
- 确保跨平台兼容

## 截图处理流程

### PNG 导出

1. 克隆地图 SVG 元素
2. 应用背景色
3. 内嵌图片（将节点符号转换为内联 SVG）
4. 应用颜色变量
5. 使用 `saveSvgAsPng` 库生成 PNG 文件
6. 触发浏览器下载

### SVG 导出

1. 克隆 SVG 元素
2. 应用背景色
3. 内嵌图片
4. 解析所有 CSS 变量为计算值
5. 使用 `XMLSerializer` 序列化 SVG
6. 创建 Blob 并触发下载

## 错误处理

- **PNG 导出失败** — "Failed to save screenshot as PNG"
- **SVG 导出失败** — "Failed to save screenshot as SVG"
