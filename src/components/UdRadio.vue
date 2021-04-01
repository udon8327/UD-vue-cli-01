<template>
<div class="ud-radio" :class="{'is-flex': flex}">
  <label v-for="option in options" :key="option.value">
    <input
      type="radio"
      v-model="modelValue"
      :value="option.value"
      v-bind="$attrs"
      @change="onChange"
    >
    <div class="radio-decorator"
      :style="{'border-radius': radius}"
    ></div>
    <p>{{ combine ? option.value : option.label }}</p>
  </label>
</div>
</template>

<script>
export default {
  name: 'UdRadio',
  inheritAttrs: false,
  props: {
    value: null, // value值
    options: null, // 選項
    flex: Boolean, // 是否並排
    radius: { default: "1em" }, // 圓角
    combine: Boolean // 使用value做為label
  },
  computed: {
    modelValue: {
      get(){ return this.value },
      set(val){ this.$emit('input', val) }
    }
  },
  methods: {
    onChange: function(){
      this.$parent.$emit('validate'); // 通知FormItem校驗
    }
  },
}
</script>

<style scoped lang="sass">
</style>
