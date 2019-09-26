/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 19:43:48
 * @LastEditTime: 2019-09-26 09:14:10
 * @LastEditors: Please set LastEditors
 */

import {
  getclassify,
  getindex,
  getanother,
  getclass,
  getgoods,
  getgoodsdetail,
  gethotsearch,
  getfinddata
} from '../../services/index'

const state = {
  leftlist: [],
  product: {},
  list: [],
  arr: [],
  goods: [],
  firstgood: [],
  gooddetail: {},
  hotlist: [],
  historylist: [],
  title: '',
  searchlist: []
}
const mutations = {
  setclass (obj: any, a: any) {
    console.log('a--------', a)
    obj.leftlist = a.leftlist
    obj.product = a.product
  },
  setproduct (old: any, newval: any) {
    old.product = newval.product
  },
  setlist (old: any, newval: any) {
    old.list = newval.list
    old.arr = newval.arr
  },
  setgoods (old: any, newval: any) {
    old.goods = newval.goods
  },
  setdatail (old: any, newval: any) {
    old.gooddetail = newval.gooddetail
  },
  sethotlist (old: any, newval: any) {
    old.hotlist = newval.hotlist
    old.historylist = newval.historylist
  },
  settitle (old: any, newval: any) {
    old.title = newval.title
  },
  setsearchlist (old: any, newval: any) {
    old.searchlist = newval.list
  }
}

const actions = {
  async getclassify (context: any) {
    const result = await getclassify()
    context.commit('setclass', {
      leftlist: result.data.categoryList,
      product: result.data.currentCategory
    })
  },

  async getanother (context: any, id: any) {
    const result = await getanother(id)
    context.commit('setproduct', { product: result.data.currentCategory })
  },

  async getclass (context: any, id: any) {
    const result = await getclass(id)
    let arr: any = []
    result.data.brotherCategory.map((item: any) => {
      arr.push({ label: item.name, id: item.id })
    })
    context.commit('setlist', { list: result.data.brotherCategory, arr })
  },

  async getgoods (context: any, id: any) {
   
    const result = await getgoods(id)
    context.commit('setgoods', { goods: result.data.goodsList })

  },

  async getgoodsdetail (context: any, id: any) {
   
    const result = await getgoodsdetail(id)
    context.commit('setdatail', { gooddetail: result.data })

    // await getgoodsdetail(id).then(res => {
    //   if (res.data.errno === 0) {
    //     console.log(res.data.data)
    //     context.commit('setdatail', { gooddetail: res.data.data })
    //   }
    // })
  },
  async gethotsearch (context: any, val: any) {
   
    const result = await gethotsearch()
    context.commit('sethotlist', {
        hotlist: result.data.hotKeywordList,
        historylist: result.data.historyKeywordList
      })

  },
  async getfinddata (context: any, val: any) {
    const result = await getfinddata(val)
    val === ''
    ? context.commit('settitle', { title: '' })
    : context.commit('settitle', { title: result.data[0] })
    
  },
  async getindex (context: any, val: any) {
   
    const result = await getindex(val)
    context.commit('setsearchlist', { list: result.data.data })

  },
  clearsearch (context: any) {
    context.commit('setsearchlist', { list: [] })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
