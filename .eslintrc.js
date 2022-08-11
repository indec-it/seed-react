module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended'
  ],
  settings: {'import/resolver': {webpack: {config: 'webpack.config.js'}}},
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'jest'
  ],
  env: {
    'jest/globals': true
  },
  rules: {
    indent: [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'always'
    ],
    'react/react-in-jsx-scope': 'off',
    'object-curly-spacing': ['error', 'never'],
    'eol-last': ['error'],
    'comma-dangle': ['error', 'never'],
    'max-len': ['error', 125],
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    'no-param-reassign': ['error', {props: true, ignorePropertyModificationsFor: ['state']}],
    'arrow-parens': 'off'
  }
};
