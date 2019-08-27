<template>
    <div class="login">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名：">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码；">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-button>登陆</el-button>
        </el-form>
    </div>
</template>
<script>
export default {
    name: 'Login',
    data() {
        return {
            form: {
                name: '',
                password: '',
            }
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
    max-width: 500px;
    margin: 0 auto;
}
</style>