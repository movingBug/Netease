<!--
<<<<<<< HEAD
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-25 07:46:42
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-25 14:32:27
=======
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 15:17:54
 * @LastEditTime: 2019-09-23 16:35:38
 * @LastEditors: Please set LastEditors
>>>>>>> fb747870daa7fe444d1999475d3fefda0139ae8c
 -->
<template>
  <div class="home">
    <div class="homeMain">
<<<<<<< HEAD
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
=======
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
>>>>>>> fb747870daa7fe444d1999475d3fefda0139ae8c
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
<<<<<<< HEAD
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
=======
  components: {}
});
</script>
<style lang="scss">

html,body{
   width: 100%;
   height: 100%;
>>>>>>> fb747870daa7fe444d1999475d3fefda0139ae8c
}

.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.homeMain {
  flex: 1;
<<<<<<< HEAD
  overflow: auto;
=======
  overflow:auto; 
>>>>>>> fb747870daa7fe444d1999475d3fefda0139ae8c
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
<<<<<<< HEAD
}

.homeFoot .foot-item .active {
  color: #09f;
}
=======
  border-top:solid 1px #ccc;
}


>>>>>>> fb747870daa7fe444d1999475d3fefda0139ae8c
</style>
