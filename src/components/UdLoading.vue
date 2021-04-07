<template>
  <transition name="loading">
    <div class="ud-loading" v-show="isShow" :class="{'theme-white': theme === 'white'}">
      <div class="modal-wrapper">
        <div class="modal-content">
          <div class="modal-header">
            <i :class="icon"></i>
          </div>
          <div class="modal-body">
            <p v-html="nl2br(msg)"></p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'UdLoading',
  data() {
    return {
      isShow: false
    }
  },
  props: {
    label:{ default: "載入中..." } // 載入中文字
  },
  methods: {
    nl2br(val) {
      return nl2br(val);
    },
  },
}
</script>

<style lang="sass">
.ud-loading
  position: fixed
  z-index: 140
  left: 0
  top: 0
  width: 100%
  height: 100%
  overflow: auto
  background-color: rgba(0,0,0,0.7)
  &.theme-white
    background-color: rgba(255,255,255,0.7)
    .modal-wrapper
      .modal-content
        .modal-header
          .icon-css
            border: 3px solid rgba(#000, 0.2)
            border-top: 3px solid #000
          i
            color: #666
        .modal-body
          p
            color: #666
  .modal-wrapper
    width: 100%
    height: 100%
    display: flex
    justify-content: center
    align-items: center
    .modal-content
      .modal-header
        text-align: center
        margin-bottom: 5px
        display: flex
        justify-content: center
        .icon-css
          border: 3px solid rgba(#fff, 0.2)
          border-top: 3px solid #fff
          border-radius: 50%
          width: 32px
          height: 32px
          animation: spin .5s linear infinite
          @keyframes spin
            0%
              transform: rotate(0deg)
            100% 
              transform: rotate(360deg)
        .icon-font
          font-size: 24px
          color: #999
        .icon-img
          max-width: 32px
          margin-bottom: 5px
          animation: spin 2s linear infinite
          @keyframes spin
            0%
              transform: rotate(0deg)
            100% 
              transform: rotate(360deg)
      .modal-body
        p
          font-size: 16px
          color: #999
</style>
