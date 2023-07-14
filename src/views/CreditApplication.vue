//常用工具>>能力分申报
<template>
  <div>
    <DatePicker></DatePicker>
    <CreditBoard></CreditBoard>
  </div>
</template>

<script>
  import CreditBoard from "../component/common/CreditBoard.vue";
  import DatePicker from "../component/common/DatePicker.vue";
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
</style>
