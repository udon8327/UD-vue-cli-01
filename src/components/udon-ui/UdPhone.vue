<template>
  <div class="ud-phone">
    <a :href="phoneHref">
      <slot>{{ number }}</slot>
    </a>
  </div>
</template>

<script>
export default {
  name: 'UdPhone',
  props: {
    number: { default: "0912345678" } // 電話號碼
  },
  computed: {
    phoneHref(){
      return `tel:${this.number}`
    }
  }
}
</script>

<style lang="sass">
.ud-phone
</style>
