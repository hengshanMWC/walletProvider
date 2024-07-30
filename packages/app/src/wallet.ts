export interface WalletInfo {
  readonly name: string
  readonly hasLocal: boolean
  detection: () => boolean
  install: () => void
}
