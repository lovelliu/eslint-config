module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/strict',
    '@lovelliu/eslint-config-ts',
  ],
  settings: {
    react: {
      version: '>=17',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-curly-spacing': [2, { when: 'always', spacing: { objectLiterals: 'never' } }],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-max-props-per-line': [2, { maximum: { single: 3, multi: 1 } }],
    'react/jsx-tag-spacing': [2, { beforeSelfClosing: 'always' }],
    'react/self-closing-comp': [2, { component: true, html: false }],
    'react/jsx-closing-bracket-location': [2, 'line-aligned'],
    'react/jsx-closing-tag-location': [2],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-handler-names': [2, { eventHandlerPrefix: 'handle', eventHandlerPropPrefix: 'on' }],
    'react/jsx-no-useless-fragment': [2],
    'react/jsx-no-constructed-context-values': [2],
    'react/no-access-state-in-setstate': [2],
    'react/no-array-index-key': [2],
    'jsx-a11y/prefer-tag-over-role': [2, { roles: ['button'] }],
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],
  },
}
