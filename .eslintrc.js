// ===============================================================
// Airbnb JavaScript Style Guide
// https://github.com/airbnb/javascript
// https://github.com/walmartlabs/eslint-config-defaults
// http://eslint.org/docs/rules/
// ===============================================================

module.exports = {
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:vue/essential',
    '@vue/typescript',
  ],
  env: {
    node: true,
    browser: true,
  },
  rules: {
    'no-multi-assign': 0,
    'max-len': 1,
    'import/no-extraneous-dependencies': 1,
    'import/no-named-as-default': 0,
    'import/no-unresolved': [2, { ignore: ['vue-fa'] }],
    'import/extensions': [
      2,
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'vue/require-default-prop': 0,
    'vue/multi-word-component-names': 0,
  },
};
