<template lang="pug">
.home
  img(src='@/assets/images/logo.png' alt='')
  .test
  p {{ test }}
  img(v-for="img in imgList" :src="require(`@/assets/images/0${img}.jpg`)")
</template>

<script>
import axios from 'axios'
// import udAlert from '@/utils/ud-axios'

export default {
  name: 'About',
  components: {

  },
  data() {
    return {
      test: process.env.VUE_APP_TEST,
      imgList: [1, 2, 3, 4, 5]
    }
  },
  mounted() {
    this.axios.get('https://udon8327.synology.me/ajax/success.php')
      .then(res => console.log(res.data))
  },
  methods: {
    
  },
}
</script>

<style lang="sass">
img
  width: 30px
.test
  height: 200px
  background: url('~@/assets/images/01.jpg') no-repeat top center
  background-size: cover
  display: flex
  justify-content: center
  backdrop-filter: blur(5px)
</style>
