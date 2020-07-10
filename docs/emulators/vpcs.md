---
id: vpcs
title: VPCS
sidebar_label: VPCS
---

Virtual PC Simulator is a program written by Paul Meng, which allows you to simulate a lightweight PC supporting DHCP and ping. It consumes only 2MB of RAM per instance,  and does not require an additional image.

The official website:
https://sourceforge.net/projects/vpcs/?source=directory

## Put a VPCS node your topology

The VPCS node is included with GNS3 by default.  No additional configuration is required. It will be located in the End devices category in the Devices list:

![screenshot](../../img/vpcs/1.jpg)

Drag and drop an instance of VPCS into the workspace. You’ll be prompted which server type will run this VPCS instance:

![screenshot](../../img/vpcs/2.jpg)

(for this article, “GNS3 VM” was selected for the server type)
An instance of VPCS will now appear in the workspace:

![screenshot](../../img/vpcs/3.jpg)

After you start the VPCS node, you can access its console:

```
Welcome to Virtual PC Simulator, version 0.6.1
Dedicated to Daling.
Build time: Feb 25 2016 00:35:23
Copyright (c) 2007-2015, Paul Meng (mirnshi@gmail.com)
All rights reserved.

VPCS is free software, distributed under the terms of the "BSD" licence.
Source code and license can be found at vpcs.sf.net.
For more information, please visit wiki.freecode.com.cn.

Press '?' to get help.

Executing the startup file


PC1>
```

## Set an IP
### Manually set an IP

```
PC1> ip 192.168.1.1
Checking for duplicate address...
PC1 : 192.168.1.1 255.255.255.0
```

### Use DHCP
```
PC1> dhcp
```

## Ping & Traceroute
```
PC1> ping 192.168.1.2

84 bytes from 192.168.1.2 icmp_seq=1 ttl=64 time=0.576 ms
84 bytes from 192.168.1.2 icmp_seq=2 ttl=64 time=0.512 ms
84 bytes from 192.168.1.2 icmp_seq=3 ttl=64 time=0.473 ms
84 bytes from 192.168.1.2 icmp_seq=4 ttl=64 time=0.453 ms
84 bytes from 192.168.1.2 icmp_seq=5 ttl=64 time=1.182 ms
```
```
PC1> trace 192.168.1.2
trace to 192.168.1.2, 8 hops max, press Ctrl+C to stop
 1   *192.168.1.2   0.398 ms (ICMP type:3, code:3, Destination port unreachable)
```

## Save Configuration
The configured IP address will be lost on restart, if you don’t save the config:

```
PC1> save
Saving startup configuration to startup.vpc
.  done
```

## Limitations

VPCS is a PC simulator. Its implementation of the network stack is not perfect, and you will see bugs when it’s used in complex topologies.

Use of the ipterm docker container is a viable alternative to using VPCS. The ipterm container will require use of linux commands, as well as running it via the GNS3 VM for Windows/Mac OS X users.  Linux users can run it natively, provided docker-ce has been installed, and their user was added to the docker group (restarting your user session after adding your user to that group is required).
