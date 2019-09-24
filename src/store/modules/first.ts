import { getData,TabData } from "../../services/index"

let state = {
  banner: [],
  brandList: [],
  categoryList: [],
  channel: [],
  hotGoodsList: [],
  newGoodsList: [],
  topicList: [],
  data:{}
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
  },

  InterData(state:any,payload:any) {
      console.log(JSON.parse(JSON.stringify(payload)),'payload----')
      state.data = payload
  },
  tabData(state:any,payload:any){
       console.log(payload)
  }
} 

let actions = {
  getData ({ commit }: any, payload: any) {
    return new Promise((resolve, reject) => {
        getData().then((res:any) => {
          commit("firstData", res.data)
          resolve()
        })
    })
  },
  TabData ({ commit }: any, payload: any) {
    return new Promise((resolve, reject) => {
        TabData(payload).then((res:any) => {
          commit("InterData", res.data)
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
