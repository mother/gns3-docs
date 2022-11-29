---
id: gns3-on-equinix
title: GNS3 on equinix
sidebar_label: GNS3 on Equinix Deploy
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## What is Equinix deploy?

deploy.equinix.com is a bare metal cloud provider, with datacenter locations near NYC, Silicon Valley, Amsterdam and Tokyo.  

Unlike AWS or Google Cloud (which provide only Virtual Machines), Equinix gives you full access to a true dedicated server, but with the same automation and flexibility you expect from a public cloud. Since you have direct access to the virtualization instructions on the CPU, running GNS3 on Packet is a great experience.

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-equinix/1.jpg')} />

- Video (Part 1): https://www.youtube.com/watch?v=5MzYIh3FK2g
- Video (Part 2): https://www.youtube.com/watch?v=KyxJ3l7GypU&feature=emb_title

## Sign up with Equinix deploy

First, you will need to sign up for an account at Equinix. There is sometimes a manual review, which you can help to avoid by using a work email address (if you have one) and disconnecting from any VPN during the signup process.  If you are flagged for manual review, don’t worry!  The Equinix team is very responsive and will work with you to get everything squared away.  

A few things:
- Once your account is activated, we recommend activating Two Factor Authentication (2FA).  Simply visit 'Personal Settings' -> 'Security', scroll down to the Two Factor Authentication section, select either “ set up using an app” or “set up using SMS”, and follow the instructions:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/3.jpg')} />

Receiving your 2FA pin via SMS isn’t secure as using an authenticator app, like Google Authenticator.  When using the “set up using an app” option, scan in the QR code with your app, and you’ll receive a 6 digit pin (2FA token) that is only valid for a small amount of time, before a new token appears. Enter the token within that time, and click Enable to finish enabling 2FA for login.

When 2FA is enabled, you will log into your account using your username/password as usual:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/4.jpg')} />

Then you’ll  be presented with the second page, where you’d enter a new 2FA token. You’d open your authenticator app, select the entry that’s associated with your [deploy.equinix.com.net](https://deploy.equinix.com/) user account, and enter the token to finish logging in:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/5.jpg')} />

## Add your SSH Key

Next, add your SSH key to your account, since equinix servers can only be accessed via SSH. [Here is a great article](https://help.packet.net/article/2-deploy-a-server) which will help you get started.

While in the Personal Settings view in the Portal, click “SSH Keys”, and then “Add Key” to open up a sidebar:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/6.jpg')} />

(If you need help creating your public/private key pair, [this article](https://help.packet.net/article/31-ssh-access) will walk you through the steps)

In the sidebar, give your key a title, and then paste the contents of your public key into the box shown below, and click Add:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/7.jpg')} />

Your key will be added to your Portal:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/8.jpg')} />

- Video: https://www.youtube.com/watch?v=nWnxKHmaGNU

## Deploy your Server

Once you are ready, you can go ahead and deploy a new server with the Ubuntu 18.04  OS in the equinix location which is closest to you.  

- While GNS3 works on the [t1.small.x86](https://www.packet.com/cloud/servers/t1-small/) server, you need to use at least a [c1.small.x86](https://www.packet.com/cloud/servers/c1-small/) server for a better virtualization support.
- GNS3 is not supported for equinix’s ARM server offerings..
- A listing of available bare metal servers can be found [here](https://www.packet.com/cloud/servers/).

:::important
At equinix you are getting your own dedicated bare metal machine that is yours alone from the time you provision it until you actually delete the device from your account.  So even if you were to power it down, it would still accrue usage until you actually delete it completely.
:::

- Video: https://www.youtube.com/watch?v=meygA4aEN5I

:::caution
If you use IOU, the name of the machine should be exactly the name you have in your license file. The characters case is important: gns3vm is different from GNS3VM.
:::

First, click on Organization Settings in the Portal, click **Projects**, and click **'Create New Project'**:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/9.jpg')} />

Give the project a name, and click Create to start the deployment process for a server:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/10.jpg')} />

Since there currently are no servers provisioned and deployed in your new project, click “Deploy Servers”:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/11.jpg')} />

On the next screen, give your server a hostname, select the location and type of server, as well as the OS you’d like installed  (Ubuntu recommended):

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/12.jpg')} />

When ready, click the Deploy Servers to start the automated provisioning process:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/13.jpg')} />

This will take anywhere between 5 to 10 minutes, depending on the hardware. If you click the symbol to the right  (below “Tags”), you can open up a sidebar to watch the progress of the automated provisioning:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/14.jpg')} />

When provisioning is complete, you can use SSH to connect to the public IP of your server:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/15.jpg')} />

:::note
You’ll need to log in as the user “root” with no password, using the private key that was generated earlier, when you created the public/private keypair. This step varies between the terminal you use.
:::

## Install GNS3

With your server available, you can install GNS3. Copy and paste the following commands on the terminal.

```
cd /tmp
curl https://raw.githubusercontent.com/GNS3/gns3-server/master/scripts/remote-install.sh > gns3-remote-install.sh
bash gns3-remote-install.sh --with-openvpn --with-iou --with-i386-repository
```

If everything is OK, you will see this message:

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/16.jpg')} />

Reboot the server from the equinix portal or by issuing a reboot command on the terminal.
That’s it!


## Connect GNS3 to the Server

### VPN Setup

The next time you SSH in you will see this message:

Download the **.opvn** certificate from the link shown on your server. You can also find the certificate in /root/client.opvn

### VPN Connection on Linux

```
# sudo apt-get install openvpn
# sudo openvpn gns3vm.opvn
Tue Apr 25 17:12:48 2017 [OpenVPN] Peer Connection Initiated with [AF_INET]X.X.X.X:1194
Tue Apr 25 17:12:51 2017 TUN/TAP device tun0 opened
Tue Apr 25 17:12:51 2017 Initialization Sequence Completed
```

### VPN Connection on Windows

- Download and install [OpenVPN for Windows](https://openvpn.net/community-downloads/) (be careful to use the version associated with your OS version).
- Click “Show Hidden Items” on the taskbar
- Right-click on “OpenVPN-GUI” and select “import file”
- Select the .ovpn file you downloaded, and import it
- Right-click on OpenVPN-GUI again, and select “Connect”

### VPN Connection on Mac

- Download and install [Tunnelblick](https://tunnelblick.net/).
- After double clicking on the client certificate, it install the config for you. And the setup will be done.  Now if you click on the tunnelblick icon in the OSX top bar. You can connect to the VPN.

If the VPN connection works, this page should resolve:

http://172.16.253.1:3080/

## Configure GNS3 in order to use the new server

If you want to use a local GNS3 installation as well as a remote installation, you can use the [settings profiles](https://docs.gns3.com/1nCRIQ3AfdPbiYeL8RSC28Y_skgRJOfxPlz1MCeX94U4/index.html) CHECKLINK to alternate between them.

At startup in the setup wizard choose **Run everything on a remote server**

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/17.jpg')} />

And put the server settings. The IP needs to be **172.16.253.1**

<img alt="screenshot" src={useBaseUrl('img/getting-started/installation/gns3-on-packet/18.jpg')} />

- Video: https://www.youtube.com/watch?v=ybjS8GV6k5g

## Backup Solutions

If you don’t want to keep your equinix server running continually (hence accruing charges even during the time that you are not actively using GNS3), you can save/backup your GNS3 projects and have them ready when you deploy a new server in the future.

If you take a look at the GNS3 server config file at /etc/gns3/gns3_server.conf you will see the following:

```
root@gns3vm:~# cat /etc/gns3/gns3_server.conf
[Server]
host = 172.16.253.1
port = 3080
images_path = /opt/gns3/images
projects_path = /opt/gns3/projects
report_errors = True

[Qemu]
enable_kvm = True
```

So, we can see that GNS3 is saving the images and projects on the /opt/gns3/ directory.

The first option here would be to scp those 2 folders on your local computer. We would have to compress them first, for an easier transfer.

```
cd /opt/gns3/
tar -czvf gns3-backup.tar.gz projects/ images/
```

That command will create a new compressed file named gns3-backup.tar.gz which now is easier to [scp to your local computer](http://www.hypexr.org/linux_scp_help.php).

When you deploy a new server, you can scp the backup file back to the server, and then extract it back to the /opt/gns3/ directory.

```
cd /opt/gns3/
tar -xzvf gns3-backup.tar.gz
```

As these directories might get bigger, the scp option might become a struggle, so we come to the second option, which would be to take advantage of equinix [Block Storage service](https://packet.kayako.com/article/63-elastic-block-storage).

Block Storage is a network attached storage that can be moved between servers, and it’s a great option to backup your projects. A 100GB Volume of the Standard Tier would cost ~$0.25 for a day or ~$7.5 for the whole month.  

Block Storage is only available in equinix’s EWR1, SJC1, and AMS facilities.  

:::note
This method requires that you have a good working knowledge of the Linux command line, as you will have to work with network attached storage, and manually copy directories around.  
:::

equinix does not offer any managed services, and you will be responsible for your own data. Here is a [knowledge base article](https://help.packet.net/technical/storage/packet-block-storage-linux) explaining the process of attaching and detaching the volumes on a equinix server.

In short you would have to do the following, after you create the volume and attach it to the server on the portal.

Let’s say the volume is named **volume-3b36a278**

```
packet-block-storage-attach -m queue
echo -e "o\nn\np\n1\n\n\nw" | fdisk /dev/mapper/volume-3b36a278
kpartx -u /dev/mapper/volume-3b36a278-part1
mkfs.ext4 /dev/mapper/volume-3b36a278-part1
mkdir /mnt/block
mount -t ext4 /dev/mapper/volume-3b36a278-part1 /mnt/block
echo "/dev/mapper/volume-3b36a278-part1 /mnt/block ext4 _netdev 0 0" >> /etc/fstab
```

With those commands, we have properly attached, formatted and mounted the volume on the /mnt/block directory.

Then we can copy the 2 important directories we mentioned above ( /opt/gns3/images, /opt/gns3/projects ).

```
cd /opt/gns3/
cp -ar images/ /mnt/block/
cp -ar projects/ /mnt/block/
```

Now that we have copied them to the storage volume we can detach it from the server with:

```
packet-block-storage-detach
```

We would have to detach it on the portal too.

The next time that we attach this volume to a new server, after doing so in portal, we just have to use the following commands on the server:

```
packet-block-storage-attach -m queue
mkdir /mnt/block
mount -t ext4 /dev/mapper/volume-3b36a278-part1 /mnt/block
echo "/dev/mapper/volume-3b36a278-part1 /mnt/block ext4 _netdev 0 0" >> /etc/fstab
```

And then we can copy/move the 2 directories we need back to /opt/gns3/.
