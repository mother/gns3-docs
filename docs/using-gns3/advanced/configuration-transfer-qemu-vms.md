---
id: configuration-transfer-qemu-vms
title: Configuration transfer to QEMU VMs
sidebar_label: Configuration transfer to QEMU VMs
---

import useBaseUrl from '@docusaurus/useBaseUrl';

GNS3 v2.2.18 introduces a feature to transfer files,
for example configurations, between the GNS3 GUI and QEMU VMs.
That's done by adding an additional disk image to the VM
and implement a way to transfer its data to the user.
It is not as convenient to use as the IOS and IOU method,
but it is more flexible.
It's not limited to configurations and
it will work for almost all QEMU node types.

The additional disk image, named config disk,
is not active by default.
You have to enable it in the HDD tab of the
node properties (for a specific node)
or the QEMU VM template (for all new nodes of that type).

<img alt="screenshot" src={useBaseUrl('img/using-gns3/advanced/configuration-transfer-qemu-vms/1.png')} />

This adds a FAT formatted image as hard disk D to the node.
The user can now transfer data to/from this disk to the VM.
There is no automatic transfer into the node's configuration,
as for IOS and IOU devices.
The config disk is simply a file storage with all its flexibility.
The disk size is set to 1 MB,
so it can't be used to exchange large files.

The config disk images are not simply exposed to the user,
as it's cumbersome to use them.
Instead, they are converted to ZIP archives.
By right click on a node / Export config the
ZIP file is copied to the users computers
and can be opened and inspected there.
By creating/modifying a ZIP file and importing it,
it is copied to the node.

When a node is initially started the config disk is empty.
Sometimes it might be useful to fill it with initial contents.
The manual way is to import a ZIP archive before the first start of a node.
This can be automated by storing the ZIP archive in the
`GNS3/images/QEMU` directory and entering its name
in the "Startup-cfg" field of the HDD configuration.


# Pitfalls

## Disk Interface of Config Disk

A VM doesn't use the hard disk images in the sequence
they are defined in the node.
The VM additionally considers the disk interface type.
A disk with an ide disk interface has priority over
disks with other interface types.
For example, if the HDA disk uses the virtio type
and the config disk uses ide,
the VM will use the config disk as its primary disk and
tries to boot from it.
That, of course, will fail.
Therefore, it's strongly suggested using the same disk interface type
for all the disks of a node.

To make this issue less likely in the future,
newly created templates will set the disk interface by default to "none".
Config disks with the "none" disk interface will automatically
use the same disk interface as the first hard disk (HDA).
But for already existing nodes/template you have to pay attention.

## Config ZIP is not updated while Node is running

The ZIP archive is converted to the config disk,
when the node is started.
Likewise, the ZIP archive is updated from the config disk,
when the node is stopped.
Therefore, changes on the config disk while the nodes are running,
will not immediately update the ZIP archive.
You have to wait until the node is stopped.

## GNS3 Server needs Mtools installed

This config disk feature uses the
[Mtools](https://www.gnu.org/software/mtools/)
program to access the config disk.
Therefore, it needs to be installed on the Linux GNS3 server.
The gns3-server package for Ubuntu has added mtools as a requirement,
so it will be automatically installed in the GNS3VM and other Ubuntu systems.
Different Linux flavors need to additionally install mtools.

## Some VM Types don't support additional Disk Images

Some VM types, like ASAv, support only the main disk image.
The config disk will therefore not be visible on these VMs.


# Use with IOSv and IOSvL2

## IOS disk naming

IOSv and IOSvL2 images have an odd way to name the flash drives.

* `flash:`, `flash0:` - part within IOS image
* `flash2:` - first external disk
* `flash1:` - second external disk
* `flash3:` - third external disk

So lets assume the following IOSv template:

<img alt="screenshot" src={useBaseUrl('img/using-gns3/advanced/configuration-transfer-qemu-vms/2.png')} />

The HDB disk is the first external disk and
will therefore be named `flash2:` within IOS.
The config disk is the second external disk and
will be named `flash1:`.
Pretty confusing, but that's the way IOS is working.

## Archive feature

With the
[archive](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/config-mgmt/configuration/15-sy/config-mgmt-15-sy-book/cm-config-versioning.html)
feature of IOS
the configs can be automatically saved to the config disk.
So you don't have to manually copy them.
That has the additional benefit,
that the user gets a backup of his configurations.

Add the following to the IOS configuration:

```
archive
 path flash1:$h
 write-memory
```

The path has to be adopted to the IOS disk name used for the config disk,
see the previous section.

By default, it will create a maximum of 10 backups,
but that can be changed with the `maximum` subcommand.

## Startup Configuration

IOSv / IOSvL2 has the ability to load an initial configuration
from a file named "ios_config.txt" placed on a flash drive.
It additionally needs a checksum file named "ios_config_checksum",
containing the MD5 checksum of ios_config.txt.
The IOSv appliance uses disk HDB with an IOSv_startup_config.img,
that contains this initial ios_config.txt.

However, this image is difficult to modify.
An alternative is to add this ios_config.txt to the config disk.
All we have to do is to create this file,
put its MD5 sum into ios_config_checksum and
create a zip file containing them.
Well, there is one quirk.
The checksum file should contain only the 32 characters of the MD5 sum and
an optional linefeed.

As an example here the config ZIP file I'm using for IOSv and IOSvL2: <a href={useBaseUrl('configs/IOSv_startup_image.zip')} target="_blank">IOSv_startup_image.zip</a>

I have added it as a config disk "Startup-cfg",
so it's automatically added to all new IOSv VMs.
This replaces the old HDB IOSv_startup_image.img,
which should be cleared from the template.

<img alt="screenshot" src={useBaseUrl('img/using-gns3/advanced/configuration-transfer-qemu-vms/3.png')} />
