<template>
  <div class="header">
    <h1>
      <router-link to="/">Blog</router-link>
    </h1>
    <template v-if="isLogin">
      <div class="userInfo">
        <router-link to="/create">
          <el-button>发布新闻</el-button>
        </router-link>
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="el-icon-user-solid"></i>
            {{user.username}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <router-link :to="`/user/${user.id}`">
              <el-dropdown-item>查看自己所有博客</el-dropdown-item>
            </router-link>
            <el-dropdown-item @click.native="logout">注销</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </template>
    <template v-else>
      <div class="loginAndRegister">
        <router-link to="/login">
          <el-button>登陆</el-button>
        </router-link>
        <router-link to="/register">
          <el-button>注册</el-button>
        </router-link>
      </div>
    </template>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Header",
  // computed: {
  //     ...mapState({
  //         'user',
  //         'isLogin'
  //     }),
  //     // ...mapGetters([
  //     //     'user',
  //     //     'isLogin',
  //     // ]),
  // },
  computed: mapState(["user", "isLogin"]),
  created() {
    this.checkLogin();
  },
  methods: {
    ...mapActions(["checkLogin", "logout"])
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 0 1%;
  .userInfo {
    .el-button {
      margin-right: 10px;
    }
  }
  > h1 > a {
    text-decoration: none;
    color: #000;
  }
  .el-dropdown-link {
    cursor: pointer;
  }
  .loginAndRegister a:first-child {
    margin-right: 20px;
  }
}
</style>