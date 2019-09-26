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
        <div class="commentList">
          <div class="commentItem">
            <div class="userInfo">
              <div>匿名用户</div>
              <div>2017-05-15 10:06:01</div>
            </div>
            <div class="userComment">是记忆棉 很满意</div>
            <div class="commentPicList"></div>
          </div>
        </div>
        <a class="moreComment" href="#/comment/314?typeId=1">查看更多评论</a>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../../../components/header/index.vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  props: {},
  components: {
    Header
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      topicData: state => state.topic.topicData
    })
  },
  methods: {
    ...mapActions({
      TopicData: "topic/TopicData"
    })
  },
  created() {
    this.TopicData(this.$route.params.id);
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
}
</style>