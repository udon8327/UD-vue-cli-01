<template>
  <div class="ud-ratio">
    <div class="ud-ratio-bg" :style="{
      backgroundImage: 'url(' + src + ')', 
      paddingBottom: height + '%', 
      borderRadius: radius,
      backgroundSize: bgSize
    }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UdInput',
  props: {
    src: { default: "https://i.imgur.com/s3w1Sm3.jpg" }, // 背景圖片
    height: { default: 100 }, // 高度比例
    radius: { default: '0px' }, // 圓角
    bgSize: { default: "cover" } // 背景尺寸 (cover, contain, 100%...等)
  },
}
</script>

<style lang="sass">
.ud-ratio
  .ud-ratio-bg
    overflow: hidden
    width: 100%
    padding-bottom: 100%
    height: 0
    background: url('https://i.imgur.com/s3w1Sm3.jpg') no-repeat center center
    background-size: cover
</style>
