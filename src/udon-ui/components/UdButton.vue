<template>
  <button
    class="ud-button"
    @click="handleClick"
    :disabled="disabled || loading"
    :type="type"
    :class="{
      'is-disabled': disabled,
      'is-loading': loading,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
    }"
    :style="{
      'border-radius': radius,
      'width': width,
      'min-width': minWidth,
      'max-width': maxWidth,
    }"
  >
    <i class="fas fa-spinner fa-pulse" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span><slot>按鈕</slot></span>
  </button>
</template>

<script>
import { throttle } from '../ud-utils'

export default {
  name: 'UdButton',
  props: {
    icon: { default: '' }, // icon
    type: { default: 'button' }, // 原始類型 (button, submit, reset)
    radius: { default: '5px' }, // 圓角
    width: { default: '100%' }, // 寬度
    minWidth: { default: '0px' }, // 最小寬度
    maxWidth: { default: '100%' }, // 最大寬度
    loading: Boolean, // 載入中
    disabled: Boolean, // 禁止點擊
    plain: Boolean, // 線條化
    round: Boolean, // 圓角
    circle: Boolean, // 圓型
    throttle: Boolean // 函式節流
  },
  methods: {
    handleClick(evt) {
      if(this.throttle) return;
      this.$emit('click', evt);
    }
  },
  mounted() {
    if(!this.throttle) return;
    this.$el.addEventListener('click', throttle(
        (evt) => {this.$emit('click', evt)}
      )
    );
  },
}
</script>

<style lang="sass">
.ud-button
  background-color: $main
  border: 1px solid $main
  color: #fff
  padding: 10px
  cursor: pointer
  box-shadow: none
  white-space: nowrap
  appearance: none
  text-align: center
  outline: none !important
  transition: .2s
  position: relative
  span
    font-size: 16px
    line-height: 20px
  &:hover,&:focus
    opacity: 0.9
  &.is-plain
    background-color: #fff
    border: 1px solid $main
    color: $main
    &:hover,&:focus
      background-color: $main
      border: 1px solid $main
      color: #fff
  &.is-disabled
    background-color: #ccc
    border: 1px solid #aaa
    color: #888
    cursor: not-allowed
  &.is-round
    border-radius: 50px !important
  &.is-circle
    border-radius: 50% !important
    width: 40px !important
    height: 40px !important
</style>
