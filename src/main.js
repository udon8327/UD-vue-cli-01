import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import udonUi from './components/udon-ui'
Vue.use(udonUi);

import Toast from './components/Toast';
Vue.use(Toast);

// 路由導航守衛
router.afterEach((to, from) => {
  document.title = to.meta.title ? to.meta.title : process.env.VUE_APP_COMPANY_NAME;
})

Vue.config.productionTip = false

window.vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
