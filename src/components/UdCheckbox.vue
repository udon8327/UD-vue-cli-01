<template>
  <div class="ud-checkbox" :class="{'is-flex': flex}">
    <template v-if="typeof options === 'string'">
      <label>
        <input
          type="checkbox"
          v-model="modelValue"
          v-bind="$attrs"
          @change="onChange"
        >
        <div class="checkbox-decorator"></div>
        <p><slot>{{ options }}</slot></p>
      </label>
    </template>
    <template v-else>
      <label v-for="option in options" :key="option.value">
        <input
          type="checkbox"
          :value="option.value"
          v-model="modelValue"
          v-bind="$attrs"
          @change="onChange"
        >
        <div class="checkbox-decorator"></div>
        <p>{{ combine ? option.value : option.label }}</p>
      </label>
    </template>
  </div>
</template>

<script>
export default {
  name: 'UdCheckbox',
  inheritAttrs: false,
  props: {
    value: null, // value值 單個時綁定Boolean 多個時綁定Array
    options: null, // 選項
    flex: Boolean, // 是否並排
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
