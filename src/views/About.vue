<template lang="pug">
.view-about
  ud-modal(v-model="isModalShow")
    img(src="@/assets/images/logo.png")
    h2 這是modal
    ud-button(@click="isModalShow = 0") OK
  h1 About
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
  components: {

  },
  computed: mapState({
    isModal() {
      return this.isModalShow + 2
    },
    ...mapState({
      user: state => state.user
    }),
  }),
  mounted() {
    console.log(this.formatNumber(this.getRandom(1000, 9999999)));
    this.udAlert({
      title: "錯誤!!",
      msg: "好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n好喔\n",
      onConfirm: () => console.log('確認'),
      onCancel: () => console.log('取消'),
      confirm: true,
      maskClose: true,
      btnClose: true
    })
      .then((val) => {
        this.udAlert("嗚哇啊啊\n啊啊啊<br>" + val);
      }).catch(err => {
        this.$toast.show({
          text: err,
          time: '2000',
          position: 'right'
        })
      });
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

<style lang="sass">
body
  // overflow: hidden
</style>