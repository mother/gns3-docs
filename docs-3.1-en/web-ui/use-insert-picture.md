---
title: How to insert a picture
功能标签: [操作]
难度: 入门
前置知识: "Basic familiarity with the GNS3 Web UI project topology"
预计阅读时间: 5 minutes
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# How to insert a picture

"Insert a picture" allows you to upload and insert image files onto the GNS3 network topology map, enabling you to add legends, logos, or other visual elements.

## Quick Start

**Click the Button**

Click the "image" icon button on the project map toolbar (tooltip: "Insert a picture"). This triggers the file selection dialog.

<img style={{ display: 'block', margin: '0 auto' }} alt="Toolbar button" src={useBaseUrl('img/web-ui/zh/insert-picture-01-toolbar-button.jpeg')} />

**Select an Image File**

The system opens a file picker. Supported formats: BMP, JPEG, JPG, GIF, PNG. SVG files are not supported and will display an error message.

**Automatic Processing and Insertion**

The system automatically reads the file, retrieves the image dimensions (width and height), converts the image to SVG format, calculates the center position (image center aligned to the coordinate origin), and uploads it to the server for display on the map.

:::note
Resizing inserted images on the topology is currently not supported.
:::

- SVG — displays error: "SVG images are not supported. Please use PNG, JPG, GIF or BMP format."
