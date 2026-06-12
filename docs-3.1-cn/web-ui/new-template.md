---
title: 新建模板
功能标签: [操作]
难度: 入门
前置知识: "已了解设备镜像的基本概念"
预计阅读时间: 5 分钟
---


# 新建模板

模板是 GNS3 中定义设备运行方式的配置模板。创建模板后，就可以在项目中添加对应的设备节点。

在项目首页点击左上角的 GNS3 Logo，在下拉菜单中选择 `New Template`（新建模板）打开创建向导。

![新建模板向导](/img/web-ui/zh/template-wizard-start.jpeg)

## 模板更新

从 GitHub 下载最新的 appliances 文件。

- 在 Add new template 对话框，如下图所示，点击 Next 按钮。
![新建模板向导](/img/web-ui/zh/template-wizard-update-01-start.jpeg)

- 然后点击下图所示位置的”Update from online registry”按钮，从 GitHub (https://api.github.com/repos/GNS3/gns3-registry/contents/appliances) 下载最新的 appliances 文件。
![更新在线注册表](/img/web-ui/zh/template-wizard-update-02-registry-button.jpeg)

:::note

**Appliance 文件**就是某个网络设备的"制作说明书"。

**有无 appliance 文件的区别：**

- **没有 appliance 文件**：需要手动填写几十个配置参数（用什么镜像、多少内存、几个接口、什么系统架构...）
- **有 appliance 文件**：就像点菜一样，选择设备类型，系统自动按照说明书帮你配置好所有参数

**Appliance 文件包含的信息：**

- 设备名称和描述
- 需要的镜像文件
- 内存、CPU、接口数量配置
- 设备图标样式


**简单说**：别人已经帮你研究好这个设备该怎么配置，你直接用就行，不用从零开始折腾。

:::
## 模板类型

根据您的设备类型选择对应的创建指南：

- [如何创建 Cisco IOS 模板](template-cisco-ios) — 以 Cisco 7200 为例
- [如何创建 Cisco IOU 模板](template-cisco-iou) — 以 IOU L3 为例
- [如何创建 QEMU 模板](template-qemu) — 以 Cisco IOSv 为例
- [如何创建 Docker 模板](template-docker) — 以 Ubuntu 为例
