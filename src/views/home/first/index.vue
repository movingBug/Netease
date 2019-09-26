<<<<<<< HEAD
<template>
  <div class="firstPage">
    <Swiper :options="swiperOption" :list="lists" />
    <div class="NavList">
      <ul class="ulList">
        <li v-for="(item) in channel" :key="item.id" @click="e=>ToDetail(item.id)">
          <span>
            <img :src="item.icon_url" alt />
          </span>
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="brandBox">
      <div class="brandTitle">品牌制造商直供</div>
      <div class="brandWrap">
        <router-link
          :to="'/brandDetail/'+item.id"
          class="brandItem"
          v-for="(item) in brandList"
          :key="item.id"
        >
          <div class="brandItemName">{{item.name}}</div>
          <div class="brandItemMinPrice">{{item.floor_price}}元起</div>
          <img class="imgLazyload loadEnd" :src="item.new_pic_url" alt="imgLazyLoad" />
        </router-link>
      </div>
    </div>
    <div class="newGoodsBox">
      <div class="newGoodsTitle">新品首发</div>
      <div class="newGoodsWrap">
        <!-- 这个需要改跳路由的 -->
        <router-link class="newGoodsItem" to="/" v-for="(item) in newGoodsList" :key="item.id">
          <img class="imgLazyload loadEnd" :src="item.list_pic_url" alt="imgLazyLoad" />
          <div class="newGoodsName">{{item.name}}</div>
          <div class="newGoodsPrice">￥{{item.retail_price}}</div>
        </router-link>
      </div>
    </div>
    <div class="hotGoodsBox">
      <div class="hotGoodsTitle">人气推荐</div>
      <div class="hotGoodsWrap">
        <router-link class="hotGoodsItem" to="/" v-for="(item) in hotGoodsList" :key="item.id">
          <img class="imgLazyload loadEnd" :src="item.list_pic_url" alt="imgLazyLoad" />
          <div class="hotGoodsInfos">
            <div class="hotGoodsName">{{item.name}}</div>
            <div class="hotGoodsInfo">{{item.goods_brief}}</div>
            <div class="hotGoodsPrice">￥{{item.retail_price}}</div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="topGoodsBox">
      <div class="topGoodsTitle">专题精选</div>
      <div class="topGoodsWrap">
        <swiper
          :options="swiperTopic"
          class="swiper-topic"
          ref="mySwiper"
          v-if="topicList.length!=0"
        >
          <swiper-slide v-for="(item) in topicList" :key="item.id" id="swiper-content-slide">
            <router-link :to="'/topicDetail/'+item.id" class="topGoodItem">
              <img :src="item.item_pic_url" alt="no" />
              <div class="topGoodSubTitle">
                {{item.title}}
                <span class="topGoodPrice">￥{{item.price_info}}元起</span>
              </div>
              <div class="topGoodTitle">{{item.subtitle}}</div>
            </router-link>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="Impurity">
      <div class="contentPage" v-for="(item) in categoryList" :key="item.id">
        <div class="cateGoryName">{{item.name}}</div>
        <div class="cateGoryGoodsWrap">
          <router-link
            class="cateGoryRout"
            tag="div"
            to="/"
            v-for="(val) in item.goodsList"
            :key="val.id"
          >
            <div class="goodsItemImg">
              <img class="imgLazyload loadEnd" :src="val.list_pic_url" alt="imgLazyLoad" />
            </div>
            <div class="goodsItemName">{{val.name}}</div>
            <div class="goodsItemPrice">￥{{val.retail_price}}</div>
          </router-link>
          <router-link class="categoryMoreGoods" to="/">
            <div>更多{{item.name}}好物</div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURf///4uLi7KysszMzHJycvb29qurq2ZmZv7+/m1tbZSUlN3d3Xd3d35+fsbGxtnZ2e/v7/z8/J2dneHh4evr676+voaGhri4uNPT04zm/X4AAAIzSURBVFjDvVjRlqsgDKwojgEsYq36/196pbZdRVyjh728eCxlIGEySbzd/nI0uWh7QwCZvhV5cxrgUdYIRl0+TgDIwQOQErlu5PTa6Fwo8jCDZCKIAjCldeufnS0NUAgGSnWfELLRxebcmE0o9+oAopv+ldn9eevnu18hcjrax5+T8l/mS0Ad2isVUO7t41rQs2K47EloXRxCgUbe1Y0EFQOpWhSayyBdoI2cuARpPg01odzeCMieCQZLCG+nIzzPRdQTtOZJlUFV5zAqhWy15I5Cng1taXBfvharV+bIVxuL4FjMkUEsj6GvKJ1eHGRAdk0uMwwfD9cYr2GMqKvPkUx1DcOZjxPKCG3D0ddRXf8urWEZlpuYelnUcx4BuWNCTSCR1OAIzUwVxWFlhiICoubIEwx3vCVqa7OYaaaYPPdSOW75/jKi55J0UrqNomv0/mHATcde94MzNzD+QeCHvUAgVRKFfwCn1GsRq6/VtMXA8VgmKDdjrG3hYGxt4ft0tmVYafns0/6EAG18+r5bxdbSyN2+Ocbk+kzUPM51XsztcP0dc6zY34m5KfY7tgbtxP5Hg1haKPuoBn2XTmni0Jg+qoXum5g4uSGuyT+5IUWO8rnSXoGwy6SdIGcnqR1S1DBXaqlbWEulqOmS1JZJatxXrc1u2B7xWnsnoe4Zotx+78Fy527vkaQHStKLpekJk/SmPz2yDntkze6Rg169k87J7nSvnuabQfDtorj47eK/j3/n9xya7EBtgAAAAABJRU5ErkJggg=="
              alt="more"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapMutations, mapActions } from "vuex";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Swiper from "../../../components/swiper/index.vue";

require("swiper/dist/css/swiper.css");

export default Vue.extend({
  name: "First",
  data() {
    const that = this;
    return {
      imgIndex: 1,
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
        speed: 1000,
        direction: "horizontal",
        grabCursor: true,
        on: {
          slideChangeTransitionStart: function() {
            /* realIndex为滚动到当前的slide索引值 */
            // that.imgIndex= this.realIndex - 1;
          }
        },
        //分页器设置
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets"
        }
      },

      swiperTopic: {
        notNextTick: true,
        paginationClickable: true,
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        initialSlide: 0,
        direction: "horizontal",
        grabCursor: true,
        on: {
          slideChangeTransitionStart: function() {
            /* realIndex为滚动到当前的slide索引值 */
            // that.imgIndex= this.realIndex - 1;
          }
        }
      }
    };
  },

  computed: {
    ...mapState({
      lists: (state: any) => state.First.banner,
      channel: (state: any) => state.First.channel,
      brandList: (state: any) => state.First.brandList,
      newGoodsList: (state: any) => state.First.newGoodsList,
      hotGoodsList: (state: any) => state.First.hotGoodsList,
      topicList: (state: any) => state.First.topicList,
      categoryList: (state: any) => state.First.categoryList
    })
  },

  methods: {
    ...mapActions({
      getData: "First/getData"
    }),
    ToDetail(id: any) {
      this.$router.push(`/categorys/${id}`);
    }
  },

  created() {
    this.getData();
  },
  components: {
    swiper,
    swiperSlide,
    Swiper
  }
});
</script>
<style lang="scss" scoped>
.firstPage {
  width: 100%;
  height: auto;
  background: #eee;
}

.NavList {
  width: 100%;
  height: 0.7rem;
  padding: 0.1rem 0rem;
  background: #fff;

  .ulList {
    width: 100%;
    height: 100%;
    list-style: none;
    display: flex;

    li {
      flex: 1;
      height: 0.7rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      line-height: 30px;

      span {
        flex: 1;
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: 0.12rem;

        img {
          width: 0.32rem;
          height: 0.32rem;
        }
      }

      span:nth-child(1) {
        display: flex;
        align-items: flex-end;
      }
    }
  }
}

.brandBox {
  width: 100%;
  height: 2.7rem;
  margin-top: 0.12rem;
  background: #fff;

  .brandTitle {
    height: 0.5rem;
    background: white;
    text-align: center;
    font-size: 0.15rem;
    line-height: 0.5rem;
    letter-spacing: 0.02rem;
    font-weight: bold;
  }

  .brandWrap {
    background: white;
    display: flex;
    flex-wrap: wrap;

    .brandItem {
      width: 50%;
      height: 1.1rem;
      position: relative;
    }
  }

  .brandWrap .brandItem > div.brandItemName {
    position: absolute;
    top: 0.1rem;
    left: 0.1rem;
    font-size: 0.15rem;
    color: #000;
  }

  .brandItem > div.brandItemMinPrice {
    position: absolute;
    top: 0.3rem;
    left: 0.1rem;
    font-size: 0.12rem;
    color: darkgrey;
  }

  .imgLazyload.loadEnd {
    opacity: 1;
    -webkit-transition: all 1s;
    transition: all 1s;
  }
  .brandItem > img {
    width: 100%;
    height: 100%;
    max-height: 2rem;
  }
}

.newGoodsBox {
  width: 100%;
  height: 4.5rem;
  margin-top: 0.12rem;
  background: #fff;

  .newGoodsTitle {
    height: 0.5rem;
    background: white;
    text-align: center;
    font-size: 0.15rem;
    line-height: 0.5rem;
    letter-spacing: 0.01rem;
    font-weight: bold;
  }

  .newGoodsWrap {
    background: white;
    display: flex;
    flex-wrap: wrap;

    .newGoodsItem {
      width: 50%;
      height: 2rem;
      text-decoration: none;
    }

    .imgLazyload.loadEnd {
      opacity: 1;
      -webkit-transition: all 1s;
      transition: all 1s;
    }
    .newGoodsItem > img {
      height: 70%;
      width: 100%;
    }
    img {
      border-style: none;
    }

    .newGoodsItem > .newGoodsName,
    .newGoodsItem > .newGoodsPrice {
      height: 15%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.15rem;
    }

    .newGoodsName {
      color: #000;
    }

    .newGoodsPrice {
      color: darkred;
    }
  }
}

.hotGoodsBox {
  width: 100%;
  height: 5rem;
  margin-top: 0.12rem;
  background: #fff;

  .hotGoodsTitle {
    height: 0.5rem;
    background: white;
    text-align: center;
    font-size: 0.15rem;
    line-height: 0.5rem;
    letter-spacing: 0.01rem;
    font-weight: bold;
  }

  .hotGoodsWrap {
    width: 100%;
    padding: 0 0.1rem;
    min-height: 2rem;

    .hotGoodsItem {
      height: 1.5rem;
      position: relative;
      padding: 0.05rem 0;
      display: flex;
      text-decoration: none;

      .imgLazyload.loadEnd {
        opacity: 1;
        width: 1.4rem;
        transition: all 1s;
      }

      .hotGoodsItem > img {
        width: 1.4rem;
        height: 100%;
      }
    }

    .hotGoodsItem .hotGoodsInfos {
      flex: 1;
      padding: 0.25rem 0;
      display: flex;
      flex-direction: column;
    }
    .hotGoodsInfos > div {
      flex: 1;
      display: flex;
      align-items: center;
    }

    .hotGoodsInfos .hotGoodsName {
      font-size: 0.16rem;
      color: #000;
    }

    .hotGoodsInfos .hotGoodsInfo {
      color: darkgray;
      font-size: 0.14rem;
    }

    .hotGoodsInfos .hotGoodsPrice {
      color: darkred;
      font-size: 0.15rem;
    }

    .hotGoodsItem:after {
      content: "";
      width: 200%;
      height: 1px;
      background: darkgrey;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      -webkit-transform-origin: 0;
      transform-origin: 0;
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
  }
}

.topGoodsBox {
  width: 100%;
  height: 3.1rem;
  margin-top: 0.12rem;
  background: #fff;

  .topGoodsTitle {
    height: 0.5rem;
    background: white;
    text-align: center;
    font-size: 0.15rem;
    line-height: 0.5rem;
    letter-spacing: 0.01rem;
    font-weight: bold;
  }

  .topGoodsWrap {
    height: auto;
    padding-bottom: 0.1rem;
  }

  .swiper-topic {
    width: 100%;
    height: 2.62rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .swiper-slide-prev {
    right: -4%;
  }
  .swiper-slide-next {
    left: -3%;
  }

  #swiper-content-slide {
    width: 90% !important;
    height: 100%;

    .topGoodItem {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 0.07rem;
      margin-right: 0.17rem;
      text-decoration: none;

      img {
        width: 3.18rem;
        height: 2rem;
        border-radius: 0.04rem;
      }

      .imgLazyload.loadEnd {
        opacity: 1;
        transition: all 1s;
      }
      .topGoodsItem > img {
        height: 2rem;
        width: 100%;
      }

      .topGoodTitle {
        font-size: 0.12rem;
        width: 90%;
        padding-left: 0.05rem;
        padding-right: 0.1rem;
        color: gray;
      }

      .topGoodSubTitle {
        font-size: 0.16rem;
        padding-left: 0.05rem;
        text-decoration: none;
        color: #000;
      }

      .topGoodPrice {
        color: darkred;
      }

      .topGoodSubTitle,
      .topGoodTitle {
        margin-top: 0.05rem;
        height: 0.2rem;
        line-height: 0.2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}

.contentPage {
  width: 100%;
  height: auto;

  .cateGoryName {
    height: 0.5rem;
    text-align: center;
    line-height: 0.5rem;
  }

  .cateGoryGoodsWrap {
    display: flex;
    flex-wrap: wrap;
    background: #fff;
  }

  .cateGoryGoodsWrap .cateGoryRout {
    display: inline-block;
    width: 50%;
    height: auto;
    background: white;
    padding: 0.1rem;
    position: relative;
  }

  .cateGoryGoodsWrap .cateGoryRout:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #eee;
    border-right-width: 2px;
    box-sizing: border-box;
    width: 200%;
    height: 200%;
    transform: scale(0.5);
    transform-origin: left top;
  }

  .goodsItemImg {
    width: 100%;
    min-height: 1rem;
    height: auto;
  }

  .imgLazyload.loadEnd {
    opacity: 1;
    transition: all 1s;
  }
  .goodsItemImg > img {
    width: 1.67rem;
    height: 1.67rem;
  }

  .goodsItemName {
    text-align: center;
    font-size: 0.14rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-bottom: 0.1rem;
    padding-top: 0.05rem;
  }
  .goodsItemPrice {
    text-align: center;
    font-size: 0.14rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: red;
  }
  .categoryMoreGoods {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    text-decoration: none;
    color: #000;
  }
  .categoryMoreGoods > div {
    width: 100%;
    text-align: center;
  }

  .categoryMoreGoods > img {
    padding: 0.2rem;
    height: 0.7rem;
    width: 0.7rem;
  }
}
</style>
=======
<template>
  <div class="home">
     this is first page
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'First',
  components: {
  }
})
</script>
>>>>>>> fb747870daa7fe444d1999475d3fefda0139ae8c
