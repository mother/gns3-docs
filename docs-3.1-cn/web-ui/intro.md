---
title: 项目首页
功能标签: [入门]
难度: 入门
前置知识: "无"
预计阅读时间: 5 分钟
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 项目首页

GNS3 Web UI 是完全基于浏览器的网络仿真管理界面。登录后首先看到的是项目页面。

- **左上角**：GNS3 Logo 为主菜单按钮，点击展开包含以下菜单项：
  - `Controllers`（控制器）
  - `Projects`（项目列表）
  - `Template Preferences`（模板首选项）
  - `Computes`（计算节点）
  - `Image Manager`（镜像管理）
  - `New Template`（新建模板）
<img style={{ width: '100%' }} alt="主菜单" src={useBaseUrl('img/web-ui/zh/main-menu.jpeg')} />
- **右上角**：更多菜单（三个点），点击展开包含以下菜单项：
  - `System Status`（系统状态）
  - `AI Profile`（AI 模型配置）
  - `Settings`（设置）
  - `Management`（用户管理）
  - `Help`（帮助）
  - `User Info`（用户信息）
  - `API Documentation`（API 文档）
  - `Logout`（退出登录）
<img style={{ width: '100%' }} alt="更多菜单" src={useBaseUrl('img/web-ui/zh/more-menu.jpeg')} />
- **中间区域**：项目列表，支持以下操作：
  - `Add Blank Project`（新建空白项目）
  - `Import Project`（导入项目）
  - `Refresh Projects`（刷新项目列表）
  - 每个项目支持 `Open`（打开）/ `Edit`（编辑）/ `Copy`（复制）/ 导出 / 删除
<img style={{ width: '100%' }} alt="项目操作" src={useBaseUrl('img/web-ui/zh/project-actions.jpeg')} />
