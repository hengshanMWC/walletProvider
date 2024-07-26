import { send } from '../../base'
import { prefix } from '../../wallet'
import { packageWallet } from '../../eip1193'
import { emitProviderName, onProviderName } from '../dispatchEvent'
import { handlePostMessageProvider } from './use'

export const providerOnType = prefix + onProviderName
export const providerEmitType = prefix + emitProviderName

export const onPostMessageName = 'message'

export function onPostMessageProvider({ type, data }) {
  if (type === providerOnType) {
    const wallet = packageWallet(data)
    window.ethereum = wallet.provider
    window.dispatchEvent(new CustomEvent(onProviderName, { detail: wallet }))
    return true
  }
}

export function postMessageProvider() {
  closePostMessageProvider()
  window.addEventListener(onPostMessageName, handlePostMessageProvider)
  sendRequestProvider()
}

export function closePostMessageProvider() {
  window.removeEventListener(onPostMessageName, handlePostMessageProvider)
}

export function sendRequestProvider() {
  send(providerEmitType)
}
