// @ts-check
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  extends: [require.resolve('@dotlim/fabric/eslint')],
  rules: {
    'no-unused-vars': 'warn',
  },
  overrides: [
    {
      files: ['packages/fabric/**'],
      rules: {
        'no-console': 'warn',
      },
    },
    {
      files: ['*.js', '*.mjs', '*.cjs'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
})
