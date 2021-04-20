<template lang="pug">
.view-home
  h1 Home
  img(src='@/assets/images/logo.png' alt='')
  .test
  //- .test
  //- .test
  //- .test
  //- .test
  //- .test
  //- .test
  p {{ test }}
  img(v-for="img in imgList" :src="require(`@/assets/images/0${img}.jpg`)")
  p {{ user.name }}
  p {{ user.phone }}
  p {{ user.gender }}
  p {{ clicked }}
</template>

<script>
import { udAlert } from '@/utils/ud-components.js'
import { udLoading } from '@/utils/ud-components.js'

export default {
  name: 'About',
  components: {

  },
  data() {
    return {
      test: process.env.VUE_APP_TEST,
      imgList: [1, 2, 3]
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
    this.$msgBox.showMsgBox({
        title: '提示',
        content: '确定要删除吗',
      }).then(async (val) => {
        console.log('确认')
        this.$toast.show({
          text: '复制成功',
          time: '2000',
          position: 'right'
        })
      }).catch(() => {
        console.log('取消')
      });
    // this.udLoading.open();
    // setTimeout(() => {
    //   udLoading.close();
    // }, 1000);
    // udAlert({confirm: () => {
    //   this.udAlert({msg: "好喔"});
    // }});
    this.udAxios.get('https://udon8327.synology.me/ajax/success.php')
      .then(res => console.log(res))
  },
  methods: {
    
  },
}
</script>

<style lang="sass">
</style>
