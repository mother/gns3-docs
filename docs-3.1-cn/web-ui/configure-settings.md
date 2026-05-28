---
title: 如何使用设置页面
功能标签: [操作]
难度: 入门
预计阅读时间: 10 分钟
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 如何使用设置页面

在项目首页点击右上角的三个点按钮，选择"Settings"进入设置页面。

<img style={{ width: '100%' }} alt="进入设置" src={useBaseUrl('img/web-ui/zh/settings-01-menu.jpeg')} />

Settings 页面是 GNS3 Web UI 的用户偏好设置中心，允许用户自定义本地行为、外观主题和系统更新选项。设置保存在浏览器的 localStorage 中，仅影响当前浏览器。

Settings 页面分为三个可折叠的部分。

## 1. Local Settings（本地设置）

此部分包含影响用户本地浏览器行为的选项：

- **Send anonymous crash reports**：发送匿名崩溃报告。启用后自动发送错误报告，帮助改进软件稳定性
- **Integrate link labels to links**：将链路标签集成到连接线中，方便识别端口连接
- **Automatically open project README files**：自动打开项目的 README 文件
- **Send anonymous usage statistics**：发送匿名使用统计，帮助了解功能使用情况
- **Open consoles in the widget instead of in new tabs**：点击"启动所有节点控制台"后，在当前组件内打开控制台，而非新标签页

<img style={{ width: '100%' }} alt="本地设置" src={useBaseUrl('img/web-ui/zh/settings-02-local.jpeg')} />

## 2. Theme Settings（主题设置）

此部分控制 GNS3 Web UI 的视觉外观，包括全局主题和拓扑图背景。

### Global theme（全局主题）

控制整个 Web UI 的配色方案，提供 Light（浅色）和 Dark（深色）两种模式，每种模式下有多种预设主题可选。

### Project map background（拓扑图背景）

控制拓扑图画布的背景样式：

- **自动（Auto）模式**：根据当前主题自动选择适配的背景
- **Light 背景选项**：提供多种浅色背景可选
- **Dark 背景选项**：提供多种深色背景可选

<img style={{ width: '100%' }} alt="主题设置" src={useBaseUrl('img/web-ui/zh/settings-03-theme.jpeg')} />

## 3. Updates（更新检查）

此部分提供软件更新和 AI 功能更新检查：

- **Check for updates**：检查 GNS3 软件更新，打开 GNS3 官网显示最新版本信息
- **Check for update AI skills**：检查 AI 技能包更新，从 GitHub 仓库（https://github.com/gns3/gns3-skills）下载并重新加载最新的 AI 技能包

<img style={{ width: '100%' }} alt="更新检查" src={useBaseUrl('img/web-ui/zh/settings-04-updates.jpeg')} />

## 保存设置

页面底部有 "Save settings" 按钮。点击后会将当前所有设置保存到浏览器 localStorage，并显示 "Settings have been saved." 提示。

## 设置持久化

所有设置保存在浏览器的 localStorage 中，仅影响当前浏览器，不会同步到其他设备或浏览器。
