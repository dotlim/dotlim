/**
 * @author oxyzhg
 * @since 2020-12-25
 */

module.exports = {
  extends: ['plugin:react/recommended', './eslint-typescript'],
  settings: {
    react: {
      version: '17.0',
    },
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/react-in-jsx-scope': 'off',
  },
}
