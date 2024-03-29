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
          src: '/Frontend-design-challenges/todo-app/dist/icon.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'
        }
      ]
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: ({ url }) => {
            return (url.pathname.includes('.svg') || url.pathname.includes('.jpg') || url.pathname.includes('.png'))
          },
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    }
  })],
  base: '/Frontend-design-challenges/todo-app/dist/',
})
