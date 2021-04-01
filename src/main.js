import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// // Axios
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios)

// // 全域組件
// import UdComponents from "./utils/ud-components"
// Vue.use(UdComponents)

// // 全域函式
// import UdFunctions from "./utils/ud-functions"
// Vue.use(UdFunctions)

// // 全域樣式
// import '@/assets/style/app.sass'

// 跳轉後回到頂端(Hash模式時)
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
