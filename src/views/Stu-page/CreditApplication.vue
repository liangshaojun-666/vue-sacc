//常用工具>>能力分申报
<template>
  <div class="container">
    <DatePicker></DatePicker>
    <CreditBoard></CreditBoard>
  </div>
</template>

<script>
  import CreditBoard from "../../component/common/CreditBoard.vue";
  import DatePicker from "../../component/common/DatePicker.vue";
  export default {
    components: {
      CreditBoard,
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
