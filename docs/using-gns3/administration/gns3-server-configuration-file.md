---
id: gns3-server-configuration-file
title: GNS3 server configuration file
sidebar_label: GNS3 server configuration file
---

If you want to run the GNS3 server without the GUI, you can configure it with via an ini file.

## File Location
We search for the configuration file in multiple locations:

### Linux
- $HOME/.config/GNS3/gns3_server.conf
- $HOME/.config/GNS3.conf
- /etc/xdg/GNS3/gns3_server.conf
- /etc/xdg/GNS3.conf
- gns3_server.conf in the current directory

###  Mac OS X
- $HOME/.config/GNS3/gns3_server.conf
- gns3_server.conf in the current directory

###  Windows
- %APPDATA%/GNS3/gns3_server.ini
- %APPDATA%/Roaming/GNS3/gns3_server.ini
- %APPDATA%/GNS3.ini
- %COMMON_APPDATA%/GNS3/gns3_server.ini
- %COMMON_APPDATA%/GNS3.ini
- gns3_server.ini in current directory

All configurations have default settings.  This means you need in the configuration file only the configuration you need to change. For executables like VCPS, ubridge, and dynamips, we search in the PATH environment variable by default (on a standard linux install we will look in /bin, /usr/bin).

**The configuration file**:
```
[Server]
; IP where the server listen for connection
host = 127.0.0.1
; HTTP port for controlling the servers
port = 3080
; Path where images of devices are stored
images_path = /home/gns3/GNS3/images
; Path where user project are stored
projects_path = /home/gns3/GNS3/projects
; Send crash to the GNS3 team
report_errors = True
; First port of the range allocated to devices telnet console
console_start_port_range = 2001
; Last port of the range allocated to devices telnet console
console_end_port_range = 5000
; First port of the range allocated to communication between devices. You need two port by link
udp_start_port_range = 10000
; Last port of the range allocated to communication between devices. You need two port by link
udp_end_port_range = 20000
; Path of the ubridge program
ubridge_path = /Applications/GNS3.app/Contents/Resources/ubridge
; Boolean for enabling HTTP auth
auth = True
; Username for HTTP auth
user = bob
; Password for HTTP auth
password = alice

[VPCS]
; Path of the VPCS binary
vpcs_path = /usr/local/bin/vpcs

[Dynamips]
allocate_aux_console_ports = False
mmap_support = True
; Path of the dynamips path
dynamips_path = /usr/local/bin/dynamips
sparse_memory_support = True
ghost_ios_support = True

[IOU]
; Path of the iouyap binary
iouyap_path = /usr/local/bin/iouyap
; Path of your .iourc file. If empty we search in $HOME/.iourc
iourc_path = /home/gns3/.iourc
; Validate if the iourc is correct. If you turn off and your licence is invalid iou will crash without errors
license_check = True

[VirtualBox]
; Path of the VBoxManage command
vboxmanage_path = /usr/local/bin/VBoxManage
; Run VirtualBox with sudo as vbox_user
vbox_user =

[VMware]
; Type of Virtualization product (fusion, player, workstation)
host_type = fusion
; First vmnet adapter controlled by GNS3
vmnet_start_range = 2
; Last vmnet adapter controlled by GNS3
vmnet_end_range = 50
; Path of the vmrun executable
vmrun_path = /Applications/VMware Fusion.app/Contents/Library/vmrun
```
