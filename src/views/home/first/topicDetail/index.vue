<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-28 17:15:54
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-28 17:15:54
 -->
<template>
  <div class="TopicPage">
    <Header :data="topicData" />
    <div class="TopicMain">
      <div class="wrapImg" v-html="topicData.content"></div>
      <div class="commentWrap">
        <div class="titleLine">
          <div class="titleName">精选留言</div>
          <div class="titleIcon">
            <i class="iconfont icon-pencil" aria-hidden="true"></i>
          </div>
        </div>
        <div class="commentList" v-if="commentList">
          <div class="commentItem" v-for="item in commentList" :key="item.id">
            <div class="userInfo">
              <div>匿名用户</div>
              <div>{{item.add_time}}</div>
            </div>
            <div class="userComment">{{item.content}}</div>
            <div class="commentPicList"></div>
          </div>
        </div>
        <router-link class="moreComment" :to="'/comment/'+this.$route.params.id">查看更多评论</router-link>
      </div>
      <div class="relateTopic" v-if="relate">
        <div class="relateTopicTitle">推荐专题</div>
        <div class="relateTopicItem" v-for="item in relate" :key="item.id">
          <img
            class="imgLazyload loadEnd"
            v-lazy="item.scene_pic_url"
            alt="imgLazyLoad"
          />
          <div>{{item.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header/index.vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  props: {},
  components: {
    Header
  },
  data() {
    return {
      page: 1,
      size: 5
    };
  },
  computed: {
    ...mapState({
      topicData: state => state.topic.topicData,
      commentList: state => state.topic.commentList,
      relate: state => state.topic.relate
    })
  },
  methods: {
    ...mapActions({
      TopicData: "topic/TopicData",
      comment: "topic/comment",
      Related: "topic/Related"
    })
  },
  created() {
    this.TopicData(this.$route.params.id);
    this.Related(this.$route.params.id);
    this.comment({
      id: this.$route.params.id,
      page: this.page,
      size: this.size
    });
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
@import url("./index.scss");

.TopicPage {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.TopicMain {
  flex: 1;
  overflow: auto;
  background: #eee;

  .wrapImg {
    width: 100%;

    img {
      width: 100%;
      height: auto;
      display: inline-block;
    }
  }

  .commentWrap {
    width: 100%;
    height: auto;
    background: white;
    margin-top: 0.1rem;
  }
  .commentWrap .titleLine {
    width: 100%;
    height: 0.5rem;
    position: relative;
    display: flex;
    box-sizing: border-box;
  }

  .commentWrap .titleLine div.titleName {
    flex: 1;
    height: 100%;
    width: 100%;
    line-height: 0.5rem;
    font-size: 0.15rem;
    padding: 0 0.1rem;
  }

  .commentWrap .titleLine div.titleIcon {
    width: 0.5rem;
    height: auto;
    line-height: 0.5rem;
    text-align: right;
    font-size: 0.2rem;
  }

  .commentWrap .titleLine:after {
    content: "";
    width: 200%;
    height: 1px;
    position: absolute;
    bottom: 0;
    transform: scale(0.5);
    transform-origin: 0;
    background-color: gray;
  }

  .commentList {
    background: white;
    padding: 0.1rem;
  }

  .commentList .commentItem {
    width: 100%;
    height: auto;
    position: relative;
    background: white;
    color: gray;
    padding-bottom: 0.05rem;
  }

  .commentList .commentItem .userInfo {
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.12rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .commentList .commentItem .userInfo div:nth-child(1) {
    flex: 1;
    color: black;
  }
  .commentList .commentItem .userInfo div:nth-child(2) {
    width: auto;
  }

  .commentList .commentItem .userComment {
    line-height: 0.3rem;
    font-size: 0.15rem;
  }

  .commentList .commentItem .commentPicList {
    display: flex;
  }

  .commentList .commentItem:after {
    content: "";
    width: 200%;
    height: 1px;
    position: absolute;
    bottom: 0;
    transform: scale(0.5);
    transform-origin: 0;
    background-color: gray;
  }

  .commentWrap .moreComment {
    line-height: 0.4rem;
    text-align: center;
    display: block;
    text-decoration: none;
    color: black;
    cursor: pointer;
  }

  .relateTopic {
    margin-top: 0.1rem;
    padding: 0 0.1rem;
  }

  .relateTopic .relateTopicTitle {
    line-height: 0.4rem;
    text-align: center;
  }

  .relateTopic .relateTopicItem {
    background: white;
    padding: 0.1rem 0.1rem 0 0.1rem;
    margin-bottom: 0.1rem;
    display: block;
  }

  .relateTopic .relateTopicItem img {
    width: 100%;
    height: 2rem;
  }

  .relateTopic .relateTopicItem div {
    line-height: 0.5rem;
    color: gray;
    font-size: 0.14rem;
  }
}
</style>