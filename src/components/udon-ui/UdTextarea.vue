<template>
  <div class="ud-textarea">
    <textarea
      type="text"
      v-model="modelValue"
      v-bind="$attrs"
      @input="onInput"
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
    border-radius: 5px
    border: 1px solid #cecece
    box-sizing: border-box
    background-color: #fff
    font-size: 14px
    padding: .75em
    width: 100%
    transition: border 0.2s ease
    &::placeholder
      color: #aaa
    &:focus
      outline: 0
      border: 1px solid $main
    &:disabled
      background-color: #eee
      cursor: not-allowed
</style>
