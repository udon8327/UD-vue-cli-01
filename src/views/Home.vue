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
  p {{ user.name }}
  p {{ user.phone }}
  p {{ user.gender }}
  p {{ clicked }}
</template>

<script>
import { udAlert } from '@/utils/ud-components.js'

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
  computed: {
    user() {
      return this.$store.state.user;
    },
    clicked() {
      return this.$store.state.clicked;
    }
  },
  mounted() {
    udAlert({confirm: () => {
      this.udAlert({msg: "好喔"});
    }});
    // this.udAxios.get('https://udon8327.synology.me/ajax/1success.php')
    //   .then(res => console.log(res))
  },
  methods: {
    
  },
}
</script>

<style lang="sass">
</style>
