---
name: cloudflare-pages-yarn-version
description: Cloudflare Pages Yarn version compatibility fix
metadata:
  type: project
---

# Cloudflare Pages: Yarn Version Compatibility

## Problem

Build fails on Cloudflare Pages:
```
The lockfile would have been modified by this install, which is explicitly forbidden.
```

## Root Cause

**Yarn version incompatibility**:
- Local: Yarn 1.22.22 (Classic)
- Cloudflare Pages: Yarn 4.9.1 (Berry)
- `yarn.lock` format incompatible between versions

## Solution

Add environment variable in Cloudflare Pages Dashboard:

```
YARN_VERSION=1.22.22
```

### Configuration Steps

1. Cloudflare Dashboard → **Workers & Pages** → **gns3-docs**
2. **Settings** → **Environment variables**
3. Add variable: `YARN_VERSION` = `1.22.22`
4. Save and redeploy

## Notes

- This is a **temporary workaround** using legacy Yarn version
- **Long-term**: Consider upgrading to Yarn Berry (4.x)
- Configuration is in **Cloudflare Dashboard**, not in code repository
