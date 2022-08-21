import path from 'path'
import { remove } from 'fs-extra'
export function removeStructure() {
  return remove(path.resolve(__dirname, '../dist'))
}
