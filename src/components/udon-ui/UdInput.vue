<template>
  <div class="ud-input">
    <input
      v-model="modelValue"
      v-bind="$attrs"
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
      get(){ return this.value },
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
    border-radius: 5px
    border: 1px solid #cecece
    font-size: 14px
    padding: 5px 10px
    width: 100%
    min-height: 40px
    box-sizing: border-box
    background-color: #fff
    transition: all 0.2s ease
    &::placeholder
      color: #aaa
    &:focus
      outline: 0
      border: 1px solid $main
    &:disabled
      background-color: #eee
      cursor: not-allowed
</style>
