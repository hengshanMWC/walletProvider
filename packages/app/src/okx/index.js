export class WalletOKX {
  static name = 'okx'
  get dappUrl() {
    return encodeURIComponent(
      `${window.location.origin}/bind_wallet/${WalletOKX.name}`,
    )
  }

  get deepLink() {
    return `okx://wallet/dapp/url?dappUrl=${this.dappUrl}`
  }

  get encodedUrl() {
    return `https://www.okx.com/download?deeplink=${encodeURIComponent(
      this.deepLink,
    )}`
  }

  get googleLink() {
    return 'https://chromewebstore.google.com/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge'
  }

  detection() {
    const ua = navigator.userAgent
    const isIOS = /iphone|ipad|ipod|ios/i.test(ua)
    const isAndroid = /android|XiaoMi|MiuiBrowser/i.test(ua)
    const isMobile = isIOS || isAndroid
    const isOKApp = /OKApp/i.test(ua)

    if (isMobile && !isOKApp) {
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
  return walletOKX.detection()
}
