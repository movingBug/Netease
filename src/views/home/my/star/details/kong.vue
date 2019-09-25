<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-25 14:55:28
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-25 14:57:08
 -->
<template lang="">
    <div>
        
    </div>
</template>

<script>
export default {
  name: "kong",
  methods: {
    jumpDetails() {
      this.$router.replace(`/productDetails/${this.$route.params.id}`);
    }
  },
  mounted() {
      this.jumpDetails();
  },
};
</script>