---
title: 如何编辑项目
功能标签: [操作]
难度: 入门
前置知识: "熟悉 GNS3 Web UI 项目拓扑基本操作"
预计阅读时间: 10 分钟
---


# 如何编辑项目

Edit Project Dialog（编辑项目对话框）用于编辑 GNS3 项目的配置属性、说明文档和全局变量，分为三个标签页管理。

可以从两个位置打开 Edit Project Dialog：

- **项目列表页** — 点击编辑按钮。
![项目列表编辑按钮](/img/web-ui/zh/edit-project-01-list-page.jpeg)

- **拓扑页面** — 点击左上角 logo → Project Settings → Edit Project。
![拓扑页面菜单](/img/web-ui/zh/edit-project-02-topology-menu.jpeg)

## General（常规设置）



配置项目基本信息和画布尺寸。

**Project name（项目名称）** — 文本输入框，占据整行宽度，必填。

**Scene dimensions（场景尺寸）** — 场景宽度和高度（单位：像素）。

**Grid sizes（网格尺寸）** — 节点网格大小和绘图网格大小，用于对齐。

**复选框选项：**
- Open this project in the background when GNS3 controller starts（GNS3 控制器启动时在后台打开此项目）
- Start all nodes when this project is opened（打开项目时启动所有节点）
- Leave this project running in the background after closing（关闭后保持项目在后台运行）
- Show interface labels at start（启动时显示接口标签）

![General 标签页](/img/web-ui/zh/edit-project-03-general-tab.jpeg)

## Readme（说明文档）

Markdown 格式编辑器，支持实时预览。


- 点击 Edit 按钮，进入编辑模式。

![Readme 预览模式](/img/web-ui/zh/edit-project-04-readme-edit.jpeg)

- 在编辑模式下，可以输入 Markdown 格式文本内容或普通文本，不支持 Mermaid 渲染。停止输入 2 秒后自动保存。

![Readme 编辑模式](/img/web-ui/zh/edit-project-05-readme-editing.jpeg)

## Global variables（全局变量）

项目级变量，用于 Docker 容器环境变量的模板替换。

**添加变量：** 输入 Name（变量名称）和 Value（变量值），点击 **Add variable（添加变量）**。

**变量列表：** 表格包含 Name、Value 和 Actions（操作列）。

![全局变量标签页](/img/web-ui/zh/edit-project-06-global-vars.jpeg)

:::note
项目中的 Global variables 会自动设置为 Docker 容器的环境变量。添加、删除或修改变量后，容器会自动重建以应用变更。
:::

### 应用场景

- **环境复用**：在不同环境（开发/测试/生产）中使用不同的变量值
- **IP 地址管理**：定义常用的 IP 地址变量，在多个容器中重用
- **配置集中管理**：避免在多个 Docker 容器中重复配置相同的值
- **动态配置**：通过修改变量值来影响所有使用该变量的容器
- **项目模板**：创建可重用的网络拓扑模板，导入导出时携带变量配置

:::note
目前仅 Docker 容器支持变量替换功能，QEMU、VirtualBox 等其他虚拟机类型不适用。
:::


### 使用示例：统一 Docker 容器环境变量

项目中有 3 个 Alpine Linux Docker 容器，需要统一设置以下环境变量：

| 变量            | 值               | 用途          |
| ------------- | --------------- | ----------- |
| `TZ`          | `Asia/Shanghai` | 设置容器时区为中国时区 |
| `LANG`        | `en_US.UTF-8`   | 设置容器语言环境    |
| `APP_ENV`     | `development`   | 标识当前运行环境    |
| `DEBUG_LEVEL` | `verbose`       | 控制应用日志详细程度  |

- 在 Edit Project 对话框的全局变量中逐个添加这些变量。
![添加全局变量](/img/web-ui/zh/edit-project-07-vars-adding.jpeg)

- 完成添加后，点击 **Apply** 按钮。
![确认对话框](/img/web-ui/zh/edit-project-12-vars-confirm-dialog.jpeg)

- 会出现一个确认对话框，提示信息：

```
Adding or deleting project global variables will cause the GNS3 server
  to rebuild docker containers in the project to apply the new variables.
  If containers are running, this operation may take approximately 5-10 seconds.
  Do you want to continue?
```

> 中文翻译：添加或删除项目全局变量将导致 GNS3 服务器重建项目中的 Docker 容器以应用新变量。如果容器正在运行，此操作可能需要大约 5-10 秒。是否要继续？

![变量应用过程](/img/web-ui/zh/edit-project-13-vars-rebuild-applying.jpeg)

- 确认后，GNS3 会自动重建 Docker 容器以应用新的环境变量。



- 启动拓扑中的 Alpine Linux Docker 容器，通过 Web Console 连接到这三个容器，执行 `export` 命令查看环境变量，可以看到我们刚才定义的全局变量已生效。

![环境变量结果 1](/img/web-ui/zh/edit-project-09-env-result1.jpeg)

![环境变量结果 2](/img/web-ui/zh/edit-project-10-env-result2.jpeg)

![环境变量结果 3](/img/web-ui/zh/edit-project-11-env-result3.jpeg)