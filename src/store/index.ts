/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-23 15:59:48
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-23 17:01:11
 */
import Vue from 'vue'
import Vuex from 'vuex';
import login from './login';

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        login
    }
})

export default store;