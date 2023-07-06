<script setup>
// import Home from "./components/Home.vue";
// import PageOne from "./components/PageOne.vue";
// import PageTwo from "./components/PageTwo.vue";
</script>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/page1">Page1</router-link>
      <router-link to="/page2">Page2</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
