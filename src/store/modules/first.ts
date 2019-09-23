import request from '../../utils/request'

let state = {
  banner: [],
  brandList: [],
  categoryList: [],
  channel: [],
  hotGoodsList: [],
  newGoodsList: [],
  topicList: []
}

let mutations = {
  firstData (state:any,payload:any) {
      console.log('payload',payload)
      state.banner = payload.banner
      state.brandList = payload.brandList
      state.categoryList = payload.categoryList
      state.hotGoodsList = payload.hotGoodsList
      state.newGoodsList = payload.newGoodsList
      state.topicList = payload.topicList
      state.banner = payload.banner
  }
} 

let actions = {
  getData ({ commit }: any, payload: any) {
    return new Promise((resolve, reject) => {
      request.get('/').then(res => {
        console.log('res---', res)
        commit('firstData',res.data)
        resolve()
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
