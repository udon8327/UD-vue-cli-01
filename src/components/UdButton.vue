<template>
  <button
    class="ud-button"
    @click="handleClick"
    ref="btn"
    :disabled="disabled || loading"
    :type="nativeType"
    :class="[
      type ? 'ud-button--' + type : '',
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-block': block,
      }
    ]"
  >
    <i class="fas fa-spinner fa-pulse" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'UdButton',
  props: {
    type: { default: 'default' }, // 類型
    icon: { default: '' }, // icon
    nativeType: { default: 'button' }, // 原始類型 (button, submit, reset)
    loading: Boolean, // 載入中
    disabled: Boolean, // 禁止點擊
    plain: Boolean, // 線條化
    round: Boolean, // 圓角
    circle: Boolean, // 圓型
    block: Boolean, // 塊狀
    throttle: Boolean // 函式節流
  },
  methods: {
    handleClick(evt) {
      if(this.throttle) return;
      this.$emit('click', evt);
    }
  },
  mounted() {
    if(!this.throttle) return;
    this.$refs.btn.addEventListener('click', throttle(
        (evt) => {this.$emit('click', evt)}
      )
    );
  },
}
</script>

<style scoped lang="sass">
</style>
