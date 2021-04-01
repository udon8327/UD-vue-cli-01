<template>
  <div class="ud-switch">
    <label>
      <input 
        type="checkbox"
        v-model="modelValue"
        v-bind="$attrs"
      >
      <div class="switch-decorator">
        <div class="circle"></div>
      </div>
      <p><slot>開關</slot></p>
    </label>
  </div>
</template>

<script>
export default {
  name: 'UdSwitch',
  inheritAttrs: false,
  props: {
    value: { default: false }, // value值
  },
  computed: {
    modelValue: {
      get(){ return this.value },
      set(val){ this.$emit('input', val) }
    }
  },
}
</script>

<style scoped lang="sass">
</style>
