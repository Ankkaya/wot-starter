<script setup lang="ts">
interface ScrollContainerProps {
  scrollContainerHeight?: string | number
  scrollList?: any[]
  loadingStatus?: string
  loadingMoreStatus?: string
  refresherTriggered?: boolean
}

const props = withDefaults(defineProps<ScrollContainerProps>(), {
  scrollContainerHeight: 0,
  scrollList: () => [] as any[],
  loadingStatus: 'loading',
  loadingMoreStatus: 'more',
  refresherTriggered: false,
})

const emit = defineEmits<{
  (event: 'refresherRefresh'): void
  (event: 'scrollToLower'): void
}>()

function onRefresherRefresh() {
  emit('refresherRefresh')
}

function onScrollToLower() {
  emit('scrollToLower')
}
</script>

<template>
  <view class="scroll-container">
    <scroll-view
      :style="{
        height: props.scrollContainerHeight,
      }" class="scroll-view" scroll-y :refresher-enabled="true" :refresher-triggered="props.refresherTriggered"
      :lower-threshold="150" :refresher-threshold="45" refresher-default-style="black"
      refresher-background="#f8f8f8" @refresherrefresh="onRefresherRefresh" @scrolltolower="onScrollToLower"
    >
      <template v-if="props.scrollList.length > 0">
        <slot />
        <loading-more :status="props.loadingMoreStatus" />
      </template>
      <template v-if="props.scrollList.length === 0 && props.loadingStatus === 'normal'">
        <empty-list :custom-style="{ top: '100rpx !important', transform: 'translate(-50% ,0)' }" />
      </template>
    </scroll-view>
  </view>
</template>

<style lang="scss">
.scroll-container {
  ::-webkit-scrollbar {
    display: none;
  }
}
</style>
