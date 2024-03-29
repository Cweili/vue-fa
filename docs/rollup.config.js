import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import vue from 'rollup-plugin-vue';

const commonConfig = (outputPrefix = '') => ({
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
    postcss({
      extract: `${outputPrefix}index.css`,
    }),
    babel({
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue'],
    }),
  ],
});

export default [
  {
    ...commonConfig(),
    input: 'index.js',
    output: {
      file: 'dist/index.js',
      name: 'vueFaExamples',
      format: 'iife',
      globals: {
        vue: 'Vue',
        'vue-fa': 'VueFa',
      },
    },
  },
  {
    ...commonConfig('v2.'),
    input: 'v2/index.js',
    output: {
      file: 'dist/v2.index.js',
      name: 'vueFaExamples',
      format: 'iife',
      globals: {
        vue: 'Vue',
        'vue-fa': 'VueFa',
      },
    },
  },
];
