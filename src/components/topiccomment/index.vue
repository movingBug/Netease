<template>
    <div class="commentwrite"> 
        <div class="header">
              <span class="back" @click="goback()"><i class="iconfont icon-chevron-thin-left"></i></span>
              <span>填写留言</span>
              <span></span>
        </div>
        <div class="textAreaContent">
             <textarea className="text" @click="input()" maxlength="80"/>

        </div>
        <button @click="sendData()">留言</button>
    </div>
</template>

<script>
import "../../fonts/iconfont.css"
    export default {
        data(){
            return{
                content:""
            }
        },
        methods:{
            goback(){
                this.$router.go(-1)
            },
            
        }
    }
</script>

<style>
.commentwrite{
  width: 100%;
  height: 100%;
  background-color: #e4e3e3;
  overflow-x: hidden;
}
.header{
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  background: #fff;
  justify-content: space-between;
}
</style>