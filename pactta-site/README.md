# Pactta Website

Marketing site for [pactta.app](https://pactta.app) — crypto on/off ramp APIs and SDKs for Latin America.

## Cloudflare Pages

| Setting | Value |
| -------- | ----- |
| **Framework preset** | None (or Vite) |
| **Build command** | `npm ci && npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `pactta-site` (if deploying from monorepo) |

Point your custom domain `pactta.app` to the Pages project. Static assets `robots.txt`, `sitemap.xml`, and `_headers` are copied from `public/` automatically.

## Local development

```bash
cd pactta-site
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Output is in `dist/`, including `favicon.ico` generated from `public/favicon-source.svg`.

## SEO

- Meta description, Open Graph, and Twitter cards in `index.html`
- JSON-LD `Organization` and `WebSite` structured data
- `canonical` URL, `sitemap.xml`, and `robots.txt`
