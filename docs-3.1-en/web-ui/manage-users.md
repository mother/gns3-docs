---
title: How to manage users and permissions
---


# How to manage users and permissions

On the project home page, click the GNS3 Logo at the top left and select "Management".

![Open management](/img/web-ui/zh/mgmt-01-menu.jpeg)

## Users

Create and manage system user accounts. Supports authentication, personal information management, and organization relationship management.

![User management](/img/web-ui/zh/mgmt-02-users.jpeg)

## Groups

Groups let you organize users into logical units. With groups, administrators can give the same permissions to many users at once.

![Group management](/img/web-ui/zh/mgmt-03-groups.jpeg)

## Roles

Roles define what actions a user can perform. A role is a collection of privileges, and users get permissions by being assigned a role. The default roles are sufficient for most scenarios.

![Role management](/img/web-ui/zh/mgmt-04-roles.jpeg)

## Pools

Pools are used to share projects with users or groups, enabling access control over projects.

![Pool management](/img/web-ui/zh/mgmt-05-pools.jpeg)

## ACL (Access Control List)

ACL provides fine-grained access control based on API paths. It manages user and group access to different system resources.

![Access control](/img/web-ui/zh/mgmt-06-acl.jpeg)

## Use Case: User Project Isolation

The admin creates two users, `zhangsan` and `lisi`, both in the `users` group. An ACE rule associates the `users` group with the `users` role and all endpoints. After configuration, `zhangsan` and `lisi` can each only see their own projects, while the `admin` can see all projects.

### 1. Create users

On the Controller Management page, click Users → Add Users, fill in the user details and select the Users group, then click Add user:
![Create user](/img/web-ui/zh/mgmt-07-create-user.jpeg)

Create both `zhangsan` and `lisi`:
![User list](/img/web-ui/zh/mgmt-08-user-list.jpeg)

### 2. Create ACL rules

On the Controller Management page, click ACL → Add ACE, select All endpoints, the Users group, and the Users role, then click Add ACE:
![Create ACE rule](/img/web-ui/zh/mgmt-09-create-ace.jpeg)

The ACE rule list after creation:
![ACE rule list](/img/web-ui/zh/mgmt-10-ace-list.jpeg)

### 3. Verify isolation

After logging in, `zhangsan` can only see their own projects, and the same applies to `lisi`:
![zhangsan's projects](/img/web-ui/zh/mgmt-11-project-zhangsan.jpeg)
![lisi's projects](/img/web-ui/zh/mgmt-12-project-lisi.jpeg)

## Use Case: Project Sharing

If `zhangsan` wants to share a project with `lisi`, the admin can create a pool in Pools, add `zhangsan`'s project to it, then create an ACE rule in ACL to grant `lisi` access to the pool with the `users` role. This way, `zhangsan` and `lisi` can both work on the same project.

### 1. Create a pool

On the Controller Management page, click Pools → Add Resource Pool, enter a pool name (e.g. `zhangsan-projects`), then click Add Resource Pool:
![Create pool](/img/web-ui/zh/mgmt-13-create-pool.jpeg)

Click the pool name to enter its configuration page:
![Pool detail](/img/web-ui/zh/mgmt-14-pool-detail.jpeg)

Select the project to share and click the add button:
![Add project to pool](/img/web-ui/zh/mgmt-15-pool-add-project.jpeg)

The project appears in the pool after being added:
![Project added](/img/web-ui/zh/mgmt-16-pool-project-added.jpeg)

### 2. Create an ACE rule

On the Controller Management page, click ACL → Add ACE, select the Resource pool option:
![Select resource pool option](/img/web-ui/zh/mgmt-17-create-ace-pool.jpeg)

Select the pool `zhangsan-projects`, then set the sharing type to `users`, user to `lisi`, and role to `User`, then click Add ACE:
![Configure ACE rule](/img/web-ui/zh/mgmt-18-ace-pool-config.jpeg)

The ACE rule list after creation:
![ACE rule list](/img/web-ui/zh/mgmt-19-ace-pool-list.jpeg)

### 3. Verify sharing

Log in as `lisi`. The shared project from `zhangsan` is now visible in the project list:
![Lisi sees shared project](/img/web-ui/zh/mgmt-20-shared-project-view.jpeg)
