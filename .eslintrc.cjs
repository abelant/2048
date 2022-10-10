module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parser: 'vue-eslint-parser',
  extends: ['plugin:vue/recommended', 'eslint:recommended', 'plugin:jest/recommended'],
  // add your custom rules here
  rules: {
    'eol-last': 'error',
    'space-before-function-paren': 'error',
    'comma-dangle': ['error', 'never'],
    semi: ['error', 'never'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: true,
        ignores: [],
      },
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never',
      },
    ],
    'vue/padding-line-between-blocks': ['error'],
    'vue/new-line-between-multi-line-property': [
      'error',
      {
        minLineOfMultilineProperty: 2,
      },
    ],
    indent: ['error', 2],
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 1,
        switchCase: 0,
        ignores: [],
      },
    ],
    'vue/no-v-html': 0,
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
      },
    },
  ],
}
