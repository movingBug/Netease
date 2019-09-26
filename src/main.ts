/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-23 15:02:34
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-26 09:56:21
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'

// 引入轮播
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
// import "@/assets/font/iconfont.css";

Vue.use(VueAwesomeSwiper)

// 引入ly-tab
import LyTab from 'ly-tab'

Vue.use(LyTab)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
