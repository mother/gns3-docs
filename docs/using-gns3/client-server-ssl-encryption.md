---
id: client-server-ssl-encryption
title: Client server SSL encryption
sidebar_label: Client server SSL encryption
---

:::caution
It’s no longer supported and will be removed in GNS3 2.1. We recommend using a VPN in order to protect all communications.
:::

GNS3 supports secured network communications between the GNS3 GUI and GNS3 server using SSL. SSL mode is not supported for the GNS3 server on Windows but you can use it for clients. You will need a SSL certificate, if you don't have one, it is possible to generate a self signed certificate using this script (OpenSSL must be installed):

https://raw.githubusercontent.com/GNS3/gns3-server/master/scripts/create_cert.sh

The script will put the certificate files (certificate + key) into ~/.config/GNS3/ssl

Once a certificate is ready, you can start the server in SSL mode using the following command:

```
gns3server --certfile ~/.config/GNS3/ssl/server.cert --certkey ~/.config/GNS3/ssl/server.key --ssl
```

Or you can edit your gns3_server.conf by adding the certificate and key files to the server section and then launching the GNS3 server.

```
[Server]
certfile=/Users/noplay/.config/GNS3/ssl/server.cert
certkey=/Users/noplay/.config/GNS3/ssl/server.key
ssl=True
```
