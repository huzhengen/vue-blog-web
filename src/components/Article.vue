<template>
    <div class="article">
        <h1>article</h1>
        <router-link :to="`/`">
            index
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'Article',
    props: {
        msg: String
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>