<template lang="pug">
.view-home
  ud-modal(v-model="isModalShow" mask-close btn-close layout)
    h1(v-for="item in 30") 啊{{ item }}啊
    ud-button(@click="isModalShow = 0")
  #nav
    router-link(to='/home') Home
    |  | 
    router-link(to='/about') About
  h1 Home
  //- ud-flex
  //-   ud-select(:options="options" v-model="store[0]" :group="store" :index="0" placeholder="1")
  //-   ud-select(:options="options" v-model="store[1]" :group="store" :index="1" placeholder="2")
  //-   ud-select(:options="options" v-model="store[2]" :group="store" :index="2" placeholder="3")
  ud-flex
    ud-select(:options="options" v-model="store[2]" :group="store" :index="2" placeholder="3")
    ud-select(:options="options" v-model="store[1]" :group="store" :index="1" placeholder="2")
    ud-select(:options="options" v-model="store[0]" :group="store" :index="0" placeholder="1")
  //- ud-flex
  //-   ud-select(:options="options" v-model="store[0]" :group="store" :index="0" placeholder="1")
  //-   ud-select(:options="options" v-model="store[1]" :group="store" :index="1" placeholder="2")
  //-   ud-select(:options="options" v-model="store[2]" :group="store" :index="2" placeholder="3")
    //- ud-select(:options="options" v-model="store[3]" :group="store" :index="3" placeholder="4")
  //- ud-ratio(:src="`${baseUrl}01.jpg`")
  h1 {{ image }}
  //- ud-ratio(:src="image" bg-size="contain")
  img(src='@/assets/img/logo.png' alt='')
  //- ud-ratio(:src="require('@/assets/img/11.jpg')" bg-size="cover" radius="50%" style="width: 100px; margin: 15px auto")
  ud-input(v-model.trim="username" placeholder="username" disabled)
  ud-input(v-model.trim="password" placeholder="password")
  ud-textarea(v-model.trim="password" placeholder="password")
  ud-button#login(@click="login" plain) 登入
  .test
  //- img(v-for="img in imgList" :src="require(`@/assets/img/0${img}.jpg`)")
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
      baseUrl: process.env.VUE_APP_PUBLIC_PATH,
      publicUrl: process.env.VUE_APP_PUBLIC_URL,
      image: require('@/assets/img/sato.jpg'),
      imgList: [1, 2, 3],
      isModalShow: 0,
      loading: false,
      datas: [],
      username: "",
      password: "",
      options: [],
      store: ["", "", ""],
      store1: "",
      store2: "",
      store3: "",
      store4: "",
      test: "",
      value: ["", "", "", ""],
      birthday: ["", "", ""]
    }
  },
  computed: {
    storeGroup() {
      return [this.store1, this.store2, this.store3, this.store4]
    },
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
    this.udAxios.get('/test/select/3')
      .then(res => this.options = res.options);
    // this.udAlert({msg: '好喔', confirm: true})
    //   .then(() => {
    //     this.udAxios.get('/test/select/5')
    //       .then(res => this.options = res.options);
    //   })
    //   .catch(() => {
    //     this.udLoading.open();
    //     setTimeout(() => {
    //       this.udLoading.close();
    //     }, 1000);
    //   })
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

<style lang="sass" scoped>
#login
  background-color: aqua
.view-home
  h1
    color: $main
  img
    width: 30px
  .test
    height: 200px
    background: url('~@/assets/img/01.jpg') no-repeat top center
    background-size: cover
    display: flex
    justify-content: center
    backdrop-filter: blur(5px)
</style>
