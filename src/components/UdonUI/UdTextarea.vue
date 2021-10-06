<template>
  <div class="ud-textarea">
    <textarea
      type="text"
      v-model="modelValue"
      v-bind="$attrs"
      v-on="$listeners"
      @input="onInput"
      :rows="rows"
    >
    </textarea>
  </div>
</template>

<script>
export default {
  name: 'UdTextarea',
  inheritAttrs: false,
  props: {
    value: null,
    rows: {
      default: 4
    }
  },
  computed: {
    modelValue: {
      get(){ return this.value },
      set(val){ this.$emit('input', val) }
    }
  },
  methods: {
    onInput() {
      this.$parent.$emit('validate'); // 通知FormItem校驗
    }
  }
}
</script>

<style lang="sass">
.ud-textarea
  textarea
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
