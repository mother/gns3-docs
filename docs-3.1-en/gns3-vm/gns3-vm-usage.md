---
title: How to use GNS3 VM
---

# How to use GNS3 VM

GNS3 VM is a GNS3 server that runs inside a virtual machine. It gives you a full GNS3 network simulation environment. It works together with the GNS3 Web UI to provide powerful network simulation.

## Supported Virtualization Platforms

GNS3 VM works with many virtualization platforms. You can choose the right one based on your needs and system:

| Virtualization Platform | File Format | Best For | Operating System |
|------------------------|-------------|----------|------------------|
| **VirtualBox** | .ova | Free and open source, good for personal use | Windows/macOS/Linux |
| **VMware Workstation** | .ovf | Good performance, many features | Windows/macOS/Linux |
| **VMware ESXi** | .ovf | Enterprise virtualization, production use | Dedicated system |
| **KVM/QEMU** | .qcow2 | Linux native virtualization, great performance | Linux |
| **Hyper-V** | .vhdx | Windows native virtualization | Windows Pro/Enterprise |

## How to Choose a Platform

### For Personal Learning and Development
- **VirtualBox** - Free and easy to use. Good for beginners.
- **VMware Workstation** - Better performance, but you need to buy a license.

### For Production Environment
- **VMware ESXi** - Enterprise solution, stable and reliable.
- **KVM/QEMU** - Open source option, great performance.

### For Windows Users
- **Hyper-V** - Built into Windows, no extra installation needed.

## Quick Start

Choose your virtualization platform and read the guide:

- [How to use GNS3 VM with VirtualBox](virtualbox-usage.md)
- [How to use GNS3 VM with VMware Workstation](vmware-workstation-usage.md)
- [How to use GNS3 VM with VMware ESXi](vmware-esxi-usage.md)
- [How to use GNS3 VM with KVM/QEMU](kvm-usage.md)
- [How to use GNS3 VM with Hyper-V](hyperv-usage.md)

## System Requirements

No matter which platform you choose, make sure your system meets these basic requirements:

- **CPU**: Supports hardware virtualization (VT-x/AMD-V)
- **Memory**: At least 8GB of free memory
- **Disk**: At least 50GB of free disk space
- **Network**: A stable internet connection

---
**Document Version**: 3.1.0
**Last Updated**: 2026-05-13
