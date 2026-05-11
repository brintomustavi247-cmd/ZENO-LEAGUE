import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['**/*.png', '**/*.jpg', '**/*.svg', '**/*.webp'],
      manifest: {
        name: 'ZENO LEAGUE',
        short_name: 'ZENO',
        description: 'Free Fire Custom Room Tournament Platform',
        theme_color: '#0a0a1a',
        background_color: '#0a0a1a',
        display: 'standalone',
        orientation: 'portrait',
        id: 'zenoleague-vercel-app',
        scope: '/',
        start_url: '/',
        lang: 'en',
        categories: ['games', 'entertainment', 'sports'],
        icons: [
          {
            src: '/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/icons/icon-maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,svg,webp,woff2}'],
        navigateFallback: '/index.html',
      },
    }),
  ],
  server: {
    host: true,
    port: 5173,
  },
  build: {
    target: 'esnext',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    chunkSizeWarningLimit: 500,
  },
})