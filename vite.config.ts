import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      copyDtsFiles: true,
      outDir: ['dist'],
      tsconfigPath: 'tsconfig.app.json',
      rollupTypes: true
    }),
    vue(),
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
