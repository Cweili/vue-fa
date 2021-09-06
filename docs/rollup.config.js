import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
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
    typescript(),
    babel({
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue'],
    }),
  ],
});

export default [
  {
    ...commonConfig(),
    input: 'index.ts',
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
    input: 'v2/index.ts',
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
