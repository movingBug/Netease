/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-23 15:59:48
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-27 15:13:01
 */
import Vue from 'vue'
import Vuex from 'vuex';
import Logger from 'vuex/dist/logger'
import shopcar from './modules/shopcar';
import getGoods from "./modules/getGoods"
import login from './modules/login';
import mine from './modules/mine';
import First from './modules/first';
import category from "./modules/category";
import brand from "./modules/brand";
import topic from "./modules/topic"

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        getGoods,
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