---
title: User Management
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# User Management

On the project home page, click the GNS3 Logo at the top left and select "Management".

<img style={{ width: '100%' }} alt="Open management" src={useBaseUrl('img/web-ui/zh/mgmt-01-menu.jpeg')} />

The Management page is the admin center of the GNS3 Web UI. It is used to manage system users, permissions, and resource allocation. From this page, administrators can control who can access the GNS3 system, what actions they can perform, and how compute resources are assigned.

## Users

Create and manage system user accounts. Supports authentication, personal information management, and organization relationship management.

<img style={{ width: '100%' }} alt="User management" src={useBaseUrl('img/web-ui/zh/mgmt-02-users.jpeg')} />

### Main Features

**Account management:**
- Create user accounts with username, email, full name, and password
- Edit user information (username, email, full name, password)
- Delete user accounts (except the super admin)
- View all users list and details

**Authentication management:**
- User login authentication (OAuth2 form authentication and JSON authentication)
- User logout (revokes all existing tokens)
- JWT token mechanism with token version control
- Passwords are stored with bcrypt hashing, never in plain text

**Personal information management:**
- View current logged-in user information
- Update personal information (password, email, full name)
- Email uniqueness check

**Organization relationships:**
- View which groups a user belongs to
- Support membership in multiple groups
- Group permission inheritance mechanism

### Account Attributes

| Field | Description |
|-------|-------------|
| username | Username, must be unique in the system |
| email | Email address, must be unique in the system |
| full_name | User's full name |
| is_active | Whether the account is active |
| is_superadmin | Whether the user is a super admin |
| last_login | Time of last login |
| token_version | Token version (used for logout) |

### Security Limits

- Username: At least 3 characters. Only letters, numbers, underscores, and hyphens are allowed.
- Password: At least 8 characters, at most 100 characters.
- Username and email must be unique in the system.
- The super admin account cannot be deleted.

### Permission Control

User management operations need specific privileges:

| Privilege | Description |
|-----------|-------------|
| User.Audit | View user list and details |
| User.Allocate | Create and delete users |
| User.Modify | Edit user information |
| Group.Audit | View which groups a user belongs to |

### Automatic Cleanup

When you delete a user, the system cleans up automatically:
- Related ACL entries
- User-group relationships
- Uses database CASCADE to keep data consistent

### Use Cases

- Team collaboration: Create a separate account for each team member
- Temporary user access control
- Auditing and log tracking

## Groups

Groups let you organize users into logical units. They make permission management and user organization easier. With groups, administrators can give the same permissions to many users at once. This saves you from setting permissions one by one.

<img style={{ width: '100%' }} alt="Group management" src={useBaseUrl('img/web-ui/zh/mgmt-03-groups.jpeg')} />

**System features:**
- Supports many-to-many relationships: One user can be in many groups, and one group can have many users
- Deeply integrated with ACL: Batch permission assignment through groups
- Built-in group protection: System-defined groups cannot be deleted
- Flexible member management: Add and remove group members dynamically

### Group Parts

- **Basic information**: Group identifier (UUID), group name (unique), creation time, update time, built-in flag
- **Member list**: All user accounts in the group, linked through a join table for many-to-many relationships
- **Permission association**: Related ACEs. All group members inherit the group's permission settings.

### Main Features

**Group management:**
- Create custom groups with a name (must be unique)
- Edit group name (built-in groups cannot be modified)
- Delete groups (cleans up member associations and ACL entries automatically; built-in groups cannot be deleted)
- List all groups and view their details

**Member management:**
- Add existing users to a group (prevents duplicate additions)
- Remove users from a group
- View the full member list of a group

### Built-in Groups

| Group Name | Description | Permissions |
|------------|-------------|-------------|
| Administrators | Admin group | Works with the Administrator role. Has system administration permissions. |
| Users | Normal user group | Works with the User role. Has daily operation permissions. |

### Naming Rules

- At least 3 characters long
- Only letters, numbers, underscores (_), and hyphens (-) are allowed
- Must be unique in the system
- Use descriptive names, for example `network-team`, `project-admins`

### Permission Control

Group management privileges:

| Privilege | Description |
|-----------|-------------|
| Group.Audit | View groups and member lists |
| Group.Allocate | Create and delete groups |
| Group.Modify | Edit group information and manage members |

**Permission inheritance**: Group members automatically inherit all permissions that are assigned to the group. A user's own permissions come before group permissions.

### Use Cases

- **Organize by department**: Network team group, system admin group, development team group, etc.
- **Batch permission assignment**: Give access to a whole project team at once
- **Project collaboration**: Different project groups access their own project resources
- **Permission levels**: Admin group, operator group, read-only group

### Important Notes

- Built-in groups cannot be deleted, and their basic information cannot be changed.
- When you add a user to a group, the user gets the group's permissions right away. When you remove the user, the permissions are lost right away.
- Deleting a group cleans up related ACE entries. This cannot be undone.
- A user may have permissions from multiple groups at the same time.

## Roles

Roles are a core part of the GNS3 permission control system. They define what actions a user can perform. A role is a collection of privileges. Users get permissions by being assigned a role.

<img style={{ width: '100%' }} alt="Role management" src={useBaseUrl('img/web-ui/zh/mgmt-04-roles.jpeg')} />

**System features:**
- Fine-grained permission control based on privileges
- Supports built-in roles and custom roles
- Deeply integrated with ACL (Access Control List)
- Supports separation of duties and least-privilege principle

### Role Parts

Each role has these core parts:

**Basic information**: Role name (unique identifier), description, built-in flag (built-in roles are protected and cannot be deleted)

**Permission collection**: A list of privileges. Each privilege controls one specific action. They use a hierarchical naming system, for example `Project.Audit`, `Node.Allocate`.

### Privilege System

GNS3 uses 46 predefined privileges to control operations on different resource types:

| Privilege Type | Description | Example |
|----------------|-------------|---------|
| View privilege | Lets you view information about a resource type | Project.Audit, Node.Audit |
| Allocate privilege | Lets you create and delete a resource | Project.Allocate, Node.Allocate |
| Modify privilege | Lets you change an existing resource configuration | Project.Modify, Node.Modify |
| Special operation | A specific function's dedicated permission | Node.Console, Link.Capture |

**Supported resource types**: User, Group, Role, ACE, Project, Snapshot, Node, Link, Drawing, Symbol, Template, Image, Compute, Appliance, Pool

### Built-in Roles

GNS3 provides 7 predefined built-in roles:

| Role | Privileges | Main Functions | When to Use |
|------|------------|----------------|-------------|
| Administrator | 46 | Has all system privileges. Skips ACL checks. | System administrator |
| User | 29 | Full project management, topology operations, device console | Network engineer, regular operator |
| Auditor | 11 | View permission for all resources. Cannot create, modify, or delete. | Auditor, compliance officer |
| Template Manager | 9 | Create, modify, and view templates and images | Resource preparation staff |
| User Manager | 6 | Create, modify, and delete user accounts and groups | HR administrator |
| ACL Manager | 6 | Create, modify, and delete roles and ACEs | Security administrator |
| No Access | 0 | Has no privileges. Used to deny access clearly. | With ACL DENY rules |

### Main Features

- **Create role**: Create a custom role with a name and description. The name must be unique.
- **Edit role**: Change the description. Add or remove privileges. (Built-in role names and descriptions cannot be changed.)
- **Delete role**: Delete a custom role. Related ACL entries are cleaned up automatically. (Built-in roles cannot be deleted.)
- **Privilege management**: Assign or remove privileges from a role. One privilege can belong to many roles.
- **Query**: List all roles. View a role and its privileges.

### Role Protection

- Built-in roles cannot have their basic information changed or be deleted.
- You can add or remove privileges from built-in roles, but this is not recommended.
- When you delete a role, related ACE entries are cleaned up automatically.

### Use Cases

**Permission level management**: Super admin (Administrator) → Operator (User) → Auditor

**Least-privilege principle**: Give each user the smallest set of privileges they need to do their job. Do not give more than needed.

**Separation of duties:**
- ACL Manager handles permission configuration
- User Manager handles user account management
- Template Manager handles templates and images
- User role handles daily topology operations
- Auditor role handles compliance checks

### Role and Permission Integration

Roles use ACEs to give permissions to users or groups. Roles act as a middle layer to make permission management simpler. One role can apply to many paths and many users.

**Permission check flow**: User sends API request → Check super admin → Check user ACEs → Check group ACEs → Verify role privileges → Allow or deny

### Best Practices

- Use built-in roles first to keep the system stable
- For custom roles, follow the least-privilege principle
- Control Administrator role assignments strictly
- Use the Auditor role when someone only needs to view
- Review and clean up unnecessary custom roles regularly

## Pools

Pools are a way to group projects into logical units. Each pool contains a set of projects. You can manage and control access to these projects as a group.

<img style={{ width: '100%' }} alt="Pool management" src={useBaseUrl('img/web-ui/zh/mgmt-05-pools.jpeg')} />

Pools are used for project organization, not for assigning compute resources (CPU, memory). Compute resources are managed separately by compute nodes.

### Main Features

**Pool management:**
- Create a pool with a unique name
- Edit a pool name
- Delete a pool (deletes the organization only, not the actual projects)
- View all pools and their details

**Project management:**
- Add a project to a pool
- Remove a project from a pool
- View all projects in a pool

**Permission control:**
- View permission (Pool.Audit): Lets users view pools and the projects in them
- Allocate permission (Pool.Allocate): Lets users create and delete pools
- Modify permission (Pool.Modify): Lets users edit pool names and add or remove projects from a pool

### Use Cases

- **Project organization**: Group projects by department, customer, or course
- **Permission management**: Set the same access permissions for a whole pool
- **Project isolation**: Different teams use different pools to avoid mixing up projects

### Important Limits

- One project can belong to only one pool
- Currently, only GNS3 project type resources are supported
- Deleting a pool does not delete the actual project files or configurations

## ACL (Access Control List)

ACL provides fine-grained access control based on API paths. It manages user and group access to different system resources. ACL is made up of ACEs (Access Control Entries). Each ACE defines one access rule.

<img style={{ width: '100%' }} alt="Access control" src={useBaseUrl('img/web-ui/zh/mgmt-06-acl.jpeg')} />

**System features:**
- Path-based permission control with tree structure inheritance
- Deeply integrated with the RBAC permission system
- Supports user-level and group-level permission settings
- Built-in deny-first security mechanism

### ACE Parts

Each ACE has these key parts:

**Path:**
- The API endpoint path. Defines what resources the rule applies to.
- Supports all levels from the root path to specific resources.
- Examples: `/projects`, `/projects/{project_id}`, `/templates`, `/pools/{pool_id}`
- The system checks that the path is a valid API endpoint when you create it.

**Object type**: User or group

**Role:**
- The role that is linked to the ACE. Defines what operations can be done.
- The role contains privileges such as Project.Audit, Project.Allocate, Pool.Modify, etc.
- You must define the role and its privileges in the Roles section first.

**Access control (Allowed):**
- ALLOWED: Gives access permission
- DENY: Denies access clearly. DENY rules come before ALLOW rules.

**Propagate:**
- When enabled: The permission applies to all sub-resources under the current path automatically.
- When disabled: The permission applies to the exact path only.
- Default is enabled.

### Permission Check Mechanism

**Inheritance rules (priority from high to low):**

1. **Super admin**: Skips all ACL checks. Has all permissions.
2. **User-specific permissions**: ACE rules that are assigned directly to the user.
3. **Group permissions**: ACE rules from the groups the user belongs to.
4. **Path depth first**: Permissions on deeper paths override permissions inherited from higher paths.

**Check process:**
- The system goes from the specific request path back to the root path in reverse.
- If it finds a DENY rule, it stops and denies access right away.
- If it finds a matching ALLOWED rule with propagation, it allows access.
- User permissions are always checked before group permissions.

**DENY first**: Even if there are many ALLOWED rules, just one matching DENY rule will block access.

### Main Features

- Create new access control rules (the system checks that the path is valid)
- View all existing ACEs
- Update existing ACEs
- Delete one ACE or many ACEs at once
- List all resource endpoints that can be used in ACL settings

### Supported Resource Types

| Category | Path | Description |
|----------|------|-------------|
| Project | `/projects`, `/projects/{id}` | All projects and a specific project |
| Project sub-resources | `/projects/{id}/nodes`, `/projects/{id}/links` | Nodes and links |
| Template | `/templates`, `/templates/{id}` | Template management |
| Image | `/images`, `/images/{filename}` | Image management |
| Pool | `/pools`, `/pools/{id}` | Pool management |
| User | `/access/users`, `/access/users/{id}` | User management |
| Group | `/access/groups`, `/access/groups/{id}` | Group management |
| Role | `/access/roles`, `/access/roles/{id}` | Role management |
| ACE | `/access/acl`, `/access/acl/{id}` | ACL management |

### Use Cases

- **Project isolation**: Set separate access permissions for different customers or department projects
- **Role permission management**: Admin has full access, operator can create and modify, auditor is read-only
- **Fine-grained control**: Users can create projects but cannot delete templates
- **Security protection**: Set DENY rules on sensitive paths to prevent mistakes

### Example Configurations

**Give a group read-only access to a specific project:**
- Path: `/projects/{project_id}`, Type: group, Role: Reader
- Allowed: Yes, Propagate: Yes

**Block all access to template management completely:**
- Path: `/templates`, Type: group, Role: any
- Allowed: No, Propagate: Yes

**Give a user permission to create projects:**
- Path: `/projects`, Type: user, Role: ProjectCreator
- Allowed: Yes, Propagate: No

### Important Notes

- User-specific permissions come before group permissions.
- Permissions on deeper paths override permissions inherited from above.
- Permission checks happen in real time. Every API request is checked.
- When a project or pool is deleted, related ACEs are cleaned up automatically.
- When a user or group is deleted, ACEs are NOT deleted automatically. You must clean them up manually.
- When you create an ACE, the path must be a real API endpoint in the system.
- Super admins skip all ACL checks. No ACE rules can limit them.
- Every ACE must be linked to a role that already exists.
- Projects inside a pool have special permission inheritance logic.
