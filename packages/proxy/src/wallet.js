export const wallets = []
export const prefix = 'WALLET_PROVIDER:'
export const localNameName = `${prefix}wallet.name`
export const localRdnsName = `${prefix}wallet.rdns`
export const localInfoName = `${prefix}wallet.info`

export function getWallets() {
  return wallets
}

export function getWallet(name) {
  return wallets.find(provider => provider.info.name === name)
}
export function getProvider(name) {
  return getWallet(name)?.provider
}
