---
title: 3.1 New Features Overview
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 3.1 New Features Overview

GNS3 3.1 is all about moving everything to the web. You can now do all operations (console, VNC, Wireshark) directly in your browser. It also adds AI help and fault injection. These changes make the user experience much better and improve network simulation.

The Web UI project was upgraded from Angular 14 to Angular 21. AI helped a lot with moving the code.

## 1. Web Console

- **What it does**: Access the node console directly in your browser. No need for external terminal software.
- **How it works**: Uses xterm.js for an embedded terminal.
- **Features**: Supports multiple tabs and drag-and-drop.

<img style={{ width: '100%' }} alt="Web Console" src={useBaseUrl('img/web-ui/zh/feature-console.jpeg')} />

## 2. Web VNC

- **What it does**: Access graphical interface nodes through VNC in your browser.
- **How it works**: The frontend uses noVNC.
- **Use case**: Access virtual machines with a graphical interface (like Linux Desktop).

<img style={{ width: '100%' }} alt="Web VNC" src={useBaseUrl('img/web-ui/zh/feature-vnc.jpeg')} />

## 3. Web Wireshark

- **What it does**: Capture and analyze network packets directly in your browser.
- **How it works**: The frontend uses xpra-html5 client.
- **Features**: Supports inline window display and multi-link packet capture at the same time.

<img style={{ width: '100%' }} alt="Web Wireshark" src={useBaseUrl('img/web-ui/zh/feature-wireshark.jpeg')} />

## 4. AI Assistant

- **What it does**: A smart assistant powered by large language models.
- **How it works**: Built with LangChain/LangGraph. Uses Nornir/Netmiko to configure devices.
- **Capabilities**: Design topologies with natural language, get configuration advice, diagnose faults, automate tasks, and analyze packet capture data.

<img style={{ width: '100%' }} alt="AI Assistant" src={useBaseUrl('img/web-ui/zh/feature-ai.jpeg')} />

## 5. Fault Injection

- **What it does**: Uses AI together with the real device settings in your topology. It calls predefined faults from the GNS3-Skills repository to simulate network problems.
- **How it works**: Injects faults by running configuration commands.
- **Use case**: Practice fault recovery, learn protocols, and more.

<img style={{ width: '100%' }} alt="Fault Injection" src={useBaseUrl('img/web-ui/zh/feature-fault-inject.jpeg')} />

## 6. GNS3 Skills Repository

- **What it does**: An online AI skills package repository that is easy to update.
- **Content**: Prompts and skill definitions.
- **Location**: On GitHub at [gns3-skills](https://github.com/gns3/gns3-skills).
- **Use case**: Expand the AI Assistant's capabilities.

