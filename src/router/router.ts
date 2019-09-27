/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 14:46:00
 * @LastEditTime: 2019-09-27 19:12:31
 * @LastEditors: sueRimn
 */
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
          component: () => import('@/views/home/first/index.vue')
        },
        {
          path: '/home',
          name: 'first',
          component: () => import('@/views/home/first/index.vue')
        },
        {
          path: '/home/special',
          name: 'special',
          component: () => import('@/views/home/special/index.vue')
        },
        {
          path: '/home/classify',
          name: 'classify',
          component: () => import('../views/home/classify/index.vue'),
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
    },
    {
      path: '/categorys/:id',
      name: 'categorys',
      component: () => import('../views/categorys/index.vue'),
      children: []
    },
    {
      path: '/goods/:id',
      name: 'goods',
      component: () => import('../views/home/first/goods/index.vue')
    },
    {
      path: '/brandDetail/:id',
      name: 'brandDetail',
      component: () => import('../views/home/first/brandDetail/index.vue')
    },
    {
      path: '/topicDetail/:id',
      name: 'topicDetail',
      component: () => import('../views/home/first/topicDetail/index.vue')
    },
    {
      path: '/comment/:id',
      name: 'comment',
      component: () => import('../views/home/first/comment/index.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/search/index.vue')
    }, {
      path: '/home/classify/detail/:id/:ind',
      name: 'detail',
      component: () => import('../views/home/classify/datail/index.vue')
    }, {
      path: '/home/product/:id',
      name: 'product',
      component: () => import('../views/home/classify/datail/productdetail/index.vue')
    },
  ]
})
