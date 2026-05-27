---
title: 用户管理
功能标签: [操作]
难度: 入门
预计阅读时间: 10 分钟
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 用户管理

在项目首页点击左上角的 GNS3 Logo，选择"Management"（用户管理），进入管理页面。

<img style={{ width: '100%' }} alt="进入管理" src={useBaseUrl('img/web-ui/zh/mgmt-01-menu.jpeg')} />

## Users（用户管理）

创建和管理系统用户账户，支持认证、个人信息管理和组织关系维护。

<img style={{ width: '100%' }} alt="用户管理" src={useBaseUrl('img/web-ui/zh/mgmt-02-users.jpeg')} />

## Groups（用户组管理）

用户组是将多个用户组织成逻辑单元的机制，用于简化权限管理和用户组织，管理员可以一次性为多个用户分配相同的权限。

<img style={{ width: '100%' }} alt="用户组管理" src={useBaseUrl('img/web-ui/zh/mgmt-03-groups.jpeg')} />

## Roles（角色管理）

角色是权限的集合，每个角色包含多个特权，用户通过被分配角色来获得相应的操作权限。系统默认角色足以满足大部分场景需要。

<img style={{ width: '100%' }} alt="角色管理" src={useBaseUrl('img/web-ui/zh/mgmt-04-roles.jpeg')} />

## Pools（资源池管理）

资源池用于将项目分享给用户或用户组，实现对项目访问的权限控制。

<img style={{ width: '100%' }} alt="资源池管理" src={useBaseUrl('img/web-ui/zh/mgmt-05-pools.jpeg')} />

## ACL（访问控制列表）

访问控制列表（ACL）提供基于 API 路径的细粒度访问控制，管理用户和组对不同系统资源的访问权限。

<img style={{ width: '100%' }} alt="访问控制" src={useBaseUrl('img/web-ui/zh/mgmt-06-acl.jpeg')} />

## 使用场景：用户项目隔离

管理员创建用户张三和李四，属于 users 用户组。创建 ACE 规则将 users 用户组与 users 角色及 all endpoints 关联。配置完成后，张三和李四各自只能看到自己创建的项目，admin 管理员可以看到所有项目。

### 操作步骤

**1. 创建用户**

在 Controller Management 页面点击 Users → Add Users，在对话框中输入用户信息并选择 Users 用户组，点击 Add user 完成创建：
<img style={{ width: '100%' }} alt="创建用户" src={useBaseUrl('img/web-ui/zh/mgmt-07-create-user.jpeg')} />

创建张三和李四两个用户：
<img style={{ width: '100%' }} alt="用户列表" src={useBaseUrl('img/web-ui/zh/mgmt-08-user-list.jpeg')} />

**2. 创建 ACL 规则**

在 Controller Management 页面点击 ACL → Add ACE，依次选择 All endpoints、Users 用户组、Users 角色，点击 Add ACE：
<img style={{ width: '100%' }} alt="创建ACE规则" src={useBaseUrl('img/web-ui/zh/mgmt-09-create-ace.jpeg')} />

添加完成后的 ACE 规则列表：
<img style={{ width: '100%' }} alt="ACE规则列表" src={useBaseUrl('img/web-ui/zh/mgmt-10-ace-list.jpeg')} />

**3. 验证隔离效果**

zhangsan 登录后只能看到自己创建的项目，lisi 同理：
<img style={{ width: '100%' }} alt="张三项目视图" src={useBaseUrl('img/web-ui/zh/mgmt-11-project-zhangsan.jpeg')} />
<img style={{ width: '100%' }} alt="李四项目视图" src={useBaseUrl('img/web-ui/zh/mgmt-12-project-lisi.jpeg')} />

## 使用场景：项目共享

如果张三想要将项目共享给李四，管理员可在 Pools 中创建资源池，添加张三的项目，然后在 ACL 中创建 ACE 规则，将包含该项目的资源池授权给李四并赋予 users 角色权限。这样张三和李四就可以同时操作同一个项目。