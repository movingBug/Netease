<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-28 17:15:54
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-29 07:50:14
 -->
<template>
  <div class="categoryPage">
    <div class="cateHeader">
      <div class="cateTitle">
        <span @click="revert">&lt;</span>
        <span>奇趣分类</span>
        <span></span>
      </div>
      <div v-if="items">
        <ly-tab
          v-model="selectedId.selectedId"
          :items="items"
          :options="options"
          @change="changeTab"
        ></ly-tab>
      </div>
    </div>
    <div class="cateMain">
      <div class="categoryDetail" v-if="data.brotherCategory">
        <div>{{data.brotherCategory[selectedId.selectedId].name}}</div>
        <div>{{data.brotherCategory[selectedId.selectedId].front_name}}</div>
      </div>
      <div class="goodsListContant">
        <div class="goodsListsWrap" v-if="goodList">
          <!-- 这个需要改跳路由的 -->
          <div
            class="goodsListRout"
            v-for="(val) in goodList"
            :key="val.id"
            @click="e=>goodsJurp(val.id)"
          >
            <div class="listItemImg">
              <img class="imgLazyload loadEnd" v-lazy="val.list_pic_url" alt="imgLazyLoad" />
            </div>
            <div class="goodsListName">{{val.name}}</div>
            <div class="goodsListPrice">￥{{val.retail_price}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      items: [],
      options: {
        activeColor: "#1d98bd"
      }
    };
  },

  computed: {
    ...mapState({
      data: state => state.category.data,
      // lists: state => state.First.lists,
      selectedId: state => state.category,
      goodList: state => state.category.goodList
    })
  },
  methods: {
    revert() {
      this.$router.go(-1);
    },
    initData() {
      setTimeout(() => {
        console.log("data----", this.data);
        this.tabId = this.$route.params.id;
        this.data.brotherCategory.map(item => {
          this.items.push({ label: item.name, id: item.id });
        });
      }, 100);
    },

    ...mapMutations({
      changeTab: "category/changeTab"
    }),

    ...mapActions({
      TabData: "category/TabData",
      goodsList: "category/goodsList"
    }),

    changeTab(items) {
      this.goodsList(items.id);
      // this.selectedId = this.data.brotherCategory.findIndex(
      //   (item) => items.id === item.id
      // );
    },

    goodsJurp(id) {
      this.$router.push(`/productDetails/${id}`);
    }
  },

  created() {
    this.goodsList(this.$route.params.id);
  },
  mounted() {
    this.TabData(this.$route.params.id);
    this.initData();
  }
};
</script>
<style scoped lang="scss">
.categoryPage {
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.categoryPage .cateHeader {
  width: 100%;
  height: 1rem;
}

.cateTitle {
  width: 100%;
  height: 0.5rem;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  display: flex;
  border-bottom: 0.005rem solid #eee;

  span {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span:nth-child(1) {
    flex: 1;
    font-size: 0.2rem;
    cursor: pointer;
  }
  span:nth-child(2) {
    flex: 8;
    font-size: 0.16rem;
  }
  span:nth-child(3) {
    flex: 1;
  }
}

.tabWrap {
  width: 100%;
  height: 0.32rem;
  z-index: 10;
}

.cateMain {
  flex: 1;
  overflow: auto;

  .categoryDetail {
    padding: 0.1rem 0;
    background: #eee;
  }

  .categoryDetail > div {
    height: 0.3rem;
    line-height: 0.3rem;
    text-align: center;
  }

  .categoryDetail > div:nth-child(2) {
    color: gray;
    height: 0.25rem;
    line-height: 0.25rem;
    font-size: 0.14rem;
  }

  .goodsListContant {
    width: 100%;
    height: auto;

    .goodsListsWrap {
      display: flex;
      flex-wrap: wrap;
      background: #fff;
    }

    .goodsListsWrap .goodsListRout {
      display: inline-block;
      width: 50%;
      height: auto;
      background: white;
      padding: 0.1rem;
      position: relative;
    }

    .goodsListsWrap .goodsListRout:after {
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

    .listItemImg {
      width: 100%;
      min-height: 1rem;
      height: auto;
    }

    .imgLazyload.loadEnd {
      opacity: 1;
      transition: all 1s;
    }
    .listItemImg > img {
      width: 1.67rem;
      height: 1.67rem;
    }

    .goodsListName {
      text-align: center;
      font-size: 0.14rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-bottom: 0.1rem;
      padding-top: 0.05rem;
    }
    .goodsListPrice {
      text-align: center;
      font-size: 0.14rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: red;
    }
  }
}
</style>