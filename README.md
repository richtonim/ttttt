# ClaimEase.AI (claimease.in)

Autonomous AI Claims & Fraud Guard Engine — marketing and early-access frontend for insurers, financial institutions, and enterprise finance teams.

## Stack

- Vite + React + TypeScript
- React Router
- react-helmet-async (SEO)

## Develop

```bash
npm install
npm run dev
```

## Build deployable bundle

```bash
npm run build
```

This compiles the site into `dist/` and packages `dist.zip` for direct static hosting (Nginx, Netlify, S3, Cloudflare Pages, etc.).

## Whitelist access

Register, login, and purchase flows accept only approved emails defined in `src/data/whitelist.ts`.

Demo emails:

- `admin@claimease.in`
- `partner@insurer.com`
- `demo@enterprise.com`

## Brand

- Domain: `claimease.in`
- Slogan: Instant Claims. Zero Friction. Uncompromising Fraud Protection.
- Colors: Slate `#090D16`, Card `#111827`, Emerald `#10B981`, Amber `#F59E0B`, Snow `#F8FAFC`
