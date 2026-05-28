---
功能标签: [基础操作]
难度: 入门
前置知识: "无"
预计阅读时间: 3 分钟
---

# GNS3 VM 概览

GNS3 VM 是运行在虚拟机中的 GNS3 服务器，提供完整的 GNS3 网络仿真环境。它与 GNS3 Web UI 配合使用，提供强大的网络模拟能力。

## 支持的虚拟化平台

GNS3 VM 支持多种虚拟化平台，您可以根据自己的需求和系统环境选择合适的平台：

| 虚拟化平台 | 文件格式 | 适用场景 | 操作系统 |
|-----------|----------|----------|----------|
| **VirtualBox** | .ova | 免费开源，适合个人使用 | Windows/macOS/Linux |
| **VMware Workstation** | .ovf | 性能优秀，功能丰富 | Windows/macOS/Linux |
| **VMware ESXi** | .ovf | 企业级虚拟化，生产环境 | 专用系统 |
| **KVM/QEMU** | .qcow2 | Linux 原生虚拟化，性能优异 | Linux |
| **Hyper-V** | .vhdx | Windows 原生虚拟化 | Windows Pro/Enterprise |

## 选择合适的平台

### 个人学习和开发
- **VirtualBox** - 免费开源，易于使用，适合新手
- **VMware Workstation** - 性能优秀，功能丰富

### 生产环境
- **VMware ESXi** - 企业级解决方案，稳定可靠
- **KVM/QEMU** - 开源方案，性能优异

### Windows 用户
- **Hyper-V** - Windows 原生支持，无需额外安装

## 快速开始

选择您的虚拟化平台，查看详细的使用指南：

- [如何在 VirtualBox 中使用 GNS3 VM](virtualbox-usage.md)
- [如何在 VMware Workstation 中使用 GNS3 VM](vmware-workstation-usage.md)
- [如何在 VMware ESXi 中使用 GNS3 VM](vmware-esxi-usage.md)
- [如何在 KVM/QEMU 中使用 GNS3 VM](kvm-usage.md)
- [如何在 Hyper-V 中使用 GNS3 VM](hyperv-usage.md)

## 系统要求

无论选择哪种虚拟化平台，请确保您的系统满足以下基本要求：

- **CPU**: 支持硬件虚拟化 (VT-x/AMD-V)
- **内存**: 至少 8GB 可用内存
- **磁盘**: 至少 50GB 可用磁盘空间
- **网络**: 稳定的网络连接

---
**文档版本**: 3.1.0
**最后更新**: 2026-05-13
