---
id: what-is-gns3
title: Getting Started with GNS3
sidebar_label: What is GNS3?
slug: /
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Introduction

GNS3 is used by hundreds of thousands of network engineers worldwide to emulate, configure, test and troubleshoot virtual and real networks. GNS3 allows you to run a small topology consisting of only a few devices on your laptop, to those that have many devices hosted on multiple servers or even hosted in the cloud.

GNS3 is open source, free software that you can download from http://gns3.com

It is actively developed and supported and has a growing community of over 800,000 members. By joining the GNS3 community you will be joining fellow students, network engineers, architects and others that have downloaded GNS3 over 10 million times to date. GNS3 is used in companies all over the world including Fortune 500 companies.

GNS3 can help you prepare for certification exams such as the Cisco CCNA, but also help you test and verify real world deployments. Jeremy Grossman, the original developer of GNS3 originally created the software to help him study for his CCNP certifications. Because of that original work, you can today use to help you do the same without paying for expensive hardware.

 GNS3 has allowed network engineers to virtualize real hardware devices  for over 10 years. Originally only emulating Cisco devices using software called Dynamips, GNS3 has now evolved and supports many devices from multiple network vendors  including Cisco virtual switches, Cisco ASAs, Brocade vRouters, Cumulus Linux switches, Docker instances, HPE VSRs, multiple Linux appliances and many others. Go here to see a list of appliances available: https://gns3.com/marketplace/appliances

:::note
GNS3 has been around for over 10 years. Some information you will find on the Internet is outdated or unfortunately entirely incorrect. This document will hopefully help answer questions and help you get started on your journey with GNS3.
:::

:::note
GNS3 does not only support Cisco devices. Cisco is often discussed because that is what most network engineers are interested in learning about. However, many other commercial and open source vendors are supported today in GNS3. You are now able to test interoperability between many vendors and even try out esoteric setups using network technologies with SDN, NFV, Linux and Docker.
:::

**Recommendation:** If you are using an older version of GNS3, it is recommended that you upgrade to the current stable release of GNS3.

## What is GNS3?

### Architecture

GNS3 consists of two software components:

- The GNS3-all-in-one software (GUI)
- The GNS3 virtual machine (VM)

GNS3-all-in-one:

This is the client part of GNS3 and is graphical user interface (GUI). You install the all-in-one software on your local PC (Windows, MAC, Linux) and create your topologies using this software. This is what you usually see show in screenshots such as the following:

<img alt="screenshot" src={useBaseUrl('img/getting-started/what-is-gns3/1.jpg')} />

Server options:

When you create topologies in GNS3 using the all-in-one software GUI client, the devices created need to be hosted and run by a server process. You have a few options for the server part of the software:

1. Local GNS3 server
2. Local GNS3 VM
3. Remote GNS3 VM

The local GNS3 server runs locally on the same PC where you installed the GNS3 all-in-one software. If for example you are using a Windows PC, both the GNS3 GUI and the local GNS3 server are running as processes in Windows. Additional processes such as Dynamips will also be running on your PC:

If you decide to use the GNS3 VM (recommended), you can either run the GNS3 VM locally on your PC using virtualization software such as VMware Workstation, Virtualbox or Hyper-V; or you can run the GNS3 VM remotely on a server using VMware ESXi or even in the cloud.

:::note
You are able to use GNS3 without using the GNS3 VM. This is a good way to get started initially, but this setup is limited and does not provide as many choices with regards to topology size and devices supported. If you want to create more advanced GNS3 topologies, or want to include devices such as the Cisco VIRL devices (IOSvL2, IOSvL3, ASAv) or other other devices that require Qemu, the GNS3 VM is recommended (and is often required).
:::

:::note
Start a basic GNS3 topology using only the GNS3-all-in-one software and once you have got that working, refer to additional documentation for the setup of a local GNS3 VM.Emulation versus Simulation:
:::

GNS3 supports both emulated and simulated devices.

**Emulation:** GNS3 mimics or emulates the hardware of a device and you run actual images on the virtual device. For example, you could copy the Cisco IOS from a real, physical Cisco router and run that on a virtual, emulated Cisco router in GNS3.

**Simulation:** GNS3 simulates the features and functionality of a device such as a switch. You are not running actual operating systems (such as Cisco IOS), but rather, a simulated device developed by GNS3, like the built-in layer 2 switch.

:::note
The lines between simulation and emulation blur a bit these days. You are now able to run Cisco VIRL images which are images of real Cisco operating system images which run on standardized virtual hardware. GNS3 emulates the hardware that VIRL images require to run
:::

**Remember**: Don’t worry too much about the difference between simulation and emulation except for the following points:

1. Dynamips is an older technology that emulates Cisco hardware. It uses real Cisco IOS images. It is good for basic CCNA type topologies, but has a number of limitations such as only supporting older Cisco IOS versions (12.X) which are also not supported or actively updated by Cisco.
2. The recommended Cisco images to use with GNS3 are those from Cisco VIRL (IOSv, IOSvL2, IOS-XRv, ASAv). This images are supported and are actively updated by Cisco. The images support current releases of the Cisco IOS (15.X) and provide the best scale and user experience.

## GNS3 Comparisons

Questions often arise about which software is the best. A lot of this is down to personal preference with all solutions providing some benefits and having some disadvantages.

Bad old days: The world today is much better than the past! In the old days, network engineers studying for their CCNAs, CCNPs or CCIEs only had limited choices: Buy or rent physical Cisco equipment for your studies.

Today, you have multiple choices when studying and testing networks:

1. GNS3
2. Cisco Packet Tracer
3. Cisco VIRL
4. Physical equipment
5. Others

### GNS3

As mentioned, GNS3 is open source software which you can download and use for free. The source code is available on GitHub if you are interested in taking a peek at the code. We hope you find it useful and beneficial, but if you don’t like something, or want to add something, why don’t you get involved by contributing? Join the community or volunteer to check code or add code recommendations. With over 800,000 community members, we can all learn from each other.

There are, however, other options available that you can use. Some of them are free, some cost money. Use whichever works best for you. Use multiple options if you like. We are happy that there are a plethora of choices available today, which helps all of us improve and learn more about networking.

**Advantages:**
- Free software
- Open Source software
- No monthly or yearly license fees
- No limitation on number of devices supported (the only limitation is your hardware: CPU and memory)
- Supports multiple switching options (NM-ESW16 Etherswitch module, IOU/IOL Layer 2 images, VIRL IOSvL2):
- Supports all VIRL images (IOSv, IOSvL2, IOS-XRv, CSR1000v, NX-OSv, ASAv)
- Supports multi vendor environments
- Can be run with or without hypervisors
- Supports both free and paid hypervisors (Virtualbox, VMware workstation, VMware player, ESXi, Fusion)
- Downloadable, free, pre-configured and optimized appliances available to simplify deployment
- Native support for Linux without the need for need for additional virtualization software
- Software from multiple vendors freely available
- Large and active community (800,000+ members)

**Disadvantages:**
- Cisco images need to be supplied by user (download from Cisco.com, or purchase VIRL license, or copy from physical device).
- Not a self contained package, but requires a local installation of software (GUI).
- GNS3 can be affected by your PC’s setup and limitations because of local installation (firewall and security settings, company laptop policies etc).

### Packet Tracer

Cisco Packet Tracer is an official Cisco product for Cisco Academy students that simulates Cisco networks. It does not emulate Cisco hardware or support real images from Cisco or other vendors.

**Advantages:**
- Easy to set up
- Supports Cisco router, switch and PC simulations
- Sufficient for CCNA studies
- Simulates multiple devices and protocols (routers, switches, wireless, RADIUS, etc...)
- Free (requires registration at Cisco’s NetAcad website)

**Disadvantages:**
- Proprietary code - not open source
- Only simulates Cisco devices (Not running true Cisco images)
- No multivendor support
- Cannot integrate with real physical devices
- You can only use the IOS commands implemented by the developers. Not every conceivable command available on a platform simulated in Packet Tracer will be present for use

### Cisco VIRL

Cisco have created another officially supported network simulation platform- Cisco Virtual Internet Routing Lab (VIRL). This is a much more powerful solution when compared to Cisco Packet Tracer and allows not only learning, but simulation of actual networks.

:::note
Cisco VIRL is a closer product in comparison to GNS3 allowing network engineers to simulate real world networks in addition to learning Cisco technologies.
:::

**Advantages:**
- Supports Cisco router, switch, firewall and PC simulations (IOSv, IOSvL2, ASAv,
- Good for CCNA, CCNP and CCIE studies
- Supports Cisco Firewalls (ASAv)
- Large number of protocols and features supported: RPVST+, Etherchannel, Port Security, MPLS, VRFs and more. Full list is here: http://virl.cisco.com/work/
- Latest versions of Cisco IOS supported (15.X)

**Disadvantages:**
- Not Free software. You pay $199.99 per year for a Personal Edition VIRL subscription.
- Limited number of devices supported. With the personal edition, you are limited to 20 Cisco nodes per topology
- VIRL can be complex to setup and configure.
- Resource intensive (requires large amounts of RAM and CPU)
- Requires virtualization software (VMware Workstation Player/Pro, Fusion, or ESXi)
- Does not support VirtualBox
- No multivendor support - only supports Cisco networking devices

:::note
GNS3 is able to support all VIRL images. You are able to import VIRL images into GNS3 and use them without the per-topology node restriction (you are only limited by your hardware).
:::

## Device Support
GNS3 supports many devices from multiple vendors and more devices are being added all the time. The best place to look for the current list of supported devices is the GNS3 marketplace: https://gns3.com/marketplace/appliances

## Use Cases
GNS3 is probably most famous as a platform used for learning and teaching. GNS3 has for years been used by students and network engineers to help practice and prepare for vendor certification exams such as the Cisco CCNA exam.

GNS3 can however be used for other use cases such as proof of concepts and commercial demonstrations. GNS3 provides an easy, cost effective way to new software such as management or SDN software. It allows you to test multi vendor interoperability using a virtual lab environment rather than requiring dedicated physical equipment.

An entire GNS3 topology can be created and run on a single laptop. This allows engineers to demonstrate topologies and software to clients and others on the road.

Classroom environments can also benefit from a preconfigured lab environment that students use to learn networking concepts and technologies.

Some additional reasons to use GNS3:
- Real-time network simulation for pre-deployment testing without the need for network hardware: Run the OS that emulates real behavior of network hardware
- Test 20+ different network vendors in risk-free virtual environment: Quickly run and test multiple hardware vendors without the need for hardware
- Create dynamic network maps for troubleshooting and proof of concept (POC) testing: - Test your networks before you build them to reduce the time it takes to get a production network up and running
- Connect GNS3 to any real network: Leverage your existing hardware and expand your current lab by connecting your GNS3 topologies directly to it
- Customized topologies and labs within GNS3 for network certification training:
GNS3 is the best study tool for aspiring network professional seeking their certifications, without the need for a home lab.

## Versions of GNS3
The latest, current release of GNS3 can be found here:
https://gns3.com/software

Development releases of GNS3 can be found here:
https://github.com/GNS3/gns3-gui/releases

:::note
Use the latest stable release of GNS3. Only use development releases if you are prepared to encounter issues and loss of GNS3 data. Do not use development releases if you have an exam to prepare for or other type of deadline.
:::

## GNS3 Help & Support

GNS3 provides multiple ways for you to get help including:

### Documentation
You can access the GNS3 documentation here:
https://docs.gns3.com

### Community
This is one of the best places to get help. Join many thousands of GNS3 users and experts helping each other make the most of GNS3.
http://gns3.com/community

**DO**: Do report bugs and ask questions on the GNS3 community.

**DON’T**: Don’t ask for illegal stuff or violate GNS3 user policies. Don’t ask for Cisco IOS images. Don’t share Cisco IOS images. Don’t do anything else that infringes copyright or breaks the law.

### GNS3 YouTube channel
Watch videos on David Bombal GNS3 channel:  
https://www.youtube.com/playlist?list=PLhfrWIlLOoKPTPPv6ZiNHFM2FKAZ96f-r

### GNS3 courses
Learn about GNS3 by enrolling in GNS3 courses available in the GNS3 Academy:
http://academy.gns3.com

## Supported Operating Systems

GNS3 supports the following operating systems:
- Windows 7 (64 bit)
- Windows 8 (64 bit)
- Windows 10 (64 bit)
- Windows Server 2012 (64 bit)
- Windows Server 2016 (64 bit)
- Mac OS X Mavericks (version 10.9) and later.
- Linux

Additional platforms that can run the GNS3 VM:
- ESXi
- Bare Metal Cloud based providers such as Packet.net

## Supported Appliances
GNS3 supports multiple operating systems and appliances and emulators.
[Which emulator should I use?](emulators/which-emulators-should-i-use)

## Should you use the GNS3 VM?
The GNS3 VM is recommended for most situations when you are using Windows or Mac OS. The GNS3 development team have worked hard to create a lightweight, robust way of creating GNS3 topologies that avoids multiple common issues experienced when using a local install of GNS3. This includes the lack of proper Qemu support when running VIRL natively on Windows (not recommended).

However, if you only want to create basic GNS3 topologies using Cisco IOS routers, a local (Dynamips) install will suffice. This means that you only install the GNS3 GUI (all-in-one) and don’t use the GNS3 VM.

This is simpler in some ways to set up, but does have limitations and should be seen as the starting point in your GNS3 journey. As soon as you are comfortable with GNS3, it is recommended that you move to a GNS3 VM setup to make the most of GNS3 options and optimization.

:::note
Use the GNS3 VM on Windows and Mac OS. It’s optional, but not required, when running GNS3 natively in Linux.
:::

## What is not supported or recommended

### ASA 8

:::caution
ASA 8 is not supported
:::

You may find a lot of tutorials on the Internet explaining how to extract ASA 8 images from physical hardware devices and use them with GNS3. This method was the only way to get an ASA image in the past, but the results are random; and getting worse with modern computers and operating systems. For example Windows 10 has multiple issues running ASA 8.

The problem with this way of doing things is that you are using an image made for a bespoke hardware device from Cisco. Qemu can emulate part of the hardware, but some components specific to a physical ASA are missing. For example, the hardware clock on the hardware ASA appliance is missing. The ASA kernel can sometimes replace it depending on the speed of your computer, but results may vary.

You will also encounter issues when running multiple ASAs simultaneously.

### Local install with Qemu images

GNS3 does not support or recommend the use of Qemu images with a local GNS3 installation on Windows or Mac OS X. You should use Qemu images with the GNS3 VM.

**Examples_of_Qemu_images**
IOSvL2, IOSv, IOS-XRv, ASAv, any appliance available on the GNS3 website: https://gns3.com/marketplace/appliances

### Complex topologies
When creating complex topologies on Windows or Mac OS, it is recommended that you use the GNS3 VM. Only use a local GNS3 install when creating simple GNS3 topologies.
