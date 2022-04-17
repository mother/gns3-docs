---
id: why-gns3-uses-uuid
title: Why does GNS3 use UUIDs?
sidebar_label: Why does GNS3 use UUIDs?
---

A commonly asked  question about GNS3, is why I can’t easily find the files of a node or project names on disk. It’s due to the usage of UUIDs in folder naming.

## What is a UUID?
A UUID is a 128-bit number. The generation of a UUID doesn’t require a central registration authority in order to be almost unique, while providing a low probability of collisions. In GNS3, we represent a UUID in this manner: 42a1b682-b5bf-4de4-b5af-5366fc20a111.

More information about UUIDs can be found here: https://en.wikipedia.org/wiki/Universally_unique_identifier

## Why use UUIDs?
Because UUIDs are unique, you can be assured that a UUID for a project or node on your computer is not in use on another computer. This allows the sharing of projects without conflicts. Otherwise, it’s highly probable that the same names for nodes or projects will be used, causing potential conflicts.  

## Node UUID in folders
If you list the files of a project,  you will see that the nodes folder uses UUID:

```
# ls -R myproject
project-files tutu.gns3

myproject/project-files:
vpcs

myproject/project-files/vpcs:
1c18e765-0107-4083-b371-a92d490eb8a0
4349251e-1d91-454f-9d89-c998cbfa90c9

myproject/project-files/vpcs/1c18e765-0107-4083-b371-a92d490eb8a0:
startup.vpc

myproject/project-files/vpcs/4349251e-1d91-454f-9d89-c998cbfa90c9:
startup.vpc
```

The UUID for a node is stable and will never change.

The main reason for using UUIDs instead of names, is that most emulators don’t support changing the path of their files while the emulator is running. If you want to rename a node and change the path of a folder, you’d need to stop the node and restart it.

The second reason, is that some emulators have restrictions on the characters in the path. By using UUIDs, the user doesn’t need to care about that.

## Project UUIDs on a remote server
When you use GNS3 on your local computer, you can choose the location of the project files. It’s for backward compatibility, and to allow user to freeup  disk space without starting GNS3. However,  on a remote server, all projects are in the same directory,  with a UUID as their name.

The first reason is to avoid problems when renaming/copy a project. Second reason is to prevent problem if the remote server filesystem doesn’t support UTF-8.

This also allows running multiple GNS3 servers using the same shared projects folder,  without the risk of collision. In the future, it should be possible to support multiple users with same project name, sharing a common server.

## User or third parties application are not supposed to directly interact with files
There's a reason for GNS3 not consider the need to have a user friendly file system. Nobody should directly interact with what is contained in the folder. It’s internal to GNS3,  and there are good reasons for this. GNS3 provides tools to export or edit files,  and you need to use them. If you build a third party's application, use the API to apply your modification(s). You can find more information over at [http://api.gns3.net/](http://api.gns3.net/).

### What is on disk is not necessarily what is in the VM
If you browse the disk, you will see stuff that could be the configuration file of the node. But this not always synced, and for various reasons, they could be out of sync. This is normal. You could have a delay when you save in the emulator,  and when GNS3 is notified about the changes and dumps the configuration on disk.

### Modification on disk could be lost
What you change on disk could be lost at the next sync.

### Modification on disk could corrupt the node
This is the worst case scenario. A user could be modifying something on disk outside GNS3, and GNS3 attempts to write the file at the same time. This could corrupt the files. Some configuration file modifications can even crash the emulator.

### Data could be on another server
If you split up your project on multiple servers,  the data could be spread across all of them. If you use the API,  this won’t be a concern.
