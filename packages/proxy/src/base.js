import { getConfig, setConfig } from './config'
import { prefix } from './wallet'
import { dispatchEventProvider, postMessageProvider } from './eip6963'

export function init(fn) {
  if (fn) {
    setConfig({
      handleChangeWallet: fn,
    })
  }
  dispatchEventProvider()
  postMessageProvider()
}

export function send(type, data, targetOrigin = getConfig().targetOrigin) {
  const message = {
    type,
    data,
  }
  const { getTargetPostMessage, debug } = getConfig()
  const target = getTargetPostMessage()
  if (debug) {
    console.log(`${prefix}send`, target, message, targetOrigin)
  }
  target?.postMessage?.(message, targetOrigin)
}
