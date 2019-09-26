<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-25 19:16:20
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-26 10:19:02
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
          <span @click="Clickchange('reducer')">-</span>
          <span v-text="this.cartData.num"></span>
          <span @click="Clickchange('add')">+</span>
        </div>
        <div class="controlBtn">
          <div class="addshopcar" @click="addShopcarClick">加入购物车</div>
          <div class="buy" @click="clickMask">立即下单</div>
        </div>
      </div>
    </div>
    <Hint v-if="MaskShow" />
    <addHint v-if="AddMask" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Hint from "../hint/index";
import addHint from "../addHint/index";
export default {
  name: "mask",
  data() {
    return {
      MaskShow: false,
      AddMask: false
    };
  },
  methods: {
    Clickchange(type) {
      if (type === "add") {
        this.cartData.num = Number(this.cartData.num) + 1;
      } else {
        this.cartData.num = this.cartData.num === 0 ? 0 : this.cartData.num - 1;
      }
    },
    async clickClose() {
      await this.$store.commit("mine/changeshopcarIsshow");
      await this.$store.dispatch("mine/SelectShopcar");
    },
    async addShopcarClick() {
      if (this.cartData.num !== 0) {
        await this.$store.dispatch("mine/AddShopcar", {
          goodsId: `${this.cartData.id}`,
          number: this.cartData.num,
          productId: this.cartData.priceID
        });
        this.callback();
      } else {
        alert(`选择的商品不能等于0${this.cartData.unit}`);
      }
    },
    async clickMask(e) {
      await this.$store.commit("mine/changeProductName", {
        name: e.target.innerHTML
      });
      this.MaskShow = true;
      setTimeout(() => {
        this.MaskShow = false;
      }, 2000);
    },
     callback() {
      this.AddMask = true;
      setTimeout(() => {
        this.AddMask = false;
      }, 2000);
    }
  },
  computed: mapState({
    cartData: state => state.mine.cartData
  }),
  mounted() {
    console.log(this.cartData);
  },
  components: {
    Hint,
    addHint
  }
};
</script>

<style lang="scss">
@import url("./style.scss");
</style>