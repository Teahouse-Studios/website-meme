import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '首页',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/404.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
