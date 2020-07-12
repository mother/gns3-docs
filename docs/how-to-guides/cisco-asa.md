---
id: cisco-asa
title: Cisco ASA
sidebar_label: Cisco ASA
---

## ASA 8

:::caution
ASA 8 IS NOT SUPPORTED
:::

You may find a lot of tutorials on the Internet explaining how to extract ASA 8 images from physical hardware devices and use them with GNS3. This method was the only way to get an ASA image in the past, but the results are random; and getting worse with modern computers and operating systems. For example Windows 10 has multiple issues running ASA 8.


The problem with this way of doing things. is that you are using an image made for a bespoke hardware device from Cisco. Qemu can emulate part of the hardware, but some components specific to a physical ASA are missing. For example, the hardware clock on the hardware ASA appliance is missing. The ASA kernel can sometimes replace it, depending on the speed of your computer, but results will vary.

You will also encounter issues when running multiple ASA instances simultaneously.

## ASAV

ASAv is a version of ASA made by Cisco for using ASA, and was created with the express goal of it being run in virtualized environments. This the solution supported by Cisco and the GNS3 team.

### ASAv with Qemu (RECOMMENDED)
Use the GNS3 appliance you will find all the instructions [here](https://docs.gns3.com/appliances/cisco-asav.html).

- Video: https://www.youtube.com/watch?v=GM_VmmkCEag

### ASAv with VMware
You can run the ASAv OVA as a VMware VM. This will work, but is not recommended because it is harder to share the VM between projects or other GNS3 users.
