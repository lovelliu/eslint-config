const { isPackageExists } = require('local-pkg')

const TS = isPackageExists('typescript')

if (!TS)
  console.warn('[@lovelliu/eslint-config] TypeScript is not installed, fallback to JS only.')

module.exports = {
  extends: [
    '@lovelliu/eslint-config-ts',
    'plugin:astro/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        'astro/semi': ['error', 'never'],
      },
    },
  ],
}
