---
title: How to edit a project
功能标签: [操作]
难度: 入门
前置知识: "Basic familiarity with the GNS3 Web UI project topology"
预计阅读时间: 10 minutes
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# How to edit a project

Edit Project Dialog allows you to configure project properties, documentation, and global variables through three tabbed sections.

You can open the Edit Project Dialog from two locations:

- **Project list page** — Click the edit button.
<img style={{ display: 'block', margin: '0 auto' }} alt="Project list edit button" src={useBaseUrl('img/web-ui/zh/edit-project-01-list-page.jpeg')} />

- **Topology page** — Click the top-left logo → Project Settings → Edit Project.
<img style={{ display: 'block', margin: '0 auto' }} alt="Topology page menu" src={useBaseUrl('img/web-ui/zh/edit-project-02-topology-menu.jpeg')} />

## General（常规设置）

Configure basic project information and canvas dimensions.

**Project name** — Text input, full width, required.

**Scene dimensions** — Scene width and height (in pixels).

**Grid sizes** — Node grid size and Drawing grid size for alignment.

**Checkbox options:**
- Open this project in the background when GNS3 controller starts
- Start all nodes when this project is opened
- Leave this project running in the background after closing
- Show interface labels at start

<img style={{ display: 'block', margin: '0 auto' }} alt="General tab" src={useBaseUrl('img/web-ui/zh/edit-project-03-general-tab.jpeg')} />

## Readme（说明文档）

Markdown editor with live preview for project documentation.

- Click the **Edit** button to enter edit mode.
<img style={{ display: 'block', margin: '0 auto' }} alt="Readme preview mode" src={useBaseUrl('img/web-ui/zh/edit-project-04-readme-edit.jpeg')} />

- In edit mode, you can enter Markdown or plain text. Mermaid rendering is not supported. Content auto-saves after 2 seconds of inactivity.
<img style={{ display: 'block', margin: '0 auto' }} alt="Readme editing" src={useBaseUrl('img/web-ui/zh/edit-project-05-readme-editing.jpeg')} />

## Global variables（全局变量）

Manage project-level variables, primarily used for Docker container environment variable template substitution.

**Add variable:** Enter Name and Value, click **Add variable**.

**Variable list:** Table with Name, Value, and Actions (delete) columns.

<img style={{ display: 'block', margin: '0 auto' }} alt="Global variables tab" src={useBaseUrl('img/web-ui/zh/edit-project-06-global-vars.jpeg')} />

:::note
Project Global variables are automatically set as Docker container environment variables. After adding, deleting, or modifying variables, the containers will be automatically rebuilt to apply the changes.
:::

### Use Cases

- **Environment reuse**: Use different variable values across dev/test/production environments
- **IP address management**: Define common IP variables and reuse across multiple containers
- **Centralized configuration**: Avoid repeating the same values across multiple Docker containers
- **Dynamic configuration**: Modify variable values to affect all containers that use them
- **Project templates**: Create reusable topology templates with portable variable configurations

:::note
Currently only Docker containers support variable substitution. Other VM types (QEMU, VirtualBox, etc.) do not support project variables.
:::

### Usage Example: Unified Docker Container Environment Variables

A project has 3 Alpine Linux Docker containers that need the following environment variables:

| Variable | Value | Purpose |
|---|---|---|
| `TZ` | `Asia/Shanghai` | Set container timezone |
| `LANG` | `en_US.UTF-8` | Set container language |
| `APP_ENV` | `development` | Identify running environment |
| `DEBUG_LEVEL` | `verbose` | Control log verbosity |

- Add these variables one by one in the Edit Project dialog's Global variables tab.
<img style={{ display: 'block', margin: '0 auto' }} alt="Adding global variables" src={useBaseUrl('img/web-ui/zh/edit-project-07-vars-adding.jpeg')} />

- After adding, click the **Apply** button.
<img style={{ display: 'block', margin: '0 auto' }} alt="Click Apply" src={useBaseUrl('img/web-ui/zh/edit-project-08-vars-apply.jpeg')} />

- Start the Alpine Linux Docker containers, connect via Web Console, and run the `export` command to verify the global variables have taken effect.

<img style={{ display: 'block', margin: '0 auto' }} alt="Environment result 1" src={useBaseUrl('img/web-ui/zh/edit-project-09-env-result1.jpeg')} />

<img style={{ display: 'block', margin: '0 auto' }} alt="Environment result 2" src={useBaseUrl('img/web-ui/zh/edit-project-10-env-result2.jpeg')} />

<img style={{ display: 'block', margin: '0 auto' }} alt="Environment result 3" src={useBaseUrl('img/web-ui/zh/edit-project-11-env-result3.jpeg')} />
