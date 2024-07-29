import { getHasMobile } from '../utils'
import type { WalletInfo } from '../wallet'

export class WalletOKX implements WalletInfo {
  name: string
  dappUrl: string
  deepLink: string
  encodedUrl: string
  googleLink: string
  hasLocal: boolean
  constructor() {
    this.name = 'okx'

    this.dappUrl = encodeURIComponent(
      `${window.location.origin}/bind_wallet/${this.name}`,
    )
    this.deepLink = `okx://wallet/dapp/url?dappUrl=${this.dappUrl}`
    this.encodedUrl = `https://www.okx.com/download?deeplink=${encodeURIComponent(
      this.deepLink,
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
    if (getHasMobile() && !this.hasLocal) {
      window.open(this.encodedUrl)
      // window.location.href = this.encodedUrl
      return false
    } else if (!window.okxwallet) {
      window.open(this.googleLink)
      // window.location.href = this.googleLink
      return false
    } else {
      return true
    }
  }
}

export const walletOKX = new WalletOKX()

export function installOKX() {
  return walletOKX.install()
}
