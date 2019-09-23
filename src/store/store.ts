import Vue from 'vue'
import Vuex from 'vuex'

import Logger from 'vuex/dist/logger'

import First from './modules/first'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    First
  },
  plugins: [Logger()]
})
