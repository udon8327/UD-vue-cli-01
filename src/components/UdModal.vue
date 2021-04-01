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
  inheritAttrs: false,
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
    onMaskClick: function(){
      if(this.maskCancel) this.isShow = 0;
    }
  },
}
</script>

<style scoped lang="sass">
</style>
