<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-23 15:02:34
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-24 07:55:41
 -->
<template>
  <div class="minePage">
    <div class="userMessage">
      <div class="portrait"></div>
      <div class="userMgs">
        <div class="username">{{this.username}}</div>
        <div class="identity">普通用户</div>
      </div>
    </div>
    <div class="userlist">
      <div v-for="(item,index) in mineList" :key="index" class="listItem">
        <img :src="item.icon" v-if="!item.isClick" class="imgitem" />
        <img :src="item.icon" v-else class="action" />
        <div v-if="!item.isClick" class="listText">{{item.name}}</div>
        <div v-else class="actionText">{{item.name}}</div>
      </div>
    </div>
    <p class="btnbox">
      退出登录
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "My",
  data() {
    return {
      mineList: [
        {
          name: "我的收藏",
          isClick: true,
          icon: require("@/assets/shoucang.png")
        },
        {
          name: "地址管理",
          isClick: true,
          icon: require("@/assets/dizhiguanli.png")
        },
        {
          name: "我的订单",
          isClick: false,
          icon: require("@/assets/wodedingdan.png")
        },
        {
          name: "周末拼单",
          isClick: false,
          icon: require("@/assets/rili.png")
        },
        {
          name: "优惠券",
          isClick: false,
          icon: require("@/assets/youhuiquan.png")
        },
        {
          name: "优选购",
          isClick: false,
          icon: require("@/assets/you.png")
        },
        {
          name: "我的红包",
          isClick: false,
          icon: require("@/assets/hongbao.png")
        },
        {
          name: "会员plus",
          isClick: false,
          icon: require("@/assets/vip.png")
        },
        {
          name: "邀请返利",
          isClick: false,
          icon: require("@/assets/yao.png")
        },
        {
          name: "意见反馈",
          isClick: false,
          icon: require("@/assets/fankui.png")
        },
        {
          name: "客服咨询",
          isClick: false,
          icon: require("@/assets/kefu.png")
        },
        {
          name: "账户安全",
          isClick: false,
          icon: require("@/assets/zhanghuanquan.png")
        }
      ]
    };
  },
  computed: mapState({
    username: (state: any) => state.login.username
  }),
  methods: {},
  mounted() {
    console.log(this);
  }
});
</script>
<style lang="scss">
@import url("./index.scss");
</style>
