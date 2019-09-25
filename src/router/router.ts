/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-23 15:02:34
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-24 21:30:42
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass:'active',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/login/index.vue')
    },
    {
      path: '/location',
      name: 'location',
      component: () => import('../views/home/my/location/index.vue')
    },
    {
      path: '/productDetails',
      name: 'productDetails',
      component: () => import('../views/home/my/star/details/index.vue')
    },
    {
      path: '/addLocation',
      name: 'addLocation',
      component: () => import('../views/home/my/addLocation/index.vue')
    },
    {
      path: '/star',
      name: 'star',
      component: () => import('../views/home/my/star/index.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home/index.vue'),
      children: [
        {
           path:"/home",
           redirect:"/home/first"
        },
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
        },
      ]
    }
  ]
})
