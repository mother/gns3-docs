---
title: 如何创建 Docker 模板
功能标签: [操作]
难度: 入门
前置知识: "了解 Docker 镜像的基本概念"
预计阅读时间: 5 分钟
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 如何创建 Docker 模板

:::tip 视频教程

📺 **[观看视频教程](https://www.zhihu.com/pin/2040072357298041327?page=video_pin&scene=share)** - 跟随视频一步步创建 Docker 模板

:::

以 Ubuntu 为例，介绍如何创建 Docker 模板。

1. 在新建模板向导中点击"Next"按钮。
   <img style={{ width: '100%' }} alt="点击 Next" src={useBaseUrl('img/web-ui/zh/template-click-next.jpeg')} />

2. 在搜索框输入"ubuntu"快速搜索，然后点击图中"2"标识的按钮。
   <img style={{ width: '100%' }} alt="搜索 ubuntu" src={useBaseUrl('img/web-ui/zh/template-docker-search-ubuntu.jpeg')} />

3. 如下图所示，点击 "Create Docker Template" 按钮。
   <img style={{ width: '100%' }} alt="创建 Docker 模板" src={useBaseUrl('img/web-ui/zh/template-docker-create.jpeg')} />

4. 输入模板名称，这里默认为 `Ubuntu Docker Guest`，点击 "Add Template" 按钮完成创建。
   <img style={{ width: '100%' }} alt="Docker 模板名称" src={useBaseUrl('img/web-ui/zh/template-docker-name-finish.jpeg')} />

> 在这里添加模板后，在拓扑中首次使用这个模板时，会从 Docker Hub 下载该镜像。
