<template>
  <div>
    <ul class="movie-container" v-if="isShow">
      <li
        class="movie-list"
        v-for="obj in movieList"
        :key="obj.id"
        @click="$router.push({ path: '/movie-detail', query: { id: obj.id } })"
      >
        <img :src="obj.images.small" alt />
        <div class="content">
          <h3>{{ obj.title }}</h3>
          <p>
            <span v-for="cast in obj.casts" :key="cast.id"
              >{{ cast.name }} |</span
            >
          </p>
          <p>{{ obj.collect_count }}</p>
          <p>{{ obj.year }}</p>
          <p>
            <span v-for="(genre, index) in obj.genres" :key="index"
              >{{ genre }} |</span
            >
          </p>
        </div>
      </li>
    </ul>
    <img
      class="loading"
      v-if="loadingShow"
      src="../assets/img/loading.gif"
      alt
    />
  </div>
</template>

<script>
import axios from "axios";
/*  
  浏览器安全起见 同源策略
  域名 协议 端口只要有一个不同就是跨域

  解决方式 jsonbird
*/
export default {
  data() {
    return {
      movieList: [],
      isShow: false, //控制电影列表显示或隐藏
      loadingShow: true, //控制loadind图片的显示隐藏
    };
  },
  created() {
    //
    this.getMovie(0);
    //判断滚动条滚动出去的高度+屏幕的高度=整个页面的高度
    window.onscroll = () => {
      let scrollTop = document.documentElement.scrollTop;
      let clientHeight = document.documentElement.clientHeight;
      let pageHeight = document.documentElement.scrollHeight;
      // console.log(scrollTop,clientHeight,pageHeight);
      if (scrollTop + clientHeight == pageHeight) {
        this.getMovie(this.movieList.length);
      }
    };
  },
  methods: {
    getMovie(start) {
      this.loadingShow = true;
      axios
        .get(
          `https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${start}&count=10`
        )
        .then((res) => {
          console.log(res.data.subjects);
          this.movieList = [...this.movieList, ...res.data.subjects];
          this.isShow = true;
          this.loadingShow = false;
        })
        .catch((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
$number: 0.2rem;
.movie-container {
  padding: $number;

  .movie-list {
    display: flex;
    margin-bottom: $number;
    border-bottom: 1px solid #000;
    padding: $number 0;
    img {
      width: 1.8rem;
      margin-right: $number;
    }

    .content {
      flex-grow: 1;

      h3 {
        font-size: 25px;
      }
    }
  }
}

.loading {
  width: 1rem;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
