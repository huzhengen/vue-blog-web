<template>
    <div id="app">
        <Header />
        <main id="main">
            <router-view></router-view>
        </main>
    </div>
</template>
<script>
import Header from './components/Header'
export default {
    name: 'app',
    components: {
        Header,
    }
}
</script>
<style lang="scss">
body{
  margin: 0;
  padding: 0;
  #main{
    max-width: 1200px;
    margin: 30px auto 0;
  }
}
</style>