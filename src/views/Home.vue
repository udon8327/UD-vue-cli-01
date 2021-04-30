<template lang="pug">
.view-home
  ud-modal(v-model="isModalShow" mask-close btn-close layout)
    h1(v-for="item in 30") 啊{{ item }}啊
    ud-button(@click="isModalShow = 0")
  h1 Home
  img(src='@/assets/img/logo.png' alt='')
  .test
  img(v-for="img in imgList" :src="require(`@/assets/img/0${img}.jpg`)")
  p {{ user.name }}
  p {{ user.phone }}
  p {{ user.gender }}
  p {{ clicked }}
  ud-button.mb-1(@click="isModalShow = 1" :loading="loading" icon="fas fa-arrow-circle-left") Modal
  ud-button.mb-1(@click="isModalShow = 1" :loading="loading" round :image="require('@/assets/img/small.png')") Modal
  ud-button.mb-1(@click="random" throttle) Modal
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
      isModalShow: 0,
      loading: false,
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
    this.udAxios.get('https://udon8327.synology.me/ajax/success.php')
      .then(res => console.log(res))
  },
  methods: {
    onYes() {
      this.loading = true;
    },
    onNo() {
      this.loading = false;
    },
    random() {
      console.log(Math.random());
    }
  },
}
</script>

<style lang="sass">
</style>
