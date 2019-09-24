<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-24 09:53:47
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-24 21:01:15
 -->
<template>
  <div class="wrap">
    <header>
      <span class="back">&lt;</span>
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

<script lang="ts">
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
    getStar() {
      this.$store.dispatch("mine/getstarlist", {
        typeId: "0"
      });
    },
    touchmove(e: any) {
      this.startX = e.changedTouches[0].clientX;
    },
    touchEnd(e: any, price: string) {
      this.endX = e.changedTouches[0].clientX;
      if (Math.abs(this.startX - this.endX) > 45) {
        const index = this.starlist.findIndex(
          (item: any) => item.retail_price === price
        );
        this.$store.commit("mine/touchEnd", { index });
      }
    },
    clickDelete() {},
     jumpClick(id: any) {
        this.$store.commit("mine/changeProductId", { id });
       this.$router.push("/productDetails");
    }
  },
  computed: mapState({
    starlist: (state: any) => state.mine.starlist
  }),
  mounted() {
    this.getStar();
    console.log(this);
  }
};
</script>

<style lang="scss">
@import url("./index.scss");
</style>