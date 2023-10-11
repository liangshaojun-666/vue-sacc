//首页>>登陆后跳转页
<template>
  <div class="container">
    <HeadBar></HeadBar>
  </div>
</template>

<script>
  import HeadBar from "../../component/common/HeadBar.vue";

  export default {
    data() {
      return {};
    },
    components: {
      HeadBar,
    },
  };
</script>

<style scoped>
  .container {
    height: 100vh;
    width: 100vw;
    background-color: rgba(245, 245, 245, 0.8);
    background-image: url(../assets/img/Web.png);
    background-size: 100% 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    zoom: 1;
    z-index: -10;
  }
</style>
