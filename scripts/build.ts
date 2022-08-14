import { execSync } from 'child_process'
import path from 'path'
import { remove } from 'fs-extra'
remove(path.resolve(__dirname, '../dist')).finally(() => {
  execSync('esno ./scripts/rollup.config.ts', { stdio: 'inherit' })
})
