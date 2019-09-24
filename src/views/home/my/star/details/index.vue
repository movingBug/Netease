<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-24 20:23:33
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-24 21:32:57
 -->
<template>
  <div class="wrap">
    <header>
      <!-- {{this}} -->
    </header>
    <main>

    </main>
    <footer>
      
    </footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "productDetails",
  methods: {
    initGetData() {
      this.$store.dispatch("mine/getDetails", { id: this.productId });
    }
  },
  computed: mapState({
    productId: state => state.mine.productId
  }),
  mounted() {
    this.initGetData();
  }
};
</script>

<style lang="scss">
</style>