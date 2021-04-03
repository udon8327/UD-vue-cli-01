<template>
  <div class="ud-select">
    <select 
      v-model="modelValue" 
      :data-placeholder-selected="modelValue.length === 0"
      v-bind="$attrs"
      @change="onChange"
    >
      <option value="" disabled selected>{{ placeholder }}</option>
      <option v-for="option in options" :value="option.value" :key="option.value">
        {{ combine ? option.value : option.label }}
      </option>
    </select>
    <!-- <img src="@/assets/images/icon_02.png"> -->
  </div>
</template>

<script>
export default {
  name: 'UdSelect',
  inheritAttrs: false,
  props: {
    value: null, // value值
    options: null, // 選項
    placeholder: { default: "請選擇一項" }, // 取代文字
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
