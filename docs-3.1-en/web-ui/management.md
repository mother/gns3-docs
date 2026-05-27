---
title: User Management
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# User Management

On the project home page, click the GNS3 Logo at the top left and select "Management".

<img style={{ width: '100%' }} alt="Open management" src={useBaseUrl('img/web-ui/zh/mgmt-01-menu.jpeg')} />

## Users

Create and manage system user accounts. Supports authentication, personal information management, and organization relationship management.

<img style={{ width: '100%' }} alt="User management" src={useBaseUrl('img/web-ui/zh/mgmt-02-users.jpeg')} />

## Groups

Groups let you organize users into logical units. With groups, administrators can give the same permissions to many users at once.

<img style={{ width: '100%' }} alt="Group management" src={useBaseUrl('img/web-ui/zh/mgmt-03-groups.jpeg')} />

## Roles

Roles define what actions a user can perform. A role is a collection of privileges, and users get permissions by being assigned a role. The default roles are sufficient for most scenarios.

<img style={{ width: '100%' }} alt="Role management" src={useBaseUrl('img/web-ui/zh/mgmt-04-roles.jpeg')} />

## Pools

Pools are used to share projects with users or groups, enabling access control over projects.

<img style={{ width: '100%' }} alt="Pool management" src={useBaseUrl('img/web-ui/zh/mgmt-05-pools.jpeg')} />

## ACL (Access Control List)

ACL provides fine-grained access control based on API paths. It manages user and group access to different system resources.

<img style={{ width: '100%' }} alt="Access control" src={useBaseUrl('img/web-ui/zh/mgmt-06-acl.jpeg')} />

## Use Case: User Project Isolation

The admin creates two users, `zhangsan` and `lisi`, both in the `users` group. An ACE rule associates the `users` group with the `users` role and all endpoints. After configuration, `zhangsan` and `lisi` can each only see their own projects, while the `admin` can see all projects.

### Steps

**1. Create users**

On the Controller Management page, click Users → Add Users, fill in the user details and select the Users group, then click Add user:
<img style={{ width: '100%' }} alt="Create user" src={useBaseUrl('img/web-ui/zh/mgmt-07-create-user.jpeg')} />

Create both `zhangsan` and `lisi`:
<img style={{ width: '100%' }} alt="User list" src={useBaseUrl('img/web-ui/zh/mgmt-08-user-list.jpeg')} />

**2. Create ACL rules**

On the Controller Management page, click ACL → Add ACE, select All endpoints, the Users group, and the Users role, then click Add ACE:
<img style={{ width: '100%' }} alt="Create ACE rule" src={useBaseUrl('img/web-ui/zh/mgmt-09-create-ace.jpeg')} />

The ACE rule list after creation:
<img style={{ width: '100%' }} alt="ACE rule list" src={useBaseUrl('img/web-ui/zh/mgmt-10-ace-list.jpeg')} />

**3. Verify isolation**

After logging in, `zhangsan` can only see their own projects, and the same applies to `lisi`:
<img style={{ width: '100%' }} alt="zhangsan's projects" src={useBaseUrl('img/web-ui/zh/mgmt-11-project-zhangsan.jpeg')} />
<img style={{ width: '100%' }} alt="lisi's projects" src={useBaseUrl('img/web-ui/zh/mgmt-12-project-lisi.jpeg')} />

## Use Case: Project Sharing

If `zhangsan` wants to share a project with `lisi`, the admin can create a pool in Pools, add `zhangsan`'s project to it, then create an ACE rule in ACL to grant `lisi` access to the pool with the `users` role. This way, `zhangsan` and `lisi` can both work on the same project.

### Steps

**1. Create a pool**

On the Controller Management page, click Pools → Add Resource Pool, enter a pool name (e.g. `zhangsan-projects`), then click Add Resource Pool:
<img style={{ width: '100%' }} alt="Create pool" src={useBaseUrl('img/web-ui/zh/mgmt-13-create-pool.jpeg')} />

Click the pool name to enter its configuration page:
<img style={{ width: '100%' }} alt="Pool detail" src={useBaseUrl('img/web-ui/zh/mgmt-14-pool-detail.jpeg')} />

Select the project to share and click the add button:
<img style={{ width: '100%' }} alt="Add project to pool" src={useBaseUrl('img/web-ui/zh/mgmt-15-pool-add-project.jpeg')} />

The project appears in the pool after being added:
<img style={{ width: '100%' }} alt="Project added" src={useBaseUrl('img/web-ui/zh/mgmt-16-pool-project-added.jpeg')} />

**2. Create an ACE rule**

On the Controller Management page, click ACL → Add ACE, select the Resource pool option:
<img style={{ width: '100%' }} alt="Select resource pool option" src={useBaseUrl('img/web-ui/zh/mgmt-17-create-ace-pool.jpeg')} />

Select the pool `zhangsan-projects`, then set the sharing type to `users`, user to `lisi`, and role to `User`, then click Add ACE:
<img style={{ width: '100%' }} alt="Configure ACE rule" src={useBaseUrl('img/web-ui/zh/mgmt-18-ace-pool-config.jpeg')} />

The ACE rule list after creation:
<img style={{ width: '100%' }} alt="ACE rule list" src={useBaseUrl('img/web-ui/zh/mgmt-19-ace-pool-list.jpeg')} />

**3. Verify sharing**

Log in as `lisi`. The shared project from `zhangsan` is now visible in the project list:
<img style={{ width: '100%' }} alt="Lisi sees shared project" src={useBaseUrl('img/web-ui/zh/mgmt-20-shared-project-view.jpeg')} />
