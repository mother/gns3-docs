---
id: one-server-multiple-clients
title: One GNS3 server, multiple clients
sidebar_label: One GNS3 server, multiple clients
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::note
This documentation is only for GNS3 2.0 and later
:::

Since GNS3 2.0 you can use a central GNS3 Server and multiple GNS3 clients. The projects and devices templates will be share and synchronize with all users. All changes are real time if you put a node in a project other user will see it immediately. Your appliances images will be uploaded via the GUI and stored on the remote server.

:::caution
This is an advanced usage. We recommend that the administrator which setup this installation try before with a local installation.
:::

:::caution
Their is no user isolation, all users can view all projects and modify them
:::

- Video: https://www.youtube.com/watch?v=hVPW5ijvNFo

## Setup the Server

First you need to install the GNS3 server.

Two options:
- [Install on a remote server](./remote-server)
- [Use the GNS3 VM for ESXi as your server](./esxi)

If you use the GNS3 VM for ESXi it’s your remote server, you don’t need a remote server and the GNS3 VM.

### What is the difference with a remote GNS3 VM?

When you use a remote GNS3 VM you have a GNS3 server running on your local machines and all the settings are stored on the local machine. Here, the settings are shared on stored on the remote server.

## Setup your Clients

If you want to use a local GNS3 installation and a remote installation you can use the [settings profiles](../../using-gns3/advanced/settings-profiles). At startup in the setup wizard choose **Run appliances on a remote server**

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/one-server-multiple-clients/1.jpg')} />

And put the server settings:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/one-server-multiple-clients/2.jpg')} />

Click **Finish** in the next window, to complete the setup:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/one-server-multiple-clients/3.jpg')} />

That’s all!

:::note
You probably don’t need to configure the GNS3 VM or an additional remote server. If you need to use the GNS3 VM you should think about using Linux . Additional servers are required only if you need more compute power.
:::
