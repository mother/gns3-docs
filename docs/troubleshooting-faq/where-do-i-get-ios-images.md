---
id: where-do-i-get-ios-images
title: Where do I get IOS images?
sidebar_label: Where do I get IOS images?
---

## Introduction
One of the most common questions asked in the GNS3 forums is “Where do I get Cisco IOS images?”

### Important

Unfortunately due to legal requirements, GNS3 is unable to provide IOS images or any other Cisco images. You will need to provide your own images to use them with GNS3.

::: note
Some vendors make their software images freely available, but unfortunately this is not true for Cisco images.
:::

## Options
Here are some suggestions on ways to get Cisco images:

### Cisco website:
Download images directly from Cisco: https://software.cisco.com/download/navigator.html

:::note
A Service Contract is required for downloading of images.
:::

The only IOS images currently available from Cisco, that will work with the Dynamips emulator are the c7200 images (not the c7200p images!).  The images for all of the other platforms Dynamips supported hit End of Support status, and their images were removed.  

### VIRL:
If you don’t have a service contract with Cisco, you can purchase a VIRL license to get access to multiple images that are very useful for GNS3 labs. The price  starts at $199.99 per year for the Personal Edition:

http://virl.cisco.com/

:::note
You can use VIRL images without license authentication. You can therefore download the VIRL images, integrate them with GNS3 and use them offline if needed.
:::

### Physical Cisco devices:
If you own a physical router like a Cisco 3725 router, you can copy the image from the router and import it into GNS3.
