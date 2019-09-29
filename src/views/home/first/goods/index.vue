<template>
  <div class="goodsPage">
    <Header :data="itemText.info"/>
    <div class="goodsContent">
      <div v-if="itemText.gallery" class="goodsSwiper">
        <Swiper :options="listOption" :list="itemText.gallery" />
      </div>
      <ul class="serviceList">
        <li>
          <span>★</span>30天无忧退货
        </li>
        <li>
          <span>★</span>48小时快速退款
        </li>
        <li>
          <span>★</span>满88元免邮费
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { mapState, mapMutations, mapActions } from "vuex";
import Swiper from "@/components/swiper/index.vue";
import Header from "@/components/header/index"

export default {
  props: {},
  components: {
    Swiper,
    Header
  },
  data() {
    return {
      imgIndex: 1,
      listOption: {
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
      }
    };
  },
  computed: {
    ...mapState({
      itemText: state => state.category.itemText
    })
  },
  methods: {
    ...mapActions({
      goodsItem: "category/goodsItem"
    }),
  },
  created() {
    this.goodsItem(this.$route.params.id);
  },
  mounted() {
    console.log(this.itemText, "itemText--------");
  }
};
</script>
<style scoped lang="scss">
.goodsPage {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.goodsPage .goodsHeader {
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

.goodsPage .goodsContent {
  flex: 1;
  overflow: auto;
}

.goodsContent .goodsSwiper{
  width: 100%;
  height: 3.5rem;
}

.goodsContent .serviceList {
  width: 100%;
  height: 0.4rem;
  background: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    flex: 1;
    color: #666;
    font-size: 0.12rem;
    text-align: center;
    // float: left;

    span {
      color: red;
      margin-right: 0.075rem;
      font-size: 0.15rem;
    }
  }
}


</style>