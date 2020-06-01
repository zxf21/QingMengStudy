<template>
  <div id="app">
    <common-header></common-header>
    <div class="container">
      <router-view></router-view>
    </div>
    <common-footer></common-footer>
  </div>
</template>
<script>
import CommonHeader from './components/CommonHeader'
import CommonFooter from './components/CommonFooter'
export default {
  components: {
    CommonHeader,
    CommonFooter
  }
}
</script>

<style lang="scss" scoped>
  #app {


    .container {
      margin: 1rem 0;
    }
  }
</style>
