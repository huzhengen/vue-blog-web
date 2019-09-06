<template>
  <div class="article">
    <h1>{{blog.title}}</h1>
    <p>{{blog.content}}</p>
  </div>
</template>
<script>
import request from "../helper/request";
export default {
  name: "Article",
  data() {
    return {
      blog: {}
    };
  },
  created() {
    this.getBlog();
  },
  methods: {
    getBlog() {
      let blogId = this.$route.params.blogId;
      request(`/blogs/${blogId}`, "get").then(res => {
        console.log(res);
        this.blog = res.data;
      });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>