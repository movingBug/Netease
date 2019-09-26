<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-23 15:02:34
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-26 10:50:37
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
      <div
        v-for="(item,index) in mineList"
        :key="index"
        class="listItem"
        @click="clickItem(item.name)"
      >
      <i class="iconfont imgitem" v-if="!item.isClick" v-html="item.icon"></i>
      <i class="iconfont action" v-else v-html="item.icon"></i>
        <div v-if="!item.isClick" class="listText">{{item.name}}</div>
        <div v-else class="actionText">{{item.name}}</div>
      </div>
    </div>
    <p class="btnbox" @click="Quit">退出登录</p>
    <div class="mask" v-if="isShow">
      <Content />
    </div>
    <div v-else></div>
  </div>
</template>

<script>
import Content from "./Notunlock/index";
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
          icon: `&#xe60a;`
        },
        {
          name: "地址管理",
          isClick: true,
          icon: "&#xe503;"
        },
        {
          name: "我的订单",
          isClick: false,
          icon:"&#xe627;"
        },
        {
          name: "周末拼单",
          isClick: false,
          icon: "&#xe50c;"
        },
        {
          name: "优惠券",
          isClick: false,
          icon: "&#xe64a;"
        },
        {
          name: "优选购",
          isClick: false,
          icon: "&#xe682;"
        },
        {
          name: "我的红包",
          isClick: false,
          icon: "&#xe6e7;"
        },
        {
          name: "会员plus",
          isClick: false,
          icon: "&#xe6ab;"
        },
        {
          name: "邀请返利",
          isClick: false,
          icon: "&#xe641;"
        },
        {
          name: "意见反馈",
          isClick: false,
          icon: "&#xe616;"
        },
        {
          name: "客服咨询",
          isClick: false,
          icon: "&#xe604;"
        },
        {
          name: "账户安全",
          isClick: false,
          icon: "&#xe66e;"
        }
      ],
      isShow: false
    };
  },
  computed: mapState({
    username: state => state.login.username
  }),
  methods: {
    async clickItem(name) {
      if (name === "我的收藏") {
        this.isShow = false;
        this.$router.push("/star");
        return;
      } else if (name === "地址管理") {
        this.isShow = false;
        this.$router.push("/location");
        return;
      } else {
        await this.$store.commit("mine/changeProductName", { name });
        this.isShow = true;
        setTimeout(() => {
          this.isShow = false;
        }, 2000);
      }
    },
    async Quit() {
      await this.$store.commit("login/quitLogin");
      this.$router.push("/");
    }
  },
  mounted() {},
  components: {
    Content
  }
});
</script>
<style lang="scss">
@import url("./index.scss");
</style>
