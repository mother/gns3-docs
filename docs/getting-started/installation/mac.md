---
id: mac
title: GNS3 Mac Install
sidebar_label: Mac
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Introduction
This document explains how to install GNS3 using when a Mac OS X environment. You will learn how to:
- Download the required software
- Install the software

## Supported Operating Systems
GNS3 supports OS X Lion (version 10.12) and later. GNS3 v2.1.9 is the last version that runs on OS X version 10.11 (El Capitan).

- Video: https://www.youtube.com/watch?v=OFjt3jS3Mhg

## Download GNS3
Follow these steps to download GNS3 to you MAC. Using a web browser, browse to https://gns3.com and click the **Free Download** link:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/mac/1.jpg')} />

If you have not already registered on the GNS3 site, create an account and then click **Create Account & Continue**:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/mac/2.jpg')} />

Or, if you already have an account, click **Login**, fill in the your details and then click **Login & Continue**:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/mac/3.jpg')} />

After login, you will be prompted to select the version of GNS3 to download. In this guide, we will select the Mac installation. Click the Download button to download the Mac OS X package.

## Allow installation of GNS3 before OSX Sierra

GNS3 is distributed outside the Apple App Store. Due to this, you need to allow the installation of applications from anywhere.

Go to the **Security & Privacy** in System Preferences.

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/mac/4.jpg')} />

Click on the lock:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/mac/5.jpg')} />

Select the **Anywhere** option under **Allow apps downloaded from**:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/mac/6.jpg')} />

## Installation of GNS3

Click on the downloaded DMG and drag the **GNS3** icon to the **Applications** folder:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/mac/7.jpg')} />

Click on the **Applications** icon. Find the GNS3 icon and click it to start GNS.

:::note
Make sure GNS3 is installed in “Applications” to avoid any problem. It has been reported that the application may crash if launched from a path containing non-ascii characters.
:::

If the following security warning is displayed (starting with OSX Sierra), click **OK**:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/mac/8.jpg')} />

If the above security prompt was shown, right click on the GNS3 icon and click on **Open**:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/mac/9.jpg')} />

This is required only at first launch. The next time you click on GNS3, the application will start normally as Mac OS X will remember the configured security settings.

:::note
Unlike for Windows and Linux versions of GNS3, the Mac version of GNS3 is not signed due to Apple restrictions.
:::

:::note
If OSX say the .dmg is damaged and even right click is not working you could need to temporary disable gatekeeper and renable it. This seem to reset a cache in the OS. https://www.tekrevue.com/tip/gatekeeper-macos-sierra/
:::

Once GNS3 starts, you will be prompted to allow root uBridge. This is required to allow GNS3 to control your network. Click **Yes**:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/mac/10.jpg')} />

You will prompted twice to enter your root password:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/mac/11.jpg')} />

## GNS3 Setup Wizard
The GNS3 Setup Wizard will display:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/mac/12.jpg')} />

You now need to make a decision and then you can return to this document to complete to create an initial GNS topology:

- If you are unsure, [click here](../../../docs)
- If you are going to only use Cisco IOS images, use the Local server and [click here for instructions](../../setup-wizard-local-server)
- If you are going to use IOSvL2, IOU, ASAv or create complex topologies, then use the GNS3 VM and [click here for instructions](../../setup-wizard-gns3-vm).
