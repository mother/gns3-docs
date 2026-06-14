# Web Editor Exploration Record

> Date: 2026-06-12
> Base environment: Docusaurus 3.10.1 + React 18 + Standard Markdown image syntax

## Background

The project documentation is built with Docusaurus. All content is `.md` files spread across `docs/`, `docs-3.1-cn/`, and `docs-3.1-en/` directories with deeply nested subdirectories. Images are stored in `static/img/`.

Goal: Find a **web-based visual editing solution** that provides a note-taking-like editing experience: directory tree navigation, automatic image management, and WYSIWYG editing.

---

## Attempts

### 1. Editsaurus

- **Type**: Docusaurus native editing plugin
- **Result**: ❌ Failed
- **Reason**: Depends on `estree-walker`, incompatible with Node.js v24 ESM module resolution — could not start

### 2. Sveltia CMS

- **Type**: Git CMS (Svelte rewrite of Decap CMS)
- **Result**: ❌ Failed
- **Issues**:
  - Local Workflow only supports Chrome/Edge (requires File System Access API)
  - Does not support recursive subdirectory scanning — only shows root-level files
  - Image preview fails to render
- **Config files**: `static/admin/config.yml` + `static/admin/index.html`

### 3. Decap CMS (formerly Netlify CMS)

- **Type**: Git CMS
- **Result**: ❌ Failed
- **Issues**:
  - `nested` collection feature does not work in local proxy mode
  - Each subdirectory must be defined as a separate collection — cannot auto-detect directory hierarchy
  - `modes` attribute not supported, causing configuration errors
- **Local proxy**: `npx decap-server` (port 8081)

### 4. TinaCMS

- **Type**: Git CMS + GraphQL API
- **Result**: ⚠️ Usable but poor experience
- **Packages**: `tinacms` + `@tinacms/cli`
- **Config file**: `tina/config.ts`
- **Start command**: `yarn start` (actually `tinacms dev -c "docusaurus start"`)
- **Issues**:
  - Sidebar only shows collection names, not a full directory tree
  - Subdirectories shown in the right panel, but no back button on the edit page
  - Images appear too small in the editor
  - `match: { include: "**/*" }` config has no effect on the sidebar directory tree
  - CSS styles are difficult to customize (compiled class names can't be matched)

### 5. Custom Admin Page

- **Type**: Node.js API server + vanilla frontend
- **Result**: ⚠️ Functional but incomplete
- **Implementation**:
  - `admin-server.js`: File system REST API (port 3001)
  - `static/admin/index.html`: Directory tree navigation + Markdown edit/preview
- **Pros**: Complete directory tree, images render correctly, works in any browser
- **Cons**: Feature-incomplete, requires additional maintenance

---

## Conclusion

After a full day of testing, no lightweight CMS solution meets all core requirements:

| Requirement | Editsaurus | Sveltia | Decap | TinaCMS | Custom |
|-------------|-----------|---------|-------|---------|--------|
| Directory tree sidebar | ❌ | ❌ | ❌ | ❌ | ✅ |
| Navigate back after edit | ✅ | ❌ | ❌ | ❌ | ✅ |
| Images render correctly | ❌ | ❌ | ❌ | ⚠️ | ✅ |
| Any browser | ❌ | ❌ | ✅ | ✅ | ✅ |
| No extra service needed | ❌ | ✅ | ❌ | ❌ | ❌ |

**Final decision**: Continue with the **Obsidian edit + `yarn start` browser preview** workflow.

---

## Side Benefits

Although the visual editor exploration didn't succeed, several valuable improvements were made along the way:

1. **Docusaurus 2 → 3 upgrade** (on `upgrade/docusaurus-3.x` branch)
   - Version: 2.4.1 → 3.10.1
   - React: 16 → 18
   - Image syntax migration: JSX `<img>` → standard Markdown `![](/img/...)` (129 files, 1060 images)
   - Image zoom plugin: `docusaurus-plugin-medium-zoom` → `docusaurus-plugin-image-zoom`

2. **Mermaid diagram support**
   - Added `@docusaurus/theme-mermaid`
   - Note: Since `markdown.format: 'mdx'`, the code block syntax (` ```mermaid `) does not work
   - Must use component import: `import Mermaid from '@theme/Mermaid';`

---

## Branch Cleanup (2026-06-12)

Branches cleaned up on `upgrade/docusaurus-3.x`:

| Branch | Deleted |
|--------|---------|
| `master` | local |
| `docs/3.1-new-features` | local |
| `deploy/cloudflare-pages` | local + remote (`myfork`) |
| `feature/tinacms` | local |
