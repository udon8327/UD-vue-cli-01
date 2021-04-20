import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 自定義Axios
import udAxios from './utils/ud-axios'
Vue.use(udAxios)

// 組件註冊
import './utils/ud-components'

import MessageBox from './components/MessageBox';
Vue.use(MessageBox);

import Toast from './components/Toast';
Vue.use(Toast);

// 工具函式
import udUtils from './utils/ud-utils'
Vue.use(udUtils)

import '@/style/app.sass'

// 跳轉後回到頂端(Hash模式時)
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
})

Vue.config.productionTip = false

window.vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
