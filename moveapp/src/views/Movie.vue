<template>
  <div>
    <ul class="movie-container">
      <li class="movie-list" v-for="obj in movieList" :key="obj.id">
        <img :src="obj.images.small" alt />
        <div class="movie-info">
          <h3>{{ obj.title }}</h3>
          <p>
            <span v-for="cast in obj.casts" :key="cast.id">{{ cast.name }} |</span>
          </p>
          <p>{{obj.collect_count}}</p>
          <p>{{obj.year}}</p>
          <p>
            <span v-for="(genre, index) in obj.genres" :key="index">{{genre}} |</span>
          </p>
        </div>
      </li>
    </ul>
    <img v-if="loadingShow" src="../assets/img/loading.gif" alt class="loadingImg" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      movieList: [],
      loadingShow: true
    };
  },
  created() {
    axios
      .get(
        `https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10`
      )
      .then(res => {
        console.log(res.data.subjects);
        this.movieList = res.data.subjects;
        this.loadingShow = false;
      })
      .catch(res => {
        console.log(res);
      });

    window.onscroll = () => {
      let scrollTop = document.documentElement.scrollTop;
      let clientHeight = document.documentElement.clientHeight;
      let pageHeight = document.documentElement.scrollHeight;

      if(scrollTop + clientHeight == pageHeight) {
        
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.movie-container {
  padding: 0.2rem;

  .movie-list {
    display: flex;
    padding: 0.2rem 0;
    border-bottom: 1px solid #000;

    img {
      width: 1.8rem;
      margin-right: 0.2rem;
    }

    .movie-info {
      flex-grow: 1;
    }
  }
}

.loadingImg {
  width: 1rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
