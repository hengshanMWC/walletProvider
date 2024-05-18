export const wallets = [];
export const prefix = "WALLET_PROVIDER:";
export const localNameName = `${prefix}wallet.name`;
export const localRdnsName = `${prefix}wallet.rdns`;
export const localInfoName = `${prefix}wallet.info`;

export function getWallets() {
  return wallets;
}

export function getProviders() {
  return wallets.map((wallet) => wallet.provider);
}

export function getWallet(name) {
  return wallets.find((provider) => provider.info.name === name);
}
export function getProvider(name) {
  return getWallet(name)?.provider;
}
export function getCurrentWallet() {
  const name = localStorage.getItem(localNameName);
  if (name) {
    return getWallet(name);
  }
}
export function getCurrentProvider() {
  return getCurrentWallet()?.provider || window.ethereum;
}
export function setCurrentWallet(wallet) {
  localStorage.setItem(localNameName, wallet.info.name);
  localStorage.setItem(localRdnsName, wallet.info.rdns);
  localStorage.setItem(localInfoName, JSON.stringify(wallet.info));
}

export function cleanCurrentWallet() {
  localStorage.removeItem(localNameName);
  localStorage.removeItem(localRdnsName);
  localStorage.removeItem(localInfoName);
}
