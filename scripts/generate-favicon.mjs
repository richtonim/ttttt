import sharp from 'sharp'
import pngToIco from 'png-to-ico'
import { writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <rect width="64" height="64" rx="14" fill="#0F0F12"/>
  <g stroke="#E5E2DC" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 42 L32 30 L50 42 L32 54 Z"/>
    <path d="M14 42 L14 24 L32 12 L50 24 L50 42"/>
    <path d="M32 12 L32 30"/>
    <path d="M14 24 L32 36 L50 24" opacity="0.45"/>
  </g>
  <circle cx="32" cy="36" r="2.4" fill="#E66A35"/>
  <path d="M32 36 L40 28" stroke="#E66A35" stroke-width="1.6" stroke-linecap="round"/>
</svg>`

const svgBuffer = Buffer.from(svg)

async function makePng(size, outPath) {
  await sharp(svgBuffer).resize(size, size).png().toFile(outPath)
}

await makePng(32, join(publicDir, 'favicon-32.png'))
await makePng(48, join(publicDir, 'favicon-48.png'))
await makePng(180, join(publicDir, 'apple-touch-icon.png'))
await makePng(512, join(publicDir, 'icon-512.png'))

const ico = await pngToIco([
  join(publicDir, 'favicon-32.png'),
  join(publicDir, 'favicon-48.png'),
])
writeFileSync(join(publicDir, 'favicon.ico'), ico)

console.log('Generated favicon.ico, apple-touch-icon.png, icon-512.png')
