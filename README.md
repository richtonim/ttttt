# Cognis — cognis.click

Premium AI brand website for **Cognis**, a cognitive intelligence platform for AI agents, knowledge reasoning, and enterprise automation.

## Tech Stack

- Next.js 16 (App Router, static export)
- React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion + GSAP
- Lucide Icons

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run export:zip
```

This generates a static site in `out/` and packages it as **`dist.zip`** for direct deployment to any static host (Nginx, S3, Cloudflare Pages, etc.).

Extract and serve the `out/` directory (or contents of `dist.zip`) from your web root. Configure your host to serve `index.html` for 404s if needed.

## Whitelist Access

Login, registration, and purchase require a whitelisted email. Demo whitelist addresses are defined in `src/lib/site.ts`.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/platform/` | Platform overview |
| `/solutions/` | Use cases & solutions |
| `/developers/` | API & SDK docs |
| `/security/` | Security & compliance |
| `/company/` | About Cognis |
| `/careers/` | Open positions |
| `/contact/` | Contact form |
| `/demo/` | Book a demo |
| `/explore/` | Platform exploration |
| `/login/` | Sign in (whitelist) |
| `/register/` | Create account (whitelist) |
| `/pricing/` | Plans & purchase (whitelist) |
| `/privacy/` | Privacy policy |
| `/terms/` | Terms of service |

© 2026 Cognis
