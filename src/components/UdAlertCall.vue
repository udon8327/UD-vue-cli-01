<template>
  <transition name="fade">
    <div class="ud-alert" v-if="isShow">
      <div class="modal-wrapper" @click.self="maskHandler">
        <div class="modal-content">
          <div class="modal-close" v-if="btnClose" @click="destroy">
            <i class="fas fa-times"></i>
          </div>
          <div class="modal-header" v-if="title">
            <p v-html="nl2br(title)"></p>
          </div>
          <div class="modal-body">
            <p v-html="nl2br(msg)"></p>
          </div>
          <div class="modal-footer">
            <ud-flex>
              <ud-button @click="cancelHandler" plain v-if="isConfirm">{{ cancelText }}</ud-button>
              <ud-button @click="confirmHandler">{{ confirmTextAfter }}</ud-button>
            </ud-flex>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { nl2br } from '@/utils/ud-utils'

export default {
  name: 'UdAlertCall',
  data() {
    return {
      isShow: false,
      isConfirm: false,
      maskClose: false, // 遮罩關閉
      btnClose: false, // 按鈕關閉
      title: "", // 警告標題
      msg: "網路通信錯誤，請稍候再試", // 警告訊息
      cancelText: "取消", // 取消鈕文字
      cancel: () => {}, // 取消鈕動作
      confirmText: "", // 確認鈕文字
      confirm: () => {}, // 確認鈕動作
    }
  },
  computed: {
    confirmTextAfter() {
      if(this.confirmText) return this.confirmText;
      return this.isConfirm ? "確定" : "OK";
    }
  },
  mounted() {
    this.isShow = true;
  },
  methods: {
    nl2br(val) {
      return nl2br(val);
    },
    confirmHandler() {
      if(typeof this.confirm === 'function') this.confirm();
      this.destroy();
    },
    cancelHandler() {
      if(typeof this.cancel === 'function') this.cancel();
      this.destroy();
    },
    maskHandler() {
      if(this.maskClose) this.destroy();
    },
    destroy() {
      this.isShow = false;
      setTimeout(() => {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      }, 200);
    },
  },
}
</script>

<style lang="sass">
.ud-alert
  position: fixed
  z-index: 120
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
    .modal-header
      p
        font-size: 18px
        margin-bottom: 15px
        font-weight: bold
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
      p
        text-align: center
        font-size: 16px
        margin-bottom: 20px
        color: $text2
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
</style>
