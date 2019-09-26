/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-23 15:59:48
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-26 16:22:29
 */
import Vue from 'vue'
import Vuex from 'vuex';
import Logger from 'vuex/dist/logger'
import shopcar from './modules/shopcar';
import Index from "./modules/index"
import login from './modules/login';
import mine from './modules/mine';
import First from './modules/first';
import category from "./modules/category";
import brand from "./modules/brand";
import topic from "./modules/topic"

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        Index,
        login,
        First,
        mine,
        category,
        shopcar,
        brand,
        topic
    },
    plugins: [Logger()]
})

export default store;