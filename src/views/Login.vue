<template>
  <div>
    <h2>njupt综合测评</h2>
    <div>用户名<input type="text" /></div>
    <div>密码<input type="password" name="" id="" /></div>

    <button @click="go">登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    go() {
      this.$router.push("/home/totalassessment");
    },
  },
};
</script>

<style scoped>
</style>