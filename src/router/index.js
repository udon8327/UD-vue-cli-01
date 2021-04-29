import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home,
    components: {
      default: Home,
      notFound: () => import('@/views/404.vue'),
    },
    meta: {
      title: "首頁"
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: {
      title: "關於我"
    },
    children: [
      {
        path: 'me',
        components: {
          default: () => import('@/views/404.vue'),
          b: Home
        }
      }
    ]
  },
  {
    path: '/red',
    redirect: '/about',
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
  // mode: 'history',
  // scrollBehavior (to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // }
  routes,
})

export default router
