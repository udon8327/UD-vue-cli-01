<template lang="pug">
.view-home
  ud-modal(v-model="isModalShow" mask-close btn-close layout)
    h1(v-for="item in 30") 啊{{ item }}啊
    ud-button(@click="isModalShow = 0")
  h1 Home
  img(:src="`${publicUrl}/01.jpg`")
  h1 {{ baseUrl }}
  h1 {{ image }}
  h1 {{ test }}
  ud-ratio(:src="image")
  el-select(v-model='test' placeholder='请选择')
    el-option(v-for='item in options' :key='item.value' :label='item.label' :value='item.value')
  img(src='@/assets/img/logo.png' alt='')
  ud-ratio(:src="require('@/assets/img/11.jpg')" bg-size="cover" radius="50%" style="width: 100px; margin: 15px auto")
  ud-input(v-model.trim="username" placeholder="username")
  ud-input(v-model.trim="password" placeholder="password")
  ud-button(@click="login") 登入
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
let CryptoJS = require("crypto-js");

export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      publicUrl: process.env.VUE_APP_PUBLIC_URL,
      image: 'https://imgur.com/zoDLCHc.jpg',
      test: process.env.VUE_APP_PROJECT_NAME,
      imgList: [1, 2, 3],
      isModalShow: 0,
      loading: false,
      datas: [],
      username: "",
      password: "",
      options: [
        { label: "AAA", value: "a" },
        { label: "BBB", value: "b" },
        { label: "CCC", value: "c" }
      ],
      test: ""
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
    // this.udAxios.post('http://localhost:3001/test', {
    //   name: "UDON",
    //   phone: "0929864747"
    // })
    //   .then(res => console.log(res));
    // this.udAxios.get('http://udon8327.synology.me:8327/api')
    //   .then(res => this.datas = res);
    // this.$root.$data.total = "啊哈哈";
    // this.udAxios.get('https://udon8327.synology.me/ajax/success.php')
    //   .then(res => console.log(res))
  },
  methods: {
    login() {
      this.udAxios.post('http://localhost:3001/login', {
        username: this.username,
        password: this.password
      }).then(res => this.udAlert(res));
    },
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
