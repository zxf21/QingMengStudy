<template>
  <header :style="{ background: $store.state.color }">
    <span class="home">首页</span>
    {{ $store.state.title }}
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  background-color: #f00;
  text-align: center;
  color: #fff;

  .home {
    position: absolute;
    left: 0.3rem;
  }
}
</style>
