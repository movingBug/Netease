/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 14:30:24
 * @LastEditTime: 2019-09-23 20:20:30
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
