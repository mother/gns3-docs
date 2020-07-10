---
id: gns3-security
title: GNS3 Security
sidebar_label: GNS3 Security
---

Users of GNS3 need to bear in mind that it is a tool designed to be used for experimentation/learning, not for managing Virtual Machines or appliances in a production environment.

The demographic of GNS3 users is very broad, ranging from networking students, through to systems administrators in large corporations.

GNS3 is designed for allowing full control via the GUI. We have prioritised making GNS3 as user friendly as possible, as opposed to hardening the application against every possible security threat.  Although our focus is not currently on application security, we do encourage contributions of this nature to the project, and understand this is an extremely important part of our the application’s development.

This document aims to cover the possible attack vectors and security considerations every good administrator should consider before installing/using GNS3.

The choice of making GNS3 useable without the need of a VM and multi platform offers a powerful solution to users even with low resources computers but increases the attack surface.

The best is to consider that if someone has access to a running GNS3 server, he has access to the account where the server is running. We try to limit that, but due to the nature of the experimentation running in GNS3 the gns3 server has powerful control on the account.

## Report Security Issues

If you find a security issue please report it to developers@gns3.net

If you want to use PGP, you can also mail:

julien@gns3.net with the PGP key available here: https://keybase.io/jduponchelle

Please give us some time to solve the issue before public publications. The project is partially run by volunteers in their free time, especially the publication of the packages on various distributions.

## Downloads of GNS3

GNS3 is free on our website. Download it from the official website http://www.gns3.com or from our github http://github.com/GNS3/gns3-gui. Also SolarWinds provide an official mirror:

http://www.solarwinds.com/free-tools/gns3-network-emulator

We also provide nightly build: https://sourceforge.net/projects/gns-3/files/Nightly%20Builds/ but we recommend using stable releases.

For linux see: [Installation on Linux](../installation/linux)

Please do not use any third party download sites as they might inject malicious code into the installer. Windows versions are signed with a GNS3 certificate.

![screenshot](../../img/gns3-security/1.jpg)

:::note
It’s not possible to screen capture UAC prompts in Win7/Win 10 anymore, so an older example has been left in place for illustration purposes)
:::

## Access to the source code
GNS3 is open source and you can access the source code and audit it. The whole development process is transparent, and you can follow it live on our repositories.

## How it works
GNS3 is split into two parts: The GUI and a server. The server is controlled via HTTP by the GUI. The server is responsible for starting the emulators. The server - by default when started by the GUI -  is protected by an HTTP basic auth using a random password.

## Threat in GNS3 itself
When the GNS3 server is run on a local computer, it has access to the entire filesystem. This allows users to use images located in different locations of the file system.

To summarize; if the GNS3 server process is compromised, it will have access to the entire filesystem.

Depending on your computer configuration, or the topologies where you are running any appliances, it is possible to access to your physical network. It is not possible to prevent this, as GNS3 requires network access for certain use cases.

Also when an emulator starts, often it will expose its console to the network via the same IP as the GNS3 server. With physical equipment, this is the equivalent to having physical access to the console port of a device.

### Injection of packets into the virtual networks

Due to limitation of some emulators, the virtual network listens on all IPs. This means you can inject packet inside and exploit a security hole in a running image.

## Details by Technologies

GNS3 is a wrapper on proprietary and open source technologies. This means the security level depends on the security of those technologies.

The main danger is a rogue image trying to take control of your computer by a process escalation.

:::caution
Use images only from trusted sources!
:::

### Ubridge
Ubridge is the component of GNS3 running as root, in order to allow injection of packets in the computer network interface. Because it’s running as root, it’s the main risk of privilege escalation. In Linux and Windows we have limited permission to access to the network, but ubridge has full access in OSX. The code is short, open source, and easy to audit.  If you want to help on security, this is a good starting point.

### VirtualBox
We control VirtualBox with their official command line tool. The dangers are limited to security hole in VirtualBox itself. Due to the fact that Oracle has full time developers on this product, we can consider this technology safe if you use the latest stable release.

### VMware
We control VMware with their official command line tool (VIX) and a program for us to create network bridges: ubridge. The dangers are limited to security holes in  VMware itself or ubridge. Due to the fact VMware as full time developers on this product, we can consider this technology safe if you use the latest stable release.

### IOU
IOU from CISCO is just a Linux binary. This mean any binary could potentially be run as an IOU image. Don't use IOU images from unknown sources.

### Dynamips
We control Dynamips via the Dynamips hypervisor. Dynamips emulates portions of the hardware used in certain CISCO routers. The probability of a way to make a fake IOS and taking control of the running process is high. But, it will be complex to use in the wild, because involves means modifying a real IOS image for this use.

It’s perhaps also possible to crash the generic switch/hub with special crafted packets.

### Qemu/KVM
We control Qemu with their official command line tool. The dangers are limited to security holes in Qemu itself. Due to the fact Qemu has a large and active community,  as well as   corporations using it in production,  we can consider this technology safe as long as you use the latest stable release, and follow Qemu recommendations.

For x86, running Qemu without KVM could lead to security problems as that part is not audited.

http://wiki.qemu-project.org/SecurityProcess

KVM uses a kernel extension, so make sure the kernel is up to date.

### VPCS

We control VPCS by the VPCS command line tool. We have discovered issues in some releases with the inputs, the probability of a possible process escalation is considered high until someone conducts a full audit of the source code.

### Docker

We control docker via the Docker API. Due to the fact Docker has a large and active community,  and well as corporations using it in production, we can consider this technology safe as long as you use the latest stable release.

Docker uses a kernel extension, so make sure the kernel is up to date.

### Winpcap/Npcap

For injecting packets into your physical network, we use the winpcap or npcap libraries in Windows. Use the latest stable version to avoid trouble.

### Wireshark

To analyze captured packets, we provide Wireshark. Use the latest version to avoid trouble.
https://www.wireshark.org/security/

## The GNS3 VM
The GNS3 VM allows you to run emulators in an isolated and standard environment. You can improve the VM security by changing its  password, and adding  authentication to the GNS3 server ( this required that you configure the GNS3 VM as remote server).

With the GNS3 VM you have the same security level offered by Unetlab or Cisco VIRL.

## Running GNS3 as root
It's common to see users running GNS3 as root or Windows Administrator. We recommend that this be avoided,  unless you absolutely need it. Even if you want to ignore this security problems,  this could also lead to bugs (VirtualBox and VMware don't like that).

Starting from version 1.4 the ability to run VirtualBox has a different user has been removed because this option created too many corner cases for security, and was too hard to be correctly used by users.

We do our best to work around OS limitations,  to avoid the need to run GNS3 as root/administrator

## Remote Server
GNS3 could be run on a remote computer. Don't do that on an untrusted network. In the current state of GNS3 the security level for this is low because you can brute force the server (see the improvement sections) or just get access to the emulator consoles.

When the server starts, by default the user can only access the images and project directory. If you want a full access to the filesystem like what we do when used on your local computer, you need to start the server with the --local flag.

## Remote Server on Remote Sites
We recommend the use of a VPN tunnel to protect your communication. You can use SSL or SSH to protect GNS3 communication but the emulator console will be available to the world. A VPN will offer you security for GNS3 and the emulators.

### Multiple Users Environment

At the beginning, GNS3 was a tool for learning Cisco on your own computer. GNS3 evolved and now the server can be shared between multiple users, but with the following  limitations:

- You have no quota for resources, anyone can take all computer resources
- No isolation on filesystem; if you know the project uuid of someone’s project, you can access it
- You can access other’s consoles if you scan the port range

You have the same security problems that you can experience when you share a physical lab between students. A bad user could cut a cable and connect it to someone else’s console...

## Why do GNS3 and anti-virus / firewall suites not work together sometimes?

Antivirus are designed with a standard user in mind. GNS3 build virtual network and capture stuff on this network. This behavior exists only in a small amount of software (GNS3, VirtualBox, VMware, Hyper-V) and the fact GNS3 make virtual network between different technologies is unique.

Also GNS3 is a kind of a hypervisor managing multiple processes. The communication with these process is made via TCP sockets. Sometimes “smart” firewalls see that as an attack.

GNS3 is open source; you can audit our code and even rebuild your own binaries.

## Possible Improvements
If you want to improve the security, here are some issues where we need help.

### Rate limit authentications
In order to avoid an attack from a different user of the computer, we can protect the server with a rate limiter. It's usable for external connections and not required for a local server because ( by default) we only listen on the loopback interface.

### Turn off unused features
One improvement is to reduce the attack surface by turning off unused modules like IOU.

### Running the server in a container
Though we haven’t tested it yet, running a GNS3 server in a dedicated container can potentially protect the user.

### Quotas for users
To avoid a user consuming all the resources in a shared environment.

### True multiple users support
Create a notion of users in GNS3 and set users as owner of a project and prevent other users from gaining unauthorized access to it.

### Limit possible binaries for Qemu
A way for admin to limit the list of qemu accessible binaries in order to prevent people from trying to use unexpected programs.

### Expose console via the API instead of telnet

By default, most emulators support only telnet for remote access. An improvement could be to expose console via the API (like in the docker remote API). This would allow use of   GNS3 authentication to protect the console access.

### Bind virtual networks to a specific IP
Restrict how emulator listen for packets.

## Known Issues
### GNS3 1.5.3  Local privilege escalation attack on OSX
https://gns3.com/discussions/gns3-local-privilege-escalation-

Reported by Hacker House:
https://www.myhackerhouse.com/gns-3-ubridge-local-privilege-escalation-attack-0day/

Fixed in 1.5.4 and 2.0.0 releases

## Conclusion
The first point to check is the images. When you download an image from an unknown website, you take on additional risks, though it's the same risk you take when you download any program for your computer.

By running emulators in a VM, like the GNS3 VM on a single user computer, you can avoid most of the issues.  
