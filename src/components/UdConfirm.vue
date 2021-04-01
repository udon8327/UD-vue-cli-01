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
            <ud-button plain @click="$emit('input', 0)">{{ cancelTxt }}</ud-button>
            <ud-button @click="$emit('confirm')">{{ confirmTxt }}</ud-button>
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
    cancelTxt: { default: "取消" }, // 取消鈕文字
    confirmTxt: { default: "確定" }, // 確定鈕文字
    maskCancel: Boolean, // 遮罩關閉
    hasCancel: Boolean, // 按鈕關閉
  },
}
</script>

<style scoped lang="sass">
</style>
