---
title: How to use Draw a line
功能标签: [操作]
难度: 入门
前置知识: "Basic familiarity with the GNS3 Web UI project topology"
预计阅读时间: 5 minutes
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# How to use Draw a line

Draw a Line allows you to draw straight lines on the GNS3 network topology map for creating path markers.

## Quick Start

**Activate the Tool**

Click the line icon button on the toolbar (tooltip: "Draw a line"). The mouse cursor will change to a crosshair.

<img style={{ display: 'block', margin: '0 auto' }} alt="Line toolbar button" src={useBaseUrl('img/web-ui/zh/draw-line-01-toolbar.jpeg')} />

**Click on the Map**

Click at the desired position on the map. The line will be automatically created and displayed.

<img style={{ display: 'block', margin: '0 auto' }} alt="Line created" src={useBaseUrl('img/web-ui/zh/draw-line-02-created.jpeg')} />

## Style Editor

Right-click on the line and select **Edit style** to open the Style editor dialog.

<img style={{ display: 'block', margin: '0 auto' }} alt="Line Style editor" src={useBaseUrl('img/web-ui/zh/draw-line-03-style-editor.jpeg')} />

- **Border Color** — Color picker
- **Border Width** — Numeric input (range: 0–100)
- **Border Style** — 6 options: Solid, Dash, Dot, Dash Dot, Dash Dot Dot, No border
- **Arrow Direction** — 4 options: No Arrow, End Arrow, Start Arrow, Both Arrows
- **Drawing Type** — 2 options: Straight Line, Freeform (Control Point)
- **Rotation** — Numeric input for rotation angle

### FreeForm Example

<img style={{ display: 'block', margin: '0 auto' }} alt="Freeform line example" src={useBaseUrl('img/web-ui/zh/draw-line-04-freeform.jpeg')} />
