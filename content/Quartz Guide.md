---
title: Quartz Quick Reference Guide
draft: false
tags:
  - quartz
  - documentation
  - reference
---

This guide covers common Quartz operations and syntax.

## Lists and Bullet Points

### Unordered Lists (Bullet Points)

Use `-`, `*`, or `+`:

```markdown
- First item
- Second item
- Third item
  - Nested item (indent with 2 spaces)
  - Another nested item
```

### Ordered Lists (Numbered)

```markdown
1. First step
2. Second step
3. Third step
   1. Sub-step (indent with 3 spaces)
   2. Another sub-step
```

### Task Lists (Checkboxes)

```markdown
- [ ] Unchecked task
- [x] Completed task
```

### Custom Task Characters

With Obsidian compatibility enabled:

```markdown
- [ ] Unchecked
- [x] Checked
- [?] Question
- [!] Important
- [>] Forwarded
- [/] In progress
- [-] Cancelled
```

## Adding External Links

### Standard Markdown

```markdown
[Link text](https://example.com)
```

### Open in New Tab

To make external links open in new tabs, configure in `quartz.config.yaml`:

```yaml
- source: github:quartz-community/crawl-links
  enabled: true
  options:
    markdownLinkResolution: shortest
    openLinksInNewTab: true
```

**Examples:**

```markdown
[Google](https://google.com)
[GitHub](https://github.com)
```

## Adding Code Snippets

### Basic Code Block

````markdown
```language
your code here
```
````

### With Title

````markdown
```js title="app.js"
console.log("Hello");
```
````

### Highlight Specific Lines

````markdown
```js {1-3,5}
const x = 1;
const y = 2;
const z = 3;
// Not highlighted
const sum = x + y + z; // Highlighted
```
````

### Highlight Words

````markdown
```js /useState/
const [count, setCount] = useState(0);
```
````

### Line Numbers from Specific Number

````markdown
```js showLineNumbers{20}
function example() {
  return true;
}
```
````

### Inline Code Highlighting

```markdown
This is an array `[1, 2, 3]{:js}` of numbers.
```

## Adding Images

### Wikilink Syntax (Obsidian-style)

**Basic embed:**

```markdown
![[image.png]]
```

**With dimensions:**

```markdown
![[image.png|100x145]]
```

**With alt text and dimensions:**

```markdown
![[image.png|alt text 100x200]]
```

### Standard Markdown

```markdown
![Alt text](image.png)
![Alt text](path/to/image.jpg)
```

### Image Location

Images should be in the `content/` folder or subfolders:

- `content/images/photo.jpg`
- `content/attachments/screenshot.png`

**Reference relative to content folder:**

```markdown
![[images/photo.jpg]]
![Screenshot](attachments/screenshot.png)
```

### External Images

```markdown
![Description](https://example.com/image.jpg)
```

### Video Embeds

```markdown
![](video.mp4)
![](video.webm)
```

### YouTube Embeds

```markdown
![](https://youtu.be/VIDEO_ID)
![](https://www.youtube.com/watch?v=VIDEO_ID)
```

## Quartz Commands

### Build and Preview

```bash
# Build and serve locally
npx quartz build --serve

# Build without serving
npx quartz build

# Specify port
npx quartz build --serve --port 3000
```

### Sync with GitHub

```bash
# Full sync (commit, pull, push)
npx quartz sync

# Sync without pulling
npx quartz sync --no-pull

# Sync without pushing
npx quartz sync --no-push

# Custom commit message
npx quartz sync --message "add new notes"
```

### Plugin Management

```bash
# Add a plugin
npx quartz plugin add github:quartz-community/plugin-name

# List installed plugins
npx quartz plugin list

# Install plugins from config
npx quartz plugin install --from-config

# Remove plugin
npx quartz plugin remove plugin-name
```

## Installing Custom Plugins

For custom plugins (like clickable images zoom), add to `quartz.ts`:

```typescript
import {
  loadQuartzConfig,
  loadQuartzLayout,
} from "./quartz/plugins/loader/config-loader";
import { ClickableImages } from "./quartz/plugins/transformers";

const config = await loadQuartzConfig();

if (config.plugins?.transformers) {
  config.plugins.transformers.push(ClickableImages());
}

export default config;
export const layout = await loadQuartzLayout();
```

## Troubleshooting

### Images Not Loading

- Ensure images are in `content/` folder
- Use paths relative to `content/` (don't include `content/` in path)
- Check `ignorePatterns` in config doesn't exclude your images

### Sync Errors

```bash
# Skip pull if getting "couldn't find remote ref" error
npx quartz sync --no-pull

# Check remotes
git remote -v

# Check branches
git branch -a
```

### Build Errors

```bash
# Install missing plugins
npx quartz plugin install

# Clean build
rm -rf public && npx quartz build
```

## Frontmatter

Common frontmatter fields:

```markdown
---
title: Page Title
draft: false
tags:
  - tag1
  - tag2
date: 2026-04-06
description: Page description for SEO
aliases:
  - Alternative Name
---
```

## Wikilinks (Internal Links)

```markdown
[[Page name]]
[[Page name|Custom text]]
[[Page name#Section]]
[[Page name#Section|Custom text]]
```

## Callouts

```markdown
> [!note]
> This is a note callout.

> [!warning]
> This is a warning.

> [!tip]
> This is a tip.
```

Available types: `note`, `abstract`, `info`, `todo`, `tip`, `success`, `question`, `warning`, `failure`, `danger`, `bug`, `example`, `quote`
