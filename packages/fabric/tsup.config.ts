import { defineConfig } from 'tsup'
import fs from 'node:fs'

export default defineConfig({
  entry: [
    'src/prettier.ts',
    'src/eslint.ts',
    'src/eslint-base.ts',
    'src/eslint-typescript.ts',
    'src/eslint-react.ts',
  ],
  dts: false,
  format: ['esm', 'cjs'],
  clean: true,
  platform: 'node',
  onSuccess: async () => {
    // copy json files
    fs.copyFileSync('./src/tsconfig-base.json', './dist/tsconfig-base.json')
  },
})
