/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-23 15:02:34
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-24 15:40:33
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
