---
id: settings-profiles
title: Settings profiles
sidebar_label: Settings profiles
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::note
This documentation is only for GNS3 2.0 and later
:::

If you need to connect your GNS3 GUI to different GNS3 servers, you can use the settings profiles. This allows you to have multiple GNS3 environments.

- Video: https://www.youtube.com/watch?v=IMpmosLy9i8

## Create a Profile
First click Edit->Preferences to  go to the settings in order to enable the feature

<img alt="screenshot" src={useBaseUrl('img/using-gns3/advanced/settings-profiles/1.jpg')} />

And restart GNS3.  You can now create a profile:

<img alt="screenshot" src={useBaseUrl('img/using-gns3/advanced/settings-profiles/2.jpg')} />

default is a profile always here. It’s the profile use when you don’t choose a profile.

## Comman Line Usage
You can also use different profile if you pass ```--profile``` to the GNS3 client with the profile name.

Example:
```
gns3 --profile work
```
