<template>
  <header :style="{background: $store.state.color}">
    <span class="title" @click="goHome()">首页</span>
    {{$store.state.title}}
  </header>
</template>

<script>
export default {
  name: 'HeaderNav',
  methods: {
    //路径跳转首页
    goHome(){
      this.$router.push('/movie') ;
      //触发mutations中的change方法修改state中存的color和title
      this.$store.commit('change',{color:'red',title:'电影'})
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 1rem;
    background-color: #f00;
    line-height: 1rem;
    color: #fff;
    text-align: center;

    .title {
      position: absolute;
      left: 0.1rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>
