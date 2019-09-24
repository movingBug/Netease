<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-24 07:59:11
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-24 09:19:06
 -->
<template>
    <div class="content">
      <img src="@/assets/bukaixin.png" />
      <div>{{this.productName}}还未解锁，请耐心等待~</div>
    </div>
</template>

<script lang="ts">
import { mapState } from "vuex";
import Vue from "vue";
export default Vue.extend({
  name: "notUnlock",
  computed: mapState({
    productName: (state: any) => state.mine.productName
  })
});
</script>>