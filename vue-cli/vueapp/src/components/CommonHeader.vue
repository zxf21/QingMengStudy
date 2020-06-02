<template>
  <header :style="{background: $store.state.color}">
    <span @click="goHome()" class="home">首页</span>
    {{$store.state.title}}
  </header>
</template>

<script>
export default {
  methods: {
    goHome() {
      //路径跳转首页
      this.$router.push('/movie');
      //触发mutations中的change方法修改state中存的color和title
      this.$store.commit('change', {color: 'red', title: '电影'})
    }
  }

}
</script>

<style lang='scss' scoped>
header {
  width: 100%;
  height: 1rem;
  background-color: #f00;
  line-height: 1rem;
  text-align: center;
  position: fixed;
  top: 0;
  color: #fff;

  .home {
    position: absolute;
    left: 0.3rem;
  }
}

</style>