import Vue from 'vue'
import Router from 'vue-router'

import $user from '@/services/user'
import $notify from '@/services/notification'
import login from '@/components/authentication/login.vue'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/',
      component: () => import('@/components/layout/user-info.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/components/home/dashboard.vue'),
          meta: {
            title: 'Trang Chủ'
          }
        },
        {
          path: '/auto-request',
          name: 'auto-request',
          component: () => import('@/components/auto-request/auto-request.vue'),
          meta: {
            title: 'Trang Chủ'
          }
        },
        {
          path: '/auto-like',
          name: 'auto-like',
          component: () => import('@/components/auto-like/auto-like.vue'),
          meta: {
            title: 'Trang Chủ'
          }
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if ($user.logged === false && ['login'].indexOf(to.name) === -1) {
    $notify.error('Đăng nhập để tiếp tục...')
    next(`/?redirect=${to.path}`)
  }
  else if ($user.logged === true && ['login'].indexOf(to.name) > -1) {
    next('/home')
  }
  else {
    // document.title = to.meta.title + ' | Geekly進捗管理ページ'
    next()
  }
})

export default router