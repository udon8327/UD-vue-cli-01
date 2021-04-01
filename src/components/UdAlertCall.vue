<template>
<transition name="fade">
  <div class="ud-alert" v-if="isShow">
    <div class="modal-wrapper" @click.self="maskHandler">
      <div class="modal-content">
        <div class="modal-close" v-if="btnClose" @click="destroy">
          <i class="fas fa-times"></i>
        </div>
        <div class="modal-header" v-if="title || titleHtml">
          <ud-html :text="titleHtml" v-if="titleHtml"></ud-html>
          <p v-else>{{ title }}</p>
        </div>
        <div class="modal-body">
          <ud-html :text="msgHtml" v-if="msgHtml"></ud-html>
          <p v-else>{{ msg }}</p>
        </div>
        <div class="modal-footer">
          <ud-flex>
            <ud-button @click="cancelHandler" plain v-if="isConfirm">{{ cancelTxt }}</ud-button>
            <ud-button @click="confirmHandler">{{ confirmTxtAfter }}</ud-button>
          </ud-flex>
        </div>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'UdAlertCall',
  data() {
    return {
      isShow: false,
      isConfirm: false,
      maskClose: false, // 遮罩關閉
      btnClose: false, // 按鈕關閉
      title: "", // 警告標題
      titleHtml: "", // 警告標題HTML
      msg: "網路通信錯誤，請稍候再試", // 警告訊息
      msgHtml: "", // 警告訊息HTML
      cancelTxt: "取消", // 取消鈕文字
      cancel: () => {}, // 取消鈕動作
      confirmTxt: "", // 確認鈕文字
      confirm: () => {}, // 確認鈕動作
    }
  },
  computed: {
    confirmTxtAfter: function(){
      if(this.confirmTxt) return this.confirmTxt;
      return this.isConfirm ? "OK" : "確定";
    }
  },
  mounted() {
    this.isShow = true;
  },
  methods: {
    confirmHandler: function() {
      if(typeof this.confirm === 'function') this.confirm();
      this.destroy();
    },
    cancelHandler: function() {
      if(typeof this.cancel === 'function') this.cancel();
      this.destroy();
    },
    maskHandler: function() {
      if(this.maskClose) this.destroy();
    },
    destroy: function() {
      this.isShow = false;
      setTimeout(() => {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      }, 200);
    },
  },
}
</script>

<style scoped lang="sass">
</style>
