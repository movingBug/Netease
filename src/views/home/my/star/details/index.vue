<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-24 20:23:33
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-26 11:46:38
 -->
<template>
  <div class="wrap">
    <header>
      <span class="back" @click="jumpBack">&lt;</span>
      <span class="title" v-text="this.detailData.info.name"></span>
      <span class="right"></span>
    </header>
    <main>
      <swiper :options="swiperOption" class="swiper-topic" v-if="this.detailData.gallery">
        <swiper-slide
          v-for="(item) in this.detailData.gallery"
          :key="item.id"
          id="swiper-content-slide"
          class="swiper-slide"
        >
          <img :src="item.img_url" alt="no" />
        </swiper-slide>
        <div
          class="swiper-pagination"
          v-for="(item,index) in this.detailData.gallery"
          :key="index"
          slot="pagination"
        ></div>
      </swiper>
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
      <div class="goodsMsgWrap" v-if="this.detailData">
        <div class="goodsMsgWrapTitle" v-text="this.detailData.info.name"></div>
        <div class="goodsMsgWrapcont" v-text="this.detailData.info.goods_brief"></div>
        <div class="goodsMsgWrapMoney">￥{{this.detailData.info.retail_price}}</div>
      </div>
      <div class="quantitySize">
        <div class="num" @click="clickShow">x {{this.detailData.info.unit_price}}</div>
        <div class="select" @click="clickShow">选择规格 ></div>
      </div>
      <div class="parameter" v-if="this.detailData.attribute">
        <div class="parameterTitle">商品参数</div>
        <div class="parameterList">
          <li v-for="(item,index) in this.detailData.attribute" :key="index">
            <span class="itemLeft" v-text="item.name"></span>
            <span class="itemRight" v-text="item.value"></span>
            <span class="kong"></span>
          </li>
        </div>
      </div>
      <div class="introduceImgs" v-if="this.detailData.info.goods_desc">
        <div v-html="this.detailData.info.goods_desc"></div>
      </div>
      <div class="issue" v-if="this.detailData.issue">
        <div class="issueTitle">常见问题</div>
        <div class="issueItem" v-for="item in this.detailData.issue" :key="item.id">
          <span class="right">√</span>
          <span v-text="item.question" class="ask"></span>
          <div class="answer" v-text="item.answer"></div>
        </div>
      </div>
      <div class="allLook" v-if="this.relatedList">
        <div class="allLookTitle">大家都在看</div>
      </div>
      <ul class="recommendList" v-if="this.relatedList">
        <li
          class="listItem"
          v-for="item in this.relatedList"
          :key="item.id"
          @click="jumpDetailClick(item.id)"
        >
          <img :src="item.list_pic_url" />
          <div class="produckName" v-text="item.name"></div>
          <div class="price">￥{{item.retail_price}}</div>
        </li>
      </ul>
    </main>
    <footer>
      <div class="star clum gold" v-if="isGold" @click="Clickgold">☆</div>
      <div class="star clum" v-else @click="Clickgold">☆</div>
      <div class="shopcar clum">
        <i class="iconfont" @click="clickJumpShopcar">
          &#xe501;
          <span v-text="this.shopcarCount"></span>
        </i>
      </div>
      <div class="addshopcar clumplus" @click="clickShow">加入购物车</div>
      <div class="buy clumplus" @click="alertHint">立即购买</div>
    </footer>
    <Loading v-if="isShow" />
    <ShopMask v-if="this.shopcarIsshow" class="maskTop" />
    <ShopMask v-else class="mask" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Loading from "@/components/hint/index";
import ShopMask from "@/components/windows/index";

export default {
  name: "productDetails",
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        loop: true,
        initialSlide: 0,
        //自动播放
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets"
        }
      },
      isShow: false,
      isGold: true
    };
  },
  methods: {
    Clickgold() {
      this.isGold = !this.isGold;
    },
    jumpBack() {
      this.$router.go(-1);
    },
    jumpDetailClick(id) {
      this.$router.push(`/kong/${id}`);
    },
    async initGetData() {
      await this.$store.dispatch("mine/getDetails", {
        id: this.$route.params.id
      });
      await this.$store.dispatch("mine/SelectShopcar");
      await this.$store.dispatch("mine/getRelated", {
        id: this.$route.params.id
      });
    },
    async alertHint(e) {
      await this.$store.commit("mine/changeProductName", {
        name: e.target.innerHTML
      });
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
      }, 2000);
    },
    clickShow() {
      this.$store.commit("mine/changeshopcarIsshow");
    },
    clickJumpShopcar() {
      this.$router.push("/home/shop");
    }
  },
  computed: mapState({
    productId: state => state.mine.productId,
    detailData: state => state.mine.detailData,
    relatedList: state => state.mine.relatedList,
    shopcarIsshow: state => state.mine.shopcarIsshow,
    shopcarCount: state => state.mine.shopcarCount
  }),
  mounted() {
    this.initGetData();
  },
  components: {
    swiper,
    swiperSlide,
    Loading,
    ShopMask
  }
};
</script>

<style lang="scss">
@import url("./index.scss");
</style>