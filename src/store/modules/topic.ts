// topic
import { topic} from '../../services/index'

let state = {
   topicData:{},
//    branList:[],
   
}

let mutations = {
    topicFn(state:any,payload:any){
        console.log('result------',JSON.parse(JSON.stringify(payload)))
        state.topicData = payload
    },
    // banList(state:any,payload:any){
    //     // console.log('banList------',JSON.parse(JSON.stringify(payload)))
    //     state.branList = payload.data
    // }
}

let actions = {
  async TopicData ({ commit }: any, payload: any) {
    const result =await topic(payload);
    // console.log('topic---',result.data)
     commit('topicFn', result.data)
  },


}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
