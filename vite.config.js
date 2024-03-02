import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '-Project_Spotify'
  plugins: [vue({
    template: {
      compilerOptions: {
        // i am ignorning my custom '<container>' tag
        isCustomElement: (tag) => ['ion-icon'].includes(tag)
      }
    }
  })],
})
