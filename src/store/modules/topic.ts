// topic
import { topic, comment, commentList, related } from '../../services/index'

let state = {
  topicData: {},
  commentList: [],
  commentItem: [],
  relate: []
}

let mutations = {
  topicFn (state: any, payload: any) {
    state.topicData = payload
  },

  commentFn (state: any, payload: any) {
    state.commentList = payload
  },

  commentListFn (state: any, payload: any) {
    state.commentItem = payload
  },

  relatedFn (state: any, payload: any) {
    console.log('payload-----',payload)
    state.relate = payload
  }
}

let actions = {
  async TopicData ({ commit }: any, payload: any) {
    const result = await topic(payload)
    console.log('topic---', result.data)
    commit('topicFn', result.data)
  },

  async comment ({ commit }: any, payload: any) {
    const result = await comment(payload)
    // console.log('commentFn---',result.data)
    commit('commentFn', result.data.data)
  },

  async commentList ({ commit }: any, payload: any) {
    const result = await commentList(payload)
    commit('commentListFn', result.data.data)
  },

  // related
  async Related ({ commit }: any, payload: any) {
    const result = await related(payload)
    console.log('Related-----', result.data)
    commit('relatedFn', result.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
