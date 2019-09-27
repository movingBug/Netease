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
    <div class='question'>
        <h4>---常见问题分析-----</h4>
        <div v-for='(item,index) in gooddetail.issue' :key='index'>
             <p>问:{{item.question}}</p>
             <p>答:{{item.answer}}</p>
        </div>
    </div>
    <div class="mark" v-show="flag">
        <div class='selectoption'>
            {{gooddetail.attribute}}
            <p v-if='gooddetail.attribute'>
                <span>{{gooddetail.attribute[2].name}}</span><span>{{gooddetail.attribute[2].value}}</span>
            </p>
             <p v-if='gooddetail.attribute'>
                <span>{{gooddetail.attribute[3].name}}</span><span :class="cla" @click="changecls">{{gooddetail.attribute[3].value}}</span>
            </p>
            <div><span @click="hide">取消</span><span @click="hide">确定</span></div>
            </div>
    </div>
    .
    </div>
</template>
<script lang="">
import Vue from 'vue'
import Swiper from 'swiper';

import {mapState} from 'vuex'

export default Vue.extend({
    data(){
        return({
            flag:0,
            cla:'active'
        })
    },
    computed:{
        ...mapState({
             gooddetail: state => state.getGoods.gooddetail,
        })
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
<style scoped lang="scss">
.product{
    widows: 100%;
    height:100%;
    position: relative;
    display: flex;
    flex-direction:column;
    /* overflow-y:auto; */
}
.product>p{
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
    height:auto;
   padding:.2rem auto;
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
.question{
    width:100%;
    height:auto;
    margin-top:.1rem;
    background: #ccc;
    padding:0.2rem auto;
}
.question h4{
    width:100%;
    height: .4rem;
    text-align: center;
    line-height:.4rem;
}
.question div>p{
    width:100%;
    padding:0 .2rem;
    line-height:.3rem;
}

</style>