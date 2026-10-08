import { resolve } from 'path';
import { defineConfig } from 'vite';

const pages = [
  'index',
  'product',
  'workflow-analysis',
  'node-inspector',
  'solutions',
  'developers',
  'documentation',
  'pricing',
  'about',
  'blog',
  'help-center',
  'contact',
  'login',
  'register',
];

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: Object.fromEntries(
        pages.map((page) => [page, resolve(__dirname, `${page}.html`)])
      ),
    },
    cssMinify: true,
    minify: 'esbuild',
  },
});
