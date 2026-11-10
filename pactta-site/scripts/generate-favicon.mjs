import sharp from 'sharp';
import toIco from 'to-ico';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const svg = readFileSync(resolve(__dirname, '../public/favicon-source.svg'));
const outDirs = [resolve(__dirname, '../dist'), resolve(__dirname, '../public')];

const sizes = [16, 32, 48];
const pngBuffers = await Promise.all(
  sizes.map((size) =>
    sharp(svg).resize(size, size).png().toBuffer()
  )
);

const ico = await toIco(pngBuffers);

for (const outDir of outDirs) {
  writeFileSync(resolve(outDir, 'favicon.ico'), ico);
  await sharp(svg).resize(512, 512).png().toFile(resolve(outDir, 'apple-touch-icon.png'));
  await sharp(svg).resize(192, 192).png().toFile(resolve(outDir, 'icon-192.png'));
}

console.log('Generated favicon.ico and touch icons in dist/ and public/');
