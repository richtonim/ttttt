# NextLayer Website

Official marketing website for [NextLayer](https://nextlayer.lat) — an enterprise AI platform for agents, knowledge bases, workflows, and multi-model gateway.

## Tech Stack

- Next.js 15 (App Router, static export)
- React 19 + TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build
```

Static files are exported to the `out/` directory. Deploy to any static host (Vercel, Netlify, Cloudflare Pages, S3, Nginx).

```bash
cd out && zip -r ../dist.zip .
```

## Project Structure

- `app/` — Next.js routes (English at root, locales at `/zh`, `/es`, `/pt`)
- `components/` — UI, layout, sections, forms, pages
- `content/` — Navigation, products, solutions, pricing, blog data
- `lib/` — Utilities, metadata, validation, i18n
- `public/` — Logo, favicon, static assets

## Notes

- Platform access is whitelist-only during early access
- Pricing, integrations, and dashboard data are illustrative placeholders
- Form submissions are client-side placeholders (TODO: connect backend API)

## License

Proprietary — NextLayer © 2026
