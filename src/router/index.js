import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "首頁"
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    meta: {
      title: "關於我"
    },
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "about" */ '@/views/404.vue'),
    meta: {
      title: "404"
    },
  },
  {
    path: '*',
    redirect: '/404',
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
