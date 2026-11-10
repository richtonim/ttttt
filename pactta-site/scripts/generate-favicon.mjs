import sharp from 'sharp';
import toIco from 'to-ico';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const mark = readFileSync(resolve(__dirname, '../public/brand/logo-mark.png'));
const outDirs = [resolve(__dirname, '../dist'), resolve(__dirname, '../public')];

const sizes = [16, 32, 48];
const pngBuffers = await Promise.all(
  sizes.map((size) =>
    sharp(mark).resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } }).png().toBuffer()
  )
);

const ico = await toIco(pngBuffers);

for (const outDir of outDirs) {
  writeFileSync(resolve(outDir, 'favicon.ico'), ico);
  await sharp(mark).resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } }).png().toFile(resolve(outDir, 'apple-touch-icon.png'));
  await sharp(mark).resize(192, 192, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } }).png().toFile(resolve(outDir, 'icon-192.png'));
}

console.log('Generated favicon.ico and touch icons in dist/ and public/');
