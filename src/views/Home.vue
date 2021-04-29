<template lang="pug">
.view-home
  ud-modal(v-model="isModalShow")
  h1 Home
  img(src='@/assets/images/logo.png' alt='')
  .test
  p {{ test }}
  img(v-for="img in imgList" :src="require(`@/assets/images/0${img}.jpg`)")
  p {{ user.name }}
  p {{ user.phone }}
  p {{ user.gender }}
  p {{ clicked }}
  ud-button(@click="isModalShow = 1") Modal
  ud-button(@click="onYes") Yes
  ud-button(@click="onNo") No
</template>

<script>
import { udAlert } from '@/udon-ui/ud-components.js'

export default {
  name: 'About',
  components: {

  },
  data() {
    return {
      test: process.env.VUE_APP_TEST,
      imgList: [1, 2, 3],
      isModalShow: 1,
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
    this.promise = new Promise((res, rej) => {
      this.res = res;
      this.rej = rej;
    })
    this.promise
      .then(res => udAlert(res))
      .catch(err => udAlert(err))
    this.udAxios.get('https://udon8327.synology.me/ajax/success.php')
      .then(res => console.log(res))
  },
  methods: {
    onYes() {
      this.res('Yessssss')
    },
    onNo() {
      this.rej('Noooooo')
    }
  },
}
</script>

<style lang="sass">
</style>
