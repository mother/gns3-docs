# GNS3 Documentation - Project Context for Claude

## Project Overview

This is the official documentation website for GNS3, built with Docusaurus 2. The site provides comprehensive guides and references for GNS3 network simulation software in multiple languages (Chinese and English).

**Tech Stack:**
- Static Site Generator: Docusaurus 2.4.1
- React: 16.8.4
- Package Manager: yarn

## Development Setup

```bash
# Install dependencies
yarn

# Start local development server
yarn start

# Build for production
yarn build

# Deploy to GitHub Pages
yarn deploy
```

The development server supports hot-reloading for most changes.

## Project Structure

```
├── docs/                    # Main documentation (legacy)
├── docs-3.10-cn/            # Chinese documentation for version 3.10
├── docs-3.10-en/            # English documentation for version 3.10
├── static/                  # Static assets
│   └── img/
│       └── web-ui/
│           └── zh/          # Chinese UI screenshots
├── src/css/                 # Custom styles
├── sidebars.js              # Main sidebar configuration
├── sidebars-3.10-cn.js      # Chinese 3.10 sidebar
├── sidebars-3.10-en.js      # English 3.10 sidebar
└── docusaurus.config.js     # Docusaurus configuration
```

## Image Management (Critical Rules)

**When updating screenshots in documentation:**

1. **Always overwrite existing image files** - Don't create new image files with different names
   - Example: If updating the network adapter screenshot, overwrite `static/img/web-ui/zh/dynamips-create-07-network-adapters.jpeg`

2. **Image naming convention:**
   - UI screenshots: `<feature>-<step>-<description>.jpeg`
   - Example: `template-click-next.jpeg`, `dynamips-create-01-enter.jpeg`

3. **Image reference format in MDX:**
   ```jsx
   <img style={{ width: '100%' }} alt="描述" src={useBaseUrl('img/web-ui/zh/filename.jpeg')} />
   ```

4. **Required imports:**
   ```jsx
   import useBaseUrl from '@docusaurus/useBaseUrl';
   ```

5. **Common mistakes to avoid:**
   - ❌ Don't use markdown image syntax: `![[filename.jpeg]]` or `
![alt](filename.jpeg)

`
   - ❌ Don't use Chinese quotes in JSX: `alt="描述"` → use `alt="描述"`
   - ❌ Don't leave temporary image files in `docs-*/` directories
   - ❌ Don't create new image files without checking if one exists

## Documentation Writing Guidelines

### Frontmatter (Required)
```yaml
---
title: Page Title
功能标签: [操作]
难度: 入门
前置知识: "Prerequisites text"
预计阅读时间: 5 minutes
---
```

### MDX Requirements
- Must include `import useBaseUrl from '@docusaurus/useBaseUrl';`
- Use JSX for images, not markdown syntax
- All images must use `useBaseUrl()` for paths
- Use English quotes (`"`) not Chinese quotes (`""`)

### Code Examples
Use fenced code blocks with language specification:

\`\`\`bash
yarn start
\`\`\`

### Callouts
```md
:::note
Note content
:::

:::tip
Tip content
:::

:::warning
Warning content
:::

:::danger
Danger content
:::
```

## Multi-Version Documentation

The site supports multiple documentation versions:
- `docs/` - Legacy documentation
- `docs-3.10-cn/` - Version 3.10 Chinese (active development)
- `docs-3.10-en/` - Version 3.10 English (active development)

When adding new features or updating content, work in the appropriate versioned directory.

## Build Artifacts

**Files to ignore:**
- `.docusaurus/` directory - Auto-generated build artifacts
- `build/` directory - Production build output

**Never commit these changes** - they are regenerated on each build.

## Common Workflows

### Adding a New Documentation Page

1. Create the markdown file in the appropriate `docs-*/` directory
2. Add required frontmatter
3. Include `import useBaseUrl from '@docusaurus/useBaseUrl';`
4. Add the page to the appropriate sidebar file (`sidebars-3.10-cn.js` or `sidebars-3.10-en.js`)

### Updating Screenshots

1. Take the new screenshot
2. **Check if an existing image file matches the purpose**
3. Overwrite the existing file in `static/img/web-ui/zh/` or `static/img/web-ui/en/`
4. Update the document if the image reference format is incorrect
5. **Delete any temporary screenshot files** from `docs-*/` directories

### Fixing Build Errors

**Common MDX syntax errors:**
- Chinese quotes in JSX attributes → Replace with English quotes
- Missing imports → Add `import useBaseUrl from '@docusaurus/useBaseUrl';`
- Incorrect image syntax → Use JSX `<img>` tags with `useBaseUrl()`

## Deployment

- Target: GitHub Pages
- Build command: `yarn build`
- Deploy command: `GIT_USER=<username> USE_SSH=true yarn deploy`
- Branch: `gh-pages`

## Git Workflow

Current active branch: `docs/3.1-new-features`

When committing changes:
- Focus on content files (docs, images, config)
- Exclude build artifacts (.docusaurus/, build/)
- Use clear commit messages describing what was updated
- Separate content changes from build artifacts

## Content Priorities

1. **Accuracy** - Technical information must be correct
2. **Clarity** - Instructions should be easy to follow
3. **Consistency** - Maintain uniform formatting and style
4. **Visual Quality** - Screenshots should be clear and current

## Language Considerations

- Chinese documentation (`docs-3.10-cn/`) uses Simplified Chinese
- English documentation (`docs-3.10-en/`) uses US English
- Image alt text should match the documentation language
- Code examples and technical terms remain in English
