---
id: gns3-on-equinix
title: GNS3 on equinix
sidebar_label: GNS3 on Equinix
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## What is Equinix?

Equinix is a bare metal cloud provider, with datacenter locations 29 datacenters around the world.  

Unlike AWS or Google Cloud (which provide only Virtual Machines), Equinix Metal gives you full access to a true dedicated server, but with the same automation and flexibility you expect from a public cloud. Since you have direct access to the virtualization instructions on the CPU, running GNS3 on Packet is a great experience.

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/1.jpg')} />

- Video (Part 1): https://www.youtube.com/watch?v=5MzYIh3FK2g
- Video (Part 2): https://www.youtube.com/watch?v=KyxJ3l7GypU&feature=emb_title

## Sign up with Equinix Metal

First, you will need to sign up for an account at Equinix Metal. There is sometimes a manual review, which you can help to avoid by using a work email address (if you have one) and disconnecting from any VPN during the signup process.  If you are flagged for manual review, don’t worry! The Equinix Metal team is very responsive and will work with you to get everything squared away.  

A few things:
- Once your account is activated, we recommend activating Two Factor Authentication (2FA).  Simply visit 'Personal Settings' -> 'Security', scroll down to the Two Factor Authentication section, select either “ set up using an app” or “set up using SMS”, and follow the instructions:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/3.jpg')} />

Receiving your 2FA pin via SMS isn’t secure as using an authenticator app, like Google Authenticator.  When using the “set up using an app” option, scan in the QR code with your app, and you’ll receive a 6 digit pin (2FA token) that is only valid for a small amount of time, before a new token appears. Enter the token within that time, and click Enable to finish enabling 2FA for login.

When 2FA is enabled, you will log into your account using your username/password as usual:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/4.jpg')} />

Then you’ll  be presented with the second page, where you’d enter a new 2FA token. You’d open your authenticator app, select the entry that’s associated with your [deploy.equinix.com.net](https://deploy.equinix.com/) user account, and enter the token to finish logging in:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/5.jpg')} />

## Add your SSH Key

Next, add your SSH key to your account, since equinix servers can only be accessed via SSH. [Here is a great article](https://help.packet.net/article/2-deploy-a-server) which will help you get started.

While in the Personal Settings view in the Portal, click “SSH Keys”, and then “Add Key” to open up a sidebar:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/6.jpg')} />

(If you need help creating your public/private key pair, [this article](https://help.packet.net/article/31-ssh-access) will walk you through the steps)

In the sidebar, give your key a title, and then paste the contents of your public key into the box shown below, and click Add:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/7.jpg')} />

Your key will be added to your Portal:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/8.jpg')} />

- Video: https://www.youtube.com/watch?v=nWnxKHmaGNU

## Deploy your Server

Once you are ready, you can go ahead and deploy a new server with the Ubuntu 18.04  OS in the Equinix Metal location which is closest to you.  

- While GNS3 works on the [c3.small.x86](https://deploy.equinix.com/product/servers/c3-small/) server, you can allways upgrade to a larger instance.
- GNS3 is not supported for Equinix’s ARM server offerings..
- A listing of available bare metal servers can be found [here](https://deploy.equinix.com/product/servers/).

:::important
At equinix you are getting your own dedicated bare metal machine that is yours alone from the time you provision it until you actually delete the device from your account.  So even if you were to power it down, it would still accrue usage until you actually delete it completely.
:::

- Video: https://www.youtube.com/watch?v=meygA4aEN5I

:::caution
If you use IOU, the name of the machine should be exactly the name you have in your license file. The characters case is important: gns3vm is different from GNS3VM.
:::

First, click on Organization Settings in the Portal, click **Projects**, and click **'Create New Project'**:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/9.jpg')} />

Give the project a name, and click Create to start the deployment process for a server:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/10.jpg')} />

Since there currently are no servers provisioned and deployed in your new project, click “Deploy Servers”:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/11.jpg')} />

On the next screen, give your server a hostname, select the location and type of server, as well as the OS you’d like installed  (Ubuntu recommended):

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/12.jpg')} />

When ready, click the Deploy Servers to start the automated provisioning process:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/13.jpg')} />

This will take anywhere between 5 to 10 minutes, depending on the hardware. If you click the symbol to the right  (below “Tags”), you can open up a sidebar to watch the progress of the automated provisioning:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/14.jpg')} />

When provisioning is complete, you can use SSH to connect to the public IP of your server:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/15.jpg')} />

:::note
You’ll need to log in as the user “root” with no password, using the private key that was generated earlier, when you created the public/private keypair. This step varies between the terminal you use.
:::

## Install GNS3

With your server available, you can install GNS3. Copy and paste the following commands on the terminal.

```
cd /tmp
curl https://raw.githubusercontent.com/GNS3/gns3-server/master/scripts/remote-install.sh > gns3-remote-install.sh
bash gns3-remote-install.sh --with-openvpn --with-iou --with-i386-repository
```

If everything is OK, you will see this message:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/16.jpg')} />

Reboot the server from the equinix portal or by issuing a reboot command on the terminal.
That’s it!


## Configure GNS3 in order to use the new server

If you want to use a local GNS3 installation as well as a remote installation, you can use the [settings profiles](https://docs.gns3.com/1nCRIQ3AfdPbiYeL8RSC28Y_skgRJOfxPlz1MCeX94U4/index.html) CHECKLINK to alternate between them.

At startup in the setup wizard choose **Run everything on a remote server**

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/17.jpg')} />

And put the server settings. The IP needs to be **172.16.253.1**

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/18.jpg')} />

- Video: https://www.youtube.com/watch?v=ybjS8GV6k5g
