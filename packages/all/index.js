const { isPackageExists } = require('local-pkg')
const React = isPackageExists('react')

module.exports = {
  extends: [
    React
      ? '@lovelliu/eslint-config-react'
      : '@lovelliu/eslint-config-vue',
  ],
}
