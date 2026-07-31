import { execSync } from 'node:child_process'
import { copyFileSync, existsSync, mkdirSync, rmSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const zipPath = join(root, 'dist.zip')

if (!existsSync(dist)) {
  console.error('dist/ missing — run vite build first')
  process.exit(1)
}

// SPA fallback copies for static hosts
copyFileSync(join(dist, 'index.html'), join(dist, '404.html'))

const redirects = join(root, 'public', '_redirects')
if (existsSync(redirects)) {
  copyFileSync(redirects, join(dist, '_redirects'))
}

// Ensure nginx-friendly try_files hint
mkdirSync(join(dist), { recursive: true })

if (existsSync(zipPath)) rmSync(zipPath)

execSync(`cd "${root}" && zip -r dist.zip dist`, { stdio: 'inherit' })
console.log(`Created ${zipPath}`)
