<template>
    <div class="header">
    	<h1><router-link to="/">Blog</router-link></h1>
        <div class="loginAndRegister">
        	<router-link to="/login"><el-button>登陆</el-button></router-link>
        	<router-link to="/register"><el-button>注册</el-button></router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Header',
    props: {
        msg: String
    },
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header{
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #ccc;
	padding: 0 1%;
	&>h1>a{
		text-decoration: none;
	}
}
</style>