---
title: How to draw a curve
功能标签: [操作]
难度: 入门
前置知识: "Basic familiarity with the GNS3 Web UI project topology"
预计阅读时间: 5 minutes
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# How to draw a curve

Draw a Curve allows you to draw smooth curves on the GNS3 network topology map for creating curved paths or connection markers.

## Quick Start

**Activate the Tool**

Click the curve icon button on the toolbar (tooltip: "Draw a curve"). The mouse cursor will change to a crosshair.

<img style={{ display: 'block', margin: '0 auto' }} alt="Curve toolbar button" src={useBaseUrl('img/web-ui/zh/draw-curve-01-toolbar.jpeg')} />

**Drag to Draw**

Press and hold the mouse button on the map and drag to create a curve path. Release the mouse button to complete the drawing. The curve is automatically saved to the server.

<img style={{ display: 'block', margin: '0 auto' }} alt="Drawing a curve" src={useBaseUrl('img/web-ui/zh/draw-curve-02-drawing.jpeg')} />

## Style Editor

Right-click on the curve and select **Edit style** to open the Style editor dialog.

<img style={{ display: 'block', margin: '0 auto' }} alt="Curve Style editor" src={useBaseUrl('img/web-ui/zh/draw-curve-03-style-editor.png')} />

- **Border Color** — Color picker
- **Border Width** — Numeric input (range: 0–100)
- **Border Style** — 6 options: Solid, Dash, Dot, Dash Dot, Dash Dot Dot, No border
- **Curve Type** — 3 options:
  - Catmull-Rom (Smooth, default) — Smooth curve passing through all points
  - Basis (B-spline) — Smoother but may not pass through all points
  - Monotone — Monotonic curve to avoid oscillation
- **Arrow Direction** — 4 options: No Arrow, End Arrow, Start Arrow, Both Arrows
- **Rotation** — Numeric input for rotation angle

### Curve Example

<img style={{ display: 'block', margin: '0 auto' }} alt="Curve example" src={useBaseUrl('img/web-ui/zh/draw-curve-04-example.jpeg')} />

### Dialog Buttons

- **Cancel** — Discard changes
- **Apply** — Save changes

## Comparison with Other Drawing Tools

| Feature | Rectangle / Ellipse / Line | Curve |
|---|---|---|
| Drawing method | Click to create | Drag to create |
| Tool state | Stays active | Auto exits |
| Creation path | Single point | Multi-point path |
| Curve type | N/A | 3 options |
