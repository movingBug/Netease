import { goodsList, TabData,goodsItem } from '../../services/index'

let state = {
  data: {},
  goodList: [],
  selectedId: 1,
  itemText:{}
}

let mutations = {
  InterData (state: any, payload: any) {
    state.data = payload;
    state.selectedId = state.data.brotherCategory.findIndex(
      (item: any) => state.data.currentCategory.id === item.id
    )
  },

  // changeTab (state: any, payload: any) {
  //   console.log(payload,'pay---------------')


  //   console.log(state.data,'-----------------')
  // },

  goodsLists(state:any,payload:any){
      state.goodList = payload
  },

  // 详情页
  goodsItem(state:any,payload:any){
    console.log('goodsItem',JSON.parse(JSON.stringify(payload)))
      state.itemText = payload
  },
}

let actions = {
  async TabData ({ commit }: any, payload: any) {
    const result =await TabData(payload);
     commit('InterData', result.data)
  },

  // 获取每个商品的数据
  goodsList ({ commit }: any, payload: any) {
    return new Promise(async (resolve, reject) => {
      await goodsList(payload).then((res: any) => {
        console.log(res.data)
        commit('goodsLists',res.data.goodsList)
        resolve()
      })
    })
  },

  // 详情页 goodsItem
  goodsItem ({ commit }: any, payload: any) {
    return new Promise(async (resolve, reject) => {
      await goodsItem(payload).then((res: any) => {
        // console.log('goodsItem----',res.data)
        commit('goodsItem',res.data)
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
