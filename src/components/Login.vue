<template>
    <div class="login">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名：" prop="username">
                <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码；" prop="password">
                <el-input v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-button @click="onSubmit">登陆</el-button>
        </el-form>
    </div>
</template>
<script>
import request from '../helper/request'
export default {
    name: 'Login',
    data() {
        return {
            ruleForm: {
                username: '',
                password: '',
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
                ],
            }
        }
    },
    methods: {
        onSubmit() {
            let username = this.ruleForm.username;
            let password = this.ruleForm.password;
            request('/users/login', 'post', { username, password }).then(res => {
                this.$router.push({ path: this.$route.query.redirect || '/' })
            })
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