<template>
  <div class="brandPage">
    <Header :data="brand"/>
    <div class="brandMain">
      <div class="brandDetail" v-if="brand">
        <img class="imgLazyload loadEnd" :src="brand.list_pic_url" alt="imgLazyLoad" />
        <div class="breadDesc">{{brand.simple_desc}}</div>
      </div>
      
      <!-- 这个需要改跳路由的 -->
      <div class="brandContent">
        <div class="brandWrap" v-if="branList">
          <router-link
            class="brandRout"
            tag="div"
            :to="'/productDetails/'+val.id"
            v-for="(val) in branList"
            :key="val.id"
          >
            <div class="brandItemImg">
              <img class="imgLazyload loadEnd" :src="val.list_pic_url" alt="imgLazyLoad" />
            </div>
            <div class="brandItemName">{{val.name}}</div>
            <div class="brandItemPrice">￥{{val.retail_price}}</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import Vuex from "vuex";
import { mapState, mapMutations, mapActions } from "vuex";
import Header from "../../../../components/header/index.vue"

export default {
  props: {},
  components: {
    Header
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      brand: state => state.brand.brand,
      branList:state => state.brand.branList
    })
  },
  methods: {

    ...mapActions({
      brandData: "brand/brandData",
      brandList: "brand/brandList"
    })
  },
  created() {
    this.brandData(this.$route.params.id);
    this.brandList(this.$route.params.id);
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.brandPage {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.brandPage .brandHeader {
  width: 100%;
  height: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

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

.brandMain {
  flex: 1;
  overflow: auto;
  background: #eee;

  .brandDetail {
    width: 100%;
    font-size: 0.14rem;
    background: #fff;
    .imgLazyload.loadEnd {
      opacity: 1;
      transition: all 1s;
    }
  }
  .brandDetail img {
    width: 100%;
    height: auto;
  }

  .brandDetail .breadDesc {
    width: 100%;
    line-height: 0.2rem;
    padding: 0.2rem;
    background: white;
    text-indent: 1em;
    color: gray;
  }

  .brandContent{
      width: 100%;
      height: auto;
      margin-top:0.1rem; 
  }
}

.brandWrap {
  display: flex;
  flex-wrap: wrap;
  background: #fff;
}

.brandWrap .brandRout {
  display: inline-block;
  width: 50%;
  height: auto;
  background: white;
  padding: 0.1rem;
  position: relative;
}

.brandWrap .brandRout:after {
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

.brandItemImg {
  width: 100%;
  min-height: 1rem;
  height: auto;
}

.imgLazyload.loadEnd {
  opacity: 1;
  transition: all 1s;
}
.brandItemImg > img {
  width: 1.67rem;
  height: 1.67rem;
}

.brandItemName {
  text-align: center;
  font-size: 0.14rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-bottom: 0.1rem;
  padding-top: 0.05rem;
}
.brandItemPrice {
  text-align: center;
  font-size: 0.14rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: red;
}
</style>