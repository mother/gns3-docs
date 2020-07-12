---
id: setup-wizard-gns3-vm
title: GNS3 Setup wizard with the GNS3 VM
sidebar_label: Setup wizard for GNS3 VM
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Which Virtualization Software? VirtualBox or VMware?
In this document we will explain the import of the GNS3 VM for VMware but instructions for VirtualBox are similar.

VMware is a better option because it’s faster and supports nested virtualization (the VMs inside the VM are accelerated by your CPU). The speed difference is important and some VM will be too slow on VirtualBox*  (see note).

## VMware Workstation vs. Player
GNS3 supports both VMware Workstation Pro and VMware Fusion (Paid software), as well as VMware Player (Free software).

:::note
VMware Player requires the installation of additional free software ([VMware VIX](https://www.vmware.com/support/developer/vix-api/)). If you forget to install this, GNS3 will prompt you to do so (and open a browser to the link on VMware’s website). The option for “VIX version 1.15 and later” is sufficient for VMware Workstation Player version 12.x and 14.x. For older versions of Player, you’ll need to select a previous version of VIX that matches your version of Player.
:::

Important -  VMware decided to not release a standalone VIX SDK download for Workstation 15.x (the necessary files are still included with WS Pro 15.x).   It’s currently recommended that Player 15.x users add the GNS3 VM as a remote server, or to use VIX 1.17, and edit the vixwrapper-config.txt file, [as shown in this GNS3 forum thread](https://gns3.com/community/discussion/gns3-with-workstation-player-15-).

:::note
You can get 20% off [VMware Workstation Pro](https://gns3.com/marketplace/software/workstation-pro-15) and [VMware Fusion](https://gns3.com/marketplace/software/fusion-8) thanks to our deal with VMware.
:::

## VMware ESXi

VMware ESXi is for advanced users only and is not covered by this document.

- Video: https://www.youtube.com/watch?v=0T9YZssqDyE
- Video: https://www.youtube.com/watch?v=s7CkW9DNS3E

## Import GNS3 VM into VMware Workstation

In this section, you will learn how to import the GNS3 VM into VMware Workstation on your local Windows PC.

:::note
This document assumes that you already have VMware Workstation installed on your local Windows PC. Please refer to VMware documentation for the process to download and install VMware Workstation.
:::

Extract the downloaded .zip archive:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/1.jpg')} />

This extracts the “GNS3 VM.ova” file stored within the compressed archive, in order to import it into VMware Workstation.  

In VMware Workstation, click **'Open a Virtual Machine'**:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/2.jpg')} />

Navigate to the directory where the extracted **GNS3 VM.ova** is located, and click **'Open'** to open the OVA:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/3.jpg')} />

Leave the virtual machine name as **'GNS3 VM'**, and click **'Import'**:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/4.jpg')} />

:::caution
With VMware Player it’s recommended to keep the default location. GNS3 will try to detect VMs outside, but unlike Workstation VMware Player doesn’t offer a central database with all VMs location.
:::

VMware Workstation will import the GNS3 VM:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/5.jpg')} />

The GNS3 VM will show as available in VMware Workstation. Leave all settings at their defaults:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/6.jpg')} />

**Congratulations!** You have successfully imported the GNS3 VM. In the next section you will integrate GNS3 with the GNS3 VM.

:::note
If you encounter a message in the GNS3-VM where it states that KVM support is not available, even if you have a CPU capable of hardware virtualization (modern Intel and AMD CPUs all support this), please confirm that it has been enabled in your system BIOS/UEFI (consult the documentation supplied by your motherboard manufacturer or PC vendor, to learn how to access this)
:::

## Local GNS3 VM Setup Wizard
The GNS3 Setup Wizard is displayed when GNS3 starts up for the first time. This provides an easy way to initially configure GNS3 options:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/7.jpg')} />

### Manually Starting the Setup Wizard
You can also manually start the Setup Wizard at any time by clicking Help->Setup Wizard in the GNS3 software:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/8.jpg')} />

### Disable Setup Wizard
Optional: You can disable the Setup Wizard from displaying by selecting the ‘Don't show this again’ checkbox:      

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/9.jpg')} />

### Using the GNS3 Setup Wizard

Select **'Run Modern IOS (IOSv or IOU), ASA, and appliances from non-Cisco manufacturers'** in the Wizard and click **'Next'**:           

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/10.jpg')} />

:::important
This guide explains the Local GNS3 VM server configuration. For a Local Server (Dynamips) configuration [click here](setup-wizard-local-server).
:::

Even though you’ll be using the GNS3-VM to perform the “heavy lifting” of running your VMs/images/containers, it’s still necessary to configure the local server settings in GNS3 before proceeding with the remaining process of configuring the GNS3-VM.

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/11.jpg')} />

Ensure that the path to the gns3server executable is correct (typically ```C:\Program Files\GNS3``` in a default installation), and select a Host binding and Port.  Selecting the 127.0.0.1 local loopback address tends to be the most trouble-free option to use as a host binding, but the dropdown menu does contain additional options. Click **'Next'**.

A connection validation screen will appear:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/12.jpg')} />

If successful, click **'Next'**.  If this connection attempt was unsuccessful for any reason, there possible remedies are to:

1. Confirm the path to the gns3server.exe file is correct, and try a different address/port for the host binding
2. Create exception/whitelist entries in your antivirus suite for the gns3server, ubridge, and dynamips executables (or just the entire GNS3 installation directory, if possible).  You’ll need to refer to the relevant documentation of the antivirus suite you run, in order to perform this step.

:::note
An additional step that may be necessary is to allow the gns3server, ubridge, and dynamips executables through the Windows Firewall.  The default behavior is for these to already be allowed through, but it’s well worth double-checking.

The Virtualization software you are going to use needs to be selected. In this example, **VMware (recommended)** is selected:
:::

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/13.jpg')} />

The Setup Wizard will detect the presence of the **GNS3 VM** in VMware Workstation. If the GNS3 VM is not displayed, click the **'Refresh'** button and ensure that the VM was imported correctly into VMware Workstation:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/14.jpg')} />

Change the vCPU cores and RAM values to the amount that your computer supports and then click **'Next'**:

:::important
GNS3 recommends a minimum of 1 vCPU core and 2GB RAM. However, if you want to run large topologies with many devices, more CPU cores and RAM are recommended. You can adjust the settings later using the GNS3 GUI. A good rule of thumb is to assign it half the total amount of available vCPU cores and physical RAM available in your PC. The below example uses a minimal resource allocation, as it’s being run on a laptop.  On a  desktop with an i7 quad-core CPU with hyperthreading and 32GB RAM, allocating the GNS3 VM 4-6 vCPUs and 16GB RAM will allow for respectable GNS3 topologies to be running, while still reserving enough resources to task switch between GNS3 and Windows (or Linux).
:::

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/15.jpg')} />

After making your allocation choices, click **'Next'**:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/16.jpg')} />

The next page will show a summary of the settings you chose for the GNS3 VM. You may see a pop up saying “Please Wait”. That’s perfectly normal, as it’s due to GNS3 starting the GNS3 VM up:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/17.jpg')} />

 Once booted successfully, the IP address of the GNS3 VM will be displayed:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/18.jpg')} />

While devices are normally installed using appliance templates found in the [GNS3 Marketplace](https://gns3.com/marketplace/appliances) (via the Import Appliance wizard), we’ll manually add a router using a [compatible IOS image](../emulators/cisco-ios-images-for-dynamips), just for a quick example. GNS3 is not limited to just those IOS images. Other articles ([here](../using-gns3/beginners/install-from-marketplace) and [here](../using-gns3/beginners/import-gns3-appliance) cover importing devices via those appliance templates via the aforementioned Import Appliance wizard, even compatible IOS images.

In the GNS3 GUI, click **Edit->Preferences->IOS Routers**, to reach the correct section we need to be in:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/19.jpg')} />

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/20.jpg')} />

Click **'New'** to begin manually importing and configuring the image.

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/21.jpg')} />

In the **New IOS router template** window, select **Run the IOS router on the GNS3 VM** and click **'Next'**:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/22.jpg')} />

The **New IOS router template** window displays. Click **'Browse…'** to find a local IOS image on your computer:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/23.jpg')} />

 Browse to the folder where you have stored your Cisco IOS images (you must supply your own), select the image and click **'Open'**:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/24.jpg')} />

GNS3 can decompress IOS images to allow for quicker booting of routers in your GNS3 topologies. This is recommended for a better user experience, as IOS image decompression can take several minutes, even on physical hardware.  Click **'Yes'** to uncompress the image:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/25.jpg')} />

The image is automatically uploaded to the GNS3 VM (this may take a few moments, depending on the speed of your PC, and the size of the image/VM).

The uploaded image is shown. Click **'Next'** to continue the setup:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/26.jpg')} />

The Name and platform window displays. Confirm the **Platform** selection, and configure the router **Name** as desired and click **'Next'**:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/27.jpg')} />

A Default RAM setting is displayed. It is important that you check your Router's minimum memory requirements using the Cisco website. Click the **Check for minimum and maximum RAM requirement** option:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/28.jpg')} />

The **Cisco Feature Navigator** is opened in your default web browser. Select **Image Name** and enter the name of the image you are using:  

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/29.jpg')} />

Click **Search for Image(s)**:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/30.jpg')} />

The minimum DRAM requirements for the IOS are displayed. Note the value for your IOS image:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/31.jpg')} />

Set the Default RAM value to the value recommended by the Cisco Feature Navigator (yours may be different to the screenshot) and click **'Next'**:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/32.jpg')} />

Select your preferred Network adapters. This is device dependant. With this c3725 image, we can only add adapters to slots 0, 1, and 2, with slot 0 prepopulated with GT96100-FE dual Fast Ethernet adapter.  Which adapters you can add, and how many slots you are allowed to install adapters to is device dependent.  Click **'Next'**:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/33.jpg')} />

WIC modules can now be added. Again, it’s device dependent on whether WIC slots are available, but WIC-1T and WIC-2T serial modules will be available on devices that support WICs. Once completed, click Click **'Next'**:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/34.jpg')} />

It is important for optimum GNS3 performance that an **Idle-PC** value be  selected. If a green Idle-PC value is NOT shown then click the **'Idle-PC finder'** button to find an Idle-PC value.  This c3725 happens to already have an optimum idle-pc value predefined, so it’s OK to click **'Finish'**:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/35.jpg')} />

If your device does NOT have an idle-pc value predefined, click the **Idle-PC** finder button in the upper-right to initiate that process.

It is important for optimum GNS3 performance that an **Idle-PC** value be  selected. If a green Idle-PC value is NOT shown then click the **'Idle-PC finder'** button to find an Idle-PC value.

If you selected the Idle-PC finder button (only necessary if no value was detected automatically), GNS3 will calculate a value:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/36.jpg')} />

An Idle-PC value is displayed. Click **'OK'** to complete:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/37.jpg')} />

:::important
If no Idle-PC value is displayed, try clicking the ‘Idle-PC finder’ button again. You may also need to reboot your computer and try again is no value is found.
:::

Click **'Finish'** to complete the GNS3 Setup Wizard.     

The **Preferences** window displays showing the settings you have configured through the Setup Wizard. Click **'OK'** to complete the process:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/38.jpg')} />

The **New Project** Window displays. Give your new Project a **Name** and click **'OK'**:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/39.jpg')} />

The GNS3 workspace displays:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/40.jpg')} />

**Congratulations!** You are now ready to create your first GNS3 topologies.

[Continue here for a basic GNS3 topology](your-first-gns3-topology)

:::note
The Virtualbox developers announced that nested hardware virtualization support was added to Virtualbox 6.0.  However, there’s an important caveat:  this support is only available to users with desktops/laptops that have AMD CPUs. Nested h/w virtualization support for Intel CPUs has been stated to be forthcoming. Questions regarding this should be directed to the Virtualbox user forums, and not the GNS3 community forums!  
:::

:::note
As of GNS3 2.2.3, the issue where users with AMD CPUs wanting to run the GNS3 VM in VMware Workstation needed to install a newer kernel has been resolved! It now works, like it did in past versions, so this workaround is no longer necessary.
:::

## Legacy

**In case anyone intends on using the older, affected version, We've left the instructions below. But it is highly recommended to update to the latest version.**

(There’s potential risk of data loss, if this process goes awry! Proceed at your own risk!)

Start the GNS3 VM in VMware, while GNS3 itself is shut down. Access the GNS3 VM’s shell using its text menu. Click OK on the Information screen:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/41.jpg')} />

Press the down arrow to highlight “Shell”, and press the Enter key again:

<img alt="screenshot" src={useBaseUrl('img/getting-started/setup-wizard-gns3-vm/42.jpg')} />

You’ll now be in Bash  (the default shell for Ubuntu):
We need to upgrade the GNS3 VM’s kernel by entering the following in the CLI:

```
sudo apt update
sudo apt upgrade

(note: If you happen to receive this prompt while apt is performing the upgrade step, select Y (yes):

PROMPT: Configuring libssl1.1:amd64 >>>>> Restart services during package upgrades without asking?
```

Once apt has completed the upgrade process, enter the following commands:

```
cd /tmp/

wget -c https://kernel.ubuntu.com/~kernel-ppa/mainline/v5.2.2/linux-headers-5.2.2-050202_5.2.2-050202.201907231250_all.deb

wget -c https://kernel.ubuntu.com/~kernel-ppa/mainline/v5.2.2/linux-headers-5.2.2-050202-generic_5.2.2-050202.201907231250_amd64.deb

wget -c https://kernel.ubuntu.com/~kernel-ppa/mainline/v5.2.2/linux-image-unsigned-5.2.2-050202-generic_5.2.2-050202.201907231250_amd64.deb

wget -c https://kernel.ubuntu.com/~kernel-ppa/mainline/v5.2.2/linux-modules-5.2.2-050202-generic_5.2.2-050202.201907231250_amd64.deb
```

In the above commands, the WGET utility is downloading the packages for the newer kernel from kernel.ubuntu.com. The next step will install them:

```
sudo dpkg -i *.deb
```

Once those are installed, using the next command will reboot the GNS3 VM:

```
sudo reboot
```

After the GNS3 VM has finished rebooting, and you’re back at the information page of its text menu,, run the following command in the GNS3 VM’s shell, to ensure that it is using the newer kernel. This is what you want to see:

```
gns3@gns3vm:~$ uname -r
5.2.2-050202-generic
```

Power down the GNS3 VM, and then launch the GNS3 GUI. Now, you should be able to run QEMU/KVM VMs without issue!
