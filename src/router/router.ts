import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/login/index.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home/index.vue'),
      children: [
        {
          path: '/home/first',
          name: 'first',
          component: () => import('../views/home/first/index.vue')
        },
        {
          path: '/home/special',
          name: 'special',
          component: () => import('../views/home/special/index.vue')
        },
        {
          path: '/topic/topicdetail/:id',
          name: 'topicdetail',
          component: () => import('../components/topicdetail/index.vue')
        },
        {
          path: '/topic/topiccomment/:id',
          name: 'topiccomment',
          component: () => import('../components/topiccomment/index.vue'),
        },
        {
          path: '/home/classify',
          name: 'classify',
          component: () => import('../views/home/classify/index.vue')
        },
        {
          path: '/home/shop',
          name: 'shop',
          component: () => import('../views/home/shop/index.vue')
        },
        {
          path: '/home/my',
          name: 'my',
          component: () => import('../views/home/my/index.vue')
        }
      ]
    }
  ]
})
