# AIFLASH.NEWS

Real-Time AI Intelligence & Model Release Telemetry platform.

**Slogan:** Real-Time AI Intelligence. Sub-Second Speed. Zero Noise.

## Quick Deploy

Extract `dist.zip` and serve the `dist/` folder as static files.

```bash
unzip dist.zip
cd dist
npx serve .
```

For SPA routing, configure your server to redirect all routes to `index.html`.

### Netlify / Cloudflare Pages
The `_redirects` file is included for automatic SPA fallback.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
zip -r dist.zip dist/
```

## Whitelist Demo Emails

For testing login/register/purchase flows:
- demo@aiflash.news
- founder@aiflash.news
- architect@aiflash.news
- investor@aiflash.news
- dev@aiflash.news

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/digest` | Flash Digest live feed |
| `/telemetry` | Model telemetry dashboard |
| `/pricing` | Pricing plans |
| `/api` | API documentation |
| `/about` | About us |
| `/contact` | Contact form |
| `/whitelist` | Whitelist application |
| `/login` | Login (whitelist required) |
| `/register` | Register (whitelist required) |
| `/purchase` | Purchase (whitelist required) |
| `/dashboard` | User dashboard |
| `/careers` | Careers |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/cookies` | Cookie policy |

## Tech Stack

- React 19 + TypeScript
- Vite 6
- React Router 7
- Plus Jakarta Sans + JetBrains Mono

## License

© 2026 AIFLASH.NEWS
