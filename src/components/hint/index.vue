<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-26 09:20:34
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-27 10:44:18
 -->
<template>
  <div class="hint">
    <i class="iconfont font">&#xe765;</i>
    
    <div>{{this.productName}}功能还未Get，请耐心等待~</div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    productName: state => state.mine.productName
  })
};
</script>
<style>
.hint {
  width: 2rem;
  height: 1rem;
  /* margin: 75% auto; */
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.1rem;
  text-align: center;
  position: absolute;
  z-index: 1000;
  left: 23%;
}

.hint .font {
  width: 0.4rem;
  font-size: .4rem;
  height: 0.3rem;
  color:white;
}

.hint div {
  color: white;
  padding: 0 0.2rem 0 0.2rem;
}
</style>