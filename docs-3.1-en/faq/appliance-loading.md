---
title: Appliance Loading
featureTag: [Reference]
difficulty: Beginner
readingTime: 3 minutes
---

# Appliance Loading

### Where does GNS3 load appliance (.gns3a) files from? What is the priority?

GNS3 loads `.gns3a` appliance files from two directories:

1. **Builtin appliances directory**: `~/.local/share/GNS3/appliances/`
   - Stores automatically downloaded devices from GNS3 registry
   - Maintained and updated by the system automatically

2. **Custom appliances directory**: `~/GNS3/appliances/`
   - Stores user-customized or modified appliance files
   - Manually managed by users

**Loading priority:** Builtin appliances are loaded first, then custom appliances. If a device with the same `device_id` exists in both directories, the custom file overwrites the builtin one. This design allows users to customize devices without modifications being overwritten by automatic registry updates.
