import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import liffLogin from '@/services/liff-login'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: "關於我",
      requiresAuth: true
    },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404'),
    meta: {
      title: "404 Not Found"
    }
  },
  {
    path: '*',
    redirect: '/404'
  },
]

const router = new VueRouter({
  mode: process.env.VUE_APP_ROUTER_MODE,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes,
})

router.beforeEach((to, from, next) => {
  if(!sessionStorage.getItem("lineUid")) {
    liffLogin.login().then(res => {
      console.log('res: ', res);
      store.commit('setProfile', res)
        .then(() => next());
    });
    return;
  }
  next();
})

router.afterEach((to, from) => {
  document.title = to.meta.title ? to.meta.title : process.env.VUE_APP_COMPANY_NAME;
})

export default router
