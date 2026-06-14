---
title: 如何创建 QEMU 模板
功能标签: [操作]
难度: 入门
前置知识: "拥有 QEMU 镜像文件和启动文件"
预计阅读时间: 5 分钟
---


# 如何创建 QEMU 模板

:::tip 视频教程

📺 **[观看视频教程](https://www.zhihu.com/pin/2040072336024540014?page=video_pin&scene=share)** - 跟随视频一步步创建 QEMU 模板

:::

以 Cisco IOSv 为例，介绍如何创建 QEMU 模板。

1. 在新建模板向导中点击"Next"按钮。
   ![点击 Next](/img/web-ui/zh/template-click-next.jpeg)

2. 在搜索框输入"IOSV"快速搜索，然后点击图中"2"标识的按钮。
   ![搜索 IOSv](/img/web-ui/zh/template-qemu-search-iosv.jpeg)

3. 以 `Cisco IOSv version 15.9(3)M4` 为例，按照图中所示顺序点击，选择并上传本地的镜像文件和启动文件。
   ![选择镜像文件](/img/web-ui/zh/template-qemu-select-image.jpeg)
   ![选择启动文件](/img/web-ui/zh/template-qemu-select-startup.jpeg)

4. 上传完成后，`Cisco IOSv version 15.9(3)M4` 状态从 `Missing` 变为 `2/2 Ready`，按下图所示点击 "Create" 按钮。
   ![QEMU 镜像就绪](/img/web-ui/zh/template-qemu-ready-create.jpeg)

5. 输入模板名称，这里默认为 `Cisco IOSv`，点击 "Add Template" 按钮完成创建。
   ![QEMU 模板名称](/img/web-ui/zh/template-qemu-name-finish.jpeg)
