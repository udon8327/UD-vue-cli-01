<template lang="pug">
.view-about
  ud-modal(v-model="isModalShow")
    img(src="@/assets/images/logo.png")
    h2 這是modal
    ud-button(@click="isModalShow = 0") OK
  h1 About
  img(src="@/assets/images/logo.png")
  img(src="@/assets/images/small.png")
  ud-button.mb-1(@click="click") 好喔
  ud-button(@click="add") 增加
  h1 This is an about page
  p {{ user.name }}
  p {{ user.phone }}
  p {{ user.gender }}
  p {{ isModal }}
</template>

<script>
import { mapState } from 'vuex'
import { getRandom } from '@/utils/ud-utils'

export default {
  name: 'About',
  data() {
    return {
      isModalShow: 0
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
    console.log(getRandom());
    console.log(this.formatNumber(this.getRandom(1000, 9999999)));
  },
  methods: {
    click() {
      this.isModalShow = 1;
    },
    add() {
      this.$store.commit('addData');
    }
  },
}
</script>

<style lang="sass" scoped>
</style>