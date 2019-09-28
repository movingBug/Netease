<template>
  <div class="commentPage">
    <Header :data="data" />
    <div class="commentMain">
      <div class="commentList" v-if="commentItem">
        <div class="commentItem" v-for="item in commentItem" :key="item.id">
          <div class="userInfo">
            <div>匿名用户</div>
            <div>{{item.add_time}}</div>
          </div>
          <div class="userComment">{{item.content}}</div>
          <div class="commentPicList"></div>
        </div>
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
    return {
      data: {
        name: "查看更多评论"
      },
      page: 1,
      size: 100
    };
  },
  computed: {
    ...mapState({
      commentItem: state => state.topic.commentItem
    })
  },
  methods: {
    ...mapActions({
      commentList: "topic/commentList"
    })
  },
  created() {
    // console.log(this.$route.params);
  },
  mounted() {
    this.commentList({
      id: this.$route.params.id,
      page: this.page,
      size: this.size
    });
  }
};
</script>
<style scoped lang="scss">
.commentPage {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.commentMain {
  flex: 1;
  overflow: auto;
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
</style>