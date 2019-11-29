module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-unused-vars': 0,
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/attribute-hyphenation': 'warning',
    'vue/html-closing-bracket-newline': 'warning'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
