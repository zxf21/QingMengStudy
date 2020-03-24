<template>
  <footer :style="{background:$store.state.color}">
    <!-- <router-link to="/movie">电影</router-link>
    <router-link to="/music">音乐</router-link>
    <router-link to="/book">书籍</router-link>
    <router-link to="/photo">图片</router-link> -->
    <router-link 
    v-for="(obj,index) in menu" 
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
  name: 'FooterNav',
  data(){
    return {
      menu: [
        {
          path: '/movie',
          title: '电影',
          color: '#fd4d4d'
        },{
          path: '/music',
          title: '音乐',
          color: '#f9712c'
        },{
          path: '/book',
          title: '书籍',
          color: '#31c27c'
        },{
          path: '/photo',
          title: '图片',
          color: '#23b8ff'
        },
      ]
    }
  },
  methods:{
    ...mapMutations(['change'])
  },
  created(){
    // this.$route.path
    this.menu.forEach((obj)=>{
      //如果当前路径 跟menu中的某个匹配
      if(this.$route.path.includes(obj.path)){//music-list 包含/music
        this.change(obj)
      }
    })
  },
}
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 1rem;
  line-height: 1rem;
  background-color: #f00;
  color: #fff;
  width: 100%;
  text-align: center;

  a {
    flex-grow: 1;
    color: #000;
    cursor: pointer;
    outline: none;
  }

  .router-link-active {
    color: #fff;
  }
}
</style>