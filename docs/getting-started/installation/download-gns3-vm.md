---
id: download-gns3-vm
title: Downloading the GNS3 VM
sidebar_label: Download the GNS3 VM
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Which Virtualization Software? VirtualBox or VMware?
In this document we will explain the import of the GNS3 VM for VMware, but instructions for VirtualBox are similar (instructions for using the new Hyper-V and KVM versions of the GNS3 VM will be discussed in a separate post).

VMware is a better option because it’s faster and supports nested virtualization (the VMs inside the VM are accelerated by your CPU). The speed difference is important and some VMs will be too slow on VirtualBox* (see note below).

:::note
For GNS3 1.3 please read [this documentation](download-32-bit).
:::

Users running the GNS3 VM in Workstation Player should look at Note 3 at the end of the article, for a fix with WS Player 16.x versions and VIX 1.17

## Downloading the VM

You can obtain the GNS3-VM in several ways. You can download it via https://gns3.com/software/download-vm. Select either the Virtualbox, VMware Workstation/Fusion, or VMware ESXi versions.

These will be .zip archives, so make sure you choose “Save as…” when downloading them, and then extract them for import into your hypervisor of choice.

The second option is to browse to the [GNS3 release page on github](https://github.com/GNS3/gns3-gui/releases), where you can download the GNS3 application, the various versions of the GNS3 VM, and the source code from the same section:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/download-gns3-vm/1.jpg')} />

:::caution
Running the VirtualBox version on VMware or the VMware version on VirtualBox will not work
:::

:::caution
VMware Workstation and VMware ESXi require different GNS3 VM files
:::

:::note
VMware Fusion is the marketing name for VMware Workstation on Mac OSX
:::

A third option is to download it via a provided link in the GNS3 Setup Wizard:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/download-gns3-vm/2.jpg')} />

When you click that embedded link, it will automatically start downloading the GNS3-VM .zip file from the GNS3 github release page.  

In order to see this particular option, you’ll need to choose the “Run modern IOS (IOSv or IOU), ASA, and appliances from non-Cisco manufacturers”  option in the Setup Wizard, as shown below, since this indicates that you will want to use the GNS3-VM (the other two indicate either local or remote server use only):

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/download-gns3-vm/3.jpg')} />

:::note
The GNS3 VM has a built in upgrade mechanism so you will not need to download again for every release.
:::

You can get 20% off [VMware Workstation Pro](https://gns3.com/marketplace/software/workstation-pro-15) and [VMware Fusion](https://gns3.com/marketplace/software/fusion-8) thanks to our deal with VMware.

:::note
Nested hardware virtualization functionality, and nested paging, were added to Virtualbox starting in version 6.0 with desktops/laptops that have AMD CPUs (such as their recent Ryzen processors) and from 6.1 Also supports with Intel CPUs.  

This means that with supported CPUs, it is viable to run the GNS3 VM in Virtualbox 6.1 (Virtualbox 6.1.16 was the latest tested, as of this writing). Questions about support of Virtualbox should be directed to the Virtualbox support forums only, not the GNS3 forums!
:::

Use of Virtualbox to run the GNS3 VM will be covered in a separate article

:::note
Users running the GNS3 VM in WS Player have been reporting issues with the versions of VIX 1.17 and Player 15.x.  Please use version 16.x and newer.
:::
