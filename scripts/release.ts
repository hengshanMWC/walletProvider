import { execSync } from 'child_process'
import colors from 'colors'
console.log(`${colors.cyan.bold('release: start')} 🏗`);
(async function () {
  execSync('npm run test', { stdio: 'inherit' })
  execSync('npm run build', { stdio: 'inherit' })
  execSync('npm run version', { stdio: 'inherit' })
  execSync('npm run publish', { stdio: 'inherit' })
})()
console.log(`${colors.cyan.bold('release: success')} 🎉🎉🎉🎉🎊`)
