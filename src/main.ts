/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-23 15:02:34
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-27 16:29:18
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
// 引入ly-tab
import LyTab from 'ly-tab'
// 引入轮播
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
// import "swip"
import "@/assets/font/iconfont.css";

Vue.use(VueAwesomeSwiper)


Vue.use(LyTab)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
