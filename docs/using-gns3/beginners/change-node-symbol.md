---
id: change-node-symbol
title: Use custom symbols in GNS3
sidebar_label: Change node symbol
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Beginning with GNS3 1.4 you have been able to change the symbol for a node (or supply your own).  Starting with GNS3 2.2.0, additional style types of symbols for the various device types are included by default. You can still add your own custom symbols if you wish (that hasn’t changed).

Changing the symbol used by a device is purely cosmetic. You can change the symbol directly from the topology with a right click:

<img alt="screenshot" src={useBaseUrl('img/using-gns3/beginners/change-node-symbol/1.jpg')} />

Or in that nodes settings in its global preferences:

<img alt="screenshot" src={useBaseUrl('img/using-gns3/beginners/change-node-symbol/2.jpg')} />

:::note
Changing the nodes symbol on a device in a topology is just temporary, and on a per-instance basis. If you change the symbol used by a device via its global settings, all new instances of that device will use the chosen symbol.
:::

When right-clicking on a device in a topology, you’ll see a listing of symbols you can use:

<img alt="screenshot" src={useBaseUrl('img/using-gns3/beginners/change-node-symbol/3.jpg')} />

**“Classic”** are the symbols that have been included with GNS3 for quite a while, and that many are accustomed to seeing. Click on the arrow next to it, to expand that symbol category:

<img alt="screenshot" src={useBaseUrl('img/using-gns3/beginners/change-node-symbol/4.jpg')} />

Select a symbol, and click **OK** to have it applied to that device:

<img alt="screenshot" src={useBaseUrl('img/using-gns3/beginners/change-node-symbol/5.jpg')} />

The symbol for R11 has now been changed to “Route Switch Processor”:

<img alt="screenshot" src={useBaseUrl('img/using-gns3/beginners/change-node-symbol/6.jpg')} />

As you could see from the Symbol Selection menu further up the page, you aren’t limited to just the “Classic” symbols. The “Affinity” symbol styles are included by default, starting with GNS3 2.2.0.

In the below example, the symbol for R11 will be changed to “router”, from the Affinity-circle-blue” list:

<img alt="screenshot" src={useBaseUrl('img/using-gns3/beginners/change-node-symbol/7.jpg')} />

After selecting that symbol, and clicking **OK**, R11 will now use that:

<img alt="screenshot" src={useBaseUrl('img/using-gns3/beginners/change-node-symbol/8.jpg')} />

You can also add a custom symbol from any place in filesystem:

<img alt="screenshot" src={useBaseUrl('img/using-gns3/beginners/change-node-symbol/9.jpg')} />

Custom symbols should be one of these two graphic file formats:
- SVG (scalable vector graphics)
- PNG (portable network graphics)

In Windows, there will be a linux_guest.svg  file included in ```C:\User\user_name\GNS3\symbols```, as part of a default installation:

<img alt="screenshot" src={useBaseUrl('img/using-gns3/beginners/change-node-symbol/10.jpg')} />
<img alt="screenshot" src={useBaseUrl('img/using-gns3/beginners/change-node-symbol/11.jpg')} />

Select the SVG file and Click **Open** to add it to the symbol library:

<img alt="screenshot" src={useBaseUrl('img/using-gns3/beginners/change-node-symbol/12.jpg')} />

The symbol for **R11** has changed to **“Linux Guest”**. Click **OK** to complete the process:

<img alt="screenshot" src={useBaseUrl('img/using-gns3/beginners/change-node-symbol/13.jpg')} />

In the main Symbol selection menu, a new **“Custom Symbols”** library is added:

<img alt="screenshot" src={useBaseUrl('img/using-gns3/beginners/change-node-symbol/14.jpg')} />

(as only a single custom symbol has been added, there is no arrow to expand that library. If two or more are added, that arrow will appear)

You can also use **Filter**, to search a  library for a specific symbol that has already been added to a library:

<img alt="screenshot" src={useBaseUrl('img/using-gns3/beginners/change-node-symbol/15.jpg')} />

(typing “qem” in the **Filter** dialog box displays the **Qemu Guest** symbol in the **Classic** library, as that’s the only symbols in that library that matches the filter string)

Portability
The custom symbols are exported to the project directory. You can safely copy a project to another computer.

## Bonus
A repository of images is available here:

https://github.com/GNS3/gns3-registry/tree/master/symbols

Feel free to contribute your own
