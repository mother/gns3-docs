---
title: 如何管理镜像
功能标签: [操作]
难度: 入门
预计阅读时间: 10 分钟
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 如何管理镜像

在项目首页点击左上角的 GNS3 Logo，选择"Image Manager"（镜像管理），可以查看和管理所有已上传的镜像文件。

<img style={{ width: '100%' }} alt="进入镜像管理器" src={useBaseUrl('img/web-ui/zh/image-mgr-01-menu.jpeg')} />

镜像管理界面右上角有三个按钮：

1. **Install All Images**（批量安装模板）
2. **Prune Images**（清理未使用镜像）
3. **Add Image**（添加镜像）

<img style={{ width: '100%' }} alt="镜像管理界面" src={useBaseUrl('img/web-ui/zh/image-mgr-02-overview.jpeg')} />

## Install All Images（批量安装模板）

根据服务器上已上传镜像的 MD5 checksum，自动匹配 GNS3 appliance 定义并创建对应的模板。适用场景：

- 上传了多个 IOS/QEMU 镜像后，快速创建对应模板
- 无需手动逐一配置模板

点击"Install All Images"按钮，弹出确认对话框。

<img style={{ width: '100%' }} alt="批量安装模板" src={useBaseUrl('img/web-ui/zh/image-mgr-03-install-all.jpeg')} />

<img style={{ width: '100%' }} alt="确认对话框" src={useBaseUrl('img/web-ui/zh/image-mgr-04-install-confirm.jpeg')} />

## Prune Images（清理未使用镜像）

扫描所有模板，找出未被引用的镜像文件并删除。

**安全机制：**
- 只删除未被任何模板引用的镜像
- 正在使用的镜像不会被删除
- 不可逆，删除后无法恢复（除非重新上传）

**适用场景：**
- 清理废弃的镜像文件，释放磁盘空间
- 删除测试过程中产生的临时镜像

点击"Prune Images"按钮，弹出确认对话框，点击 Yes 后执行清理。

<img style={{ width: '100%' }} alt="清理未使用镜像" src={useBaseUrl('img/web-ui/zh/image-mgr-05-prune.jpeg')} />

<img style={{ width: '100%' }} alt="确认清理" src={useBaseUrl('img/web-ui/zh/image-mgr-06-prune-confirm.jpeg')} />

## Add Image（添加镜像）

添加镜像对话框分两步进行。

<img style={{ width: '100%' }} alt="添加镜像入口" src={useBaseUrl('img/web-ui/zh/image-mgr-07-add-start.jpeg')} />

**第一步：询问是否自动安装 appliances**

选择 Yes 或 No，点击 Next。
<img style={{ width: '100%' }} alt="第一步" src={useBaseUrl('img/web-ui/zh/image-mgr-08-add-step1.jpeg')} />

**第二步：选择文件上传**

选择要上传的镜像文件，上传在后台运行。
<img style={{ width: '100%' }} alt="第二步" src={useBaseUrl('img/web-ui/zh/image-mgr-09-add-step2.jpeg')} />

特点：
- **后台上传**：文件上传在后台进行，可以离开页面
- **多文件上传**：支持同时选择多个文件
- **自动识别类型**：系统根据文件扩展名自动识别镜像类型，无需手动选择
- **进度显示**：上传进度在 Image Manager 主页面的表格中实时显示（进度条 + 百分比 + 状态）

支持的文件格式：

| 格式 | 用途 |
|------|------|
| .bin | IOS/IOU 镜像 |
| .image | IOS/IOU 镜像 |
| .iol | IOU 镜像 |
| .qcow2 | QEMU 磁盘镜像 |
| .vmdk | QEMU/VirtualBox 磁盘镜像 |



