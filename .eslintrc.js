module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true
  },
  extends: ['airbnb', 'eslint:recommended', 'plugin:react/recommended', 'plugin:jest/recommended', 'prettier'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src/'],
          ['@root', '.']
        ],
        extensions: ['.js']
      }
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'jest'],
  globals: {
    React: true,
    render: true,
    configureStore: true,
    window: true,
    localStorage: true
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'object-curly-spacing': ['error', 'never'],
    'eol-last': ['error'],
    'comma-dangle': ['error', 'never'],
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    'no-param-reassign': ['error', {props: true, ignorePropertyModificationsFor: ['state']}],
    'arrow-parens': 'off',
    'no-underscore-dangle': 'off'
  }
};
