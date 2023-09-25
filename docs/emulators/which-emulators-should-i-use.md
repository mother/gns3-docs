---
id: which-emulators-should-i-use
title: Which emulator should I use?
sidebar_label: Which emulator should I use?
---

GNS3 supports multiple emulators which you can use in your GNS3 projects. This gives you lots of flexibility when building topologies.

This document will help you decide which emulator or simulator you should use in your GNS3 topologies.

## Use GNS3 VM or not?
The GNS3 VM is recommended for most situations when you are using Windows or Mac OS.

The GNS3 development team have worked hard to create a lightweight, robust way of creating GNS3 topologies that avoids multiple common issues experienced when using a local install of GNS3. This includes the lack of proper Qemu support when running VIRL natively on Windows (not recommended), as well as a method to easily add docker containers to your projects.

However, if you only want to create basic GNS3 topologies using Cisco IOS routers, a local (Dynamips) install will suffice. This means that you only install the GNS3 GUI (all-in-one).

This is simpler in some ways to set up, but does have limitations and should be seen as the starting point in your GNS3 journey. As soon as you are comfortable with GNS3, it is recommended that you move to a GNS3 VM setup to make the most of GNS3 options and optimization.

## Cisco

### Dynamips
Dynamips is the technology leveraged by GNS3 since inception and emulates Cisco routers and basic switching using the Etherswitch module. It emulates older Cisco hardware such as 3725 routers and uses actual Cisco IOS images. You can copy a supported IOS image from a  physical network device and use it with GNS3.

You will need access to either physical hardware or have a Cisco support contract to get an IOS image. GNS3 is unable to provide IOS images for your labs.

Cisco does not support you using IOS images on non-Cisco hardware and you may run into bugs emulating Cisco hardware.

### Qemu and VIRL
Most manufacturers offer Qemu images which can also be used with GNS3. To use Cisco images such as IOSvL2, you will need to purchase a Cisco VIRL subscription. This will allow you to access images that work with GNS3 and approved by Cisco team. VIRL images are created specifically for simulation and work well especially if you want newer versions of the Cisco operating system and modern features.

**GNS3 RECOMMENDATION:**  Qemu is the best choice for creating and using Cisco GNS3 topologies. The topologies are portable and lighter than using native VirtualBox and VMware virtual machines. An ASAv for example can be run natively in VMware or in Qemu. If you are not using Linux it is recommended that you run VIRL appliances directly in the GNS3 VM which leverages Qemu.

:::note
Qemu (not VIRL) is also used for the emulation of other vendors such as Cumulus Linux. VIRL is Cisco specific, but Qemu is not.
:::

### IOU
IOU is a Cisco internal way of running IOS on Unix. It is not CPU and memory resource intensive which makes it a good choice.

IOU supports both routers and switches.

:::caution
IOU is a Cisco internal tool that has not been publicly released, and a Cisco employee will need to give you both the software and a license. You will also not get support from Cisco TAC.
:::

**GNS3 RECOMMENDATIONS** GNS3 does not recommend the use of IOU. The software is not officially released by Cisco, and those images can often be buggy.  If you want a stable platform and officially released Cisco images which are constantly updated, GNS3 recommends the use of Qemu and Cisco VIRL images.

## VMware / VirtualBox

Both VMware and VirtualBox provide an easy way to virtualize devices and can be added to your GNS3 topologies.

VMware workstation is recommended when nesting of operating systems is required due to better VTx support for both AMD and Intel CPUs.  

Virtualbox had nested virtualization support added in version 6.0, but as of 6.0.12, that support is for AMD CPUs only.  All questions about when nested virtualization support for Intel CPUs will be added, must be directed to the Virtualbox forums, not the GNS3 user forums.

:::caution
Be aware that GNS3 only integrates with VMware and VirtualBox and does not have control of the configuration of your virtual machines (VMs). Any configuration settings of the virtual machines is controlled by the virtualization software and not GNS3. This means that that you will not be able to copy or move your VM as part of your GNS3 project. Therefore, sharing of topologies or moving from one computer to another is more difficult when using native VMware and VirtualBox VMs.
:::

**ADVANTAGES:** VMware and Virtualbox do provide many advantages. They allow you to build complex GNS3 topologies that include servers and PCs that run software from Solarwinds and many other vendors which can be integrated directly in your GNS3 topologies.

## VPCS
Virtual PC Simulator (VPCS) is a lightweight way of emulating a very basic PC. VPCS uses very little memory and is therefore a good choice when you want to emulate a PC without a GUI and if you only require simple commands such as ping to test connectivity in your GNS3 networks.

If you want more complex servers or PCs, use Qemu, Docker,  VMware or VirtualBox.

## Docker
Docker support in GNS3 gives you the option of running multiple containers as part of your GNS3 topologies. Docker is a good choice when you want to emulate a server or PC providing a specific service such as TFTP server, mail server or web server; and you want to do that without using large amounts of memory.

Docker uses less memory than Qemu or a virtual machine (VM) in VMware / Virtualbox does and has become a popular way today of instantiating a process or service versus the traditional method of booting entire VM to provide an individual service.

In GNS3, Docker is used to emulate a lightweight Linux PC with one service. This is more efficient than the traditional way of

1. Emulating PC hardware using Qemu or VMware
2. Installing and running a full operating system (OS) on that emulated hardware
3. Installing and running a service (application) on the OS.

Traditionally, VMware or Qemu virtualizes the PC hardware, but you still need an operating system installed for applications. Docker takes this a step further by virtualizing the operating system for lightweight instantiation of multiple processes.

Because you are able to create Docker images with a shell that supports multiple tools, Docker can be used as a powerful replacement of VPCS.

Docker is more complicated to set up when compared to Qemu. However, because of the significant reduction in CPU and memory consumption, Docker is a great choice for your GNS3 projects.
