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

The admin creates two users, zhangsan and lisi, both in the users group. An ACE rule is created to associate the users group with the users role and all endpoints. After configuration, zhangsan can only see projects they created, and lisi can only see projects they created. Admin can see all projects.

### Steps

**1. Create users**

On the Controller Management page, click Users, then click Add Users. In the Create new users dialog, enter: Username / Full name / Email / Password / Confirm Password, select the Users group under Add user to groups, then click Add user. Here is an example of creating user zhangsan:
<img style={{ width: '100%' }} alt="Create user" src={useBaseUrl('img/web-ui/zh/mgmt-07-create-user.jpeg')} />

Create two users, zhangsan and lisi:
<img style={{ width: '100%' }} alt="User list" src={useBaseUrl('img/web-ui/zh/mgmt-08-user-list.jpeg')} />

**2. Create ACL rules**

Associate the users group (which the newly created users belong to) with all endpoints and the users role.

On the Controller Management page, click the ACL tab, then click Add ACE. In the Create new ACE dialog, select All endpoints, then select the Users group, choose Users as the role, and click Add ACE:
<img style={{ width: '100%' }} alt="Create ACE rule" src={useBaseUrl('img/web-ui/zh/mgmt-09-create-ace.jpeg')} />

After the ACE rule is added:
<img style={{ width: '100%' }} alt="ACE rule list" src={useBaseUrl('img/web-ui/zh/mgmt-10-ace-list.jpeg')} />

**3. Verify isolation**

After logging in, zhangsan can only see projects where created_by is zhangsan. Lisi can only see projects where created_by is lisi:
<img style={{ width: '100%' }} alt="zhangsan's projects" src={useBaseUrl('img/web-ui/zh/mgmt-11-project-zhangsan.jpeg')} />
<img style={{ width: '100%' }} alt="lisi's projects" src={useBaseUrl('img/web-ui/zh/mgmt-12-project-lisi.jpeg')} />

## Use Case: Project Sharing

If zhangsan wants to share a project with lisi, the admin can create a pool in Pools, add zhangsan's project to it, then create an ACE rule in ACL to grant lisi access to the pool with the users role. This way, zhangsan and lisi can both work on the same project.
