<template>
  <div class="container">
    <DatePicker></DatePicker>
    111学生列表
  </div>
</template>

<script>
  import DatePicker from "../../component/common/DatePicker.vue";

  export default {
    data() {
      return {};
    },
    components: {
      DatePicker,
    },
  };
</script>

<style scoped>
  .CenterBox {
    margin: 0 auto;
  }

  .div {
    width: 100px;
    border: 2px solid #eeeeee;
    padding: 20px;
    margin: 15px;
  }
</style>
