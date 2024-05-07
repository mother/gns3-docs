---
id: hubs-and-switches
title: GNS3's built-in Hub and Switch devices
sidebar_label: Built-in hubs and switches
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Introduction
GNS3 comes with both an "Ethernet Hub" and an "Ethernet Switch" device out of the box.  For the most part, these behave like their physical counterparts.  Some peculiarities are documented here.

:::note
GNS3's Ethernet Switch only supports specific combinations of functionality.  The following topology describes some of these limitations, but the final answer in any open-source product is: "Read the Source, Luke".
As of this writing, GNS3's Ethernet Switch is implemented in [eth_switch.c](https://github.com/GNS3/dynamips/blob/f7361331d2e72bd65b6355da5fce3277da460f7c/common/eth_switch.c#L181).
:::

## Port Modes

### Access

Access ports generally face end-devices: users, servers, etc.

The only knob here is "VLAN".  This sets the PVID and is equivalent to `switchport access vlan X` on Cisco Catalyst (and many other) switches.
In the GNS3 implementation, a packet received on an access port can be transmitted out:
* an Access port if the PVIDs match, in which case the packet is sent as-is, or
* a Dot1Q port, in which case the access port's PVID is added (prepended) as the 802.1Q VLAN tag, or C-tag.

### Dot1Q

Dot1Q ports generally face Dot1Q ("trunk") ports on other switches.

The only knob here is "VLAN".  In this mode, it sets the PVID and is equivalent to `switchport mode trunk native vlan X` on Cisco Catalyst (and many other) switches.
A received packet, if untagged, will have the PVID VLAN applied to it, then switched as a tagged packet.
A received packet, if tagged, will retain its existing VLAN tag.
In the GNS3 implementation, a packet received on a dot1q port can be transmitted out:
* an Access port (if the VLAN tag matches hte access port's PVID),
* a Dot1Q port (packet remains as-is unless the VLAN tag matches the output port's PVID, in which case it gets stripped), or
* a QinQ port, in which case the outer tag is stripped.  Note that a dot1q interface will happily transmit a double-tagged packet; this is how QinQ tunneling works.

### QinQ

QinQ ports generally face Dot1Q ports on other switches.  QinQ ports are generally "customer-facing", i.e. they preserve a customer's C-tags by prepending their S-tag on ingress, and stripping their S-tag on egress.

There are knobs here: VLAN, which sets the outer s-tag, and Ethertype, which defaults to 0x8100, but 0x88A8, 0x9100, and 0x9200 are also available.
The VLAN knob, aka S-tag, is equivalent to setting the port's Access-mode PVID on a Cisco Catalyst or equivalent.
Packets received on a QinQ port can be transmitted on:
* another QinQ port if the S-tags match, in which case the S-tag is stripped, or
* a Dot1Q port in which case the S-tag is added (prepended) as an outer VLAN tag.

## Sample Use Case

```
[PC1] ┉┉A┉┉ 0:[SW1]:1 ┉┉B┉┉ 0:[SW2]:1 ┉┉╮
                                        ┋
                                        C
                                        ┋
[PC2] ┉┉E┉┉ 0:[SW4]:1 ┉┉D┉┉ 0:[SW3]:1 ┉┉╯
```

* PC1: 192.0.2.1/24, no VLAN-tagging capability
> Link A: PC1 (single-port device) connects to Switch1 port 0.  This link sees only untagged traffic.
* Switch1 Port 0: Access mode, PVID 234 (i.e., untagged, `switchport access vlan 234`)
* Switch1 Port 1: Dot1Q mode, PVID 1 (i.e. all VLANs other than "1" are tagged, `switchport trunk native vlan 1`)
> Link B: Switch1 Port 1 connects to Switch2 Port 0.  This link sees only 802.1Q-tagged (single-tagged) traffic with VLAN tag 234.
* Switch2 Port 0: QinQ mode, PVID 777 (i.e. 'switchport access vlan 777` + `switchport mode dot1q-tunnel`)
* Switch2 Port 1: Dot1Q mode, PVID 1 (i.e. all VLANs other than "1" are tagged, `switchport trunk native vlan 1`)

_Switch2 would normally be a carrier edge ("CE") device._
> Link C: Switch2 Port 1 connects to Switch3 Port 1.  This link sees only QinQ, or double-tagged, traffic.  All packets will have an S-tag of 777 and a C-tag of 234.  This link represents the carrier network, where the customer traffic is encapsulated inside the carrier's VLAN 777.
* Switch3 Port 1: Dot1Q mode, PVID 1 (i.e. all VLANs other than "1" are tagged, `switchport trunk native vlan 1`)
* Switch3 Port 0: QinQ mode, PVID 777 (i.e. 'switchport access vlan 777` + `switchport mode dot1q-tunnel`)

_Switch3 would normally be a carrier edge ("CE") device._
> Link D: Switch3 Port 0 connects to Switch4 Port 1.  This link sees only 802.1Q-tagged (single-tagged) traffic with VLAN tag 234.
* Switch4 Port 1: Dot1Q mode, PVID 1 (i.e. all VLANs other than "1" are tagged, `switchport trunk native vlan 1`)
* Switch4 Port 0: Access mode, PVID 234 (i.e., untagged, `switchport access vlan 234`)
> Link E: Switch4 port 0 connects to PC2 (single-port device).  This link sees only untagged traffic.
* PC2: 192.0.2.2/24, no VLAN-tagging capability
