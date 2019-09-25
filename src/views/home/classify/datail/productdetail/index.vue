<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 19:27:11
 * @LastEditTime: 2019-09-24 21:28:13
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div class='product'>
    <p @click="back">返回🔙</p> 
    <div class="swiper-container" v-if='gooddetail.gallery'>
     <div class="swiper-wrapper">
        <div class="swiper-slide" v-for='item in gooddetail.gallery' :key='item.id'><img :src="item.img_url" alt=""></div>
    </div>
    <!-- 如果需要分页器 -->
     <div class="swiper-pagination"></div>
    </div>
    <div class='select' @click="showmark">选择规则</div>
    <div class="mark" v-show="flag">
        <div class='selectoption'>
            <p>
                <span>{{gooddetail.attribute[0].name}}</span><span>{{gooddetail.attribute[0].value}}</span>
            </p>
             <p>
                <span>{{gooddetail.attribute[1].name}}</span><span :class="cla" @click="changecls">{{gooddetail.attribute[1].value}}</span>
            </p>
            <div><span @click="hide">取消</span><span @click="hide">确定</span></div>
            </div>
    </div>
    </div>
</template>
<script lang="">
import Vue from 'vue'
import Swiper from 'swiper';
import '../../../../../../node_modules/swiper/css/swiper.min.css'
import {mapState} from 'vuex'

export default Vue.extend({
    data(){
        return({
            flag:0,
            cla:'active'
        })
    },
    computed:{
        ...mapState(['gooddetail'])
    },
    methods:{
        back(){
            this.$router.push('/home/classify/detail')
        },
        showmark(){
            this.flag=1;
        },
        hide(){
            this.flag=0;
        },
        changecls(){
            this.cla?this.cla='':this.cla='active';
           
        }
    },
    mounted(){
   var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    autoplay:{
        delay:1000
    },
  
    pagination: {
      el: '.swiper-pagination',
    },
    
  })      
    }
})
</script>
<style scoped>
.product{
    widows: 100%;
    height:100%;
    position: relative;
    display: flex;
    flex-direction:column;
    /* overflow-y:auto; */
}
.product p{
    width:100%;
    height:.4rem;
    line-height:.4rem;
    
}
.product .swiper-container {
    width: 100%;
    height:2rem;
} 
.product .swiper-container .swiper-wrapper{
     width: 100%;
    height: 2rem;
}

.product .mark{
    position: absolute;
    width:100%;
    height:100%;
    background:rgba(0,0,0,.5);
    z-index:99;
}
.product .mark .selectoption{
    width:100%;
    height:2rem;
   
    position: absolute;
    left:0;
    bottom:0;
    background: white;
}
.product .mark .selectoption p{
    width:90%;
    height:.4rem;
    margin:.2rem auto;
}
.product .mark .selectoption div{
width:90%;
    height:.4rem;
    margin:.1rem auto;
}
.product .mark .selectoption div span{
    padding:.1rem;
    background: #ccc;
    margin-left:.3rem;
}
.product .mark .selectoption div span:nth-child(2){
    background:skyblue;
}
.product .mark .selectoption p .active{
     border:solid 1px skyblue;
}
.product .mark .selectoption p span:nth-child(2){
   padding:0.1rem;
    height:.4rem;
    border:solid 1px #ccc;
    margin-left:.2rem;
}

.select{
    width:100%;
    box-sizing: border-box;
    padding:0 .2rem;
    height:.4rem;
    text-align:right;
    color:skyblue;
    line-height:.4rem;
}

</style>