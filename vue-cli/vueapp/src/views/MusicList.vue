<template>
  <div>
    <Aplayer v-if="isShow"
      autoplay
      :music="musicData[0]"
      :list="musicData"
      showLrc
    />
    <!-- {{$route.query.id}} -->
  </div>
</template>

<script>
import Aplayer from 'vue-aplayer'
import axios from 'axios'
export default {
  data(){
    return {
      musicData: [],
      isShow: false,
    }
  },
  components: {
    Aplayer
  },
  created(){
    axios.get('data/musicdata.json')
    .then((res)=>{
      this.musicData = res.data.musicData;
      this.isShow = true;
    }).catch(()=>{
      console.log('失败')
    })
  }
}
</script>

<style lang="scss" scoped>

</style>