<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-24 09:53:47
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-24 11:25:17
 -->
<template>
    <div class="wrap">
        <header>
            <span class="back">&lt;</span>
            <span class="title">地址管理</span>
               <span class="right"></span>
        </header>
        <main>
        </main>
        <footer @click="clickJump">
            新建地址
        </footer>
    </div>
</template>

<script lang="ts">
export default {
    name:'location',
    methods: {
        clickJump(){
            this.$router.push('/addLocation')
        }
    },
}
</script>

<style lang="scss">
    @import url("./index.scss");
</style>