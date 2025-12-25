// #ifdef MP-WEIXIN
const _SYSTEM_SETTING = uni.getSystemSetting()
// #endif
const _DEVICE_INFO = uni.getDeviceInfo()
const WINDOW_INFO = uni.getWindowInfo()
const _APP_BASE_INFO = uni.getAppBaseInfo()

/**
 * 获取胶囊按钮信息
 * @returns 胶囊按钮信息
 */
function getCapsule() {
  // #ifdef MP
  let capsule = uni.getMenuButtonBoundingClientRect()
  if (!capsule) {
    capsule = {
      bottom: 56,
      height: 32,
      left: 278,
      right: 365,
      top: 24,
      width: 87,
    }
  }
  return capsule
  // #endif
}

/**
 * 获取导航栏高度
 * @returns 导航栏高度
 */
function getNavbar() {
  // #ifdef MP
  const capsule = getCapsule()
  return (capsule.top - WINDOW_INFO.statusBarHeight) * 2 + capsule.height
  // #endif
  // #ifndef MP
  // 其他平台使用 50px
  return 44
  // #endif
}

export function usePlatform() {
  // #ifdef MP
  const capsuleInfo = getCapsule()
  // #endif
  const navigationBarHeight = getNavbar()
  const topAreaHeight = navigationBarHeight + WINDOW_INFO.statusBarHeight
  return {
    // #ifdef MP
    capsuleInfo,
    // #endif
    navigationBarHeight,
    statusBarHeight: WINDOW_INFO.statusBarHeight,
    topAreaHeight,
  }
}
