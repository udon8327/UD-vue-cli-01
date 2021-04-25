<template>
  <transition name="fade">
    <div class="ud-confirm" v-if="value" v-cloak>
      <div class="modal-wrapper" @click.self="maskCancel && $emit('input', 0)">
        <div class="modal-content">
          <div class="modal-close" v-if="hasCancel" @click="$emit('input, 0')">
            <i class="fas fa-times"></i>
          </div>
          <div class="modal-header">
            <p>{{ title }}</p>
          </div>
          <div class="modal-body">
            <p>{{ message }}</p>
            <slot></slot>
          </div>
          <div class="modal-footer">
            <div class="button-area">
              <ud-button plain @click="$emit('input', 0)">{{ cancelText }}</ud-button>
              <ud-button @click="$emit('confirm')">{{ confirmText }}</ud-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'UdConfirm',
  props: {
    title: { default: "確認標題" }, // 確認標題
    message: { default: "確認訊息" }, // 確認訊息
    value: { default: false }, // 開關值
    cancelText: { default: "取消" }, // 取消鈕文字
    confirmText: { default: "確定" }, // 確定鈕文字
    maskCancel: Boolean, // 遮罩關閉
    hasCancel: Boolean, // 按鈕關閉
  },
}
</script>

<style lang="sass">
.ud-confirm
  position: fixed
  z-index: 100
  left: 0
  top: 0
  width: 100%
  height: 100%
  overflow: auto
  background-color: rgba(0,0,0,0.7)
  .modal-wrapper
    width: 100%
    height: 100%
    display: flex
    justify-content: center
    align-items: center
    .modal-content
      width: 90%
      max-width: 420px
      position: relative
      background-color: #fff
      max-height: 90%
      overflow-y: auto
      text-align: center
      padding: 15px
      box-shadow: 0px 3px 20px 0px rgba(0,0,0,0.3)
      .modal-close
        position: absolute
        padding: 10px 15px
        right: 0px
        top: 0px
        cursor: pointer
        &:hover
          i
            color: #333
        i
          transition: all 0.2s ease
          font-size: 18px
          color: #777
      p
        font-size: 16px
        margin-bottom: 20px
        color: $text2
        display: inline-block
</style>
