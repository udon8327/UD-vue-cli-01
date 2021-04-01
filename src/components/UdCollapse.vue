<template>
<div class="ud-collapse" :style="{'transition-duration': durationSecond}">
  <div class="ud-collapse-wrapper">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'UdCollapse',
  inheritAttrs: false,
  props: {
    value: {
      default: false
    },
    duration: {
      default: 0.2
    }
  },
  computed: {
    durationSecond: function(){
      return `${this.duration}s`
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(){
        this.$nextTick(() => {
          this.collapse();
        })
      }
    }
  },
  methods: {
    collapse: function(){
      let el = this.$el;
      if (this.value) {
        el.style.height = el.querySelector('.ud-collapse-wrapper').clientHeight + "px";
      } else {
        el.style.height = 0;
      }
    }
  },
}
</script>

<style scoped lang="sass">
</style>
