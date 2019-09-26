<!--
<<<<<<< HEAD
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-23 15:02:34
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-23 19:32:25
 -->
<template>
  <div class="loginBox">
    <div class="logo">
      <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt />
    </div>
    <div class="loginMain">
      <p class="userinput">
        <input type="text" v-model="mobile" />
      </p>
      <p class="passwordInput">
        <input type="password" v-model="password" />
      </p>
      <div class="loginbtn">
        <input type="button" value="登录" @click="loginTest" />
      </div>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
import { mapState } from "vuex";
export default {
  name: "login",
  data() {
    return {
      mobile: "15323807318",
      password: "123456"
    };
  },
  computed: mapState({
    msg: state => state.login.msg
  }),
  methods: {
    async loginTest() {
      if (this.mobile !== "" && this.password !== "") {
        let params = {
          mobile: this.mobile,
          password: this.password
        };
        await this.$store.dispatch("login/logintest", params);
        alert(this.msg);
        if (this.msg === "登录成功") {
          this.$router.push("/home");
        } else {
          return;
        }
      } else {
        alert("请完善信息");
      }
    },
    getSessionKey() {
      const key = window.localStorage.getItem("sessionKey");
      if (key) {
        this.$router.push("/home");
      } else {
        return;
      }
    }
  },
  mounted() {
    this.getSessionKey();
  }
};
</script>
<style lang="scss">
@import url("./index.scss");
</style>
=======
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 14:32:22
 * @LastEditTime: 2019-09-23 14:32:22
 * @LastEditors: your name
 -->
<template>
  <div class="about">
    <h1>This is an login page</h1>
  </div>
</template>
>>>>>>> fb747870daa7fe444d1999475d3fefda0139ae8c
