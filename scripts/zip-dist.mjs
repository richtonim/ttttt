import archiver from 'archiver'
import { createWriteStream, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const distDir = join(root, 'dist')
const outPath = join(root, 'dist.zip')

if (!existsSync(distDir)) {
  console.error('dist/ not found. Run vite build first.')
  process.exit(1)
}

const output = createWriteStream(outPath)
const archive = archiver('zip', { zlib: { level: 9 } })

await new Promise((resolve, reject) => {
  output.on('close', resolve)
  archive.on('error', reject)
  archive.pipe(output)
  archive.directory(distDir, false)
  archive.finalize()
})

console.log(`Created dist.zip (${archive.pointer()} bytes)`)
