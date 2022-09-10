import { Config as PrettierConfig } from 'prettier';

const config: PrettierConfig = {
  /* common configuration */
  semi: false,
  useTabs: false,
  tabWidth: 2,
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  arrowParens: 'avoid',
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  endOfLine: 'lf',
  /* jsx configuration */
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  bracketSameLine: true,
  /* overrides configuration */
  overrides: [
    {
      files: ['*.json5', '*.json', '.eslintrc', '.prettierrc'],
      options: {
        parser: 'json',
        singleQuote: false,
        quoteProps: 'preserve',
      },
    },
    {
      files: ['*.yml'],
      options: {
        singleQuote: false,
      },
    },
    {
      files: '*.{css,sass,scss,less}',
      options: {
        parser: 'css',
        tabWidth: 2,
      },
    },
    {
      files: '*.ts',
      options: {
        parser: 'typescript',
      },
    },
    {
      files: '*.vue',
      options: {
        parser: 'vue',
      },
    },
    {
      files: '*.md',
      options: {
        parser: 'markdown',
      },
    },
  ],
};

module.exports = config;