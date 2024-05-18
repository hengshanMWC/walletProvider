# 快速起步

## 示例
```js
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'
import { getCurrentProvider, getWallet, init, setConfig, setCurrentWallet } from '@/js/walletProvider'

setConfig({
  debug: true // 调试日志
})
// 初始化
init()

// 获取对应的钱包
const okxName = 'OKX Wallet'
const metaMaskName = 'MetaMask'
function getOKX() {
  return getWallet(okxName)
}
function getMetaMask() {
  return getWallet(metaMaskName)
}

// 调起钱包
const metaMaskWallet = getMetaMask()
if (metaMaskWallet) {
  console.log('MetaMask已经安装')
  const account = await metaMaskWallet.provider.request({ method: 'eth_requestAccounts' })
  if (account.length) {
      // 记录为当前使用钱包，后续调用 getCurrentProvider 直接拿到该 wallet
      setCurrentWallet(metaMaskWallet)
  }
}
else {
  window.open('https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn')
}

// 使用 viem 获取 account
function getWalletClient () {
  return createWalletClient({
    chain: mainnet,
    // getCurrentProvider 拿到当前钱包
    transport: custom(getCurrentProvider()),
  })
}


getWalletClient().getAddresses()
  .then(account => console.log(account))
```