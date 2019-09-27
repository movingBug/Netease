<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 15:17:54
 * @LastEditTime: 2019-09-23 16:35:38
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="home">
    <div class="homeMain">
       <router-view/>
    </div>
    <div class="homeFoot">
      <div class="foot-item">
        <router-link to="/home/first" tag="span">首页</router-link>
      </div>
      <div class="foot-item">
        <router-link to="/home/special"  tag="span">专题</router-link>
      </div>
      <div class="foot-item">
        <router-link to="/home/classify"  tag="span">分类</router-link>
      </div>
      <div class="foot-item">
        <router-link to="/home/shop" tag="span">购物车</router-link>
      </div>
      <div class="foot-item">
        <router-link to="/home/my" tag="span">我的</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "home",
  components: {}
});
</script>
<style lang="scss">

html,body{
   width: 100%;
   height: 100%;
}

.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.homeMain {
  flex: 1;
  overflow:auto; 
}

.homeFoot {
  width: 100%;
  height: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.homeFoot .foot-item {
  flex: 1;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 0.5rem;
  border-top:solid 1px #ccc;
}


</style>
