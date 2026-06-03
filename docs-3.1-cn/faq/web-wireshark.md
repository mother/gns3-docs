---
title: Web Wireshark
功能标签: [参考]
难度: 入门
预计阅读时间: 5 分钟
---

# Web Wireshark

### Web Wireshark 无法启动或连接失败？

按以下步骤排查：

1. **确认 Docker 是否运行**：在 GNS3 VM 中执行 `docker ps` 命令确认 Docker 守护进程正常运行
2. **检查网络连接**：确保 GNS3 VM 可以访问 Docker Hub（或已提前加载镜像）
3. **检查配置**：在 `gns3_server.conf` 中确认 `[WebWireshark]` 部分配置正确
4. **查看日志**：在 GNS3 日志控制台中查看相关错误信息
5. **检查容器状态**：使用 `docker logs gns3-wireshark-{project_id}` 查看容器日志

### 无法访问 Docker Hub，如何安装 Web Wireshark？

可以从百度网盘下载 `gns3/web-wireshark` 打包文件：

- 链接: https://pan.baidu.com/s/1jcYif0NnQtcY9OCdSnptkg?pwd=z6yu
- 提取码: z6yu

下载后上传到 GNS3 VM，使用 `docker load -i` 命令导入容器镜像。

### 如何调整 Web Wireshark 的资源分配（内存、CPU）？

在 `gns3_server.conf` 文件的 `[WebWireshark]` 部分调整：

```ini
[WebWireshark]
memory = 4g   # 容器内存限制（默认 2g）
cpus = 2.0    # CPU 核心数（默认 1.0）
```

根据并发实例数量推荐配置：

| 并发实例数 | 建议内存 | 说明 |
|-----------|---------|------|
| 4-6 个 | 2g | 默认配置，中等使用 |
| 7-10 个 | 4g | 重度使用 |
| 10+ 个 | 8g | 大型拓扑 |
