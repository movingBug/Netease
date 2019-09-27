<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-24 09:53:47
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-26 19:29:06
 -->
<template>
  <div class="wrap">
    <header>
      <span class="back" @click="jumpBack">&lt;</span>
      <span class="title">easyLikeGoods</span>
      <span class="right"></span>
    </header>
    <main>
      <div v-for="item in this.starlist" :key="item.value_id" class="touchClear">
        <div
          class="test"
          v-if="!item.isTouch"
          @touchstart="touchmove"
          @touchend="e=>{touchEnd(e,item.retail_price)}"
          @click="jumpClick(item.value_id)"
        >
          <div class="collectItem">
            <img :src="item.list_pic_url" />
            <div class="content">
              <div v-text="item.name" class="productName"></div>
              <div v-text="item.goods_brief" class="brief"></div>
              <div class="price">￥{{item.retail_price}}</div>
            </div>
          </div>
        </div>
        <div
          class="test left"
          v-else
          @touchstart="touchmove"
          @touchend="e=>{touchEnd(e,item.retail_price)}"
        >
          <div class="collectItem">
            <img :src="item.list_pic_url" />
            <div class="content">
              <div v-text="item.name" class="productName"></div>
              <div v-text="item.goods_brief" class="brief"></div>
              <div class="price">￥{{item.retail_price}}</div>
            </div>
          </div>
        </div>
        <div class="delete" @click="clickDelete">删除</div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "star",
  data() {
    return {
      startX: 0,
      endX: 0
    };
  },
  methods: {
    jumpBack() {
      this.$router.go(-1);
    },
    getStar() {
      this.$store.dispatch("mine/getstarlist", {
        typeId: "0"
      });
    },
    touchmove(e) {
      this.startX = e.changedTouches[0].clientX;
    },
    touchEnd(e, price) {
      this.endX = e.changedTouches[0].clientX;
      if (Math.abs(this.startX - this.endX) > 45) {
        const index = this.starlist.findIndex(
          (item) => item.retail_price === price
        );
        this.$store.commit("mine/touchEnd", { index });
      }
    },
    clickDelete() {},
    jumpClick(id) {
      this.$router.push(`/productDetails/${id}`);
    }
  },
  computed: mapState({
    starlist: (state) => state.mine.starlist
  }),
  mounted() {
    this.getStar();
  }
};
</script>

<style lang="scss">
@import url("./index.scss");
</style>