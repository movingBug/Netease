<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-25 19:16:20
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-25 21:07:49
 -->
<template>
  <div class="mask">
    <div class="close" @click="clickClose"></div>
    <div class="content">
      <div class="showcont">
        <img :src="this.cartData.img_src" />
        <div class="gooodsSizePriceAndSize">
          <div>
            单价:
            <span>￥{{this.cartData.price}}</span>
          </div>
          <div>
            库存:
            <span>{{this.cartData.repertory}}{{this.cartData.unit}}</span>
          </div>
          <div>已选择：</div>
        </div>
        <div class="closeMask" @click="clickClose">x</div>
      </div>
      <div class="control">
        <div class="num">数量</div>
        <div class="controlnum">
          <span>-</span>
          <span>0</span>
          <span>+</span>
        </div>
        <div class="controlBtn">
          <div class="addshopcar">加入购物车</div>
          <div class="buy">立即下单</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "mask",
  methods: {
    clickClose() {
      this.$store.commit("mine/changeshopcarIsshow");
    }
  },
  computed: mapState({
    cartData: state => state.mine.cartData
  }),
  mounted() {
    console.log(this.cartData);
  }
};
</script>

<style lang="scss">
@import url("./style.scss");
</style>