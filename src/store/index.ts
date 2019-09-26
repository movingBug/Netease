/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-23 15:59:48
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-24 09:03:18
 */
import Vue from 'vue'
import Vuex from 'vuex';
import Logger from 'vuex/dist/logger'

import login from './modules/login';
import mine from './modules/mine';
import First from './modules/first';
import category from "./modules/category";
import brand from "./modules/brand";
import topic from "./modules/topic"

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        login,
        First,
        mine,
        category,
        brand,
        topic
    },
    plugins: [Logger()]
})

export default store;