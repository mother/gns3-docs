---
title: How to use GNS3 VM with Hyper-V
---

# How to use GNS3 VM with Hyper-V

Run GNS3 VM in Hyper-V. This is good for personal use and learning.

## Before You Start

You will need:

- Windows 10 or 11 **Pro, Enterprise or Education** with **Hyper-V** enabled
- The **GNS3 VM for Hyper-V** (`GNS3.VM.Hyper-V.<version>.zip`), from the GNS3 website or the [gns3-gui GitHub releases](https://github.com/GNS3/gns3-gui/releases)

:::warning

If you already have a VM called **GNS3 VM** in Hyper-V, rename it before you start (right-click it in Hyper-V Manager → **Rename**). The installation script always uses this name.

:::

## Step 1: Extract the Files

Extract the zip file to the folder where you want to keep the VM, for example `D:\Hyper-V\GNS3-VM`. Do not move or delete this folder afterwards, because the VM runs from it.

<img width="1187" height="696" alt="01-extracted-files" src="https://github.com/user-attachments/assets/01358fd8-1503-4190-b399-abd89bf85d24" />

:::tip

If Windows shows a security warning when you run the script, right-click the zip file → **Properties** → tick **Unblock** → **OK**, then extract it again.

:::

## Step 2: Create the Virtual Machine

Double-click **`install-gns3-vm.cmd`** in the extracted folder and accept the administrator prompt. The script creates a VM called **GNS3 VM** in Hyper-V.

<img width="760" height="175" alt="02-install-script" src="https://github.com/user-attachments/assets/6b551f09-0471-478b-b7f3-6629d051853a" />

:::tip

The VM is created with 2 GB of memory. For larger labs, increase it in Hyper-V Manager: right-click **GNS3 VM** → **Settings** → **Memory** (the VM must be off).

:::

## Step 3: Start the Virtual Machine

In Hyper-V Manager, right-click **GNS3 VM** → **Connect**, then click **Start**.

Wait about 2-3 minutes for the VM to boot. Note the **IP address** shown on the console.

<img width="1026" height="872" alt="03-vm-console-ip-display" src="https://github.com/user-attachments/assets/54c575f0-a24c-42a7-aa3c-821aa01dfdfd" />

## Step 4: Log in to the Web UI

Open a browser and go to either `http://gns3vm.local` or `http://<IP address>`, using the address from the VM console.

Log in with the default username **admin** and password **admin**.

<img width="1920" height="1032" alt="04-web-ui-login" src="https://github.com/user-attachments/assets/fedb50cd-8b6f-4f64-939f-8df3eff4080d" />

After logging in, the **Projects** page opens. From here you can create a new project or manage images and templates from the menu on the left.

<img width="1920" height="1032" alt="05-projects-page" src="https://github.com/user-attachments/assets/b95a99a8-1bdf-4fc8-9242-b79c6975decd" />

---
