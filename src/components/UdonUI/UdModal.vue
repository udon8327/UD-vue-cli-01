<template>
  <transition name="fade">
    <div class="ud-modal" v-show="isShow" @click.self="maskHandler">
      <div class="modal-wrapper" >
        <div class="modal-close" v-if="btnClose" @click="isShow = 0">
          <i class="icon-close"></i>
        </div>
        <div class="modal-header" v-if="!$slots.default">
          <p>{{ title }}</p>
        </div>
        <div class="modal-body">
          <p v-if="!$slots.default">{{ message }}</p>
          <slot></slot>
        </div>
        <div class="modal-footer" v-if="!$slots.default">
          <div class="button-area">
            <ud-button @click="isShow = 0">確認</ud-button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'UdModal',
  props: {
    title: { default: "通用標題" }, // 通用標題
    message: { default: "通用訊息" }, // 通用訊息
    value: { default: 0 }, // 開關值
    maskClose: Boolean, // 遮罩關閉
    btnClose: Boolean, // 按鈕關閉
  },
  computed: {
    isShow: {
      get(){ return this.value },
      set(val){ this.$emit('input', val) }
    }
  },
  methods: {
    maskHandler() {
      if(this.maskClose) this.isShow = 0;
    },
  }
}
</script>

<style lang="sass">
.ud-modal
  position: fixed
  z-index: 120
  left: 0
  top: 0
  right: 0
  bottom: 0
  width: 100%
  height: 100%
  background-color: rgba(0, 0, 0, 0.7)
  display: flex
  justify-content: center
  align-items: center
  overflow-x: hidden
  .modal-wrapper
    position: relative
    width: 90%
    max-width: 460px
    max-height: 88%
    background-color: #fff
    box-shadow: 0px 3px 20px 0px rgba(0, 0, 0, 0.3)
    text-align: center
    display: flex
    flex-direction: column
    .modal-close
      position: absolute
      width: 26px
      height: 26px
      right: 4px
      top: -32px
      cursor: pointer
      &:hover
        .icon-close
          opacity: 1
      .icon-close
        opacity: 0.75
        transition: all 0.2s ease
        &:before, &:after
          position: absolute
          left: 13px
          content: ''
          height: 26px
          width: 2px
          background-color: #fff
        &:before
          transform: rotate(45deg)
        &:after
          transform: rotate(-45deg)
    .modal-header
      flex: 0 0 auto
      padding: 15px
      p
        font-size: 18px
        font-weight: bold
    .modal-body
      flex: 1 1 auto
      padding: 15px
      overflow-y: auto
    .modal-footer
      flex: 0 0 auto
      padding: 15px
</style>
