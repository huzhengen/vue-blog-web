<template>
  <div class="index">
    <h1>我的所有博客</h1>
    <ul>
      <li v-for="blog in blogs" :key="blog.id">
        <router-link :to="`/blog/${blog.id}`">{{blog.title}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import request from "../helper/request";
import { mapState, mapActions } from "vuex";
export default {
  name: "Index",
  data() {
    return {
      blogs: []
    };
  },
  computed: mapState(["user", "isLogin"]),
  created() {
    this.getBlogs();
  },
  methods: {
    getBlogs() {
      request(`/blogs/user/${this.user.id}`, "get").then(res => {
        console.log(res);
        this.blogs = res.data;
      });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>