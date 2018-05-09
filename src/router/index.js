import Vue from 'vue'
import Router from 'vue-router'

import login from '@/components/authentication/login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/components/home/dashboard.vue')
    },
    {
      path: '/auto-request',
      name: 'auto-request',
      component: () => import('@/components/auto-request/auto-request.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
