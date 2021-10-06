<template>
  <div class="ud-radio" :class="{'is-flex': flex}">

    <label v-if="option">
      <input
        type="radio"
        v-model="modelValue"
        :value="option"
        v-bind="$attrs"
        v-on="$listeners"
        @change="onChange"
        ref="radio"
      >
      <div class="radio-decorator"
        :style="{'border-radius': radius}"
      ></div>
      <p v-if="combine">{{ option }}</p>
    </label>

    <label v-for="option in options" :key="option.value" v-if="options">
      <input
        type="radio"
        v-model="modelValue"
        :value="option.value"
        v-bind="$attrs"
        v-on="$listeners"
        @change="onChange"
        ref="radio"
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
    option: null, // 單選項[string, number]
    options: null, // 多選項[object]
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
    onChange() {
      this.$parent.$emit('validate'); // 通知FormItem校驗
      this.$emit('change', this.$refs.radio.value);
    }
  }
}
</script>

<style lang="sass">
.ud-radio
  &.is-flex
    display: flex
    flex-wrap: wrap
    align-items: center
    label
      margin: 0 12px 0 0
  label
    margin-bottom: 5px
    cursor: pointer
    display: flex
    align-items: center
    input
      position: absolute
      left: -999px
      opacity: 0
      pointer-events: none
      &:checked + .radio-decorator
        border-color: $main
        &:before
          background-color: $main
    .radio-decorator
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
        border-radius: 1em
        background-size: contain
        background-position: 100%
        width: 50%
        height: 50%
        box-sizing: border-box
        position: absolute
        left: 50%
        top: 50%
        transform: translate(-50%,-50%)
</style>
