<template lang="pug">
.view-about
  ud-modal(v-model="isModalShow")
    img(src="@/assets/images/logo.png")
    h2 這是modal
    ud-button(@click="isModalShow = 0") OK
  h1 About
  img(src="@/assets/images/logo.png")
  img(src="@/assets/images/small.png")
  ud-button(@click="click") 好喔
  h1 This is an about page
</template>

<script>
import { getRandom } from '@/utils/ud-functions.js'
export default {
  name: 'About',
  data() {
    return {
      isModalShow: 0
    }
  },
  components: {

  },
  mounted() {
    console.log(this.formatNumber(this.getRandom(1000, 9999999)));
  },
  methods: {
    click() {
      this.isModalShow = 1;
    }
  },
}
</script>

<style lang="sass" scoped>
</style>