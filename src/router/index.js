import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/components/authentication/login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/components/home/dashboard.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
