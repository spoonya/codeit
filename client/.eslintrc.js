module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb', 'airbnb-typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    ecmaVersion: 12,
    jsx: true,
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': 0,
    'implicit-arrow-linebreak': 'off',
    'operator-linebreak': 'off',
    'function-paren-newline': 'off',
    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-unused-vars': 'warn',
    'object-curly-newline': 'off',
    'no-unused-expressions': 'warn',
    'no-nested-ternary': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
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
