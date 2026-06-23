import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    vue(),
    cssInjectedByJsPlugin(),
    dts({
      tsconfigPath: './tsconfig.json',
      outDir: 'dist',
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VueFa',
      formats: ['cjs', 'es', 'umd'],
      fileName: (format, _entryName) => {
        if (format === 'cjs') return 'vue-fa.cjs.js';
        if (format === 'es') return 'vue-fa.esm.js';
        if (format === 'umd') return 'vue-fa.js';
        return `vue-fa.${format}.js`;
      },
    },
    rolldownOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    minify: false,
    cssMinify: false,
    cssCodeSplit: false,
  },
});
