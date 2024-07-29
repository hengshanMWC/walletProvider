let config = {
  debug: false,
  targetOrigin: '*',
  getTargetPostMessage() {
    return window.parent
  },
  onChangeWallet: null, // 收取钱包
  onSuccess: null, // 调接口成功
  onError: null, // 调接口失败
  onComplete: null, // 调接口完成
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
