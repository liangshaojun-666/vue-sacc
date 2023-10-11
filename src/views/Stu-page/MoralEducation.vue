//常用工具>>德育素质自我评价
<template>
  <div class="container">
    <DatePicker></DatePicker>
    <MoralBoard></MoralBoard>
  </div>
</template>

<script>
  import MoralBoard from "../../component/common/MoralBoard.vue";
  import DatePicker from "../../component/common/DatePicker.vue";
  export default {
    components: {
      MoralBoard,
      DatePicker,
    },
    data() {
      return {};
    },
  };
</script>

<style scoped>
  .CenterBox {
    margin: 0% auto;
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
