import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/fa.vue',
  output: {
    file: 'dist/vue-fa.js',
    format: 'es'
  },
  plugins: [
    vue({
      css: false
    }),
    babel()
  ],
};
