module.exports = {
  root: true,
  extends: [
    '@antfu/eslint-config-basic',
    '@abmao/eslint-config-basic',
    // 新增，必须放在最后面
    'plugin:prettier/recommended',
  ],
}
