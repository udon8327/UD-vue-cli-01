<template>
  <div class="ud-button">
    <button
      @click="clickHandler"
      v-bind="$attrs"
      v-on="$listeners"
      :disabled="disabled || loading"
      :class="{
        'is-disabled': disabled || loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
      }"
    >
      <div class="button-wrapper">
        <span><slot>按鈕</slot></span>
        <div class="button-icon" v-if="loading || icon || image">
          <div class="icon-loading" v-if="loading"></div>
          <i :class="icon" v-if="icon && !loading"></i>
          <img :src="image" alt="" v-if="image && !loading">
        </div>
      </div>
    </button>
  </div>
</template>

<script>
import { throttle } from '@/utils/ud-utils'

export default {
  name: 'UdButton',
  inheritAttrs: false,
  props: {
    icon: { default: '' }, // CSS的icon
    image: { default: '' }, // 圖片的icon
    loading: Boolean, // 載入中
    disabled: Boolean, // 禁止點擊
    plain: Boolean, // 線條化
    round: Boolean, // 圓角
    circle: Boolean, // 圓型
    throttle: Boolean // 函式節流
  },
  methods: {
    clickHandler(evt) {
      if(this.throttle) return;
      this.$emit('click', evt);
    }
  },
  mounted() {
    if(!this.throttle) return;
    this.$el.addEventListener('click', throttle(
        evt => this.$emit('click', evt)
      )
    );
  }
}
</script>

<style lang="sass">
.ud-button
  button
    appearance: none
    width: 100%
    padding: 10px
    min-height: 40px
    color: $udBtnColor
    border: 1px solid $udBtnBgColor
    border-radius: $udBtnBorderRadius
    background-color: $udBtnBgColor
    transition: all 0.2s ease
    min-width: 0px
    max-width: 100%
    cursor: pointer
    box-shadow: none
    text-align: center
    outline: none !important
    position: relative
    .button-wrapper
      display: inline-flex
      justify-content: center
      align-items: center
      position: relative
      span
        font-size: 16px
      .button-icon
        position: absolute
        left: -32px
        top: 50%
        transform: translate(0%, -50%)
        display: flex
        justify-content: center
        align-items: center
        i
          font-size: 24px
        img
          width: 24px
          height: 24px
        .icon-loading
          border: 2px solid rgba(#fff, 0.2)
          border-top: 2px solid #fff
          border-radius: 50%
          width: 24px
          height: 24px
          animation: spin .5s linear infinite
          @keyframes spin
            0%
              transform: rotate(0deg)
            100% 
              transform: rotate(360deg)
    &:hover, &:focus
      opacity: 0.85
    &.is-plain
      background-color: #fff
      border: 1px solid $udBtnBgColor
      color: $udBtnBgColor
    &.is-disabled
      background-color: #ddd
      border: 1px solid #ccc
      color: #888
      cursor: not-allowed
    &.is-round
      border-radius: 50px
    &.is-circle
      border-radius: 50%
      width: 40px
      height: 40px
</style>
