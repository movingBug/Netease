<template>
  <div class="home">
    <router-view/>
      <div class="homeMain"></div>
      <div class="homeFoot">
          <router-link to="/home/first" tag="span">首页</router-link>
          <router-link to="/home/special" tag="span">专题</router-link>
          <router-link to="/home/classify" tag="span">分类</router-link>
          <router-link to="/home/shop" tag="span">购物车</router-link>
          <router-link to="/home/my" tag="span">我的</router-link> 
      </div>
      
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'home',
  components: {
  }
})
</script>
<style lang="scss" scoped>
   .home{
     width: 100%;
     height: 100%;
     display:flex; 
     flex-direction:column; 
   }

   .homeMain{
     flex:1; 
   }

   .homeFoot{
     width: 100%;
     height: 50px;
     display:flex; 
     justify-content:center;
     align-items:center; 
   }

   .homeFoot>span{
      flex:1;
      display:inline-block;
      width: 100%;
      height: 100%;
      text-align:center; 
      line-height:50px;

   }




</style>
