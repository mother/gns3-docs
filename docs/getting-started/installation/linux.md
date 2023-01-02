---
id: linux
title: GNS3 Linux Install
sidebar_label: Linux
---

## Installation from Packages

### Ubuntu-based distributions (64-bit only)
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
```
ubridge libvirt kvm wireshark docker
```

(use “sudo usermod -aG group user_name” to add your user to each of those groups)
Restart your user session by logging out and back in, or restarting the system.

### Debian-based distributions (64-bit only)

**For Debian Jessie**
Add the following lines to your /etc/apt/sources.list:
```
deb http://ppa.launchpad.net/gns3/ppa/ubuntu trusty main
deb-src http://ppa.launchpad.net/gns3/ppa/ubuntu trusty main

sudo apt-get update
sudo apt-get install -y gns3-gui gns3-server
```

**For Debian Stretch**
Add the following lines to your /etc/apt/sources.list:
```
deb http://ppa.launchpad.net/gns3/ppa/ubuntu xenial main
deb-src http://ppa.launchpad.net/gns3/ppa/ubuntu xenial main

**The python libraries for this are broken, it will not work **
```

**For Debian Buster**
Refresh your metadata, and install the following packages:
```
sudo apt update
sudo apt install -y python3-pip python3-pyqt5 python3-pyqt5.qtsvg \
python3-pyqt5.qtwebsockets \
qemu qemu-kvm qemu-utils libvirt-clients libvirt-daemon-system virtinst \
wireshark xtightvncviewer apt-transport-https \
ca-certificates curl gnupg2 software-properties-common
```

## Install GNS3 on ArchLinux Based :
Install GNS3 on Archlinux based distros ( Arch - EndeavourOS - Garuda - ArcoLinux ) 

### Install YAY package manager:

To install GNS3 on Archlinux you will need `yay` to install from Arch Users Repository ( **AUR** ), thats if it's not already installed, to install `yay` type below command in terminal:

```
pacman -Syu yay 
```

and follow the setup process choosing the package source and confirm installation .

**Install Prerequesits + docker:**

Next we will install pre-requesit packages from the same AUR source. Please note that mixing installation source may lead to unfuncional application or unstability:

```
yay -S qemu docker vpcs dynamips libvirt 
```

**Install GNS3 Server and GUI** 

```
yay -S gns3-server gns3-gui 
```
**Finalize installation**

Finally you we need to add your user to the gns3 groups as demonestared later and do reboot. 

### Install GNS3 from Pypi:

```
pip3 install gns3-server
pip3 install gns3-gui
```
We’ll go ahead and install docker next.  Import the Docker GPG key:
```
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
```
(As of 10/10/2019, Buster requires using the “edge” repo)
```
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/debian \
   $(lsb_release -cs) \
   stable edge"
```
Refresh your metadata, and install docker:
```
sudo apt update
sudo apt install -y docker-ce
```
Add the following lines to your /etc/apt/sources.list:
```
deb http://ppa.launchpad.net/gns3/ppa/ubuntu bionic main
deb-src http://ppa.launchpad.net/gns3/ppa/ubuntu bionic main
```
Get the GPG key:
```
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys F88F6D313016330404F710FC9A2FD067A2E3EF7B
```
Refresh your metadata, and ONLY install the following two packages!
```
sudo apt-get update
sudo apt install dynamips ubridge
```
To prevent accidentally installing anything else from that repo (for now), remove or comment out those two lines in your /etc/apt/sources.list file:
```
#deb http://ppa.launchpad.net/gns3/ppa/ubuntu bionic main
#deb-src http://ppa.launchpad.net/gns3/ppa/ubuntu bionic main
```
You can also remove that GPG key, if desired:
```
sudo apt-key del F88F6D313016330404F710FC9A2FD067A2E3EF7B
```
Add your user to the following groups:
```
kvm libvirt docker ubridge wireshark
```
(use “sudo usermod -aG group your_user” to add your user to an existing group).
Restart your user session by logging out and back in, or rebooting the system.

:::note
The reason we currently can’t just install all of the packages (except docker-ce) off launchpad, is due to a python issue
:::


If you have a pre-existing install of Buster, and run into the following error, follow these instructions (shout out to user Pierce Howell for providing them!)

```
Fail update installation: No module named 'sip'
Can't import Qt modules: Qt and/or PyQt is probably not installed correctly...
```

Start by uninstalling gns3 and gns3-server (Do not remove the ppa’s):
```
sudo apt purge --autoremove gns3-server gns3-gui
```

Create a symbolic link for python 3.5 using python3.7:
```
sudo ln -s /usr/bin/python3.7 /usr/bin/python3.5
```

Install python-pip and python3-pip to use the gns3 from source:
```sudo apt install python-pip python3-pip```

Install from PyPi as listed:
```
sudo pip3 install gns3-server
sudo pip3 install gns3-gui
```

Once installed, additional dependencies such as QtSvg, qtwebsockets, and dynamips will be required in order for the application to run.
```
sudo apt install python3-pyqt5.QtSvg python3-pyqt5.qtwebsockets dynamips
```

Finally, attempt to start gns3 from the command line. If you receive no output errors and the application does not start, try to reboot your machine.

:::note
You may not have to reboot your machine. The reboot worked in my case after much trial and error. You may also have to add the shortcut as it may not automatically populate in your applications menu.  
:::


## To launch the GNS3 Server
```
gns3server
```
