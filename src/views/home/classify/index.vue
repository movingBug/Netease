<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 14:42:20
 * @LastEditTime: 2019-09-27 15:11:31
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class='classify'>
   
    <div class='search'>
       <p @click='search'>请输入你要搜索的商品名</p>
    </div>
    <div class="product">
      <div class="list" v-if="leftlist">
        <ul>
          <li v-for='(item,index) in leftlist' :key='item.id'  :class='index==ind?"active":""' @click="changeind(item.id,index)">
            {{item.name}}
          </li>
        </ul>
       
      </div>
      <div class="right">
       
          <div>
            <!-- 头部图片 -->
           <div class='headimg' v-if="product">
           <div><img :src="product.img_url" alt=""></div>
           </div>
           <!-- 标题 -->
            <h3>---{{product.name}}----</h3>
            <!-- 商品列表 -->
            <div class='allproduct' v-if="product">
                   <dl  v-for='(citem,index) in product.subCategoryList' :key='citem.id' @click='()=>todetail(citem.id,index)'>
                   <dt>
                     <img :src="citem.wap_banner_url" alt="">
                   </dt>
                   <dd>
                     <p>{{citem.name}}</p>
                   </dd>
                 </dl>
          </div>
         
        </div>
          
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import BScroll from 'better-scroll';
import {mapState,mapActions,mapMutations} from 'vuex'
export default Vue.extend({
  name: 'Classify',
  data: function(){
    return { 
      serchval:'',
      ind:localStorage.getItem('ind') || 0,
      flag:false
     }
  },
  components: {
     
  },
 
  computed:{
     ...mapState({
       leftlist:state=>state.getGoods.leftlist,
       product: state=>state.getGoods.product
     })
  },

  methods:{
    search(){
      this.$router.push('/search')
    },
   async todetail(id,ind){
       this.$store.commit("getGoods/setIDwithInd",{ind});
      this.$router.push(`/home/classify/detail/${id}`);
    },
    changeind(id,ind){
      this.ind=ind;
      this.flag=true;
      localStorage.setItem('id',id);
      localStorage.setItem('ind',ind);
     this.getGoodsRightlist();
    },
    getGoodsRightlist(){
        const id=localStorage.getItem('id');
      this.$store.dispatch("getGoods/getanother",{id})
    },
    getInitList(){
    this.$store.dispatch("getGoods/getclassify");
    // this.$store.dispatch("getGoods/getgoods");
    }
  },
  mounted(){
    this.getInitList();
     this.getGoodsRightlist();
   this.Bscroll = new BScroll('.right',{
       probeType:2,
       click:true
    })
    
  }

})
</script>
<style lang="scss">
  .classify{
    width:100%;
    height:100%;
   display:flex;
    flex-direction:column;
  }
  .search{
   width:100%;
    height:.5rem;
    border-bottom:solid 1px #ccc;
  }
  .search p{
    width:80%;
    height:0.3rem;
    background:rgba(0,0,0,.2);
    text-align:center;
    line-height:.3rem;
    border-radius:0.05rem;
    margin:.1rem 10%;
  }
  .product{
    flex:1;
    display:flex;
    overflow: hidden;
  }
  .product .list{
    width:1rem;
    height:100%;
    border-right:1px #ccc solid;
    overflow: hidden;
  }
  .product .list>ul{
    width:100%;
    height:auto;
  }
  .product .list>ul li{
    width:100%;
    height:.4rem;
    text-align:center;
    line-height:.4rem;
  }
  .product .list>ul>.active{
    color:skyblue;
    border-left:solid 2px skyblue;
  }
  .product .right{
    flex:1;
    overflow:hidden;
  }
  .product .right>div{
    width:100%;
   height:auto;
  }
  .product .right>div .headimg{
    width:100%;
    height:auto;
  }
  .product .right>div .headimg img{
    display:block;
    width:100%;
    height:auto;
  }
  .product .right>div h3{
    width:100%;
    height:0.5rem;
    text-align:center;
    line-height:.5rem;
    color:skyblue;
    }
 .product .right>div .allproduct{
    width:100%;
    height:auto;
    display:flex;
    flex-wrap:wrap
  }
  .product .right>div .allproduct dl{
    
    width:50%;
    height:auto;
  }
  .product .right>div .allproduct dl dt{
    width:80%;
    margin:0 auto;
  }
  .product .right>div .allproduct dl dt img{
    display:block;
    width:100%;
    height:auto;
  }
  .product .right>div .allproduct dl dd p{
    width:80%;
    text-align:center;
    line-height:.3rem;
  }
</style>
