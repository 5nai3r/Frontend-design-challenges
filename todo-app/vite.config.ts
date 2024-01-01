import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  VitePWA({
    manifest: {
      icons: [
        {
          src: '/icon.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          src: '/icon.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ]
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: ({ url }) => {
            return url.pathname.includes('.svg')
          },
          handler: 'CacheFirst',
          options: {
            cacheName: 'svg-icons',
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    }
  })],
})
