---
功能标签: [基础操作]
难度: 入门
前置知识: "无"
预计阅读时间: 5 分钟
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# VirtualBox 使用指南

:::tip 视频教程

📺 **[观看视频教程](https://www.zhihu.com/pin/2040037987967358300?page=video_pin&scene=share)** - 跟随视频一步步导入 GNS3 VM 到 VirtualBox

:::

在 VirtualBox 中运行 GNS3 VM，适合个人使用和学习环境。

## 前置条件

- 已安装 VirtualBox
- 已从 [GNS3 官网](https://gns3.com/software/download-vm) 或 [gns3-gui Release](https://github.com/GNS3/gns3-gui/releases) 页面下载 GNS3 VM（.ova 文件）

## 步骤 1：配置网络

在 VirtualBox 中为 GNS3 VM 配置 "仅主机（Host-Only）网络"

- 点击"网络"，选择"仅主机（Host-Only）网络"，然后点击"创建"按钮。

<img style={{ width: '100%' }} alt="创建 Host-Only 网络" src={useBaseUrl('img/gns3-vm/virtualbox/zh/01-create-host-only-network.jpeg')} />

- 选中新创建的网络，选择"DHCP 服务器"。

<img style={{ width: '100%' }} alt="DHCP 服务器设置" src={useBaseUrl('img/gns3-vm/virtualbox/zh/02-dhcp-server-settings.jpeg')} />

- 勾选"启用服务器"选项，点击"确定"按钮。

<img style={{ width: '100%' }} alt="启用 DHCP 服务器" src={useBaseUrl('img/gns3-vm/virtualbox/zh/03-enable-dhcp-server.jpeg')} />

## 步骤 2：导入虚拟机

从 GNS3 网站下载 GNS3 VM 镜像，然后导入到 VirtualBox 中。

> `主页` → `导入` → 选择 `GNS3 VM.ova` 文件 → `导入`

<img style={{ width: '100%' }} alt="导入 OVA 文件" src={useBaseUrl('img/gns3-vm/virtualbox/zh/04-import-ova-file.jpeg')} />

- 导入完成。

<img style={{ width: '100%' }} alt="导入完成" src={useBaseUrl('img/gns3-vm/virtualbox/zh/05-import-complete.jpeg')} />

## 步骤 3：启动虚拟机

启动 GNS3 VM，等待系统完全启动（约 2-3 分钟），然后记录显示的 IP 地址。

启动后您会看到 GNS3 VM 的控制台界面，其中包含登录信息和 IP 地址。

<img style={{ width: '100%' }} alt="GNS3 VM 控制台显示 IP" src={useBaseUrl('img/gns3-vm/virtualbox/zh/06-vm-console-ip-display.jpeg')} />

## 步骤 4：登录 Web UI

打开浏览器访问 GNS3 Web UI，输入用户名密码 `admin/admin` 登录。

<img style={{ width: '100%' }} alt="Web UI 登录页面" src={useBaseUrl('img/gns3-vm/virtualbox/zh/07-web-ui-login.jpeg')} />

- 登录成功后的页面。

<img style={{ width: '100%' }} alt="Web UI 概览" src={useBaseUrl('img/gns3-vm/virtualbox/zh/08-dashboard-overview.jpeg')} />

---
**文档版本**: 3.10.0
**最后更新**: 2026-05-15
