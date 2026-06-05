---
title: How to create a Docker template
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# How to create a Docker template

:::tip Video Tutorial

📺 **[Watch the Video Tutorial](https://www.youtube.com/watch?v=XPpaZNtaA5k)** - Follow along step-by-step to create a Docker template

:::

This guide uses Ubuntu as an example to show how to create a Docker template.

1. In the new template wizard, click the "Next" button.
   <img style={{ width: '100%' }} alt="Click Next" src={useBaseUrl('img/web-ui/zh/template-click-next.jpeg')} />

2. Type "ubuntu" in the search box to search quickly. Then click the button marked "2" in the image.
   <img style={{ width: '100%' }} alt="Search ubuntu" src={useBaseUrl('img/web-ui/zh/template-docker-search-ubuntu.jpeg')} />

3. As shown in the image below, click the "Create Docker Template" button.
   <img style={{ width: '100%' }} alt="Create Docker template" src={useBaseUrl('img/web-ui/zh/template-docker-create.jpeg')} />

4. Enter a template name. The default name is `Ubuntu Docker Guest`. Click the "Add Template" button to finish.
   <img style={{ width: '100%' }} alt="Docker template name" src={useBaseUrl('img/web-ui/zh/template-docker-name-finish.jpeg')} />

> After you add the template here, the first time you use it in a topology, GNS3 will download the image from Docker Hub.
