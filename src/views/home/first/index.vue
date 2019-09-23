<template>
  <div class="home">this is first page</div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default Vue.extend({
  name: "First",
  components: {
    // 获取首页数据
  },
  methods: {
     ...mapActions({
        'getData':"First/getData"
     })
  },
  created () {
      this.getData()
  }
});
</script>
