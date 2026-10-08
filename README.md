# NodeRefine Official Website

AI workflow diagnostics, node optimization, and intelligent debugging platform.

## Quick Start

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

Output is in `dist/`. A `dist.zip` archive is created for direct deployment.

## Whitelist

Login, registration, and purchase require an approved email. Default whitelist:

- `admin@noderefine.help`
- `demo@noderefine.help`
- `enterprise@noderefine.help`

Edit `src/scripts/whitelist.js` to modify.

## Deploy

Upload `dist.zip` contents to any static hosting (Nginx, Vercel, Netlify, S3, etc.).

Domain: **noderefine.help**
