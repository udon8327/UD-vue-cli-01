<template>
  <transition name="fade">
    <div class="ud-modal" v-show="isShow" v-cloak>
      <div class="modal-wrapper" @click.self="onMaskClick">
        <div class="modal-content">
          <div class="modal-close" v-if="hasCancel" @click="isShow = 0">
            <i class="fas fa-times"></i>
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
              <ud-button @click="isShow = 0">OK</ud-button>
            </div>
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
    maskCancel: Boolean, // 遮罩關閉
    hasCancel: Boolean, // 按鈕關閉
  },
  computed: {
    isShow: {
      get(){ return this.value },
      set(val){ this.$emit('input', val) }
    }
  },
  methods: {
    onMaskClick() {
      if(this.maskCancel) this.isShow = 0;
    }
  },
}
</script>

<style lang="sass">
.ud-modal
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
