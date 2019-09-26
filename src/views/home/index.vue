<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-25 07:46:42
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-25 14:32:27
 -->
<template>
  <div class="home">
    <div class="homeMain">
      <router-view />
    </div>
    <div class="homeFoot">
      <div class="foot-item">
        <router-link to="/home/first" tag="span" active-class="active">首页</router-link>
      </div>
      <div class="foot-item">
        <router-link to="/home/special" tag="span">专题</router-link>
      </div>
      <div class="foot-item">
        <router-link to="/home/classify" tag="span">分类</router-link>
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
  components: {},
  methods: {
    getlocationID() {
      let ID = window.localStorage.getItem("sessionKey");
      if (!ID) {
        this.$router.replace("/");
      }
    }
  },
  mounted() {
    this.getlocationID();
  }
});
</script>
<style lang="scss">
// @import '../assets/font/iconfont.css';

html,
body {
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
  overflow: auto;
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
}

.homeFoot .foot-item .active {
  color: #09f;
  border-top:1px solid #ccc; 
}
</style>
