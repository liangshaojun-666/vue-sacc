<script>
export default {
  data() {
    return {};
  },
  methods: {
    go() {
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="login">登录</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
</style>
