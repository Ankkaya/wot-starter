<script setup lang="ts">
import type { CSSProperties } from 'vue'

interface EmptyListProps {
  emptyText?: string
  customStyle?: CSSProperties | string
}

const props = withDefaults(defineProps<EmptyListProps>(), {
  emptyText: '暂无数据',
  customStyle: () => ({} as CSSProperties | string),
})

const { emptyText, customStyle } = toRefs(props)
</script>

<template>
  <view class="empty-list" :style="[customStyle]">
    <image class="empty-icon" src="/static/empty.png" />
    <text class="empty-text">
      {{ emptyText }}
    </text>
  </view>
</template>

<style lang="scss" scoped>
.empty-list {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .empty-icon {
    width: 486rpx;
    height: 296rpx;
    margin-bottom: 20rpx;
  }

  .empty-text {
    font-size: 28rpx;
    color: #999;
    text-align: center;
    position: relative;
    top: -100rpx
  }
}
</style>
