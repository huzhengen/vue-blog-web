<template>
    <div class="index">
        <h1>index</h1>
       
        <router-link :to="`/article`">
            article
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'Index',
    props: {
        msg: String
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>