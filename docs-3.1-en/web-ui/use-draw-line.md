---
title: How to use Draw a line
功能标签: [操作]
难度: 入门
前置知识: "Basic familiarity with the GNS3 Web UI project topology"
预计阅读时间: 5 minutes
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# How to use Draw a line

Draw a Line allows you to draw straight lines on the GNS3 network topology map for creating connections or path markers.

## Quick Start

**Activate the Tool**

Click the line icon button on the toolbar (tooltip: "Draw a line"). The mouse cursor will change to a crosshair.

**Click on the Map**

Click at the desired position on the map. The line will be automatically created and displayed.

**Continue or Exit**

The tool remains active, allowing you to continue drawing. Click the button again to exit drawing mode.

## Default Properties

| Property | Default Value |
|---|---|
| Line Color | Black (#000000) |
| Line Width | 2 px |
| Start X1 | 15 px |
| Start Y1 | 5 px |
| End X2 | 5 px |
| End Y2 | 15 px |
| Line Style | Solid |
| Arrow | None |

## Style Editor

Right-click on the line and select **Edit style** to open the Style editor dialog.

### Line-Specific Properties

**Border Color** — Color picker.

**Border Width** — Numeric input (range: 0–100).

**Border Style** — 6 options: Solid, Dash, Dot, Dash Dot, Dash Dot Dot, No border.

**Arrow Direction** — 4 options: No Arrow, End Arrow, Start Arrow, Both Arrows.

**Drawing Type** — 2 options: Straight Line, Freeform (Control Point).

**Rotation** — Numeric input for rotation angle.

### Dialog Buttons

- **Cancel** — Discard changes.
- **Apply** — Save changes.
