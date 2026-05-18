---
title: Project Topology
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Project Topology

The Project Map is the main work area in the GNS3 Web UI. You use it to create, edit, and manage your network topology. It is an interactive visual editor. You can add nodes, connect devices, set up the network, and control the simulation devices in real time.

## Project Title Bar Buttons

### GNS3 Menu Button

Location: left side of the title bar. Opens the main navigation menu. It includes:

- **Controllers**: go to the controller management page
- **Projects**: go to the project list page
- **Computes**: go to the compute node management page
- **Template preferences**: go to the template settings page
- **Image manager**: go to the image management page
- **New template**: create a new template
- **Import appliance**: import a network device configuration
- **Project settings**: project settings (new/save/edit/export/import/close/delete)
- **Map settings**: map settings (show interface labels, console, grid, align, etc.)

### Add Node Button

Location: middle of the title bar. Click to show all available templates. Select one to place it on the canvas.

### Add Link Button

Location: middle of the title bar. Click to enter link drawing mode. Select two nodes one by one to create a network connection. Click again or press ESC to stop.

## Node Batch Action Buttons

| Button | Icon | Description |
|--------|------|-------------|
| Connect to all node consoles | web_asset | Open consoles for all nodes (embedded window or new tab) |
| Start all nodes | play_arrow | Start or resume all stopped/paused nodes |
| Pause all nodes | pause | Pause all running nodes |
| Stop all nodes | stop | Stop all running nodes |
| Reload all nodes | replay | Restart all nodes |
| Reset all console connections | compare_arrows | Reset console connections without restarting nodes |

All actions above will show a confirmation dialog.

## Project Title Bar Right Side Buttons

### Topology Summary Toggle

Icon: toc. Show or hide the topology summary panel. It has two tabs: Topology (node list) and Controllers (compute node resource usage).

## View Control Buttons

| Feature | Description |
|---------|-------------|
| Select mode | Click to select nodes, links, or drawings. Drag to move. Shift/Ctrl for multi-select. Right-click for menu. |
| Pan workspace | Drag the canvas to move the view. |
| Zoom in | Zoom in the canvas view. |
| Reset zoom | Reset the canvas to 100% zoom. |
| Zoom out | Zoom out the canvas view. |

## Drawing Tool Buttons

| Feature | Description |
|---------|-------------|
| Add text | Add a text label on the canvas. |
| Insert image | Upload and insert an image (supports .svg/.bmp/.jpeg/.jpg/.gif/.png). |
| Draw rectangle | Drag to draw a rectangle. Use it to mark an area or group devices. |
| Draw ellipse | Drag to draw an ellipse or circle. |
| Draw line | Drag to draw a straight line. |
| Draw curve | Drag to draw a Bezier curve. |

## Tool Buttons

### Lock/Unlock All Objects

When locked, you cannot drag, edit, or delete nodes, links, or drawings on the canvas.

### Screenshot

Save the current topology as a PNG (bitmap) or SVG (vector) image.

### AI Assistant

Open the AI chat assistant panel. It supports natural language interaction for topology design, configuration suggestions, and fault diagnosis.

### Fault Injection

Set up network faults for nodes or links. Supported fault types: delay, packet loss, packet corruption, bandwidth limit, etc.

## Snapshot Buttons

Location: bottom of the project toolbar. Use them to create and manage project snapshots:
- **Create snapshot**: save the current project state
- **Restore snapshot**: restore the project to a snapshot state
- **Delete snapshot**: delete an unwanted snapshot
