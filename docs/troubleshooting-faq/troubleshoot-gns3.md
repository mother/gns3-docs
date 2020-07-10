---
id: troubleshoot-gns3
title: Troubleshoot GNS3
sidebar_label: Troubleshoot GNS3
---

## Installation Problems

### On MacOSX

**THE DMG IS DAMAGED**

You need to allow untrusted applications in your OSX settings.

**“GNS3” CAN’T BE OPENED BECAUSE IT IS FROM AN UNIDENTIFIED DEVELOPER.**

You need to allow untrusted applications in your OSX settings.

### On Microsoft Windows

**UPDATE FOR UNIVERSAL C RUNTIME IN WINDOWS KB2999226**

If GNS3 ask you for Update for Universal C Runtime in Windows KB2999226 you need to install it. In theory this is distributed via Windows Update but you can force manual installation:

https://support.microsoft.com/en-us/kb/2999226

On Window 7 you need service pack 1.

If you can't install it you need to investigate why Windows Update is no longer working on your system it could be a virus blocking all updates including security updates.

**API-MS-WIN-CRT-RUNTIME-L1-1-0.DLL IS MISSING**

Make sure all the Windows update are installed and your computer as reboot. On Window 7 you need service pack 1. If not working download:
http://download.microsoft.com/download/8/5/e/85edb843-93af-4daa-ad1e-c33dfa95b2ea/vc_redist.x64.exe

Install and reboot

**GNS3 STOP WORKING WHEN I OPEN A FILE**

If you have Dell Backup and Recovery (or Alien Respawn for Alienware) you need to uninstall or upgrade it to version >= 1.9.2.8. This software conflict with other application using Qt.

http://en.community.dell.com/support-forums/software-os/f/3526/t/19634253

### On linux

**ICON ARE TINY**
Solution from fedora wiki:

https://fedoraproject.org/wiki/Common_F25_bugs#Application_issues

Start gns3 in a terminal like this:
```
QT_SCALE_FACTOR=1 gns3
```

## Dynamips
If you have any issue with Dynamips make sure you are using one of the recommended images listed [here](https://docs.gns3.com/1-kBrTplBltp9P3P-AigoMzlDO-ISyL1h3bYpOl5Q8mQ/index.html) CHECKLINK

### My IOS configuration is not saving
Like a real hardware you need to save the configuration before the device is powered off. You can do that with write memory command.
```
R1# write memory
```

### My router crash
This could be due to not enough memory.
- Video: https://www.youtube.com/watch?v=CQB9Ohhh6qU

### Dynamips take 100% of my CPU
This could be an invalid IDLE PC value. Edit your router and fix it.

## VMware
### “VMware vmrun tool could not be found” when using VMware workstation player

The free version of VMware doesn’t provide vmrun the command line utility for controlling VMware your need to download it for free from https://www.vmware.com/support/developer/vix-api/

### vmrun exit with Unknown error

This error mean VMware has failed due to an internal error. But the VMware tools don’t provide informations when something is wrong on his side.

This could be :
- The VM is corrupted
- Your VMware installation as expired
- VMware ask you something in the GUI
- Permissions issue with your VMware installation

It’s very important to run GNS3 and VMware under the same user.

How to troubleshoot:
- Start the faulty VM in the GUI
- If VM is not working reimport it
- If the VM doesn’t work try to import a different VM
- If this VM doesn’t work reinstall GNS3

### vmrun timeout
This issue is often related to a problem with your antivirus / firewall.

See the official answer from VMware:

https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2050353

### I can't find VMWare virtual machines in GNS3

The player version of VMware have limitation and if your VM are not in the default directory sometimes GNS3 could not found the VM.

This problem doesn’t occur with the paid version of VMware because a central database is available to third parties applications.

## VirtualBox
### Invalid VBoxManage executable name VirtualBox.exe

In the GNS3 settings the path for your VBoxManage is incorrect. VirtualBox.exe is the VirtualBox executable, VBoxManage is the application from VirtualBox for controlling VirtualBox it’s two different executables.

### Cannot start VM because hardware virtualization (VT-x/AMD-V) is already used by another software like VMware or KVM

Another virtualization software (VMware, Qemu with KVM, Hyper-V...) is already running on your computer and use your CPU hardware virtualization. Only one program can benefits of the hardware acceleration. You need to stop the other program if you want to start VirtualBox.

### The following physical network interfaces were not found: vboxnet0

The default VirtualBox interface network interface are not installed on your system. You can fix that in VirtualBox preference or by reinstalling VirtualBox.

## QEMU

### ASA

Make sure to read the documentation:
https://gns3.com/support/docs/asa-2
And follow the recommendation.

### I have trouble with my ASA 8

Asa 8 is not supported use ASAv instead:
https://gns3.com/support/docs/asa-2

### KVM acceleration cannot be used (/dev/kvm doesn't exist). You can turn off KVM support in the gns3_server.conf by adding enable_kvm = false to the [Qemu] section

This mean the remote server where you try to run Qemu doesn’t support KVM (hardware acceleration for Qemu).  Read this documentation to enable it if possible: KVM support available: false

To ignore this error in the file ~/.config/GNS3/gns3_server.conf add:

```
[Qemu]
enable_kvm = false
```

## IOU
### IOU process has stopped, return code

If you see this error the image has crashed. IOU is an experimental technology from Cisco and have no warranty to be stable. The best is to try with a different images.

### My IOS configuration is not saving

Like a real hardware you need to save the configuration before the device is powered off. You can do that with write memory command.

```
R1# write memory
```

## VPCS

### My VPCS configuration is not saving

Like a real hardware you need to save the configuration before the device is powered off. You can do that with the save command.
```
PC1> save
```

## Links
### My link between a device on my local machine and a remote device is not working

GNS3 will communicate between device on random UDP port (you can configure the port range in the configuration file of the server and in the GUI). This mean both server need to be able to communicate directly on this ports check your firewall rules.

### When I use a SSH tunnel link is not working

SSH tunnel is not supported, use a VPN like OpenVPN instead

### When I connect to a server behind a nat link is not working

NAT is not supported, use a VPN like OpenVPN instead

## GNS3 VM
### KVM support available : false

The virtualisation software where the GNS3 VM is running doesn’t support nested virtualization. Many possible reason:

- VirtualBox doesn’t support it; you can’t enable it
- Your CPU doesn’t support virtualization
- The virtualization instructions are not enabled in your BIOS
- The hardware virtualization is not enabled for this VM in VMware
- For  ESXi it’s require manual operation (see below)

### I can’t use KVM on ESXi

In order to use KVM (hardware acceleration for Qemu VMS) you need to enable the nested virtualization on the GNS3 VM in ESXi. Depending on how you administrate the ESXi it could be a checkbox in your interface or a configuration file to change.

### Could not find the default VM directory with VMware player

A limitation of the free version of VMware player doesn’t allow you to change the default VM directory for third parties applications.

You can fix it by:
Editing the file %Appdata%\VMware\preferences.ini
And add a line like this:

```
prefvmx.defaultvmpath = "F:\My Documents\Virtual Machines"
```

### KVM is not working on VirtualBox
It’s a limitation of VirtualBox. If you want to use KVM in a VM you need VMware.

### Error while executing VMware command
If you see a dialog like that:

![screenshot](../../img/troubleshoot-gns3/1.jpg)

This mean GNS3 try to send a command to VMware but it’s doesn’t work due to an issue with your VMware installation.

- First try to run the command in a terminal to see if VMware don’t ask you something in a message dialog (when launched from GNS3 VMware will fail but will not display dialog)
- Make sure GNS3 and VMware run under the same user. If you use “Run as administrator” it will start GNS3 under a different user than you standard user and VMware will not know how to connect.
- If you use VMware player make sure you have the last VIX api installed
- If you use VMware workstation make sure the VIX api is not installed

## Cloud
### I can’t use the cloud on ESXi
If you are on ESXi by default for security reason you are not allowed to inject raw packet in an interface. You need to enable the promiscuous mode on the interface.

https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=1004099

### I have issue with a VMnet
Do not directly use a VMnet in a cloud. Instead use the built in support for VMware (go to preferences / VMware and add the VM).

### My cloud doesn’t work on Windows

Try to replace Winpcap by Npcap:
https://github.com/nmap/npcap/releases
If you didn’t reboot since GNS3 install you could also try to reboot.

## OSX
### GNS3 is not working in tmux on OSX
You need to fix your tmux configuration:

https://github.com/ChrisJohnsen/tmux-MacOSX-pasteboard

## Windows
### QSslSocket: cannot resolve SSL_set_alpn_protos
You have an old Open SSL installation on your system. This installation take the priority on GNS3 bundled version. You need to upgrade your Open SSL or uinstall it.
