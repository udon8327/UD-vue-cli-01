<template>
<p class="ud-ellipsis" :style="{webkitLineClamp: maxLine}">
  <slot></slot>
</p>
</template>

<script>
export default {
  name: 'UdEllipsis',
  inheritAttrs: false,
  props: {
    maxLine: { default: 1, } // 指定省略行數
  },
}
</script>

<style scoped lang="sass">
</style>
