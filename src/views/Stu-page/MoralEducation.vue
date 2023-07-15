//常用工具>>德育素质自我评价
<template>
  <div>
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
</style>
