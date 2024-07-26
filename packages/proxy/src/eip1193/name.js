import { prefix } from '../wallet'

export const providerEventConnect = 'connect'
export const providerEventDisconnect = 'disconnect'
export const providerEventChainChanged = 'chainChanged'
export const providerEventAccountsChanged = 'accountsChanged'
export const providerEventMessage = 'message'
export const providerEventList = [
  providerEventConnect,
  providerEventDisconnect,
  providerEventChainChanged,
  providerEventAccountsChanged,
  providerEventMessage,
]
export const prefixProviderEventList = providerEventList.map(
  name => prefix + name,
)
