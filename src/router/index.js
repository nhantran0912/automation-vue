import Vue from 'vue'
import Router from 'vue-router'

import $user from '@/services/user'
import $notify from '@/services/notification'
import $seo from '@/services/seo'

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
      component: login,
      meta: $seo.index
    },
    {
      path: '/bat-khien-bao-ve-avatar-facebook/',
      name: 'profile-guard',
      component: () => import('@/components/posts/profile-guard.vue'),
      meta: $seo.index
    },
    {
      path: '/',
      component: () => import('@/components/layout/user-info.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/components/home/dashboard.vue'),
          meta: $seo.index
        },
        {
          path: '/auto-request',
          name: 'auto-request',
          component: () => import('@/components/auto-request/auto-request.vue'),
          meta: $seo.index
        },
        {
          path: '/auto-like',
          name: 'auto-like',
          component: () => import('@/components/auto-like/auto-like.vue'),
          meta: $seo.index
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
  if ($user.logged === false && ['login', 'profile-guard'].indexOf(to.name) === -1) {
    $notify.error('Đăng nhập để tiếp tục...')
    next('/')
  }
  else if ($user.logged === true && ['login', 'profile-guard'].indexOf(to.name) > -1) {
    next('/home')
  }
  else {
    document.title = to.meta.title + ' | FBVN'
    document.head.querySelector('meta[name=description]').content = to.meta.description
    document.head.querySelector('meta[name=keywords]').content = to.meta.keywords
    document.head.querySelector('meta[property="og:title"]').content = to.meta['og:title']
    document.head.querySelector('meta[property="og:image"]').content = to.meta['og:image']
    document.head.querySelector('meta[property="og:url"]').content = to.meta['og:url']
    document.head.querySelector('meta[property="og:description"]').content = to.meta['og:description']
    document.head.querySelector('link[rel=canonical]').href = to.meta.canonical
    next()
  }
})

export default router