<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 16:25:47
 * @LastEditTime: 2019-09-29 07:54:06
 * @LastEditors: sueRimn
 -->
<template>
  <div class='goodsearch'>
     <div class="search"><span @click="back">返回</span><p><input type="text" placeholder="520礼包抢先" v-model="val" @keyup="(e)=>changeval(e)"></p><span @click="clearval">取消</span>
        <div v-show='title' @click="copy">{{title}}</div>
     </div>
     <div v-show="searchlist.length<=0">
       <div class='history' v-show='historyarr.length>0'>
          <h4>历史记录<span @click="clearhistory">删除</span></h4>
          <div><span v-for='(item,index) in historyarr' :key='index'  v-show='item'>{{item}}</span></div>
       </div>
       <div class='hot'>
         <h4>热门搜索</h4>
         <div class='hotlist'>
           <span :class='index===ind?"active":""' v-for='(item,index) in hotlist' :key='index' @click='()=>changeind(index)'>{{item.keyword}}</span>
         </div>
       </div>
     </div>
     <div class='likegood' v-show="searchlist.length>0">
       
       <p><span @click='findall' :class='indexs===1?"active":""'>综合</span><span @click="sortprice" :class='indexs===2?"active":""'>{{pricesort}}</span><span :class='indexs===3?"active":""' @click='selectclassify'>{{classify}}</span>
        <!-- <p></p> -->
       </p>
       <div>
 <div v-for='(item,index) in searchlist' :key='index'>
          <img v-lazy='item.list_pic_url'/>
          <p>{{item.name}}</p>
          <p :style="{color:'red'}">价格:{{item.retail_price}}</p>
        </div>
       </div>
      
     </div>
  </div>
</template>

<script lang="">
import Vue from 'vue'
import {mapState,mapActions} from 'vuex'
export default Vue.extend({
  name: 'Classify',
  data(){
   return({
     ind:0,
     val:'',
     historyarr:[],
     pricesort:'价格从大到小',
     classify:'全部分类',
     indexs:1,
     flag:false
   })
  },
  computed:{
     ...mapState({
         hotlist: state => state.getGoods.hotlist,
         title: state => state.getGoods.title,
         historylist: state => state.getGoods.historylist,
         searchlist: state => state.getGoods.searchlist,
     })
  },
  methods:{
      ...mapActions({
         gethotsearch: "getGoods/gethotsearch",
         getfinddata: "getGoods/getfinddata",
         getindex: "getGoods/getindex",
         clearsearch: "getGoods/clearsearch",
      }),
      changeval(e){
         if(!this.val){this.ind=0}
         this.getfinddata(this.val);
           
         if(e.keyCode===13 && this.val){
           let arr =localStorage.getItem('historylist') || []; 
            this.historyarr=arr.length ?JSON.parse(arr):[];
           if(this.historyarr.indexOf(this.val)===-1){
             this.historyarr.push(this.val);
            }
            this.val=this.val;
            localStorage.setItem('historylist',JSON.stringify(this.historyarr));
            this.getindex({keyword:this.val,page:1,size:100})
           
            this.getfinddata('');
         }
      },
      clearhistory(){
          this.historyarr=[]
          localStorage.removeItem('historylist');
      },
      findall(){
        this.indexs=1;
       this.getindex({keyword:this.val,page:1,size:100})
      },
      selectclassify(){
         this.indexs=3;
      },
      copy(){
        this.val=this.title;
        let arr =localStorage.getItem('historylist') || []; 
            this.historyarr=arr.length ?JSON.parse(arr):[];
           if(this.historyarr.indexOf(this.val)===-1){
             this.historyarr.push(this.val);
            }
        localStorage.setItem('historylist',JSON.stringify(this.historyarr))
        this.getfinddata('');
        this.getindex({keyword:this.val,page:1,size:100})
      },
      back(){
        this.$router.push('/home/classify')
      },
      changeind(i){
          this.ind=i;
          this.val=this.hotlist[i].keyword;
          let arr =localStorage.getItem('historylist') || []; 
          this.historyarr=arr.length ?JSON.parse(arr):[];
          if(this.historyarr.indexOf(this.val)===-1){
             this.historyarr.push(this.val);
          }
          this.getindex({keyword:this.val,page:1,size:100})
          localStorage.setItem('historylist',JSON.stringify(this.historyarr))
      },
      clearval(){
         this.val='';
         this.clearsearch();
      },
      //排序
      sortprice(){
        this.indexs=2;
        if(this.pricesort==='价格从大到小'){
          this.pricesort='价格从小到大';
          this.getindex({keyword:this.val,page:1,size:100,order:'asc',sort:'price'})
        }else{
           this.pricesort='价格从大到小';
           this.getindex({keyword:this.val,page:1,size:100,order:'desc',sort:'price'})
        }
      }
  },
  mounted(){
      this.gethotsearch();
       let arr =localStorage.getItem('historylist') || []; 
      this.historyarr=arr.length ?JSON.parse(arr):[];
      this.getfinddata('');
  }
  
})
</script>
<style  scoped>
   .goodsearch{
     width:100%;
     height:100%;
     display: flex;
     flex-direction:column;
   }
   .active{
     color:red;
   }
   .search{
     width:100%;
     height:.4rem;
     border-bottom:solid 1px #ccc;
     display: flex;
     padding:0 .2rem;
     flex-direction:space-around;
     align-items: center;
     position: relative;
   }
   .search>div{
     background:wheat;
     position: absolute;
     left:0;
     top:.4rem;
     width:100%;
     height:.4rem;
     line-height:.4rem;
   }
   .search>p{
     width:70%;
     height: .3rem;
     margin:.05rem .1rem;
    
    
   }
   .search>p input{
     width:100%;
     height:.3rem;
     border:0;
     padding-left:10%;
     line-height: .3rem;
     outline:0;
      background: #ccc;
       border-radius:.1rem;
   }
  
  .history{
     width:100%;
     height:auto;
     display: flex;
     flex-wrap:wrap;
  }
  .history h4{
    width:100%;
    height:.5rem;
     padding:0 .2rem;
     display: flex;
     line-height: .5rem;
     align-items: center;
     justify-content:space-between;
  }
  
  .history div{
    display: flex;
    flex-wrap:wrap;
   
  }
  .history  div span{
      
      padding:.02rem .05rem;
      border-radius:.03rem;
      border:solid 1px #ccc;
      margin:.05rem;
   }
  
    .hotlist{
     width:100%;
     height:auto;
     display: flex;
    
     flex-wrap:wrap;
   }
   .hotlist h4{
     line-height:.5rem;
   }
  .hotlist span{
      padding:.02rem .05rem;
      border-radius:.03rem;
      border:solid 1px #ccc;
      margin:.05rem;
   }
   .hotlist .active{
     border:solid 1px red;
     color:red;
   }
   .likegood{
     width:100%;
     flex:1;
     overflow-y:auto;
     display:flex;
     flex-direction:column;
     
   }
   .likegood>p{
     width:100%;
     height:.4rem;
     text-align: center;
    position: relative;
     border-bottom:solid 1px #ccc;
     display:flex;
     line-height:.4rem;
   }
   .likegood>p>span{
     flex:1;
   }
   .likegood>div{
     flex:1;
     display:flex;
     overflow-y:auto;
     flex-wrap:wrap;
     
   }
    .likegood>div div{
      width:50%;
    }
   .likegood>div div img{
     width:100%;
     height:auto;
     display:block;
   }
   .likegood>div div p{
     line-height:.4rem;
   }
</style>