import { getHasMobile } from '../utils'
import type { WalletInfo } from '../wallet'

export class WalletOKX implements WalletInfo {
  readonly name: string
  readonly hasLocal: boolean
  encodedUrl: string
  googleLink: string
  constructor() {
    this.name = 'okx'

    const dappUrl = encodeURIComponent(
      `${window.location.origin}/bind_wallet/${this.name}`,
    )
    const deepLink = `okx://wallet/dapp/url?dappUrl=${dappUrl}`
    this.encodedUrl = `https://www.okx.com/download?deeplink=${encodeURIComponent(
      deepLink,
    )}`
    this.googleLink =
      'https://chromewebstore.google.com/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge'

    const ua = navigator.userAgent
    this.hasLocal = /OKApp/i.test(ua)
  }

  detection() {
    return !(getHasMobile() && !this.hasLocal) || window.okxwallet
  }

  install() {
    if (getHasMobile()) {
      window.open(this.encodedUrl)
      // window.location.href = this.encodedUrl
    } else {
      window.open(this.googleLink)
      // window.location.href = this.googleLink
    }
  }
}

export const walletOKX = new WalletOKX()
export function hasInstallOKX() {
  const hasInstall = !walletOKX.detection()
  if (hasInstall) {
    walletOKX.install()
  }
  return hasInstall
}
