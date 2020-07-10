---
id: install-from-marketplace
title: Install an appliance from the GNS3 Marketplace
sidebar_label: Install an appliance from the GNS3 Marketplace
---

## Introduction
This document explains how to download and install an appliance from the **GNS3 Marketplace**.

## Why?

**Question**: Why would you want to use an appliance from the GNS3 Marketplace rather than manually configuring settings yourself?

**Answer**: The GNS3 appliances are using GNS3 recommended settings and  have been thoroughly tested. You will most likely have a much better user experience using the appliances. You will also encounter fewer errors if you use an appliance rather than trying to configure settings yourself and using untested images.

:::note
If you want to use IOSvL2, IOU, IOSv, IOS-XRv or ASAv images with GNS3, the GNS3 VM is mandatory when using Windows or Mac OS. This is because Qemu is better supported on Linux and faster when run with VMware (you can also use KVM). .
:::

:::note
Some vendors provide images of their systems for free. Others like Cisco do not. You will be need to provide your own Cisco images to use Cisco devices with GNS3. GNS3 are unable to provide Cisco IOS images. Please do not ask us or others to give you an image. You will need to either have an authorized account with Cisco or purchase a VIRL license to access Cisco images like the Cisco ASAv or IOSv. For VIRL, go here: [http://virl.cisco.com/](http://virl.cisco.com/)
:::

## Download the GNS3 Appliance

::note
In this example, a Cisco IOSvL2 appliance will be imported. Other appliances will follow a similar process.
:::

:::note
In this guide, the Windows operating system is used. The process is similar however for other operating systems such as Mac OS and Linux.
:::

Before downloading the appliance from the GNS3 website, download and save the operating system for the appliance in your **Downloads** directory:

![screenshot](../../img/install-from-marketplace/1.jpg)

Starting with GNS3 2.2.0, there are appliances included, in the GNS3 installation directory:

![screenshot](../../img/install-from-marketplace/2.jpg)

(The default installation directory in Windows is ```C:\Program Files\GNS3```)

![screenshot](../../img/install-from-marketplace/3.jpg)

(the appliance templates listed in ```C:\Program Files\GNS3\appliances```)

You can also download the appliance template files from the GNS3 website using a web browser. Browse to [https://gns3.com](https://gns3.com) and click the **Marketplace** menu item:

![screenshot](../../img/install-from-marketplace/4.jpg)

Click **Appliances**:

![screenshot](../../img/install-from-marketplace/5.jpg)

Select the appliance you want to download. Since we want to import the **Cisco IOSvL2 VM**, select **Cisco IOSvL2** in the **Appliances** section of the **Marketplace**, in order to download the cisco-iosvl2.gns3a template file:

![screenshot](../../img/install-from-marketplace/6.jpg)

An appliance description is displayed. Confirm details of the appliance and then click **Download Template**:

![screenshot](../../img/install-from-marketplace/7.jpg)

The appliance template  is downloaded to your local PC:

![screenshot](../../img/install-from-marketplace/8.jpg)
