<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-27 10:46:48
 * @LastEditTime: 2019-09-27 10:58:21
 * @LastEditors: Please set LastEditors
 -->
<template>
       <div class='scrollref'>
               我是一个组件
       </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {mapState,mapActions} from 'vuex'
export default Vue.extend({
     props: ['postTitle'],
    data(){
        return({
            
        })
    },
    computed:{

    },
    methods:{
        ...mapActions([''])
    },
    mounted(){
        
    }
})
</script>
<style lang="stylus" scoped>

</style>