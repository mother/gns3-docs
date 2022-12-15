---
id: gns3-on-equinix
title: GNS3 on equinix
sidebar_label: GNS3 on Equinix
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## What is Equinix?

Equinix is a bare metal cloud provider, with datacenter locations 29 datacenters around the world.  

Unlike AWS or Google Cloud (which provide only Virtual Machines), Equinix Metal gives you full access to a true dedicated server, but with the same automation and flexibility you expect from a public cloud. Since you have direct access to the virtualization instructions on the CPU, running GNS3 on Packet is a great experience.

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-equinix/equinix-metal.png')} />

- Video (Part 1): https://www.youtube.com/watch?v=5MzYIh3FK2g
- Video (Part 2): https://www.youtube.com/watch?v=KyxJ3l7GypU&feature=emb_title

### Special offers for GNS3 users only:  

**$25 Trial Credit** - Equinix Metal is offering $25 in credit for GNS3 users to help them kick the tires. Simply use code “GNS3METAL” when signing up.

## Sign up with Equinix Metal

First, you will need to sign up for an account at Equinix Metal [here](https://console.equinix.com/sign-up). Here provide First & Last Name, E-Mail and a passowrd. Then check the "I agree to the Acceptable Use Policy and Privacy Policy" if you do.
<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-equinix/sign-up.png')} />

A few things:
- Once your account is activated, we recommend activating Two Factor Authentication (2FA) (currently only available in the legacy portal).  Simply visit 'My Profile' -> 'Security', scroll down to the Two Factor Authentication section, select either “ set up using an app” or “set up using SMS”, and follow the instructions:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-equinix/equinix-mfa.png')} />

Receiving your 2FA pin via SMS isn’t secure as using an authenticator app, like Google Authenticator.  When using the “set up using an app” option, scan in the QR code with your app, and you’ll receive a 6 digit pin (2FA token) that is only valid for a small amount of time, before a new token appears. Enter the token within that time, and click Enable to finish enabling 2FA for login.

When 2FA is enabled, you will log into your account using your username/password as usual.

## Deploy your Server

Once you are ready, you can go ahead and deploy a new server with the Ubuntu 22.04 OS in the Equinix Metal location which is closest to you.  

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

The first thing you must do is to create a Organization, this is normally promted just after creation. if not [link here](https://console.equinix.com/setup/organization) Fill out all the information including creditcard.

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-equinix/setup-org.png')} />

Since there currently are no project, create a new project, click “add new”:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-equinix/setup-done.png')} />

Since there currently are no servers provisioned and deployed in your new project, click “Deploy On Demand”:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-equinix/deploy-servers.png')} />

On the next screen, give your server a hostname, select the location and type of server, as well as the OS you’d like installed  (Ubuntu recommended):

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-equinix/order.png')} />

This will take anywhere between 5 to 10 minutes, depending on the hardware. If you click the symbol to the right  (below “Tags”), you can open up a sidebar to watch the progress of the automated provisioning:


:::note
You’ll need to log in as the user “root” with no password, using the private key that was generated earlier, when you created the public/private keypair. This step varies between the terminal you use.
:::
