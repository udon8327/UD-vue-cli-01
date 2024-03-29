<template>
  <div class="ud-checkbox" :class="{'is-flex': flex}">
    <template v-if="option">
      <label>
        <input
          type="checkbox"
          v-model="modelValue"
          :value="option"
          v-bind="$attrs"
          v-on="$listeners"
          @change="onChange"
          ref="checkbox"
        >
        <div class="checkbox-decorator"></div>
        <p v-if="!noLabel"><slot>{{ option }}</slot></p>
      </label>
    </template>
    <template v-else>
      <label v-for="option in options" :key="option.value">
        <input
          type="checkbox"
          :value="option.value"
          v-model="modelValue"
          v-bind="$attrs"
          v-on="$listeners"
          @change="onChange"
          ref="checkbox"
        >
        <div class="checkbox-decorator"></div>
        <p v-if="!noLabel">{{ combine ? option.value : option.label }}</p>
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
    option: null, // 單選項
    options: null, // 多選項
    flex: Boolean, // 是否並排
    combine: Boolean, // 使用value做為label
    noLabel: Boolean, // 是否有label
  },
  computed: {
    modelValue: {
      get(){ return this.value },
      set(val){ this.$emit('input', val) }
    }
  },
  methods: {
    onChange() {
      this.$parent.$emit('validate'); // 通知FormItem校驗
      this.$emit('change', this.$refs.checkbox.value);
    }
  }
}
</script>

<style lang="sass">
.ud-checkbox
  &.is-flex
    display: flex
    flex-wrap: wrap
    align-items: center
    label
      margin: 0 12px 0 0
  label
    cursor: pointer
    display: flex
    align-items: center
    p
      font-size: 14px
    input
      position: absolute
      left: -999px
      opacity: 0
      pointer-events: none
      &:checked + .checkbox-decorator
        border-color: $main
        &:before
          background-color: $main
          mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M8.76,56.2c-6.38-6.34,3.26-16,9.64-9.69L38,65.88,80.56,23.29c6.38-6.38,16.07,3.32,9.69,9.69L42.84,80.37a6.83,6.83,0,0,1-9.65,0Z"/></svg>')
    .checkbox-decorator
      margin-right: 6px
      flex: 0 0 1em
      width: 1em
      height: 1em
      border-radius: 3px
      border: 1px solid #cecece
      position: relative
      cursor: pointer
      &::before
        content: ""
        display: block
        background-size: contain
        background-position: 100%
        width: 90%
        height: 90%
        box-sizing: border-box
        position: absolute
        left: 50%
        top: 50%
        transform: translate(-50%,-50%)
</style>
