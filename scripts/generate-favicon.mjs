import sharp from 'sharp'
import toIco from 'to-ico'
import { readFileSync, writeFileSync } from 'fs'

const svg = readFileSync('public/favicon.svg')

async function generate() {
  const sizes = [16, 32, 48]
  const pngBuffers = await Promise.all(
    sizes.map((size) =>
      sharp(svg).resize(size, size).png().toBuffer()
    )
  )

  const ico = await toIco(pngBuffers)
  writeFileSync('public/favicon.ico', ico)
  console.log('Generated favicon.ico')

  await sharp(svg).resize(180, 180).png().toFile('public/apple-touch-icon.png')
  console.log('Generated apple-touch-icon.png')
}

generate().catch(console.error)
