module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jquery: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  plugins: [
    'html',
    'vue'
  ],
  root: true,
  // 'no-tabs': 'off',
  rules: {
    'vue/valid-v-for': false,
    indent: [0, 2],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // no whitespace
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }],
    // 多行注释允许无空格
    'spaced-comment': ['error', 'always', { exceptions: ['*'] }],
    // 禁止使用alert confirm prompt
    'no-alert': process.env.NODE_ENV === 'production' ? 1 : 0,
    // 使用三元操作符
    'no-ternary': 0,
    // 禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
    'no-unneeded-ternary': 0,
    // 嵌套块深度
    'max-depth': [0, 3],
    // 循环复杂度
    complexity: [0, 10],
    // allow async-await
    // 'generator-star-spacing': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
