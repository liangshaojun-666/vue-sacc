<template>
  <div class="container">
    <DatePicker></DatePicker>
    <T_StulistBoard></T_StulistBoard>
  </div>
</template>

<script>
  import DatePicker from "../../component/common/DatePicker.vue";
  import T_StulistBoard from "../../component/T_common/T_StulistBoard.vue";

  export default {
    data() {
      return {};
    },
    components: {
      DatePicker,
      T_StulistBoard,
    },
  };
</script>

<style scoped>
  .CenterBox {
    margin: 0 auto;
  }
</style>
