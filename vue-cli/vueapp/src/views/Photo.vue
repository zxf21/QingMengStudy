<template>
  <div>
    <img
      v-for="(obj, index) in photodata"
      :key="index"
      :src="obj.src"
      @click="showImg(index)"
      alt=""
    />
    <!-- 遮罩层 -->
    <v-touch
      class="bigImg"
      v-show="isShow"
      :style="{ backgroundImage: url }"
      @swipeleft="left()"
      @swiperight="right()"
      @click.native="isShow = false"
    ></v-touch>
  </div>
</template>

<script>
import Vue from "vue";
import VueTouch from "vue-touch";
import axios from "axios";
Vue.use(VueTouch, { name: "v-touch" });

export default {
  data() {
    return {
      photodata: [],
      isShow: false,
      iNow: 0, //记录当前显示图片的索引
    };
  },
  computed: {
    //background-images: url('xx.jpg')
    url() {
      let url = "";
      if (this.photodata.length > 0) {
        url = `url(${this.photodata[this.iNow].src})`;
      }
      return url;
    },
  },
  created() {
    axios
      .get("/data/photodata.json")
      .then((res) => {
        console.log(res.data);
        this.photodata = res.data.photoData;
      })
      .catch((res) => {
        console.log(res);
      });
  },
  methods: {
    showImg(index) {
      this.isShow = true;
      this.iNow = index; //当前图片的索引与data中的索引相对应
    },
    left() {
      //左滑显示下一张图
      this.iNow++;
      if (this.iNow > this.photodata.length - 1) {
        this.iNow = 0;
      }
    },
    right() {
      this.iNow--;
      if (this.iNow < 0) {
        this.iNow = this.photodata.length - 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 50%;
}
.bigImg {
  position: fixed;
  top: 1rem;
  left: 0;
  bottom: 1rem;
  right: 0;
  background: #000 center center no-repeat;
  background-size: contain;
}
</style>
