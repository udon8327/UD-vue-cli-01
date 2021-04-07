<template>
<transition name="loading">
  <div class="ud-loading" v-show="isShow" :class="{'theme-white': theme === 'white'}">
    <div class="modal-wrapper">
      <div class="modal-content">
        <div class="modal-header">
          <div v-if="iconType === 'css'" class="icon-css"></div>
          <i v-else-if="iconType === 'font'" class="icon-font" :class="iconFont"></i>
          <img v-else class="icon-img" :src="iconImg">
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
      isShow: false,
      fixed: false, // 是否固定body
      theme: "", // 戴入主題 [white]
      iconType: "css", // icon類型 [css:CSS, font:字型, img:圖片]
      iconFont: "fas fa-spinner fa-pulse", // 字型icon的class
      iconImg: "https://image.flaticon.com/icons/svg/553/553265.svg", // 圖片icon的路徑
      msg: "", // 載入訊息
    }
  },
  mounted() {
    this.isShow = true;
  },
  methods: {
    nl2br(val) {
      return nl2br(val);
    },
    destroy() {
      this.isShow = false;
      document.body.style.overflowY = 'auto';
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
