import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    jsx(),
    dts({
      copyDtsFiles: true,
      outDir: ['dist'],
      tsconfigPath: 'tsconfig.app.json',
      rollupTypes: true
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'wuxianx-fancyzones',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        exports: 'named',
      },
    }
  }
})
