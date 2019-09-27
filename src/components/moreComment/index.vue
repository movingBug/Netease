<template>
    <div class="morewrap">
        <div class="header">
              <span class="back" @click="gomoreback()"><i class="iconfont icon-chevron-thin-left"></i></span>
              <span>查看更多留言</span>
              <span></span>
        </div>
    </div>
</template>

<script>
    export default {
        name:"moreComment",
        data(){
            return{

            }
        },
        methods:{
            gomoreback(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>