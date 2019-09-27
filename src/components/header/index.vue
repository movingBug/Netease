<template>
  <div class="AllHeader" v-if="data">
    <span @click="reactive">&lt;</span>
    <span v-if="data.name">{{data.name}}</span>
    <span v-if="data.title">{{data.title}}</span>
    <span></span>
  </div>
</template>
<script>
export default {
  props: ["data"],
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    reactive() {
      this.$router.go(-1);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.AllHeader {
  width: 100%;
  height: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

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
</style>