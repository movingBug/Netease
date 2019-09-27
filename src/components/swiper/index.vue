<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-27 15:10:34
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-27 16:19:15
 -->
<template>
  <swiper :options="options" class="swiper-wrap" ref="mySwiper" v-if="list.length!=0">
    <swiper-slide v-for="(item,index) in list" :key="index" class="swiper-container">
      <img v-if="item.image_url" :src="item.image_url" alt />
      <img v-if="item.img_url" :src="item.img_url" alt="loadding" />
    </swiper-slide>
    <!-- 常见的小圆点 -->
    <div class="swiper-pagination" v-for="(item,index) in list" :key="index" slot="pagination"></div>
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper"

export default {
  props: ["options", "list"],
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.swiper-wrap {
  width: 100%;
  height: auto;
}

.swiper-container {
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>