// ===============================================================
// Airbnb JavaScript Style Guide
// https://github.com/airbnb/javascript
// https://github.com/walmartlabs/eslint-config-defaults
// http://eslint.org/docs/rules/
// ===============================================================

module.exports = {
  extends: [
    'airbnb-base',
    'plugin:vue/recommended'
  ],
  env: {
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2017
  },
  rules: {
    eqeqeq: 0,
    'no-multi-assign': 0,
    'no-new': 0,
    'max-len': 1,
    'import/no-extraneous-dependencies': 1,
    'import/no-unresolved': [2, { ignore: ['vue-fa'] }],
    'vue/require-default-prop': 0
  }
};
