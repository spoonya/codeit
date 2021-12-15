module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb', 'airbnb-typescript'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  parser: '@typescript-eslint/parser',
  rules: {
    'react/prop-types': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-unused-vars': 'warn',
    'no-unused-expressions': 'off',
    'no-nested-ternary': 'off',
    '@typescript-eslint/default-param-last': 'off',
    'global-require': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'space-infix-ops': 'off',
    'react/jsx-filename-extension': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'function-declaration',
      },
    ],
  },
};
