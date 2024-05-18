import { send } from "../base";
import { removeList } from "../utils";
import { prefix } from "../wallet";
import { createTask } from "../task";
import { getConfig } from "../config";
import { eventFnList } from "./event";

export const providerRequestType = `${prefix}request`;

export function packageWallet(wallet) {
  return Object.freeze({
    info: wallet.info,
    provider: {
      ...wallet.provider,
      request: createRequest(wallet),
      ...createEvent(wallet),
    },
  });
}

export function createRequest(wallet) {
  return function request(args) {
    return createTask(function requestTask(id) {
      send(providerRequestType, {
        args,
        info: wallet.info,
        id,
      });
    });
  };
}

export function createEvent(wallet) {
  function on(name, fn) {
    const nameList = eventFnList[name];
    if (getConfig().debug) {
      console.log(`${prefix}createEvent`, name, wallet, nameList);
    }
    if (nameList) {
      const name = wallet.info.name;
      const list = nameList[name] ?? (nameList[name] = []);
      list.push(fn);
    }
  }
  function removeListener(name, fn) {
    const nameList = eventFnList[name];
    if (getConfig().debug) {
      console.log(`${prefix}removeListener`, name, wallet, nameList);
    }
    if (nameList) {
      const name = wallet.info.name;
      const list = nameList[name];
      if (list) {
        removeList(list, fn);
      }
    }
  }
  return {
    on,
    removeListener,
  };
}
