---
id: general-faq
title: General FAQ
sidebar_label: General FAQ
---

## IOU
### What is iourc.txt?
It’s your IOU licence file. This file is provided by Cisco you can’t get it from other sources.

### What is iouyap?
It’s a program bridging your iou to the GNS3 network. It’s removed in GNS3 2.0 and replace by ubridge.

## GNS3 VM
### What is the IOUVM?
The IOUVM was the VM provided with GNS3 1.3 in order to run IOU devices. Starting with 1.4 it’s replaced by the GNS3 VM.

### What is the GNS3 VM?
The GNS3 VM is a requirement if you want to run Qemu based devices on Windows or Mac OS. It is a virtual machine that you import into VMware Workstation (recommended) or VirtualBox on your local PC when running a local version of the GNS3 VM. It can also be used in a distriubted environment where you run the client software (GNS3-all-in-one) on your local PC and the GNS3 VM on a Hypervisor such as ESXi or the cloud.

### Should I use the GNS3 VM?
If all you are going to create are basic GNS3 topologies consisting of Cisco routers using an IOS image, than the GNS3 VM is not required. In this case you would only need the GNS3 all-in-one software which you install on your local PC. This is called legacy mode or Dynamips mode.

If you want to run IOSv images, IOU images, ASAv or create complex network topologies, the GNS3 VM is recommended and is in some cases required.

**Recommendation** Use the GNS3 VM in most cases.
