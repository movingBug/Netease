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
.textAreaContent{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
}
.textAreaContent textarea{
  border: 1px solid #e6e6ee;
  padding:5px;
  line-height: 24px;
  border-radius: 5px;
  width: 360px;
  margin-top: .5rem;
  height: 160px;
  outline: none;
}
.btn{
    border: none;
    outline: none;
    background: #41cffd;
    color: #fff;
    padding: .5rem 2rem;
    position: absolute;
    right: .7rem;
    margin-top: .2rem;
    border-radius: .5rem;
}
</style>