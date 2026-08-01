# SOMA Autos — Intelligence in Motion

AI infrastructure for the next generation of vehicles. Official brand website for [soma.autos](https://soma.autos).

## Tech Stack

- Next.js 15 (App Router, Static Export)
- React 19 + TypeScript
- Tailwind CSS
- Framer Motion + GSAP ScrollTrigger
- Three.js (lightweight hero wireframe)
- Lucide Icons

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

Static files are exported to `out/`. A pre-built `dist.zip` is included for direct deployment.

### Deploy dist.zip

1. Unzip `dist.zip` to your web server root
2. Configure your server to serve `index.html` for all routes (SPA fallback not needed — all pages are pre-rendered)
3. Point your domain `soma.autos` to the server

Compatible with: Vercel, Netlify, Cloudflare Pages, AWS S3 + CloudFront, Nginx, Apache.

## Pages

| Page | Path |
|------|------|
| Home | `/` |
| Platform | `/platform/` |
| Solutions | `/solutions/` |
| Technology | `/technology/` |
| Company | `/company/` |
| Insights | `/insights/` |
| Developers | `/developers/` |
| API Access | `/developers/api-access/` |
| Security | `/security/` |
| Careers | `/careers/` |
| Contact | `/contact/` |
| Login | `/login/` |
| Register | `/register/` |
| Privacy | `/privacy/` |
| Terms | `/terms/` |
| Cookies | `/cookies/` |

## Whitelist Access

Registration, login, and API access require whitelist approval. Demo emails:

- `demo@soma.autos`
- `admin@soma.autos`
- Any `@soma.autos` domain email

## SEO

- Open Graph & Twitter Card metadata
- Schema.org Organization markup
- `sitemap.xml` and `robots.txt`
- Semantic HTML with WCAG AA considerations

## License

© 2026 SOMA Autos. All rights reserved.
