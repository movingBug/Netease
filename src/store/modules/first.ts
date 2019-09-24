import { getData } from "../../services/index"

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
      state.banner = payload.banner
      state.brandList = payload.brandList
      state.categoryList = payload.categoryList
      state.channel = payload.channel
      state.hotGoodsList = payload.hotGoodsList
      state.newGoodsList = payload.newGoodsList
      state.topicList = payload.topicList
  }
} 

let actions = {
  getData ({ commit }: any, payload: any) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        getData().then((res:any) => {
          console.log("res-----", res.data)
          commit("firstData", res.data)
          resolve()
        })
      }, 1000);
      
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
