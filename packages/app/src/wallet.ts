export interface WalletInfo {
  readonly name: string
  detection: () => boolean
  install: () => void
}
