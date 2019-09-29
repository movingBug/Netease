<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-26 15:35:40
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-29 07:48:57
 -->
<template>
  <div class="wrap">
    <div v-if="this.carList" class="contents">
      <ul class="serviceList">
        <li>
          <span class="star">★</span>
          <span class="pledge">30天无忧退货</span>
        </li>
        <li>
          <span class="star">★</span>
          <span class="pledge">48小时快速退款</span>
        </li>
        <li>
          <span class="star">★</span>
          <span class="pledge">满88元免邮费</span>
        </li>
      </ul>
      <div class="shopList" v-for="item in this.carList" :key="item.goods_id">
        <div class="contentLeft">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg=="
            v-if="item.checked === 1"
            @click="clickChangeimg(0,item.product_id)"
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC"
            v-else
            @click="clickChangeimg(1,item.product_id)"
          />
        </div>
        <div class="contentCenter">
          <img v-lazy="item.list_pic_url" />
        </div>
        <div v-if="!signPattern">
          <div class="cont">
            <div class="name" v-text="item.goods_name"></div>
            <div class="price">￥{{item.market_price}}</div>
          </div>
          <div class="contentRight">x{{item.number}}</div>
        </div>
        <div v-else>
          <div class="contaction">
            <div class="name">已选择：</div>
            <div class="cartGoodEditWrap">
              <div class="price">￥{{item.market_price}}</div>
              <div class="countOp">
                <div
                  @click="clickAddReducer('reducer',item.product_id,item.id,item.goods_id,item.number)"
                >-</div>
                <div class="num" v-text="item.number"></div>
                <div
                  @click="clickAddReducer('add',item.product_id,item.id,item.goods_id,item.number)"
                >+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>还没有物品物品加入购物车</div>
    <div class="cartGoodsDo">
      <div class="isCheckAll">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg=="
          v-if="isShow"
          @click="clickAll"
        />
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC"
          v-else
          @click="clickAll"
        />
      </div>
      <div class="rightCheck" v-if="!signPattern">已选({{this.num}})￥({{this.totalMoney}})</div>
      <div class="rightCheck" v-else>已选({{this.allSingle}})</div>
      <div class="sign" v-text="initSign" @click="clickChange"></div>
      <div class="changeBtn" v-text="initDown" @click="clickShow"></div>
    </div>
    <Shade v-if="MaskIsShow" />
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
import Shade from "@/components/hint";
export default Vue.extend({
  name: "Shop",
  data() {
    return {
      isShow: false,
      initSign: "编辑",
      initDown: "下单",
      MaskIsShow: false,
      signPattern: false
    };
  },
  methods: {
    initGetData() {
      this.$store.dispatch("shopcar/getCarList");
    },
    async clickChangeimg(type, id) {
      await this.$store.dispatch("shopcar/getCarStatus", {
        isChecked: type,
        productIds: id
      });
      this.isCheckLength();
    },
    clickAddReducer(type, productId, id, goodsId, number) {
      if (type === "add") {
        let obj = {
          productId,
          id,
          goodsId,
          number: Number(number) + 1
        };
        this.$store.dispatch("shopcar/getNewNumber", obj);
      } else {
        let obj = {
          productId,
          id,
          goodsId,
          number: Number(number) - 1
        };
        this.$store.dispatch("shopcar/getNewNumber", obj);
      }
    },
    clickAll() {
      this.isShow = !this.isShow;
      let isChecked = 0;
      let arr = [];
      this.carList.map(item => {
        return arr.push(item.product_id);
      });
      if (this.isShow) {
        isChecked = 1;
        this.$store.dispatch("shopcar/getCarStatus", {
          isChecked,
          productIds: arr.join(",")
        });
      } else {
        isChecked = 0;
        this.$store.dispatch("shopcar/getCarStatus", {
          isChecked,
          productIds: arr.join(",")
        });
      }
    },
    isCheckLength() {
      if (this.carList.length) {
        let arr = this.carList.filter(item => {
          return item.checked === 1;
        });
      }
    },
    clickChange() {
      let arr = [];
      this.signPattern = !this.signPattern;
      if (this.signPattern) {
        this.initSign = "完成";
        this.initDown = "删除所选";
        this.carList.map(item => {
          return arr.push(item.product_id);
        });
        this.$store.dispatch("shopcar/getCarStatus", {
          isChecked: 0,
          productIds: arr.join(",")
        });
      } else {
        this.initSign = "编辑";
        this.initDown = "下单";
      }
    },
    clickShow(e) {
      if (e.target.innerHTML === "下单") {
        this.MaskIsShow = true;
        this.$store.commit("mine/changeProductName", {
          name: e.target.innerHTML
        });
        setTimeout(() => {
          this.MaskIsShow = false;
        }, 2000);
      } else {
        let arr = [];
        this.carList.forEach(item => {
          if (item.checked === 1) {
            arr.push(item.product_id);
          }
        });
        this.$store.dispatch("shopcar/deleteItem", {
          productIds: arr.join(",")
        });
      }
    }
  },
  computed: mapState({
    carList: state => state.shopcar.carList,
    shopcarCount: state => state.mine.shopcarCount,
    num: state => state.shopcar.num,
    totalMoney: state => state.shopcar.totalMoney,
    allSingle: state => state.shopcar.allSingle
  }),
  mounted() {
    this.initGetData();
    this.isCheckLength();
  },
  components: {
    Shade
  }
});
</script>
<style lang="scss">
@import url("./index.scss");
</style>