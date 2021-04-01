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
    onInput: function(){
      this.$parent.$emit('validate'); // 通知FormItem校驗
    }
  },
}
</script>

<style scoped lang="sass">
</style>
