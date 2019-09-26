<template>
    <div class="commentwrite"> 
        <div class="header">
              <span class="back" @click="goback()"><i class="iconfont icon-chevron-thin-left"></i></span>
              <span>填写留言</span>
              <span></span>
        </div>
        <div class="textAreaContent">
          <textarea :ref="message"
            type="text" 
            :value="value"  
            @input="updateValue" 
            placeholder="请输入留言内容"
            maxlength="80px"
            ></textarea>

        </div>
        <button class="btn" @click="sendData()">留言</button>
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
        props: {
            value: {
                type: String,
                default: ''
            }
        },
        methods:{
            goback(){
                this.$router.go(-1)
            },
            updateValue: function (event) {
                this.$emit('input', event.target.value)
            },
            focus: function () {
                this.$refs.message.focus()
            }
        }
    }
</script>

<style>
html {
    font-size: calc(100/375*100vw)
}
.commentwrite{
  width: 100%;
  height: 100%;
  background-color: #e4e3e3;
  overflow-x: hidden;
}
.header{
  width: 100%;
  height: .44rem;
  display: flex;
  align-items: center;
  background: #fff;
  justify-content: space-between;
}
.header span{
    font-size: .16rem
}
.textAreaContent{
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
}
.textAreaContent textarea{
  border: 1px solid #e6e6ee;
  padding:.05rem;
  line-height: .24rem;
  border-radius: .05rem;
  width: 3.6rem;
  margin-top: .05rem;
  height: 1.6rem;
  outline: none;
}
.btn{
    border: none;
    outline: none;
    background: #41cffd;
    color: #fff;
    padding: .05rem .2rem;
    position: absolute;
    right: .07rem;
    margin-top: .02rem;
    border-radius: .5rem;
}
</style>