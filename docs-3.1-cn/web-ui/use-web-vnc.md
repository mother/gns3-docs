---
title: 如何使用 Web VNC
功能标签: [新特性]
难度: 入门
预计阅读时间: 5 分钟
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 如何使用 Web VNC

Web VNC 让您直接在浏览器中访问 VNC 类型的设备（如 QEMU 虚拟机、docker等带有桌面的模拟设备），无需安装 VNC 客户端软件。

## 1. 连接管理

**自动连接：**
- 打开 VNC 控制台时自动连接设备
- 15 秒连接超时保护

<img style={{ width: '100%' }} alt="VNC连接管理" src={useBaseUrl('img/web-ui/zh/web-vnc-connection.jpeg')} />

**连接状态：**
- Connecting（连接中）
- Connected（已连接）
- Disconnected（已断开）


## 2. 屏幕控制

**缩放功能：**

<img style={{ width: '100%' }} alt="VNC缩放功能" src={useBaseUrl('img/web-ui/zh/web-vnc-zoom.jpeg')} />

| 操作 | 说明 |
|------|------|
| 放大 | 增大显示比例 |
| 缩小 | 减小显示比例 |
| 适应窗口 | 自动调整以填满窗口 |

**全屏模式：**
- 按 F11 或点击全屏按钮进入/退出全屏
- 隐藏浏览器边框，获得完整屏幕体验

## 3. 发送按键

向设备发送特殊按键组合（避免在浏览器中冲突）：

<img style={{ width: '100%' }} alt="VNC发送按键" src={useBaseUrl('img/web-ui/zh/web-vnc-keys.jpeg')} />

| 按键                 | 功能                    |
| ------------------ | --------------------- |
| Ctrl+Alt+Del       | 发送 Ctrl+Alt+Del       |
| Ctrl+Alt+Backspace | 发送 Ctrl+Alt+Backspace |
| F1 ~ F12           | 发送功能键                 |
| Tab                | 发送 Tab 键              |
| Esc                | 发送 Esc 键              |
| Print Screen       | 发送 Print Screen 键     |

:::note
支持组合键，例如 Ctrl+Shift+F1。
:::

## 4. 屏幕截图

- 点击截图按钮
- 自动下载 PNG 格式截图
- 可捕获当前 VNC 屏幕内容

<img style={{ width: '100%' }} alt="VNC屏幕截图" src={useBaseUrl('img/web-ui/zh/web-vnc-screenshot.jpeg')} />

## 5. 屏幕录制

**录制模式：**

| 模式 | 说明 |
|------|------|
| VNC | 仅录制 VNC 屏幕 |
| VNC+Camera | VNC 屏幕与摄像头画中画（右下角） |
| Camera | 仅录制摄像头 |

<img style={{ width: '100%' }} alt="VNC录制模式" src={useBaseUrl('img/web-ui/zh/web-vnc-record.jpeg')} />

**录制功能：**
- 格式：WebM
- 暂停/恢复：可随时暂停录制
- 音频录制：支持麦克风录音（可静音）
- 视觉效果：
  - 时间戳叠加
  - 鼠标光标显示
  - 点击波纹动画
  - GNS3 水印（隐形数字水印）

**录制行为：**
- VNC 断开时录制继续（可能显示黑屏）
- 暂停时间不计入录制时长

## 6. 剪贴板同步

**发送剪贴板：**
- 将本地文本粘贴到 VNC 设备

<img style={{ width: '100%' }} alt="将文本发送到VNC设备" src={useBaseUrl('img/web-ui/zh/web-vnc-clipboard-recv.jpeg')} />

:::note
### 各平台VNC剪贴板支持情况

| 平台 | 剪贴板支持 | 实现方式 |
|------|-----------|----------|
| Docker | ✅ 完整支持 | TigerVNC + vncconfig |
| QEMU | ⚠ 部分支持 | QEMU内置VNC，依赖guest系统 |
:::

## 与传统 VNC 客户端的对比

| 特性 | Web VNC | 传统 VNC 客户端 |
|------|---------|-----------------|
| 安装 | 无需安装 | 需要安装 VNC Viewer |
| 跨平台 | 任何现代浏览器 | 依赖操作系统 |
| 录制 | 内置录制功能 | 需要额外软件 |
| 截图 | 一键截图 | 需要额外操作 |
| 摄像头 | 支持画中画 | 不支持 |
