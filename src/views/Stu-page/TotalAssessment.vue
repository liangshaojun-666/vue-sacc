//首页>>综合测评
<template>
  <div class="container">
    <DatePicker @childEvent="parentFun"></DatePicker>
    <ScoreShow></ScoreShow>
  </div>
</template>

<script>
  import DatePicker from "../../component/common/DatePicker.vue";
  import ScoreShow from "../../component/common/ScoreShow.vue";
  export default {
    methods: {
      parentFun(years) {
        this.arrData = years;
      },
      studentPage() {
        studentPage(arrData.year - 1).then((res) => {
          //部做渲染数据工作
        });
      },
    },
    data() {
      return {
        arrData: [],
      };
    },
    components: {
      DatePicker,
      ScoreShow,
    },
  };
</script>

<style scoped>
  .CenterBox {
    margin: 0 auto;
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
