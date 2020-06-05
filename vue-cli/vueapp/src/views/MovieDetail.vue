<template>
  <div class="movie-container" v-if="isShow">
    <div class="movie-detail">
      <img :src="movieInfo.images.small" alt="" />
      <div class="movie-content">
        <h3>{{ movieInfo.title }}</h3>
        <p>时长：{{ movieInfo.durations[0] }}分钟</p>
        <p>年份：{{ movieInfo.year }}</p>
      </div>
    </div>
    <div>
      {{ movieInfo.summary }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      movieInfo: {},
      isShow: false
    };
  },
  created() {
    axios
      .get(
        `https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/subject/${this.$route.query.id}?apikey=0df993c66c0c636e29ecbb5344252a4a`
      )
      .then((res) => {
        // console.log(res.data);
        this.movieInfo = res.data;
        this.isShow = true;
      })
      .catch((res) => {
        console.log(res);
      });
  },
};
</script>

<style lang="scss" scoped>
.movie-container {
  padding: 0.2rem;
  .movie-detail {
    display: flex;
    margin-bottom: 0.4rem;
    img {
      width: 1.8rem;
      margin-right: 0.2rem;
    }
    .movie-content {
      flex: 1;
    }
  }
}
</style>
