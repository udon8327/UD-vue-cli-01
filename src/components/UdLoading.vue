<template>
<transition name="loading">
  <div class="ud-loading" v-show="isShow" :class="{'theme-white': theme === 'white'}">
    <div class="modal-wrapper">
      <div class="modal-content">
        <div class="modal-header">
          <i :class="icon"></i>
        </div>
        <div class="modal-body">
          <ud-html :text="msgHtml" v-if="msgHtml"></ud-html>
          <p v-else>{{ msg }}</p>
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
  }
}
</script>

<style scoped lang="sass">
</style>
