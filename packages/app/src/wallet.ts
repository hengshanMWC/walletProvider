export interface WalletInfo {
  name: string
  hasLocal: boolean
  detection: () => boolean
  install: () => void
}
