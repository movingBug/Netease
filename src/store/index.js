/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 19:43:48
 * @LastEditTime: 2019-09-24 19:33:49
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Vuex from 'vuex'
import request from '../utils/request'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      leftlist:[],
      product:{},
      list:[],
      arr:[],
      goods:[],
      firstgood:[],
      gooddetail:{}
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
                    size:20
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
        }
        
    }
  })
  export default store;