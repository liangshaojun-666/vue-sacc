<template>
  <div class="CenterBox">
    <div class="container">
      <DatePicker></DatePicker>
      <MajorPicker></MajorPicker>
      <StudentClassPicker></StudentClassPicker>
    111学生列表
    <div class="whitelarge"></div>
    </div>
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
    width: 100vw;
    height: 100vh;
    background-image: url(../../assets/img/Web.png);
    background-size: 100% 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    zoom: 1;
    z-index: -10;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .whitelarge{
    position: absolute;
    left: 9.01%;
    top: 18.98%;
    width: 80.36vw;
    height: 81.02vh;
    opacity: 1;
    background: rgba(255, 255, 255, 0.8);
  }
</style>
