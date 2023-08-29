//首页>>测评公式
<template>
  <div class="container">
    <EvaluationBoard></EvaluationBoard>
  </div>
</template>

<script>
  import EvaluationBoard from "../../component/common/EvaluationBoard.vue";
  export default {
    components: { EvaluationBoard },
    data() {
      return {};
    },
  };
</script>

<style scoped>
  .CenterBox {
    margin: 0% auto;
    margin-top: 4.5%;
  }
  .container {
    width: 100vw;
    height: 90.75vh;
    background-size: 100% 100%;
    background-image: url(../../assets/img/mainBgImg.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    overflow: hidden;
  }
</style>
