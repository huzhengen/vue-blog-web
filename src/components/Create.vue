<template>
  <div class="create">
    <h1>发布新闻</h1>
    <h3>文章标题</h3>
    <el-input v-model="title" placeholder="文章标题"></el-input>
    <h3>文章内容</h3>
    <el-input type="textarea" v-model="content" :rows="15"></el-input>
    <el-button type="primary" @click="onSubmit" class="onSubmit">发布</el-button>
  </div>
</template>
<script>
import request from "../helper/request";
export default {
  name: "Article",
  data() {
    return {
      title: "",
      content: ""
    };
  },
  methods: {
    onSubmit() {
      let title = this.title;
      let content = this.content;
      request(`/blogs/`, "post", { title, content }).then(res => {
        console.log(res);
        if (res.status === "ok") {
          this.$router.push(`/blog/${res.data.id}`);
        }
      });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.onSubmit {
  margin-top: 10px;
}
</style>