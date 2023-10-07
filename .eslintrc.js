module.exports = {
  extends: [
    '@antfu/eslint-config-ts',
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/ban-types': 'off',
    'max-len': ['error', { code: 120 }],
    'no-fallthrough': 'off',
    'no-new-func': 0,
    'no-console': 'off',
    'n/prefer-global/process': 'off',
    'jsdoc/check-alignment': 'off',
  },
}
