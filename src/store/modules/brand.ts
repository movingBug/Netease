import { brand,brandList } from '../../services/index'

let state = {
   brand:{},
   branList:[]
}

let mutations = {
    brandFn(state:any,payload:any){
        // console.log('result------',JSON.parse(JSON.stringify(payload)))
        state.brand = payload
    },
    banList(state:any,payload:any){
        // console.log('banList------',JSON.parse(JSON.stringify(payload)))
        state.branList = payload.data
    }
}

let actions = {
  async brandData ({ commit }: any, payload: any) {
    const result =await brand(payload);
     commit('brandFn', result.data.brand)
  },

  async brandList ({ commit }: any, payload: any) {
    const result =await brandList(payload);
     commit('banList', result.data)
  },

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
