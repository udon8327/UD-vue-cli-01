<template lang="pug">
.view-about
  ud-modal(v-model="isModalShow")
    img(src="@/assets/images/logo.png")
    h2 這是modal
    ud-button(@click="isModalShow = 0") OK
  #nav
    router-link(to='/home') Home
    |  | 
    router-link(to='/about') About
    |  | 
    router-link(to='/input') Input
  h1 About
  p {{ total }}
  ud-button(name="udon" type="submit") 送出
  router-view
  ud-input(placeholder="好喔" v-model="value" center)
  router-view(name='b')
  img(src="@/assets/images/logo.png")
  img(src="@/assets/images/small.png")
  ud-button.mb-1(@click="click") 好喔
  ud-button.mb-1(@click="add") 增加
  ud-button.mb-1(@click="test" throttle) 隨機數
  ud-button.mb-1(@click="toHome") 去首頁
  h2 {{ $route.params.id }}, {{ $route.query.name }}
  p {{ user.name }}
  p {{ user.phone }}
  p {{ user.gender }}
  p {{ isModal }}
  p {{ isModal }}
  p {{ isModal }}
  p {{ isModal }}
  p {{ isModal }}
  p {{ isModal }}
  p {{ isModal }}
  p {{ isModal }}
  p {{ isModal }}
  p {{ isModal }}
  p {{ isModal }}
  p {{ isModal }}
  p {{ isModal }}
  p {{ isModal }}
  p {{ isModal }}
  p {{ isModal }}
  p {{ isModal }}
  p {{ isModal }}
  p {{ isModal }}
  p {{ isModal }}
  p {{ isModal }}
  p {{ isModal }}
  p {{ isModal }}
  p {{ isModal }}
  p {{ isModal }}
  p {{ isModal }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'About',
  data() {
    return {
      isModalShow: 0,
      value: "",
    }
  },
  computed: mapState({
    isModal() {
      return this.isModalShow + 2
    },
    total() {
      return this.$root.$data.total;
    },
    ...mapState({
      user: state => state.user
    }),
  }),
  mounted() {
    // console.log(this.formatNumber(this.getRandom(1000, 9999999)));
    // this.udLoading.open({msg: "載入中..."});
    // this.udAlert({
    //   title: "錯誤!!",
    //   msg: "好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n",
    //   onConfirm: () => console.log('確認'),
    //   onCancel: () => console.log('取消'),
    //   confirm: true,
    //   maskClose: true,
    //   btnClose: true
    // })
    //   .then((val) => {
    //     this.udAlert("嗚哇啊啊" + val);
    //   }).catch(err => {
    //     this.$toast.show({
    //       text: err,
    //       time: '2000',
    //       position: 'right'
    //     })
    //   });
  },
  destroyed() {
    // this.udLoading.close();
  },
  // computed: {
  //   userId() {
  //     return this.$route.params.id;
  //   }
  // },
  methods: {
    click() {
      this.isModalShow = 1;
    },
    add() {
      this.$store.commit('addData');
    },
    test() {
      console.log(this.getRandom());
    },
    toHome() {
      this.$router.push('/')
    }
  },
}
</script>

<style lang="sass" scoped>
  h1
    color: $sub1
  img
    width: 30px
</style>