<template>
  <div class="categoryPage">
    <div class="cateTitle">
      <span @click="revert">&lt;</span>
      <span>奇趣分类</span>
      <span>{{this.$route.query.id}}</span>
    </div>
    <div class="tabWrap">
      <ul class="tabs-ul">
        <li v-for="(item,index) in data.brotherCategory" :key="item.id" @click="e=>tabData(item)">{{item.name}}</li>
      </ul>
    </div>
    <div class="cateMain">
      <!-- <router-view /> -->
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  components: {},
  data() {
    return {
      selectedId: 0,
      items: [],
      // id:1005000,
      options: {
        activeColor: "#1d98bd"
      }
    };
  },

  computed: {
    ...mapState({
      data: state => state.First.data
    })
  },
  methods: {
    revert() {
      this.$router.go(-1);
    },

    ...mapMutations({
        tabData:"First/tabData"
    })

    // jurp(selectedId,items) {
    //   this.TabData(items[selectedId].id)
    // },
  },

  created() {
    // this.data.brotherCategory.map(items => {
    //   this.items.push({ label: items.name, id: items.id });
    // });
    // console.log(this.data)
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.categoryPage {
  padding-top: 0.54rem;
  min-height: 100%;
}

.cateTitle {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.5rem;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  display: flex;
  border-bottom: 0.005rem solid #eee;

  span {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span:nth-child(1) {
    flex: 1;
    font-size: 0.2rem;
    cursor: pointer;
  }
  span:nth-child(2) {
    flex: 8;
    font-size: 0.16rem;
  }
  span:nth-child(3) {
    flex: 1;
  }
}

.tabWrap {
  position: fixed;
  top: 0.53rem;
  left: 0;
  width: 100%;
  height: 0.32rem;
  z-index: 10;
}

.tabs-ul {
  width: 100%;
  height: 100%;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  li {
    flex: 1;
    height: 100%;
    text-align: center;
    padding: 0 0.25rem;
    line-height: 0.32rem;
    position: relative;
  }

  // li::after {
  //   content: "";
  //   position: absolute;
  //   background-color: #ddd;
  //   display: block;
  //   z-index: 1;
  //   top: auto;
  //   right: auto;
  //   bottom: 0;
  //   left: 0;
  //   width: 100%;
  //   height:0.05rem;
  //   transform-origin: 50% 100%;
  //   transform: scaleY(0.5);
  // }
}

.tabs-ul::-webkit-scrollbar {
  display: none;
}
</style>