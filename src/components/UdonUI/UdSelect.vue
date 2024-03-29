<template>
  <div class="ud-select">
    <select 
      v-model="modelValue" 
      :data-placeholder-selected="modelValue.length === 0"
      v-bind="$attrs"
      v-on="$listeners"
      @change="onChange"
      ref="select"
    >
      <option value="" disabled selected>{{ placeholder }}</option>
      <option v-for="option in optionsArr" :value="option[valueBy]" :key="option[valueBy]" :disabled="option.disabled">
        {{ combine ? option[valueBy] : option[labelBy] }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'UdSelect',
  inheritAttrs: false,
  props: {
    value: { default: "" }, // value值
    options: { // 選項
      default: () => {
        return [
          { label: "", value: "", disabled: true }
        ]
      }
    },
    placeholder: { default: "請選擇一項" }, // 取代文字
    combine: Boolean, // 使用value做為label
    center: Boolean, // 是否置中
    group: { default: "" }, // 是否群組
    index: { default: 0 }, // 群組索引
    labelBy: { default: "label" }, // label替代值
    valueBy: { default: "value" }, // value替代值
    childrenBy: { default: "children" }, // children替代值
  },
  data() {
    return {
      groupWatch: []
    }
  },
  computed: {
    modelValue: {
      get(){ return this.value == null ? "" : this.value },
      set(val){ this.$emit('input', val) }
    },
    optionsArr() {
      this.groupWatch = [...this.group];
      let temp = this.options;
      if(this.index === 0) return temp;
      if(this.group[this.index - 1]) {
        for(let i = 0; i < this.index; i++) {
          temp = temp.find(option => option.value === this.group[i])[this.childrenBy];
        }
        return temp;
      }
      return [];
    }
  },
  watch: {
    groupWatch(newVal, oldVal) {
      let target;
      for(let i = 0; i < this.group.length; i++) {
        if(newVal[i] !== oldVal[i]) target = i;
      }
      if(this.index > target) this.$emit('input', "");
    }
  },
  mounted() {
    if(this.center) this.centerSelect();
    if(this.center) window.addEventListener("resize", this.centerSelect);
  },
  destroyed() {
    if(this.center) window.removeEventListener("resize", this.centerSelect);
  },
  methods: {
    onChange() {
      if(this.center) this.centerSelect();
      this.$parent.$emit('validate'); // 通知FormItem校驗
      this.$emit('change', this.$refs.select.value);
    },
    getTextWidth(text, target) {
      let el = document.createElement('span');
      let fontSize = window.getComputedStyle(target).fontSize || '14px';
      el.textContent = text;
      el.style.display = 'inline-block';
      el.style.fontSize = fontSize;
      document.body.appendChild(el);
      let elmWidth = el.offsetWidth;
      el.remove();
      return elmWidth;
    },
    centerSelect() {
      let el = this.$refs.select;
      let text = "";
      el.value ? text = this.options.find(item => item.value == el.value).label : text = this.placeholder;
      let emptySpace = el.offsetWidth - this.getTextWidth(text, el);
      el.style.textIndent = `${ ( emptySpace / 2 ) - 10 }px`;
    }
  }
}
</script>

<style lang="sass">
.ud-select
  position: relative
  &:before
    content: ""
    width: 0
    height: 0
    border-color: #cecece transparent transparent
    border-style: solid
    border-width: 4px 4px 0
    top: 50%
    margin-top: -2px
    right: 8px
    position: absolute
    z-index: 1
    pointer-events: none
  select
    appearance: none
    width: $udWidth
    padding: $udPadding
    min-height: $udMinHeight
    font-size: $udFontSize
    border: $udBorder
    border-radius: $udBorderRadius
    background-color: $udBgColor
    transition: $udTransition
    transition-property: border
    cursor: pointer
    option
      color: $udColor
    &:focus
      outline: 0
      border: $udBorderFocus
    &[data-placeholder-selected]
      color: $udPlaceholderColor
    &[multiple]
      option:nth-of-type(1)
        color: $udPlaceholderColor
</style>