<<<<<<< HEAD
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
=======
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
import 'swiper/dist/css/swiper.css'
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
>>>>>>> ea915a7699f844a2b4952ef6e0ba3008cd8a1203
