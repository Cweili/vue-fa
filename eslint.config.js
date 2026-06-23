import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import vuePlugin from 'eslint-plugin-vue';
import globals from 'globals';

export default tseslint.config(
  { ignores: ['*.d.ts', '**/coverage', '**/dist'] },

  js.configs.recommended,

  ...tseslint.configs.recommended,
  ...vuePlugin.configs['flat/recommended'],

  {
    files: ['**/*.{js,ts,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
      },
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    rules: {
      'no-multi-assign': 'off',
      'max-len': 'warn',
      'vue/require-default-prop': 'off',
      'vue/multi-word-component-names': 'off',
    },
  },
);
