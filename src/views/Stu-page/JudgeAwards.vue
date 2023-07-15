//首页>>评奖评优
<template>
  <div>
    <DatePicker></DatePicker>
    <ApplicationScholarship></ApplicationScholarship>
  </div>
</template>

<script>
  import ApplicationScholarship from "../../component/common/ApplicationScholarship.vue";
  import DatePicker from "../../component/common/DatePicker.vue";
  export default {
    components: {
      ApplicationScholarship,
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
