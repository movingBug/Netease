/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 19:43:48
 * @LastEditTime: 2019-09-26 09:14:10
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Vuex from 'vuex'
import request from '../utils/request'
import { readSync } from 'fs'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      leftlist:[],
      product:{},
      list:[],
      arr:[],
      goods:[],
      firstgood:[],
      gooddetail:{},
      hotlist:[],
      historylist:[],
      title:'',
      searchlist:[]
    },
    mutations: {
       setclass(obj,a){
           obj.leftlist=a.leftlist;
           obj.product=a.product;
       },
       setproduct(old,newval){
              old.product=newval.product;
       },
       setlist(old,newval){
        old.list=newval.list;
        old.arr=newval.arr;
       },
       setgoods(old,newval){
         old.goods=newval.goods;
       },
       setdatail(old,newval){
        old.gooddetail=newval.gooddetail;
       },
       sethotlist(old,newval){
           old.hotlist=newval.hotlist;
           old.historylist=newval.historylist;
       },
       settitle(old,newval){
        old.title=newval.title;
       },
       setsearchlist(old,newval){
          old.searchlist=newval.list;
       }
    },
    actions:{
         getclassify(context){
            request.get('/catalog/index').then((res)=>{
                if(res.data.errno===0){
                    context.commit('setclass',{leftlist:res.data.data.categoryList,product:res.data.data.currentCategory})
                }
            })
        },
        getanother(context,id){
           request.get('/catalog/current',{
               params:{id}
           }).then(res=>{
             if(res.status===200){
                 context.commit('setproduct',{product:res.data.data.currentCategory});
               }
               
           })
        },
        getclass(context,id){
          request.get('/goods/category',{
                params:{id}
            }).then(res=>{
                if(res.data.errno===0){
                    let arr=[]
                    res.data.data.brotherCategory.map(item=>{
                        arr.push({'label':item.name,id:item.id});
                     })
                   
                    context.commit('setlist',{list:res.data.data.brotherCategory,arr})
                 }
             })
        },
        getgoods(context,id){
            request.get('/goods/list',{
                params:{
                    categoryId:id,
                    page:1,
                    size:10
                }
            }).then(res=>{
                
                if(res.data.errno===0){
                   
                   context.commit('setgoods',{goods:res.data.data.goodsList})
                }
            })
        },
        getgoodsdetail(context,id){
            request.get('/goods/detail',{
                params:{
                    id,
                  
                }
            }).then(res=>{
               
                if(res.data.errno===0){
                    console.log(res.data.data);
                    context.commit('setdatail',{gooddetail:res.data.data});
                }
            })
        },
        gethotsearch(context,val){
            request.get('/search/index').then(res=>{
                
                if(res.data.errno===0){
                   context.commit('sethotlist',{hotlist:res.data.data.hotKeywordList,historylist:res.data.data.historyKeywordList});
                }
               
            })
        },
        getfinddata(context,val){
           request.get('/search/helper',{
               params:{
                keyword:val
               }
           }).then(res=>{
               
               if(res.data.errno===0){
                  val===''?context.commit('settitle',{title:''}):context.commit('settitle',{title:res.data.data[0]});
               }
               
           })
        },
        getindex(context,val){
            request.get('/goods/list',{
                params:val
            }).then(res=>{
                if(res.data.errno===0){
                 
                    context.commit('setsearchlist',{list:res.data.data.data})
                }
                
            })
        },
        clearsearch(context){
           context.commit('setsearchlist',{list:[]})
        }
    }
  })
  export default store;