module.exports = {
  root: true,
  extends: ['taro', 'eslint:recommended', 'airbnb', 'plugin:react/recommended', 'prettier', 'prettier/react'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error', 'ignoredYellowBox'] }] : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: ['error', 'never'],
    'no-var': 'error',
    'no-new-object': 'error',
    'import/imports-first': ['error', 'absolute-first'],
    'import/newline-after-import': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'import/no-unresolved': [
      'error',
      {
        ignore: ['@']
      }
    ],
    'react/prop-types': [2, { ignore: ['dispatch', 'router', 'navigation'] }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-underscore-dangle': ['error', { allow: ['_store'] }],
    'no-use-before-define': ['error', { variables: false }],
    'comma-dangle': ['error', 'never'],
    'class-methods-use-this': 'off',
    'react/destructuring-assignment': 'off',
    'linebreak-style': 0,
    'import/prefer-default-export': 'off',
    'no-empty': 'off'
  },
  parser: 'babel-eslint',
  plugins: ['prettier', 'react'],
  parserOptions: {
    ecmaFeatures: { legacyDecorators: true }
  },
  env: {
    amd: true,
    commonjs: true,
    node: true
  },
  settings: {
    react: {
      version: require('./package.json').dependencies.react
    }
  }
}
