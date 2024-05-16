# Receive
## 简介
关于 `provider` 的接收与操作

## Api
### init
初始化 `eip6963` 用来获取 `provider`
#### 类型
```ts
type init = (fn?: Config['handleChangeWallet']) => void
```
#### 使用
```js
import { init } from '@/js/walletProvider'

init()
init((wallet) => {
  // eip6963 事件加入的 wallet
})
```

### getWallets
获取所有钱包
#### 类型
```ts
type getWallets = () => EIP6963ProviderDetail[]
```
#### 使用

```js
import { getWallets } from '@/js/walletProvider'

const wallets = getWallets()
```

### getProviders
获取所有 `provider`
#### 类型
```ts
type getProviders = () => EIP1193Provider[]
```
#### 使用

```js
import { getProviders } from '@/js/walletProvider'

const providers = getProviders()
```

### getWallet
获取指定额度 `wallet`
#### 类型
```ts
type getWallet = (name: EIP6963ProviderDetail['info']['name']) => EIP6963ProviderDetail
```
#### 使用

```js
import { getWallet } from '@/js/walletProvider'

const wallet = getWallet('MetaMask')
```

### getProvider
获取指定额度 `provider`
#### 类型
```ts
type getProvider = (name: EIP6963ProviderDetail['info']['name']) => EIP1193Provider
```
#### 使用

```js
import { getProvider } from '@/js/walletProvider'

const provider = getProvider('MetaMask')
```

### getCurrentWallet
获取当前 `wallet`
#### 类型
```ts
type getCurrentWallet = () => EIP6963ProviderDetail
```
#### 使用

```js
import { getCurrentWallet } from '@/js/walletProvider'

const wallet = getCurrentWallet()
```

### getCurrentProvider
获取当前 `provider`，默认 `window.ethereum`
#### 类型
```ts
type getCurrentProvider = () => EIP1193Provider
```
#### 使用

```js
import { getCurrentProvider } from '@/js/walletProvider'

const provider = getCurrentProvider()
```

### setCurrentWallet
设置当前 `wallet`
#### 类型
```ts
type setCurrentWallet = (wallet: EIP6963ProviderDetail) => void
```
#### 使用

```js
import { setCurrentWallet } from '@/js/walletProvider'

setCurrentWallet(wallet)
```

### cleanCurrentWallet
清除当前 `wallet`
#### 类型
```ts
type cleanCurrentWallet = () => void
```
#### 使用

```js
import { cleanCurrentWallet } from '@/js/walletProvider'

cleanCurrentWallet()
```

### getConfig
获取配置
#### 类型
```ts
interface TargetWindow {
  postMessage: Window['postMessage']
}
interface Config {
  debug: boolean // 是否开启 debug 日志，默认 false
  targetOrigin: string | WindowPostMessageOptions // postMessage 的 targetOrigin 默认 *
  getTargetPostMessage: () => TargetWindow // 调用 postMessage 的对象，默认返回 window.parent
  handleChangeWallet: null | ((wallet: EIP6963ProviderDetail) => void) // eip6963 事件加入的 wallet
}
type getConfig = () => Config
```
#### 使用

```js
import { getConfig } from '@/js/walletProvider'

const config = getConfig()
```

### setConfig
修改配置
#### 类型
```ts
type setConfig = (config: Partial<Config>) => Config
```
#### 使用

```js
import { setConfig } from '@/js/walletProvider'

setConfig({
  debug: true
})
```