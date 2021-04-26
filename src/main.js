import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './udon-ui'

import Toast from './components/Toast';
Vue.use(Toast);

import '@/style/app.sass'

// 全局路由守衛
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
  if(to.meta.title) document.title = to.meta.title;
})

Vue.config.productionTip = false

window.vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
