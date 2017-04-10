module.exports = {
  extends: ['airbnb-base', 'plugin:react/recommended'],
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    jquery: true,
  },
  plugins: [
    'react',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  rules: {
    'no-unused-vars': ['error', {
      vars: 'local',
      args: 'none',
    }],
    'default-case': 'off',
    'no-else-return': 'off',
    'no-param-reassign': ['error', {
      props: false,
    }],
    'no-plusplus': ['error', {
      allowForLoopAfterthoughts: true,
    }],
    'class-methods-use-this': ['error', {
      exceptMethods: ['render'],
    }],
  },
};
