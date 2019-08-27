<template>
    <div class="header">
        <h1>
            <router-link to="/">Blog</router-link>
        </h1>
        <template v-if="isLogin">
        	<div>
        		<i class="el-icon-user-solid"></i>{{user.username}}
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
import { mapState, mapActions } from 'vuex'
export default {
    name: 'Header',
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
    computed: mapState([
        'user',
        'isLogin'
    ]),
    created() {
        this.checkLogin();
    },
    methods:{
    	...mapActions(['checkLogin'])
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding: 0 1%;

    >h1>a {
        text-decoration: none;
    }

    .loginAndRegister a:first-child {
        margin-right: 20px;
    }
}
</style>