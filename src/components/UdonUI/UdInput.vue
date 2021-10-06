<template>
  <div class="ud-input">
    <input
      v-model="modelValue"
      v-bind="$attrs"
      v-on="$listeners"
      @input="onInput"
      ref="input"
    >
  </div>
</template>

<script>
export default {
  name: 'UdInput',
  inheritAttrs: false,
  props: {
    value: null,
    center: Boolean // 是否置中
  },
  computed: {
    modelValue: {
      get(){ return this.value == null ? "" : this.value },
      set(val){ this.$emit('input', val) }
    },
  },
  mounted() {
    if(this.center) this.$refs.input.style.textAlign = 'center';
  },
  methods: {
    onInput() {
      this.$parent.$emit('validate'); // 通知FormItem校驗
    },
    focus() {
      this.$refs.input.focus();
    }
  }
}
</script>

<style lang="sass">
.ud-input
  input
    appearance: none
    width: $udWidth
    padding: $udPadding
    min-height: $udMinHeight
    font-size: $udFontSize
    color: $udColor
    border: $udBorder
    border-radius: $udBorderRadius
    background-color: $udBgColor
    transition: $udTransition
    &::placeholder
      color: $udPlaceholderColor
    &:focus
      outline: 0
      border: $udBorderFocus
    &:disabled
      background-color: $udBgColorDisabled
      cursor: not-allowed
</style>
