<template>
  <div class="CenterBox">
    <router-link :to="{ name: 'totalassessment' }">返回首页</router-link>
    <div>政治思想</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
  };
</script>

<style scoped>
  .CenterBox {
    width: 80.36vw;
    height: 81.02vh;
    background-color: rgba(255, 255, 255, 0.8);
    box-sizing: border-box;
    border-radius: 15px 15px 0px 0px;
    color: #000;
  }
</style>
