import { defineConfig } from 'vitepress'
import jsx from '@vitejs/plugin-vue-jsx'


// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  vite: {
    plugins: [
      jsx(),
    ],
    server: {
      port: 9000,
      host: true
    }
  }
})
