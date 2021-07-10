import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

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
    path: '*',
    name: '404',
    component: () => import('@/views/404.vue'),
    meta: {
      title: "404 Not Found"
    },
  },
]

const router = new VueRouter({
  mode: process.env.VUE_APP_ROUTER_MODE,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes,
})

export default router
