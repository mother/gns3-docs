---
title: 新建模板
功能标签: [操作]
难度: 入门
前置知识: "已了解设备镜像的基本概念"
预计阅读时间: 5 分钟
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 新建模板

模板是 GNS3 中定义设备运行方式的配置模板。创建模板后，就可以在项目中添加对应的设备节点。

在项目首页点击左上角的 GNS3 Logo，在下拉菜单中选择 `New Template`（新建模板）打开创建向导。

<img style={{ width: '100%' }} alt="新建模板向导" src={useBaseUrl('img/web-ui/zh/template-wizard-start.jpeg')} />

## 模板类型

根据您的设备类型选择对应的创建指南：

- [Cisco IOS 模板](template-cisco-ios) — 以 Cisco 7200 为例
- [Cisco IOU 模板](template-cisco-iou) — 以 IOU L3 为例
- [QEMU 模板](template-qemu) — 以 Cisco IOSv 为例
- [Docker 模板](template-docker) — 以 Ubuntu 为例
