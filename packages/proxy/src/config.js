let config = {
  debug: false,
  targetOrigin: '*',
  getTargetPostMessage() {
    return window.parent
  },
  handleChangeWallet: null,
}

export function getConfig() {
  return config
}
export function setConfig(c) {
  return (config = {
    ...config,
    ...c,
  })
}
