/**
 * @author oxyzhg
 * @since 2020-04-25
 */

module.exports = {
  // extends: [
  //   'eslint:recommended',
  //   'plugin:node/recommended',
  //   'plugin:@typescript-eslint/recommended',
  // ],
  // plugins: ['import'],
  // parser: '@typescript-eslint/parser',
  // parserOptions: {
  //   sourceType: 'module',
  //   ecmaVersion: 2021,
  // },
  // rules: {
  //   'no-console': WARN,
  //   'node/no-missing-import': [
  //     ERROR,
  //     {
  //       allowModules: ['types', 'estree', 'less', 'sass', 'stylus'],
  //       tryExtensions: ['.ts', '.js', '.jsx', '.tsx', '.d.ts'],
  //     },
  //   ],
  //   'node/no-missing-require': [
  //     ERROR,
  //     {
  //       allowModules: [],
  //       tryExtensions: ['.ts', '.js', '.jsx', '.tsx', '.d.ts'],
  //     },
  //   ],
  //   'node/no-unpublished-import': OFF,
  //   'node/no-unpublished-require': OFF,
  //   'node/no-unsupported-features/es-syntax': OFF,
  //   '@typescript-eslint/no-var-requires': OFF,
  // },

  extends: ['eslint:recommended', 'plugin:import/recommended'],
  parserOptions: {
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  env: {
    es2021: true,
    node: true,
    browser: true,
  },
  plugins: ['import'],
  rules: {
    'no-console': 'warn',
  },
  reportUnusedDisableDirectives: true,
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] },
    },
  },
}
