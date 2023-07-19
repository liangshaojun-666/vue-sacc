<template>
  <div class="container">
    <DatePicker></DatePicker>
    <MajorPicker></MajorPicker>
    <StudentClassPicker></StudentClassPicker>
    111学生列表
  </div>
</template>

<script>
  import DatePicker from "../../component/common/DatePicker.vue";
  import MajorPicker from "../../component/common/MajorPicker.vue";
  import StudentClassPicker from '../../component/common/StudentClassPicker.vue';

  export default {
    data() {
      return {};
    },
    components: {
      DatePicker,
      MajorPicker,
      StudentClassPicker,
    },
  };
</script>

<style scoped>
  .CenterBox {
    margin: 0 auto;
  }
</style>
