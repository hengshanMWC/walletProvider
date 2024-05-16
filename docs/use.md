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
const nameOKX = 'OKX Wallet'
const nameMetaMask = 'MetaMask'
function getOKX() {
  return getWallet(nameOKX)
}
function getMetaetamask() {
  return getWallet(nameMetaMask)
}

// 调起钱包
if (getMetaetamask()) {
  console.log('MetaMask已经安装')
  const wallet = getMetaetamask()
  const account = wallet.provider.request({ method: 'eth_requestAccounts' })
    .then(() => {
      // 设置为当前钱包，后续使用 getCurrentProvider 直接拿到该 wallet
      setCurrentWallet(wallet)
    })
}
else {
  window.open('https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn')
}

// 获取 account
const walletClient = createWalletClient({
  chain: mainnet,
  transport: custom(getCurrentProvider()),
})

walletClient.getAddresses()
  .then(account => console.log(account))
```