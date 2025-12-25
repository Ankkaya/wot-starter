<script lang="ts" setup>
const { topAreaHeight } = usePlatform()
const route = useRoute()
const rootStyle = computed(() => route?.baseLayout?.rootStyle || {})
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
  <view :style="rootStyle" class="base-layout">
    <BaseNavbar />
    <view :style="{ paddingTop: `${topAreaHeight}px` }" />
    <slot />
  </view>
</template>

<style lang="scss" scoped>

</style>
