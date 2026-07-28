# AGENTS.md

Conventions and tooling for AI agents working on **seogrow.pl** (or any project using Impeccable design lint).

## Design lint: Impeccable

This project uses [Impeccable](https://github.com/pbakaus/impeccable) — a CLI that catches 49 anti-patterns in UI code (side-tab borders, purple gradients, bounce easing, dark glows, line length, small touch targets, skipped headings, etc.).

### Install (one-time per project + global)

```bash
# Global — usable across all projects from any directory
npm install -g impeccable

# Per-project — for CI / package.json scripts
npm install --save-dev impeccable
```

### Usage in this project

```bash
# Run on src/ with config + inline ignores
npx impeccable detect src/

# Run on built HTML
npx impeccable detect dist/index.html

# CI-friendly JSON output
npx impeccable detect src/ --json

# Bypass config + inline ignores (raw scan)
npx impeccable detect src/ --no-config
```

npm shortcuts (already configured in `package.json`):

```bash
npm run lint:design         # human-readable scan of src/
npm run lint:design:ci      # JSON output for CI
npm run lint:design:html    # scan built dist/index.html
```

### Config

Project-level config lives in `.impeccable/config.json`:
- `detector.ignoreFiles` — paths to skip (data files, generated routes, build scripts)
- `detector.ignoreRules` — rule names to suppress globally with reason
- `detector.designSystem.enabled` — leave `false` until we add design tokens

Per-file inline ignores (when a single file has a justified exception):

```tsx
{/* impeccable-disable side-tab: this is the language switcher tab */}
// impeccable-disable-line overused-font Inter
// impeccable-disable-next-line no-emoji
```

### When to run

- Before every PR / commit
- As a check in `npm run build` (add at the end if not already)
- Before launching any new design / section work to catch regressions

### When you find a finding

1. **If it's a real issue** → fix it. Most rules have a suggested replacement in the message.
2. **If it's intentional** → add a file-level `impeccable-disable <rule>: <reason>` comment with a clear reason, or add to `ignoreRules` in config.
3. **If it's a false positive from a library** (Chakra, MUI, etc.) → add to `ignoreFiles` if the file is library-generated, or to `ignoreRules` if it's a Chakra prop pattern.
