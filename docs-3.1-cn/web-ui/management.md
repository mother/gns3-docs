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

管理员创建用户张三和李四，属于 users 用户组。创建 ACE 规则，将 users 用户组与 users 角色及 all endpoints 关联。配置完成后，张三登录系统创建的项目只有张三和 admin 管理员可见，李四同理。

### 操作步骤

**1. 创建用户**

在 Controller Management 页面点击 Users，然后点击 Add Users 按钮。在 Create new users 对话框中依次输入：Username / Full name / Email / Password / Confirm Password，然后 Add user to groups 选择 Users 用户组，点击 Add user 完成添加。以用户 zhangsan 的创建为例：
<img style={{ width: '100%' }} alt="创建用户" src={useBaseUrl('img/web-ui/zh/mgmt-07-create-user.jpeg')} />

创建两个用户张三和李四，如下图所示：
<img style={{ width: '100%' }} alt="用户列表" src={useBaseUrl('img/web-ui/zh/mgmt-08-user-list.jpeg')} />

**2. 创建 ACL 规则**

将新创建的用户所属的 users 用户组与 all endpoints 及 users 角色进行关联。

在 Controller Management 页面点击 ACL 标签，点击 Add ACE 按钮。在弹出的 Create new ACE 对话框中依次选择 All endpoints，然后选择 Users 用户组，角色选择 Users，点击 Add ACE 完成添加：
<img style={{ width: '100%' }} alt="创建ACE规则" src={useBaseUrl('img/web-ui/zh/mgmt-09-create-ace.jpeg')} />

ACE 规则添加完成后，如下图所示：
<img style={{ width: '100%' }} alt="ACE规则列表" src={useBaseUrl('img/web-ui/zh/mgmt-10-ace-list.jpeg')} />

**3. 验证隔离效果**

用户 zhangsan 登录系统后只能看到自己创建的项目，看不到其他用户的项目。用户 lisi 同理：
<img style={{ width: '100%' }} alt="张三项目视图" src={useBaseUrl('img/web-ui/zh/mgmt-11-project-zhangsan.jpeg')} />
<img style={{ width: '100%' }} alt="李四项目视图" src={useBaseUrl('img/web-ui/zh/mgmt-12-project-lisi.jpeg')} />

## 使用场景：项目共享

如果张三想要将项目共享给李四，管理员可在 Pools 中创建资源池，添加张三的项目，然后在 ACL 中创建 ACE 规则，将包含该项目的资源池授权给李四并赋予 users 角色权限。这样张三和李四就可以同时操作同一个项目。