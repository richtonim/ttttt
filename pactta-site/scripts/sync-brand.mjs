import sharp from 'sharp';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const brandDir = resolve(__dirname, '../public/brand');
mkdirSync(brandDir, { recursive: true });

const src = resolve(brandDir, 'logo-source.png');
const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

for (let i = 0; i < data.length; i += 4) {
  const lum = (data[i] + data[i + 1] + data[i + 2]) / 3;
  if (lum > 128) {
    data[i] = data[i + 1] = data[i + 2] = 11;
    data[i + 3] = 255;
  } else {
    data[i + 3] = 0;
  }
}

const markPath = resolve(brandDir, 'logo-mark.png');
await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } }).png().toFile(markPath);

const b64 = readFileSync(markPath).toString('base64');
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Pactta">
  <image width="200" height="200" href="data:image/png;base64,${b64}"/>
</svg>`;
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 48" fill="none" role="img" aria-label="Pactta">
  <image x="0" y="4" width="40" height="40" href="data:image/png;base64,${b64}"/>
  <text x="52" y="34" font-family="Instrument Sans, system-ui, -apple-system, sans-serif" font-size="28" font-weight="600" fill="#0B1220" letter-spacing="-0.02em">Pactta</text>
</svg>`;

const publicDir = resolve(__dirname, '../public');
writeFileSync(resolve(publicDir, 'logo-icon.svg'), iconSvg);
writeFileSync(resolve(publicDir, 'logo.svg'), logoSvg);
writeFileSync(resolve(publicDir, 'favicon-source.svg'), iconSvg);
console.log('Brand assets synced from logo-source.png');
