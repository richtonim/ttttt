import { writeFileSync } from 'node:fs'
import { deflateSync } from 'node:zlib'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')

function crc32(buf) {
  let c = ~0
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i]
    for (let k = 0; k < 8; k++) c = c & 1 ? (0xedb88320 ^ (c >>> 1)) : c >>> 1
  }
  return ~c >>> 0
}

function chunk(type, data) {
  const len = Buffer.alloc(4)
  len.writeUInt32BE(data.length)
  const typeBuf = Buffer.from(type)
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])))
  return Buffer.concat([len, typeBuf, data, crc])
}

function createPng(size) {
  const raw = Buffer.alloc((size * 4 + 1) * size)
  for (let y = 0; y < size; y++) {
    const row = y * (size * 4 + 1)
    raw[row] = 0
    for (let x = 0; x < size; x++) {
      const i = row + 1 + x * 4
      const nx = (x + 0.5) / size
      const ny = (y + 0.5) / size
      const inOuter = nx > 0.08 && nx < 0.92 && ny > 0.08 && ny < 0.92
      const inDoc = nx > 0.22 && nx < 0.78 && ny > 0.22 && ny < 0.78
      const dx = nx - 0.68
      const dy = ny - 0.68
      const inBadge = dx * dx + dy * dy < 0.045
      const inCheck =
        Math.abs((nx - 0.62) - (ny - 0.68) * 0.4) < 0.035 && ny > 0.64 && ny < 0.74 ||
        Math.abs((nx - 0.72) + (ny - 0.62)) < 0.04 && nx > 0.66 && nx < 0.78 && ny > 0.58 && ny < 0.7

      let r = 9, g = 13, b = 22, a = 255
      if (inOuter) {
        r = 17; g = 24; b = 39
      }
      if (inDoc) {
        const edge =
          nx < 0.28 || nx > 0.72 || ny < 0.28 || ny > 0.72
        if (edge) {
          r = 16; g = 185; b = 129
        } else if (ny > 0.38 && ny < 0.42 && nx > 0.32 && nx < 0.55) {
          r = 248; g = 250; b = 252
        } else if (ny > 0.48 && ny < 0.52 && nx > 0.32 && nx < 0.62) {
          r = 248; g = 250; b = 252
        } else if (ny > 0.58 && ny < 0.62 && nx > 0.32 && nx < 0.5) {
          r = 248; g = 250; b = 252
        } else {
          r = 17; g = 24; b = 39
        }
      }
      if (inBadge) {
        r = 9; g = 13; b = 22
        const ring = dx * dx + dy * dy > 0.028
        if (ring) {
          r = 16; g = 185; b = 129
        }
      }
      if (inBadge && inCheck) {
        r = 16; g = 185; b = 129
      }

      raw[i] = r
      raw[i + 1] = g
      raw[i + 2] = b
      raw[i + 3] = a
    }
  }

  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(size, 0)
  ihdr.writeUInt32BE(size, 4)
  ihdr[8] = 8
  ihdr[9] = 6
  ihdr[10] = 0
  ihdr[11] = 0
  ihdr[12] = 0

  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw)),
    chunk('IEND', Buffer.alloc(0)),
  ])
}

function pngToIco(pngBuffers, sizes) {
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(pngBuffers.length, 4)

  const dir = Buffer.alloc(16 * pngBuffers.length)
  let offset = 6 + 16 * pngBuffers.length
  const images = []

  pngBuffers.forEach((png, i) => {
    const size = sizes[i]
    const o = i * 16
    dir[o] = size >= 256 ? 0 : size
    dir[o + 1] = size >= 256 ? 0 : size
    dir[o + 2] = 0
    dir[o + 3] = 0
    dir.writeUInt16LE(1, o + 4)
    dir.writeUInt16LE(32, o + 6)
    dir.writeUInt32LE(png.length, o + 8)
    dir.writeUInt32LE(offset, o + 12)
    offset += png.length
    images.push(png)
  })

  return Buffer.concat([header, dir, ...images])
}

const sizes = [16, 32, 48]
const pngs = sizes.map(createPng)
writeFileSync(join(publicDir, 'favicon-32.png'), pngs[1])
writeFileSync(join(publicDir, 'apple-touch-icon.png'), createPng(180))
writeFileSync(join(publicDir, 'favicon.ico'), pngToIco(pngs, sizes))
console.log('Generated favicon.ico, favicon-32.png, apple-touch-icon.png')
