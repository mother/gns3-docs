---
name: mermaid-usage
description: Mermaid diagrams must use component import syntax, code block syntax does not render
metadata:
  type: reference
---

# Mermaid Diagram Usage

## Background

The project uses `@docusaurus/theme-mermaid` plugin. However, due to `markdown.format: 'mdx'` configuration (required for admonitions and other features), the Mermaid code block syntax (```mermaid) **does not render** — it only displays as a plain code block.

## Correct Usage: Component Import

You must import the Mermaid component at the top of the document, then use JSX syntax to render:

```mdx
---
title: Page Title
---

import Mermaid from '@theme/Mermaid';

## Flowchart

<Mermaid value={`graph TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Action]
    B -->|No| D[End]
`} />
```

## Important Notes

- **Must** include `import Mermaid from '@theme/Mermaid';` at the top of the document
- Mermaid diagram content goes inside the template string of `<Mermaid value={\`...\`} />`
- Template strings support multi-line content, write Mermaid syntax directly
- Do NOT use ```mermaid code block syntax — it will NOT render

## Related Configuration

- `docusaurus.config.js`: `themes: ['@docusaurus/theme-mermaid']`
- `docusaurus.config.js`: `markdown.mermaid: true`
- `markdown.format: 'mdx'` must remain enabled (admonitions and other features depend on it)

## Related Files

- Test page: `docs-3.1-cn/test-mermaid.md`
- Config file: `docusaurus.config.js`
