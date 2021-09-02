<template lang="pug">
  #home
    ud-modal(v-model="isModalShow" mask-close btn-close layout)
      h1(v-for="item in 30") 啊{{ item }}啊
      ud-button(@click="isModalShow = 0")
    #nav
      router-link(to='/home') Home
      |  | 
      router-link(to='/about') About
    h1 Home
    ud-ratio(:src="pictureUrl" radius="50%")
    p {{ profile.displayName }}
    br
    p {{ profile.lineUid }}
    br
    p {{ profile.email }}
    br
    p {{ profile.accessToken }}
    ud-button(@click="logout") 登出
    br
    ud-button(@click="goto")
    h2 {{ utilsTest(3) }}
    h2 {{ utilsTest(13) }}
    h2 {{ utilsTest(null) }}
    h2 {{ utilsTest(undefined) }}
    img(src="@/assets/images/02.jpg")
    img(src="@/assets/images/03.jpg")
    ud-button(@click="copyText") 複製文字
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
    h1#copy {{ image }}
    //- ud-ratio(:src="image" bg-size="contain")
    //- ud-ratio(:src="require('@/assets/images/11.jpg')" bg-size="cover" radius="50%" style="width: 100px; margin: 15px auto")
    ud-input(v-model.trim="username" placeholder="username" disabled)
    ud-input(v-model.trim="password" placeholder="password")
    ud-textarea(v-model.trim="password" placeholder="password")
    ud-button#login(@click="login" plain) 登入
    .test
    //- img(v-for="img in imgList" :src="require(`@/assets/images/0${img}.jpg`)")
    p {{ user.name }}
    p {{ user.phone }}
    p {{ user.gender }}
    p {{ clicked }}
    ud-button.mb-1(@click="isModalShow = 1" :loading="loading" icon="fas fa-arrow-circle-left") Modal
    ud-button.mb-1(@click="isModalShow = 1" :loading="loading" round :image="require('@/assets/images/small.png')") Modal
    ud-button.mb-1(@click="random($event)" :loading="loading") Modal
    ud-button(@click="onYes") Yes
    ud-button(@click="onNo") No
    p {{ total }}
</template>

<script>
import { copyTextToClipboard } from '@/utils/ud-utils'
import { mapState } from 'vuex'
import liffLogin from '@/services/liff-login'

export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      baseUrl: process.env.VUE_APP_PUBLIC_PATH,
      publicUrl: process.env.VUE_APP_PUBLIC_URL,
      image: require('@/assets/images/sato.jpg'),
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
      birthday: ["", "", ""],
      lineUid: '',
      displayName: '',
      pictureUrl: '',
      email: '',
      accessToken: '',
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
    },
    ...mapState({
      profile: state => state.profile
    }),
  },
  mounted() {
    // liffLogin.login()
    //   .then(res => {
    //     this.lineUid = liffLogin.userId;
    //     this.displayName = liffLogin.displayName;
    //     this.pictureUrl = liffLogin.pictureUrl;
    //     this.email = liffLogin.email;
    //     this.accessToken = liffLogin.accessToken;
    //   })
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
    logout() {
      this.udAlert({msg: '確定登出?', confirm: true})
        .then(() => {
          liff.logout();
          location.reload();
        })
    },
    goto() {
      this.$router.push('about/test?id=udon')
    },
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
    },
    utilsTest(val) {
      return this.padStart(val);
    },
    copyText() {
      copyTextToClipboard('copy')
        .then(res => this.udAlert(`已複製\n${res}`))
    }
  },
}
</script>

<style lang="sass" scoped>
  #login
    background-color: aqua
  p
    word-break: break-all
  .ud-ratio
    max-width: 100px
    margin: 15px auto
  #home
    h1
      color: $main
    img
      width: 80px
    .test
      height: 200px
      background: url('~@/assets/images/01.jpg') no-repeat top center
      background-size: cover
      display: flex
      justify-content: center
      backdrop-filter: blur(5px)
</style>
