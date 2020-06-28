<template>
  <footer :style="{ background: $store.state.color }">
    <router-link
      @click.native="change(obj)"
      v-for="(obj, index) in menu"
      :key="index"
      :to="obj.path"
      >{{ obj.title }}</router-link
    >
  </footer>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      menu: [
        {
          path: "/movie",
          title: "电影",
          color: "red",
        },
        {
          path: "/music",
          title: "音乐",
          color: "rgb(49, 194, 124)",
        },
        {
          path: "/book",
          title: "书籍",
          color: "orange",
        },
        {
          path: "/photo",
          title: "图片",
          color: "rgb(0, 153, 255)",
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["change"]),
  },
  created() {
    this.menu.forEach((obj) => {
      if (this.$route.path.includes(obj.path)) {
        this.change(obj);
      }
    });
  },
};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  background-color: #f00;
  text-align: center;

  a {
    color: #000;
    outline: none;
    flex-grow: 1;
  }

  .router-link-active {
    color: #fff;
  }
}
</style>
