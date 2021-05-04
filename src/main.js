import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import UdonUi from './udon-ui'
Vue.use(UdonUi);

import Toast from './components/Toast';
Vue.use(Toast);

import '@/style/app.sass'

// 路由導航守衛
router.afterEach((to, from) => {
  window.scrollTo(0, 0);
  if(to.meta.title) document.title = to.meta.title;
})

Vue.config.productionTip = false

window.vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
