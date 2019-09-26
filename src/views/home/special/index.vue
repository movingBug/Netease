<template>
  <div class="wrap">
    <div class="list">
        <dl v-for="item in imgData" :key="item.id" :cont="item" @click="getDatadetail(item.id)">
          <dt>
            <img :src="item.scene_pic_url" alt=""/>
          </dt>
          <dd>
            <h4>{{item.title}}</h4>
            <p>{{item.subtitle}}</p>
            <span>{{item.price_info}}元起</span>
          </dd>
        </dl>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {getData} from '@/api/index'
console.log(getData)
export default Vue.extend({
  name: 'Special',
  components: {

  },
  data(){
    return{
        imgData:[]
    }
  },
  methods:{
      async _getData(){
          const reset = await getData()
          console.log(reset.data.data)  
          this.imgData = reset.data.data
      },
      getDatadetail(id:any){
        console.log(this.$router) 
        this.$router.push({name:"topicdetail",params:{id}})
      }
  },
  mounted(){
    this._getData()
  },
 
})
</script>
<style>
  .list{
    width: 100%;
  }
  .list dl{
    width: 100%;
  }
  .list dl dt{
    width: 100%;
  }
  .list dl dt img{
    width: 100%;
    height: 13rem;
  }
  .list dl dd{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: .6rem;
  }
  .list dl dd h4{
    font-weight: normal;
  }
  .list dl dd p{
    font-size:81.3%;
    line-height: 2rem;
    color: #6e6c6c;
  }
  .list dl dd span{
    color: red;
    font-size: 87.5%;
  }
</style>

