<template lang="pug">
.view-about
  ud-modal(v-model="isModalShow")
    img(src="@/assets/images/logo.png")
    h2 這是modal
    ud-button(@click="isModalShow = 0") OK
  h1 About
  ud-input(placeholder="好喔" v-model="value" center)
  img(src="@/assets/images/logo.png")
  img(src="@/assets/images/small.png")
  ud-button.mb-1(@click="click") 好喔
  ud-button.mb-1(@click="add") 增加
  ud-button.mb-1(@click="test" throttle) 隨機數
  p {{ user.name }}
  p {{ user.phone }}
  p {{ user.gender }}
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
    })
  }),
  mounted() {
    console.log(this.formatNumber(this.getRandom(1000, 9999999)));
  },
  methods: {
    click() {
      this.isModalShow = 1;
    },
    add() {
      this.$store.commit('addData');
    },
    test() {
      console.log(this.getRandom());
    }
  },
}
</script>

<style lang="sass">
.ud-button
  span
    font-size: 20px !important
</style>