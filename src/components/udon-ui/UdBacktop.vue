<template>
  <ud-button @click="scrollToTop">回最頂</ud-button>
</template>

<script>
import { scrollTo } from '@/utils/ud-utils'

export default {
  name: 'UdCaptcha',
  methods: {
    scrollToTop(){
      scrollTo();
    }
  },
}
</script>

<style lang="sass">
</style>
