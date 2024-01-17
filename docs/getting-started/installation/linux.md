---
id: linux
title: GNS3 Linux Install
sidebar_label: Linux
---

## Ubuntu-based distributions (64-bit only)
These instructions are for Ubuntu and all distributions based on it (like Linux Mint).

```
sudo add-apt-repository ppa:gns3/ppa
sudo apt update                                
sudo apt install gns3-gui gns3-server
```

(when prompted whether non-root users should be allowed to use wireshark and ubridge, select ‘Yes’ both times)

**If you want IOU support**

```
sudo dpkg --add-architecture i386
sudo apt update
sudo apt install gns3-iou
```

**To install Docker CE (Xenial_and_newer)**

Remove any old versions:
```
sudo apt remove docker docker-engine docker.io
sudo snap remove docker
```

Install the following packages:
```
sudo apt-get install apt-transport-https ca-certificates curl \ software-properties-common
```

Import the official Docker GPG key:
```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

Add the appropriate repo:
```
sudo add-apt-repository \
"deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) stable"
```

Install Docker-CE:
```
sudo apt update
sudo apt install docker-ce
```

Finally, add your user to the following groups:

*ubridge libvirt kvm wireshark docker*

```
sudo usermod -aG ubridge,libvirt,kvm,wireshark,docker $(whoami)
```

Restart your user session by logging out and back in, or restarting the system.

## Debian-based distributions

GNS3 is not available through apt; you will have to use `pipx`.

Refresh apt:
```bash
sudo apt update
```

Install python and the required emulation & gui packages:
```bash
sudo apt install python3 python3-pip pipx python3-pyqt5 python3-pyqt5.qtwebsockets python3-pyqt5.qtsvg qemu-kvm qemu-utils libvirt-clients libvirt-daemon-system virtinst dynamips software-properties-common ca-certificates curl gnupg2 
```

Use pipx to install gns3:
```bash
pipx install gns3-server
pipx install gns3-gui
```

To launch the GUI, we will need to prepare the virtual environment. Inject the GNS server and QT elements:
```bash
pipx inject gns3-gui gns3-server PyQt5
```

Finally, launch with `gns3`.

## Arch-based distributions

To install GNS3 on Archlinux you will need `yay` to install from Arch Users Repository ( **AUR** ), thats if it's not already installed, to install `yay` type below command in terminal:

```
pacman -Syu yay 
```

and follow the setup process choosing the package source and confirm installation .

**Install Prerequesits + docker:**

Next we will install pre-requesit packages from the same AUR source. Please note that mixing installation source may lead to unfuncional application or unstability:

```
yay -S qemu docker vpcs dynamips libvirt ubridge inetutils
```

**Install GNS3 Server and GUI** 

```
yay -S gns3-server gns3-gui 
```
**Finalize installation**

Finally you we need to add your user to the gns3 groups as demonstrated later and do reboot. 

## To launch the GNS3 Server
```
gns3server
```
