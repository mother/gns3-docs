---
title: How to use Take a screenshot
功能标签: [操作]
难度: 入门
前置知识: "Basic familiarity with the GNS3 Web UI project topology"
预计阅读时间: 5 minutes
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# How to use Take a screenshot

Take a Screenshot captures the current state of the GNS3 network topology map and saves it as an image file (SVG or PNG format) for documentation, presentations, or backup.

## Quick Start

**Click the Screenshot Button**

Click the camera icon on the toolbar (tooltip: "Take a screenshot"). The screenshot configuration dialog will open.

**Configure Screenshot Options**

The dialog includes the following settings:

- **File type** — SVG (default) or PNG
- **Screenshot name** — Text input, default: `screenshot-{timestamp}`, required
- **Buttons** — Cancel / Take a screenshot

**Save the File**

Click **Take a screenshot** to generate and download the file. File name format: `{name}.{extension}`.

### Keyboard Shortcuts

- **Enter** — Take screenshot directly
- **Esc** — Close dialog (no screenshot)

## File Format Comparison

| Feature | SVG | PNG |
|---|---|---|
| Type | Vector graphic | Bitmap image |
| File size | Small (text format) | Large (compressed image) |
| Scaling | Lossless (any scale) | Lossy (fixed resolution) |
| Editability | Text/vector editor | Image editor required |
| Compatibility | Browser/SVG viewer | All image viewers |
| Best for | Documentation, printing, editing | Sharing, presentations, quick view |

### When to Use SVG

- Need to edit the topology later
- Printing high-quality documents
- Publishing to web (scalable)
- Archive backup (small file size)
- Scalable without quality loss
- Text can be selected and copied

### When to Use PNG

- Quick sharing with others
- Inserting into Word/PPT documents
- Publishing on social media
- No need for further editing
- Cross-platform compatibility

## Screenshot Processing

### PNG Export

1. Clone the SVG element from the map
2. Apply background color from `.project-map`
3. Inline embedded images (convert node symbols to inline SVG)
4. Apply color variables (label/link colors)
5. Generate PNG using `saveSvgAsPng` library
6. Trigger browser download

### SVG Export

1. Clone the SVG element
2. Apply background color
3. Inline embedded images
4. Resolve all CSS variables to computed values
5. Serialize SVG using `XMLSerializer`
6. Create Blob and trigger download

## Error Handling

- **PNG export failure** — "Failed to save screenshot as PNG"
- **SVG export failure** — "Failed to save screenshot as SVG"
