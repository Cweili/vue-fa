import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only';

export default {
  input: 'index.ts',
  output: {
    file: 'dist/index.js',
    name: 'vueFaExamples',
    format: 'iife',
    globals: {
      vue: 'Vue',
      // 'vue-fa': 'VueFa',
    },
  },
  external: ['vue', 'vue-fa'],
  plugins: [
    resolve({
      browser: true,
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    vue({
      css: false,
    }),
    css({
      output: 'index.css',
    }),
    typescript(),
    babel({
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue'],
    }),
  ],
};
