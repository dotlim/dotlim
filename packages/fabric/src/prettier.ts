module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: "es5",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: "avoid",
  proseWrap: "preserve",
  endOfLine: "lf",
  overrides: [
    {
      files: ["*.json", ".eslintrc", ".tslintrc", ".prettierrc"],
      options: {
        parser: "json",
        tabWidth: 2,
      },
    },
    {
      files: "*.{css,sass,scss,less}",
      options: {
        parser: "css",
        tabWidth: 2,
      },
    },
    {
      files: "*.ts",
      options: {
        parser: "typescript",
      },
    },
    {
      files: "*.vue",
      options: {
        parser: "vue",
      },
    },
    {
      files: "*.md",
      options: {
        parser: "markdown",
      },
    },
  ],
};