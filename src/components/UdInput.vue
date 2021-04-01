<template>
  <div class="ud-input">
    <input
      v-model="modelValue"
      v-bind="$attrs"
      @input="onInput"
    >
  </div>
</template>

<script>
export default {
  name: 'UdInput',
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
    onInput: function(){
      this.$parent.$emit('validate'); // 通知FormItem校驗
    }
  },
}
</script>

<style scoped lang="sass">
</style>
