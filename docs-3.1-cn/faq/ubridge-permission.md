---
title: uBridge 权限问题
功能标签: [参考]
难度: 入门
预计阅读时间: 3 分钟
---

# uBridge 权限问题

### Docker 容器节点启动失败，报 "uBridge requires root access" 错误？

**原因：** uBridge 需要创建 TAP 网络接口来将 Docker 容器连接到 GNS3 虚拟网络，这需要 `CAP_NET_ADMIN` 和 `CAP_NET_RAW` 能力。其他节点类型（如 QEMU）可能有自己的网络实现方式，不一定需要 uBridge。

**解决方法：** 为 uBridge 添加必要的网络权限：

```bash
sudo setcap cap_net_admin,cap_net_raw=eip /usr/bin/ubridge
```
