<template>
  <transition name="fade">
    <div class="ud-alert" v-if="isShow">
      <div class="modal-wrapper" @click.self="maskHandler">
        <div class="modal-content">
          <div class="modal-close" v-if="btnClose" @click="destroy">
            <i class="icon-close"></i>
          </div>
          <div class="modal-content-wrapper">
            <div class="modal-header" v-if="title">
              <p v-html="nl2br(title)"></p>
            </div>
            <div class="modal-body">
              <p v-html="nl2br(msg)"></p>
            </div>
            <div class="modal-footer">
              <ud-flex>
                <ud-button @click="cancelHandler" plain v-if="isConfirm">{{ cancelText }}</ud-button>
                <ud-button @click="confirmHandler">{{ confirmText }}</ud-button>
              </ud-flex>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { nl2br } from '@/utils/ud-utils'

export default {
  name: 'UdAlert',
  data() {
    return {
      isShow: false, // 是否顯示
      isConfirm: false, // 是否有取消鈕
      maskClose: false, // 遮罩關閉
      btnClose: false, // 按鈕關閉
      title: '', // 警告標題
      msg: "網路通信錯誤，請稍候再試", // 警告訊息
      cancelText: "取消", // 取消鈕文字
      cancel: () => {}, // 取消鈕動作
      confirmText: "確定", // 確認鈕文字
      confirm: () => {}, // 確認鈕動作
      resolve: '', // 保存resolve
      reject: '', // 保存reject
      promise: '', // 保存promise
    }
  },
  methods: {
    show() {
      this.isShow = true;
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      })
      return this.promise;
    },
    nl2br(val) {
      return nl2br(val);
    },
    confirmHandler() {
      this.confirm();
      this.resolve('confirm');
      this.destroy();
    },
    cancelHandler() {
      this.cancel();
      this.reject('cancel');
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
  right: 0
  bottom: 0
  width: 100%
  height: 100%
  overflow: auto
  background-color: rgba(0, 0, 0, 0.7)
  .modal-wrapper
    width: 100%
    height: 100%
    display: flex
    justify-content: center
    align-items: center
    overflow: auto
    .modal-content
      width: 90%
      max-width: 420px
      position: relative
      background-color: #fff
      // max-height: 90%
      text-align: center
      padding: 15px
      box-shadow: 0px 3px 20px 0px rgba(0,0,0,0.3)
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
          &:before,&:after
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
      .modal-content-wrapper
        overflow: hidden
        overflow-y: auto
        p
          text-align: center
          font-size: 16px
          margin-bottom: 20px
          color: #333
        .modal-header
          p
            font-size: 18px
            margin-bottom: 15px
            font-weight: bold
</style>
