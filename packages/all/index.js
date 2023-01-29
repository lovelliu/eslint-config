const { isPackageExists } = require('local-pkg')
const hasReact = isPackageExists('react')
const hasAstro = isPackageExists('astro')

module.exports = {
  extends: [
    hasReact
      ? '@lovelliu/eslint-config-react'
      : hasAstro
        ? '@lovelliu/eslint-config-astro'
        : '@lovelliu/eslint-config-vue',
  ],
}
