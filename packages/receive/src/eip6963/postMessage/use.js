import { getConfig } from "../../config";
import { prefix } from "../../wallet";
import { onPostMessageProvider } from "..";
import { onProviderEvent } from "../../eip1193";
import { onPostMessageRequest } from "../../task";

export function handlePostMessageProvider(data) {
  const detail = data.data;
  let hit = onPostMessageProvider(detail);
  if (!hit) {
    hit = onPostMessageRequest(detail);
  }
  if (!hit) {
    hit = onProviderEvent(detail);
  }
  if (hit) {
    if (getConfig().debug) {
      console.log(`${prefix}handlePostMessageProvider`, data);
    }
  }
}
