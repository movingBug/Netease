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

  // // 首个的数据
  // CategoryFn (state: any, payload: any) {
  //   state.data = state.selectedId === 0 ? payload : state.data
    
  // },

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

  // 首个数据的获取
  // catalog ({ commit }: any, payload: any) {
  //   return new Promise(async (resolve, reject) => {
  //     await catalog().then((res: any) => {
  //       //  console.log('first----',res)
  //       commit('CategoryFn', res.data)
  //       resolve()
  //     })
  //   })
  // },



  // // 每一个的数据
  // getCurrent ({ commit }: any, payload: any) {
  //   return new Promise(async (resolve, reject) => {
  //     await current(payload).then((res: any) => {
  //       commit('currentFn', res.data)
  //       resolve()
  //     })
  //   })
  // },


}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
