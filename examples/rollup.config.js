import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';

export default {
  input: 'index.js',
  output: {
    file: 'dist/index.js',
    name: 'vueFaExamples',
    format: 'iife',
    globals: {
      vue: 'Vue'
    },
  },
  external: ['vue'],
  plugins: [
    resolve({
      browser: true
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    vue({
      css: false
    }),
    babel()
  ],
};
