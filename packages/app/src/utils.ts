export function getHasMobile(): boolean {
  const ua = navigator.userAgent
  const isIOS = /iphone|ipad|ipod|ios/i.test(ua)
  const isAndroid = /android|XiaoMi|MiuiBrowser/i.test(ua)
  return isIOS || isAndroid
}
