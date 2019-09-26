<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-24 09:53:47
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-24 15:43:41
 -->
<template>
    <div class="wrap">
        <header>
            <span class="back" @click="clickBack">&lt;</span>
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

<script>
export default {
    name:'location',
    methods: {
        clickJump(){
            this.$router.push('/addLocation')
        },
        clickBack(){
            this.$router.push('/home/my')
        }
    },
}
</script>

<style lang="scss">
    @import url("./index.scss");
</style>