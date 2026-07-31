# INTERIORPUP.AI

English marketing site for **interiorpup.com** — AI Spatial & Interior Intelligence Engine.

**Slogan:** Spatial Intelligence for Modern Interiors. Prompt to 3D Space in Milliseconds.

## Stack

- React 19 + TypeScript + Vite
- React Router
- Static SEO (meta, JSON-LD, sitemap, robots)

## Scripts

```bash
npm install
npm run dev          # local development
npm run build        # production build + dist.zip
npm run preview      # preview dist/
npm run generate:favicon
```

## Deploy

Unzip `dist.zip` into your static host (Nginx, Netlify, Cloudflare Pages, S3, etc.).

- Netlify/Cloudflare: `public/_redirects` included for SPA fallback
- Apache: `public/.htaccess` included

## Whitelist (frontend demo)

Register, login, and purchase require a whitelisted email:

- `partner@interiorpup.com`
- `architect@demo.com`
- `design@proptech.io`

Request access via `/waitlist`.

## Brand

- Base: `#0F0F12`
- Sand: `#E5E2DC`
- Accent: `#E66A35`
