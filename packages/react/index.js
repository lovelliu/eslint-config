module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    '@lovelliu/eslint-config-ts',
  ],
  settings: {
    react: {
      version: '17.0',
    },
  },
  rules: {
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-curly-spacing': [2, { when: 'always', spacing: { objectLiterals: 'never' } }],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-tag-spacing': [2, { beforeSelfClosing: 'always' }],
    'react/self-closing-comp': [2, { component: true, html: false }],
    'react/jsx-closing-bracket-location': [2, 'line-aligned'],
    'react/jsx-closing-tag-location': [2],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-handler-names': [2, { eventHandlerPrefix: 'handle', eventHandlerPropPrefix: 'on' }],
    'react/jsx-no-useless-fragment': [2],
  },
}
