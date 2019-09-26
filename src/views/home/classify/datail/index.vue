<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 11:49:23
 * @LastEditTime: 2019-09-26 17:06:30
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div class='probox'>
        <p @click="back">返回</p>
      
<ly-tab
    v-model="selectedId"
    :items="arr"
    :options="options" 
    @change='()=>change()'
>
</ly-tab>

 <div class='product'>
     <!-- <p>{{arr[selectedId].label}}</p> -->
     <dl v-for='item in goods' :key='item.id' @click="()=>togooddatail(item.id)">
         <dt><img :src="item.list_pic_url" alt=""></dt>
         <dd>{{item.name}}</dd>
     </dl>
 </div>
    </div>
</template>
<script>
import Vue from 'vue'
import {mapState,mapMutations,mapActions} from 'vuex'
import LyTab from 'ly-tab';

Vue.use(LyTab)
export default Vue.extend({
    data(){
    return({
        selectedId:0,
        options: {
        activeColor: '#1d98bd'
       },
    })
    },
    computed:{
       ...mapState(['arr','goods','ind','id']),
    },
   
    methods:{ 
      ...mapActions(['getgoods','getgoodsdetail','setind','getclass']),
    change(){
        let id=this.arr[this.selectedId].id || this.$router.params.id;
         this.getgoods(id)
    },
      togooddatail(id){
        this.getgoodsdetail(id);
        this.setind(this.selectedId);
        this.$router.push('/home/product/'+id);
        
      },
      back(){
          this.$router.push('/home/classify');
      }
    },
    mounted(){
        this.getclass({id:this.$route.params.id,ind:0})
        this.getgoods(this.$route.params.id); 
        this.selectedId=this.$route.params.ind*1;
        if(!localStorage.getItem('detailid' && localStorage.getItem('detailid')!==this.$route.params.id))
        {
          localStorage.setItem('detailid',this.$route.params.id);
        }
    
    }
})
</script>
<style >
   .probox{
       width:100%;
       height:100%;
       display: flex;
       flex-direction:column;
   }
   .probox>p{
       height:.4rem;
       line-height:.4rem;
   }
   .probox h4{
     widows: 100%;
     height:0.4rem;
     text-align:center;
     line-height:.4rem;
     color:skyblue;
    }
   .probox .product{
       flex:1;
       display:flex;
        width:100%;
        overflow-y:auto;
        flex-wrap:wrap;
        height:auto;
    }
    .probox .product p{
        width:100%;
        height:.5rem;
        text-align: center;
        line-height:.5rem;
        color:skyblue;
    }
    .probox .product>dl{
        width:50%;
        
    }
    .probox .product>dl dt{
        width:80%;
        margin:0 auto;
    }
    .probox .product>dl dt img{
        display:block;
        width:100%;
        height:auto;
    }
</style>