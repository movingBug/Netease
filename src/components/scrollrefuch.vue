<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-27 10:46:48
<<<<<<< HEAD
 * @LastEditTime: 2019-09-27 10:58:21
 * @LastEditors: Please set LastEditors
 -->
<template>
       <div class='scrollref'>
               我是一个组件
       </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {mapState,mapActions} from 'vuex'
export default Vue.extend({
     props: ['postTitle'],
    data(){
        return({
            
        })
    },
    computed:{

    },
    methods:{
        ...mapActions([''])
    },
    mounted(){
        
    }
})
</script>
<style lang="stylus" scoped>

=======
 * @LastEditTime: 2019-09-27 21:18:49
 * @LastEditors: Please set LastEditors
 -->
<template>
<div class='scrref'>
    <div>
       <div class='top'>{{toptitle}}</div>
        <div class='scrollref'>
           <dl v-for='item in goods' :key='item.id' @click="()=>togooddatail(item.id)">
         <dt><img :src="item.list_pic_url" alt=""></dt>
         <dd>{{item.name}}</dd>
     </dl>
       </div>
       <div class='bottom' v-show='goods.length>0'>{{bottomtitle}}</div>
    </div>
    
</div>

</template>

<script lang="">
import BScroll from 'better-scroll'
import Vue from 'vue'
import {mapState,mapActions} from 'vuex'
export default Vue.extend({
     props:{
         id:[Number,String],
         page:{
             type:Number,
             default:1
         },
         size:{
             type:Number,
             default:10
         },
         data:Object,
     },
    data(){
        return({
            toptitle:'下拉刷新',
            bottomtitle:'上拉加载'
        })
    },
    computed:{
       ...mapState(['goods','count'])
    },
    watch:{
       
       id:function(old,newval){
     
         newval=newval?newval:old;
         this.getgoods({categoryId:old*1,page:1,size:10});
        
       }
    },
    methods:{
        ...mapActions(['getgoods','getgoodsdetail','setind']),
    scroll(e){
            const maxscroll=this.Bscroll.maxScrollY;
            if(e.y<maxscroll-50){
                console.log('到底了要加载更多');
                this.Bscroll.refresh();
            }else if(e.y>50){
                console.log('我要刷新了');
                
                this.Bscroll.refresh();
            }
           
    },
    togooddatail(id){
        this.getgoodsdetail(id);
        this.setind(this.selectedId);
        this.$router.push('/home/product/'+id);
        
      },
       
    },
    mounted(){
      
      if(this.BScroll){
          this.BScroll.refresh();
      }else{
         this.Bscroll=new BScroll('.scrref',{
            probeType:3,
            click:true,
            pullDownRefresh: {
               threshold:50,
               stop: 45
            },
            pullUpLoad: {
                threshold: 50,
                stop:45
            }
        })
        this.Bscroll.on('scroll',(e)=>{
            this.scroll(e);
        })
        
      }
        
       
    }
})
</script>
<style scoped>
    .scrref>div{
        width:100%;
        height:auto;
        position:relative;
    }
    .scrref>div .top{
        position:absolute;
        width:100%;
        height: .4rem;
        text-align: center;
        line-height:.4rem;
        background: pink;
        left:0;
        top:-.4rem;
    }
     .scrref>div .bottom{
         position:absolute;
         width:100%;
        height: .4rem;
        text-align: center;
        line-height:.4rem;
        background: pink;
        right:0;
        bottom:-.4rem;
     }
     .scrref>div .scrollref{
         width:100%;
         display:flex;
         flex-wrap:wrap
     }
     .scrref>div .scrollref dl{
         width:50%;
         
     }
     .scrref>div .scrollref dl dt{
         width:80%;
         margin:0.1rem auto;
     }
     .scrref>div .scrollref dl dt img{
         display:block;
         width:100%;
         height:auto;
     }
>>>>>>> ea915a7699f844a2b4952ef6e0ba3008cd8a1203
</style>