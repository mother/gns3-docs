---
id: running-gns3-server-as-daemon
title: Running the GNS3 server as a daemon
sidebar_label: Running the GNS3 server as a daemon
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You will find a sample init script for various systems inside the init directory of the gns3-server project: https://github.com/GNS3/gns3-server/tree/master/init

Useful parameters to launch the server with are:
- --daemon     start process as a daemon
- --log logfile   store output in a logfile
- --pid pidfile   store the pid of the running process in a file and prevent double execution

All the init script require the creation of a GNS3 user. It is possible to change it to another user:

```
sudo adduser gns3
```

You will need to install some dependencies first. For example, in Ubuntu 18.04.3, you’ll need to install the following:

```
python3-setuptools
python3-aiohttp
python3-psutil
python3-jsonschema
git
```

:::note
This does not install other items, like ubridge, qemu-kvm, docker, wireshark, etc…  This just the necessary dependencies needed to build the gns3-server daemon.
:::

In Bash, you can download the gns3-server code via the following command:

```
git clone https://github.com/GNS3/gns3-server.git
```

Next, enter the gns3-server directory that’s been created:

```
cd gns3-server
```

If you need a specific branch to match the version used by the clients, you can view a list of branches via this command:

```
git tag
```

Here’s an example of the list:

<img alt="screenshot" src={useBaseUrl('img/using-gns3/beginners/running-gns3-server-as-daemon/1.jpg')} />

(hit Ctrl+Z to exit the list)
To change the branch used, you’ll use this command:

```
git checkout -b branch_version
```

For example, if the clients have GNS3 2.2.1 installed, you’ll use this command to build v2.2.1 of the gns3-server:

```
git checkout -b v2.2.1
```

Next, you’ll use this command to build the gns3-server daemon:

```
sudo python3 setup.py install
```

This step may take a few minutes to complete (it will vary, based on your PC), but upon successful completion, you’ll see this:

<img alt="screenshot" src={useBaseUrl('img/using-gns3/beginners/running-gns3-server-as-daemon2.jpg')} />

Next. you’ll need to enter the ```/gns3-server/init``` sub-directory, and copy one of two files. Which one you use, will depend on whether your version of linux uses upstart or systemd to launch daemons:+-

## Upstart

For ubuntu < 15.04

You must copy gns3.conf.upstart to /etc/init/gns3.conf and run these commands:

```
sudo cp gns3.conf.upstart /etc/init/gns3.conf
sudo chown root /etc/init/gns3.conf
```

To launch the daemon, use this command:
```
sudo service gns3 start
```

## Systemd

You must copy gns3.service.systemd to /lib/systemd/system/gns3.service and run these commands:

```
sudo cp gns3.service.systemd /lib/systemd/system/gns3.service
sudo chown root /lib/systemd/system/gns3.service
```

Run this command to start the gns3 daemon:

```
sudo systemctl start gns3
```

Next, run this command to ensure that the daemon is active and running, or see if there is an issue:

```
sudo systemctl status gns3
```

Ideally, you’ll see something like this:

<img alt="screenshot" src={useBaseUrl('img/using-gns3/beginners/running-gns3-server-as-daemon3.jpg')} />

(press Ctrl+Z to exit this screen. Doing so will not shut down the daemon.)

NOTE: you may need to allow TCP port 3080 through the firewall, if it isn’t already. In ubuntu, you’d use the following command:

```
sudo ufw allow 3080/tcp
```

To set the gns3-server daemon to always launch on boot/reload, use the following command:

```
sudo systemctl enable gns3
```

(you’ll see a symlink created)

At any time, you can run ```sudo systemctl status gns3``` to check on the running daemon, as well as see which nodes it’s running on behalf of the clients . In the below example, it’s active, and running three instances of IOSv in a topology:

<img alt="screenshot" src={useBaseUrl('img/using-gns3/beginners/running-gns3-server-as-daemon4.jpg')} />
