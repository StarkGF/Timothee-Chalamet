<template>
  <div id="app">
<!--    <Main></Main>-->
<!--    <Login></Login>-->
    <router-link to="/main"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import Main from '@/views/Main'
// import Login from '@/views/Login'
export default {
  name: 'App',
  components: {
    // Main
    // Login
  }
}
</script>

<style lang="scss">
</style>
