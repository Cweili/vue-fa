import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default {
  input: 'src/fa.vue',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: 'VueFa'
    },
    {
      file: pkg.module,
      format: 'es'
    },
  ],
  plugins: [
    vue({
      css: false
    }),
    babel()
  ],
};
