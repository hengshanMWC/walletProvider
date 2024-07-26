import { getConfig } from '../config'
import { prefix, wallets } from '../wallet'

export const onProviderName = 'eip6963:announceProvider'
export const emitProviderName = 'eip6963:requestProvider'

export function dispatchEventProvider() {
  closeDispatchEventProvider()
  window.addEventListener(onProviderName, handleDispatchEventProvider)
  window.dispatchEvent(new Event(emitProviderName))
}
export function closeDispatchEventProvider() {
  window.removeEventListener(onProviderName, handleDispatchEventProvider)
}
export function handleDispatchEventProvider(event) {
  if (getConfig().debug) {
    console.log(`${prefix}handleDispatchEventProvider`, event)
  }
  collectWallet(event.detail)
}

export function collectWallet(wallet) {
  const nameList = wallets.map(p => p.info.name)
  const name = wallet.info.name
  if (nameList.includes(name)) return
  wallets.push(wallet)
  getConfig()?.handleChangeWallet?.(wallet)
}
