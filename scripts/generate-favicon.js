import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import toIco from 'to-ico';

const __dirname = dirname(fileURLToPath(import.meta.url));
const svgPath = resolve(__dirname, '../public/favicon.svg');
const outPath = resolve(__dirname, '../public/favicon.ico');

const svg = readFileSync(svgPath);
const png32 = await sharp(svg).resize(32, 32).png().toBuffer();
const png16 = await sharp(svg).resize(16, 16).png().toBuffer();
const ico = await toIco([png16, png32]);
writeFileSync(outPath, ico);
console.log('Generated favicon.ico');
