---
title: Docker 容器停止耗时
功能标签: [参考]
难度: 入门
预计阅读时间: 5 分钟
---

# Docker 容器停止耗时

### 停止项目时，部分 Docker 容器需要约 5 秒才退出，而另一些瞬间完成。为什么？

这是 Docker 容器内 PID 1 进程对 `SIGTERM` 信号的响应行为差异导致的。

**日志时间线示例（2026-06-03）：**

| 时间 | 事件 |
|------|------|
| 22:32:58 | 开始 fix ownership 处理（AlpineLinux-1, Chromium-1, OstinatoWireshark-1） |
| 22:32:58 | **Chromium-1** 已停止 ✅ |
| 22:32:59 | **webterm-1** 已停止 ✅ |
| 22:33:03 | **AlpineLinux-1** 已停止 ❌（耗时 ~5s） |
| 22:33:03 | **OstinatoWireshark-1** 已停止 ❌（耗时 ~5s） |

**根因：** Docker 的 `stop` 命令会给容器内 PID 1 进程发送 `SIGTERM` 信号，等待 `t` 秒（GNS3 设为 5s）后发送 `SIGKILL` 强制终止。慢的容器是因为 PID 1 进程**不响应 SIGTERM**，只能等超时后被强制杀死。

**各容器分析：**

| 容器 | PID 1 | SIGTERM 行为 | 耗时 |
|------|-------|-------------|------|
| Chromium | `/usr/bin/chromium` ✅ | Chromium 自带信号处理，收到后立即退出 | ~0s |
| webterm | `dumb-init` → firefox ✅ | Firefox 响应 SIGTERM 快速退出 | ~0s |
| **AlpiNet** | `dumb-init` → **`bash -i`** ❌ | bash 交互模式（`-i`）忽略 SIGTERM | **~5s** |
| **OstinatoWireshark** | **`bash` (PID 1)** ❌ | Linux 内核不向 PID 1 施加 SIGTERM 默认动作 | **~5s** |

**详细原因：**

- **AlpiNet** 入口脚本最终执行 `bash -i -l`（交互模式），bash 交互 shell 的设计行为是忽略 SIGTERM，不会因该信号退出
- **OstinatoWireshark** 入口脚本最后停在 `/bin/bash`，且它是 PID 1。Linux 内核的特殊保护机制下，PID 1 如果不显式安装信号处理器，SIGTERM **被内核直接丢弃**

:::note
这是容器镜像本身的入口脚本设计问题，并非 GNS3 的缺陷。GNS3 的 Docker 停止逻辑（SIGTERM 等待 5 秒后 SIGKILL）符合 Docker 标准行为。
:::
