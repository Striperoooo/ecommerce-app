/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setup.ts',
  },
  css: {
    postcss: './postcss.config.cjs',
  },
})
