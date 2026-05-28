---
title: 如何创建 Cisco IOU 模板
功能标签: [操作]
难度: 入门
前置知识: "拥有 Cisco IOU 镜像文件（.iol）"
预计阅读时间: 5 分钟
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Cisco IOU 模板

:::tip 视频教程

📺 **[观看视频教程](https://www.zhihu.com/pin/2040072280118649832?page=video_pin&scene=share)** - 跟随视频一步步创建 Cisco IOU 模板

:::

以 Cisco IOU L3 为例，介绍如何创建 IOU 模板。

1. 在新建模板向导中点击"Next"按钮。
   <img style={{ width: '100%' }} alt="点击 Next" src={useBaseUrl('img/web-ui/zh/template-click-next.jpeg')} />

2. 在搜索框输入"iou"快速搜索，然后点击图中"2"标识的按钮。
   <img style={{ width: '100%' }} alt="搜索 IOU" src={useBaseUrl('img/web-ui/zh/template-iou-search.jpeg')} />

3. 以 `x86_64_crb_linux-adventerprisek9-ms.iol` 为例，按照图中所示顺序点击，选择并上传本地的镜像文件。
   <img style={{ width: '100%' }} alt="上传 IOU 镜像" src={useBaseUrl('img/web-ui/zh/template-iou-upload-image.jpeg')} />

4. 上传完成后，`x86_64_crb_linux-adventerprisek9-ms.iol` 状态从 `Missing` 变为 `Ready`，按下图所示点击 "Create" 按钮。
   <img style={{ width: '100%' }} alt="IOU 镜像就绪" src={useBaseUrl('img/web-ui/zh/template-iou-ready-create.jpeg')} />

5. 输入模板名称，这里默认为 `Cisco IOU L3`，点击 "Add Template" 按钮完成创建。
   <img style={{ width: '100%' }} alt="IOU 模板名称" src={useBaseUrl('img/web-ui/zh/template-iou-name-finish.jpeg')} />
