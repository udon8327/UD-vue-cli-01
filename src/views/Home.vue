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
  ud-button.mb-1(@click="random($event)" :loading="loading") Modal
  ud-button(@click="onYes") Yes
  ud-button(@click="onNo") No
  p {{ total }}
</template>

<script>
export default {
  name: 'Home',
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
    },
    total() {
      return this.$root.$data.total;
    }
  },
  mounted() {
    this.$root.$data.total = "啊哈哈";
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
    random(evt) {
      console.log(typeof evt, evt.target, Math.random());
    }
  },
}
</script>

<style lang="sass">
</style>
