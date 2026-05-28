---
title: How to create a QEMU template
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# QEMU Template

:::tip Video Tutorial

📺 **[Watch the Video Tutorial](https://www.youtube.com/watch?v=pe1lgF-a9XU)** - Follow along step-by-step to create a QEMU template

:::

This guide uses the Cisco IOSv as an example to show how to create a QEMU template.

1. In the new template wizard, click the "Next" button.
   <img style={{ width: '100%' }} alt="Click Next" src={useBaseUrl('img/web-ui/zh/template-click-next.jpeg')} />

2. Type "IOSV" in the search box to search quickly. Then click the button marked "2" in the image.
   <img style={{ width: '100%' }} alt="Search IOSv" src={useBaseUrl('img/web-ui/zh/template-qemu-search-iosv.jpeg')} />

3. Use `Cisco IOSv version 15.9(3)M4` as an example. Follow the order shown in the image. Select and upload your local image file and startup file.
   <img style={{ width: '100%' }} alt="Select image file" src={useBaseUrl('img/web-ui/zh/template-qemu-select-image.jpeg')} />
   <img style={{ width: '100%' }} alt="Select startup file" src={useBaseUrl('img/web-ui/zh/template-qemu-select-startup.jpeg')} />

4. After the upload finishes, the status of `Cisco IOSv version 15.9(3)M4` changes from `Missing` to `2/2 Ready`. Click the "Create" button as shown in the image.
   <img style={{ width: '100%' }} alt="QEMU image ready" src={useBaseUrl('img/web-ui/zh/template-qemu-ready-create.jpeg')} />

5. Enter a template name. The default name is `Cisco IOSv`. Click the "Add Template" button to finish.
   <img style={{ width: '100%' }} alt="QEMU template name" src={useBaseUrl('img/web-ui/zh/template-qemu-name-finish.jpeg')} />
