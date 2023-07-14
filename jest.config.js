module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'ts',
    'tsx',
    'vue',
  ],
  transform: {
    '.*\\.vue$': '@vue/vue3-jest',
    '.*\\.tsx?$': 'ts-jest',
    '.*\\.jsx?$': 'babel-jest',
  },
};
