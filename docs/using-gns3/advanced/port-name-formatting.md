---
id: port-name-formatting
title: Port name formatting
sidebar_label: Port name formatting
---

Some nodes (like QEMU VMs) will allow you to personalize the name of its ports, in order to match the name of the interfaces inside the emulator.

## Simple Syntax
The first set of curly brackets (```{}```) will be replaced by the interface number
For example: ```eth{}``` will give:

- eth0
- eth1
- eth2

A more verbose name format, like ```eth{port0}``` and ```eth{0}```, will have the same effect.

## Use Segments
Segments allow you to split your interface in multiple ports
For example, here is ```Ethernet{segment0}/{port0}``` with a specified segment size of 3:

- Ethernet0/0
- Ethernet0/1
- Ethernet0/2
- Ethernet1/0
- Ethernet1/1

You can also change the start number.
For example, this is ```Ethernet{segment1}/{port1}``` with a segment size of 3:

- Ethernet1/1
- Ethernet1/2
- Ethernet1/3
- Ethernet2/1
- Ethernet2/2

This work from ```port0``` to ```port9```. If you need a bigger range, feel free to ask us.
