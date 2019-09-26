<template>
  <div class="wrap">
    
    <div class="header">
          <span class="back" @click="goback()"><i class="iconfont icon-chevron-thin-left"></i></span>
          <span>{{detailData.title}}</span>
          <span></span>
    </div>
    <div class="topicDetailImg" v-html="detailData.content">
    </div>
    <div class="commentwrap">
      <div class="titleline">
        <div class="titlename">精选留言</div>
        <div class="titleicon" @click="gowrite()"><i class="iconfont icon-bianji"></i></div>
      </div>
      <div class="commentList">
          <div class="commentListItem" v-for="item in commentData" :key="item.id">
              <div class="userInfo">
                <div>{{item.add_time}}</div>  
              </div> 
              <div class="userComment">
                {{item.content}}
              </div>
          </div>
      </div>
    </div>
    <div class="relateTopic">
      <div class="relateTopicTitle">推荐专题</div>
      <div class="relateTopicItem" v-for="val in relatedData" :key="val.id">
          <img :src="val.scene_pic_url" alt=""/>
          <span>{{val.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import "../../fonts/iconfont.css"
import { getDatadetail } from "@/api/index";
import { getDatacomment } from '@/api/index';
import { getDatarelated } from '@/api/index'
export default {
  name: "Topicdetail",
  data() {
    return { 
      detailData: {},
      commentData:{},
      relatedData:{}
    };
  },
  
  methods: {
    async _getDatadetail(id) {
      const reset = await getDatadetail(id);
      console.log(reset);
       this.detailData = reset.data
    },
    goback(){
      this.$router.go(-1)
    },
    gowrite(){
      this.$router.push({name:"topiccomment"})
    },
    async _getDatacomment(id,size){
        const reset = await getDatacomment(id,size)
        console.log(reset.data)  
        this.commentData = reset.data
    },
    async _getDatarelated(id) {
      const reset = await getDatarelated(id);
      console.log(reset.data);
       this.relatedData = reset.data
    }
  },

  mounted() {
    const id = this.$route.params.id;
    this._getDatadetail(id);
    this._getDatacomment(id)
    this._getDatarelated(id)
  }
};
</script>

<style>
html {
    font-size: calc(100/375*100vw)
}
.wrap {
  width: 100%;
  height: 100%;
  background-color: #e4e3e3;
  overflow-x: hidden;
}
.header{
  width: 100%;
  height: .6rem;
  display: flex;
  align-items: center;
  background: #fff;
  justify-content: space-around;
  position: fixed;
  top: 0;
  font-size: .16rem;
}
.topicDetailImg img {
    width: 100%;
    height: auto;
    display: block;
    border-style: none;
}

.commentwrap{
  width: 100%;
  background: #fff;
  margin-top: .1rem;
} 

.titleline{
  width: 100%;
  display: flex;
  line-height: .45rem;
  padding-left: .1rem;
  border-bottom: .01rem solid #ccc;
  position: relative;
}
.titlename{
  font-size: .16rem;
  
}

.titleicon i{
  position: absolute;
  right: .1rem;
}
.relateTopic{
  width: 100%;
}
.relateTopicTitle{
  width: 100%;
  line-height: .4rem;
  text-align: center;
  font-size: .16rem;
}
.relateTopicItem{
  width: 94%;
  background: #fff;
  padding: .1rem;
  margin-bottom: .1rem;
  margin-left:.1rem;

}
.relateTopicItem img{
  width: 100%;
  height: 2.5rem;
}
.relateTopicItem span{
  color: #777474;
  line-height: .02rem;
  font-size: .16rem;
}
</style>