<template>
  <p>this is page-home</p>
  <button @click="go">按钮跳转page1</button>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    go() {
      this.$router.push("/page1");
    },
  },
};
</script>


<style scoped>
</style>