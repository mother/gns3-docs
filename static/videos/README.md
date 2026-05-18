# 🎹 视频文件管理说明

## ⚠️ 重要提示

**视频文件不会被提交到 Git 仓库！** 

为了避免仓库变得臃肿，所有视频文件都在 `.gitignore` 中被忽略。

## 📁 当前视频文件

- `virtualbox-network-setup.mp4` - VirtualBox 网络配置演示
- `import-gns3-vm.mp4` - 导入 GNS3 VM 演示
- `start-gns3-vm.mp4` - 启动 GNS3 VM 演示
- `login-web-ui.mp4` - 登录 Web UI 演示

## 🚀 如何使用

### 本地开发
1. 将视频文件放到此目录
2. 运行 `yarn start`
3. 访问文档页面查看视频效果

### 生产部署
由于视频文件不在 Git 中，您需要：

#### 方案 1：手动部署（推荐）
```bash
# 在部署时手动复制视频文件到构建目录
cp static/videos/*.mp4 build/videos/
```

#### 方案 2：使用外部视频平台
将视频上传到 Bilibili/YouTube，然后使用嵌入代码：

```markdown
<iframe src="//player.bilibili.com/player.html?bvid=你的视频ID"></iframe>
```

#### 方案 3：使用对象存储
将视频上传到阿里云OSS/AWS S3，然后引用：

```markdown
<video controls>
  <source src="https://your-cdn.com/video.mp4" type="video/mp4">
</video>
```

## 📋 视频规格建议

- **格式**: MP4 (H.264 编码)
- **分辨率**: 1280x720 (720p) 或 1920x1080 (1080p)
- **比特率**: 4-8 Mbps (720p), 8-15 Mbps (1080p)
- **文件大小**: 尽量控制在 100MB 以内
- **时长**: 建议每个视频不超过 10 分钟

## 🔄 持续集成

如果需要在 CI/CD 中自动处理视频文件，可以在部署脚本中添加：

```bash
# 从其他位置下载视频文件
# 或从对象存储同步
```

---

**注意**: 此目录会保留在仓库中，但其中的视频文件不会被 Git 跟踪。
