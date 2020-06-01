<template>
  <footer :style="{background: $store.state.color}">
    <!-- <router-link to="/movie">电影</router-link>
    <router-link to="/music">音乐</router-link>
    <router-link to="/book">书籍</router-link>
    <router-link to="/photo">图片</router-link> -->
    <router-link 
    v-for="(obj, index) in menu" 
    :key="index" 
    :to="obj.path"
    @click.native="change(obj)"
    >
    {{obj.title}}
    </router-link>
  </footer>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
  data() {
    return {
      menu: [
        {
          path: '/movie',
          title: '电影',
          color: "#ff0033"
        },
        {
          path: '/music',
          title: '音乐',
          color: "#31c27c"
        },
        {
          path: '/book',
          title: '书籍',
          color: "orange"
        },
        {
          path: '/photo',
          title: '图片',
          color: "#0099ff"
        },
      ]
    }
  },
  methods: {
    ...mapMutations(['change'])
  },
  created() {
    // this.$route.path
    this.menu.forEach((obj) => {
      //如果当前路径跟menu的某个匹配的，修改成匹配的颜色
      if(obj.path == this.$route.path) {
        this.change(obj)
      }
    })
  },
}
</script>

<style lang='scss' scoped>
  footer {
    position: fixed;
    bottom: 0;
    height: 1rem;
    width: 100%;
    line-height: 1rem;
    background-color: #f00;
    text-align: center;
    color: #fff;
    display: flex;

    a {
      flex-grow: 1;
      outline: none;
      color: #000;
      cursor: pointer;
    }
    .router-link-active {
      color: #fff;
      text-decoration: none;
    }
  }
</style>