<script lang="ts" setup>
const { navigationBarHeight } = usePlatform()

const route = useRoute()
const router = useRouter()

const title = computed(() => route.style?.navigationBarTitleText)

const rootStyle = computed(() => route?.baseNavbar?.rootStyle || {})
const titleStyle = computed(() => route?.baseNavbar?.titleStyle || {})
const iconColor = computed(() => route?.baseNavbar?.iconColor || '#000')
const iconSize = computed(() => route?.baseNavbar?.iconSize || '22px')

const canNavBack = computed(() => getCurrentPages().length > 1)

function clickNavBack() {
  router.back()
}
</script>

<script lang="ts">
export default {
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared',
  },
}
</script>

<template>
  <view :style="rootStyle" class="base-navbar">
    <BaseStatusbar />
    <view class="base-navbar-content" :style="{ height: `${navigationBarHeight}px` }">
      <view v-if="canNavBack" class="base-navbar-content__left" @click="clickNavBack">
        <wd-icon name="arrow-left" :size="iconSize" :color="iconColor" />
      </view>
      <view class="base-navbar-content__center">
        <view class="base-navbar-content__center-title" :style="titleStyle">
          {{ title }}
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.base-navbar {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  .base-navbar-content {
    position: relative;
    padding: 0 20rpx;
    font-size: 24rpx;
    .base-navbar-content__left {
      width: 120rpx;
      height: 100%;
      display: flex;
      align-items: center;
    }
    .base-navbar-content__center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      .base-navbar-content__center-title {
        font-size: 32rpx;
        color: #000
      }
    }
  }
}
</style>
