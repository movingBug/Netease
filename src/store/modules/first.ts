/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-27 15:10:34
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-27 15:10:34
 */
import { getData, TabData, catalog,goodsList} from '../../services/index'

let state = {
  banner: [],
  brandList: [],
  categoryList: [],
  channel: [],
  hotGoodsList: [],
  newGoodsList: [],
  topicList: [],
  // data: JSON.parse(window.localStorage.getItem('data')),
  currentCategory: {},
  selectedId: 0
}

let mutations = {
  firstData (state: any, payload: any) {
    state.banner = payload.banner
    state.brandList = payload.brandList
    state.categoryList = payload.categoryList
    state.channel = payload.channel
    state.hotGoodsList = payload.hotGoodsList
    state.newGoodsList = payload.newGoodsList
    state.topicList = payload.topicList
  },
}

let actions = {
  getData ({ commit }: any, payload: any) {
    return new Promise(async (resolve, reject) => {
      await getData().then((res: any) => {
        commit('firstData', res.data)
        resolve()
      })
    })
  },



}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
