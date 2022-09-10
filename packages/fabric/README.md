# @dotlim/fabric

> 💪 一些保证代码质量的配置

## Install

```bash
npm install @dotlim/fabric -D
```

## Usage

### Prettier

Change _.prettierrc.js_

```js
const prettierConfig = require('@dotlim/fabric/prettier')

module.exports = {
  ...prettierConfig,
  semi: true,
}
```

### ESLint

Change _.eslintrc.cjs_

```js
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  extends: [require.resolve('@dotlim/fabric/eslint')],
  rules: {
    // custom rules
  },
})
```
