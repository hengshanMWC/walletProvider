import { getConfig } from "./config";
import { prefix } from "./wallet";

export const providerOnRequestType = `${prefix}onRequest`;

export const taskList = [];
let taskID = 0;
export function createTask(fn) {
  let resolve, reject;
  const id = ++taskID;
  const p = new Promise((_resolve, _reject) => {
    fn(id);
    resolve = _resolve;
    reject = _reject;
  });
  const task = {
    p,
    id,
    resolve,
    reject,
  };
  taskList.push(task);
  if (getConfig().debug) {
    console.log(`${prefix}createTask`, task);
  }
  return p;
}

export function executeTask(data) {
  const task = idToTask(data.id);
  if (getConfig().debug) {
    console.log(`${prefix}executeTask`, data, task);
  }
  if (task) {
    removeTask(data.id);
  } else {
    return;
  }
  if (data.status === "success") {
    task.resolve(data.data);
  } else {
    task.reject(data.data);
  }
}
export function idToTaskIndex(id) {
  return taskList.findIndex((task) => task.id === id);
}
export function idToTask(id) {
  return taskList[idToTaskIndex(id)];
}

export function removeTask(id) {
  const index = idToTaskIndex(id);
  if (index === -1) return;
  taskList.splice(index, 1);
}

export function onPostMessageRequest({ type, data }) {
  if (type === providerOnRequestType) {
    executeTask(data);
    return true;
  }
}
