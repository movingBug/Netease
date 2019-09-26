/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 19:43:48
 * @LastEditTime: 2019-09-26 09:14:10
 * @LastEditors: Please set LastEditors
 */

import request from '../../utils/request'

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
        setclass(obj:any, a:any) {
            obj.leftlist = a.leftlist;
            obj.product = a.product;
        },
        setproduct(old:any, newval:any) {
            old.product = newval.product;
        },
        setlist(old:any, newval:any) {
            old.list = newval.list;
            old.arr = newval.arr;
        },
        setgoods(old:any, newval:any) {
            old.goods = newval.goods;
        },
        setdatail(old:any, newval:any) {
            old.gooddetail = newval.gooddetail;
        },
        sethotlist(old:any, newval:any) {
            old.hotlist = newval.hotlist;
            old.historylist = newval.historylist;
        },
        settitle(old:any, newval:any) {
            old.title = newval.title;
        },
        setsearchlist(old:any, newval:any) {
            old.searchlist = newval.list;
        }
    }


  const actions = {
        getclassify(context:any) {
            request.get('/catalog/index').then((res) => {
                if (res.data.errno === 0) {
                    context.commit('setclass', { leftlist: res.data.data.categoryList, product: res.data.data.currentCategory })
                }
            })
        },
        getanother(context:any, id:any) {
            request.get('/catalog/current', {
                params: { id }
            }).then(res => {
                if (res.status === 200) {
                    context.commit('setproduct', { product: res.data.data.currentCategory });
                }

            })
        },
        getclass(context:any, id:any) {
            request.get('/goods/category', {
                params: { id }
            }).then(res => {
                if (res.data.errno === 0) {
                    let arr:any = []
                    res.data.data.brotherCategory.map((item:any) => {
                        arr.push({ 'label': item.name, id: item.id });
                    })

                    context.commit('setlist', { list: res.data.data.brotherCategory, arr })
                }
            })
        },
        getgoods(context:any, id:any) {
            request.get('/goods/list', {
                params: {
                    categoryId: id,
                    page: 1,
                    size: 10
                }
            }).then(res => {

                if (res.data.errno === 0) {

                    context.commit('setgoods', { goods: res.data.data.goodsList })
                }
            })
        },
        getgoodsdetail(context:any, id:any) {
            request.get('/goods/detail', {
                params: {
                    id,

                }
            }).then(res => {

                if (res.data.errno === 0) {
                    console.log(res.data.data);
                    context.commit('setdatail', { gooddetail: res.data.data });
                }
            })
        },
        gethotsearch(context:any, val:any) {
            request.get('/search/index').then(res => {

                if (res.data.errno === 0) {
                    context.commit('sethotlist', { hotlist: res.data.data.hotKeywordList, historylist: res.data.data.historyKeywordList });
                }

            })
        },
        getfinddata(context:any, val:any) {
            request.get('/search/helper', {
                params: {
                    keyword: val
                }
            }).then(res => {

                if (res.data.errno === 0) {
                    val === '' ? context.commit('settitle', { title: '' }) : context.commit('settitle', { title: res.data.data[0] });
                }

            })
        },
        getindex(context:any, val:any) {
            request.get('/goods/list', {
                params: val
            }).then(res => {
                if (res.data.errno === 0) {

                    context.commit('setsearchlist', { list: res.data.data.data })
                }

            })
        },
        clearsearch(context:any) {
            context.commit('setsearchlist', { list: [] })
        }
    }

export default {
    state,
    mutations,
    actions
}