<template>
    <div class="commentwrite"> 
        <div class="header">
              <span class="back" @click="goback()"><i class="iconfont icon-chevron-thin-left"></i></span>
              <span>填写留言</span>
              <span></span>
        </div>
        <div class="textAreaContent">
          <textarea class="inputArea"
            type="text" 
            v-model="val" 
            @input="InputData" 
            placeholder="请输入留言内容"
            maxlength="80"
            ></textarea>
            <span>{{text.length}}/80</span>
        </div>
       <div class="buttons">
            <div class="clean" v-if="text!==''" @click="cleanClick">
                <span>清空</span>
            </div>
            <div class="lange" @click="langeClick">
                <span>留言</span>
            </div>
        </div>
    </div>
</template>

<script>
import "../../fonts/iconfont.css"
    export default {
        data(){
            return{
                  text:''
            }
        },
        mounted(){
            const id = this.$route.params.id;
        },
        methods:{
            goback(){
                this.$router.go(-1)
            },
            InputData(e){
                this.text = e.target.value
            },
            cleanClick(){
                this.text=''
            },
            langeClick(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="scss" scoped>
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
.textAreaContent span{
    font-size: .14rem;
    position: absolute;
    bottom: 0;
    right: .1rem;
}
.buttons{
    width: 100%;
    height: auto;
    padding: .1rem .2rem;
    display: flex;
    justify-content: space-between;
    div{
        flex: 5;
        cursor: pointer;
        span{
            display: inline-block;
            width: 1rem;
            height: .3rem;
            line-height: .3rem;
            padding: 0 .15rem;
            border-radius: 5px;
            text-align: center;
            font-size: .14rem
        }
    }
    .clean>span{
            background-color:#108ee9;
            color: #fff;
            float: left;
    }
    .lange>span{
        background-color: #108ee9;
        color: #fff;
        float: right;
    }
}
</style>