<template lang="pug">
.view-home
  h1 Home
  img(src='@/assets/images/logo.png' alt='')
  .test
  //- .test
  //- .test
  //- .test
  //- .test
  //- .test
  //- .test
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
      imgList: [1, 2, 3]
    }
  },
  mounted() {
    axios.get('https://udon8327.synology.me/ajax/success.php')
      .then(res => console.log(res.data))
  },
  methods: {
    
  },
}
</script>

<style lang="sass">
</style>
