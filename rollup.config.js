import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import vue from 'rollup-plugin-vue';
import pkg from './package.json';

export default {
  input: 'src/fa.vue',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
    {
      file: pkg.unpkg,
      format: 'umd',
      name: 'VueFa',
      globals: {
        vue: 'Vue',
      },
    },
  ],
  plugins: [
    vue({
      css: false,
    }),
    typescript(),
    babel({
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue'],
    }),
  ],
};
