import { getConfig } from '../config'
import { getProvider, prefix } from '../wallet'
import {
  prefixProviderEventList,
  providerEventAccountsChanged,
  providerEventChainChanged,
  providerEventConnect,
  providerEventDisconnect,
  providerEventMessage,
} from './name'

export const eventFnList = {
  [providerEventConnect]: {
    // name: [{fn, wallet}]
  },
  [providerEventDisconnect]: {
    // name: [fn]
  },
  [providerEventChainChanged]: {
    // name: [fn]
  },
  [providerEventAccountsChanged]: {
    // name: [fn]
  },
  [providerEventMessage]: {
    // name: [fn]
  },
}
export function executeEventFn(name, { info, data }) {
  const nameList = eventFnList[name]
  if (getConfig().debug) {
    console.log(`${prefix}executeEventFn`, name, info, data, nameList)
  }
  if (nameList) {
    const list = nameList[info.name]
    if (list) {
      list.forEach(fn => {
        const provider = getProvider(info.name)
        fn.call(provider, data)
      })
    }
  }
}

export function onProviderEvent({ type, data }) {
  if (prefixProviderEventList.includes(type)) {
    executeEventFn(type.replace(prefix, ''), data)
    return true
  }
}
