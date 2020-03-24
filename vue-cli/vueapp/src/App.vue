<template>
  <div id="app">
    <HeaderNav />
    <div id="container">
      <router-view></router-view>
    </div>
    <!-- <router-view /> -->
    <FooterNav />
    <!-- <Home /> -->
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav"
import FooterNav from "@/components/FooterNav"
export default {
  components: {
    HeaderNav,
    FooterNav
  }
}
</script>

<style lang="scss">
  #app {
    font-family: Avenir,Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
#container {
  margin: 1rem 0;
}
</style>