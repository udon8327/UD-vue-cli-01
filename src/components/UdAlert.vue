<template>
<transition name="fade">
  <div class="ud-alert" v-if="value" v-cloak>
    <div class="modal-wrapper" @click.self="maskCancel && $emit('input', 0)">
      <div class="modal-content">
        <div class="modal-close" v-if="hasCancel" @click="$emit('input', 0)">
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
            <ud-button @click="$emit('input', 0)">OK</ud-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'UdAlert',
  props: {
    title: { default: "警告標題" }, // 警告標題
    message: { default: "警告訊息" }, // 警告訊息
    value: { default: false }, // 開關值
    maskCancel: Boolean, // 遮罩關閉
    hasCancel: Boolean, // 按鈕關閉
  },
}
</script>

<style scoped lang="sass">
</style>
