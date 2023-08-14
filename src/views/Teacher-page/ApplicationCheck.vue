<template>
  <div class="CenterBox">
    <div>
      <DatePicker></DatePicker>
      <div class="whitesmall" id="ws1">
        <img src="../../assets/img/blue.png" class="blue">
        <img src="../../assets/img/to_be_judged.png" class="title">
        <div class="textBlue" id="tb1"></div>
        <div class="whs" id="whs11">
          <div class="blue_rec">
            <div class="textwh_long">奖学金</div>
          </div>
          <div class="Intextblack">B22042219梁少峻的申请</div>
          <div class="Intextblue">审核</div>
        </div>
        <div class="whs" id="whs12">
          <div class="blue_rec">
            <div class="textwh_long">能力分</div>
          </div>
          <div class="Intextblack">B22042219梁少峻的申请</div>
          <div class="Intextblue">审核</div>
        </div>
      </div>
      <div class="whitesmall" id="ws2">
        <img src="../../assets/img/blue.png" class="blue">
        <img src="../../assets/img/have_judged.png" class="title">
        <div class="whs" id="whs21">
          <div class="blue_rec">
            <div class="textwh_long">奖学金</div>
          </div>
          <div class="Intextblack">B22042219梁少峻的申请</div>
          <div id="textred">审核不通过</div>
          <img src="../../assets/img/way1.png" class="way1">
          <img src="../../assets/img/way2.png" class="way2">
        </div>
        <div class="whs" id="whs22">
          <div class="blue_rec">
            <div class="textwh_long">能力分</div>
          </div>
          <div class="Intextblack">B22042219梁少峻的申请</div>
          <div id="textgreen">审核通过</div>
          <img src="../../assets/img/way1.png" class="way1">
          <img src="../../assets/img/way2.png" class="way2">
        </div>
      </div>
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
  }
  .title{
    position: absolute;
    left: 6.45%;
    top: 4.23%;
    width: 12.24vw;
    height: 2.5vh;
  }
  .whitesmall{
    position: absolute;
    top: 18.98%;
    width: 42.8125vw;
    height: 81.02vh;
    opacity: 1;
    background: rgba(255, 255, 255, 0.8);
  }
  #ws1{
    position: absolute;
    left: 6.09375%;
  }
  #ws2{
    position: absolute;
    left: 51.61%;
  }
  .blue{
    position: absolute;
    left: 4.87%;
    top: 4.69%;
    width: 0.21vw;
    height: 1.76vh;
  }
  .textBlue{
    position: absolute;
    left: 6.45%;
    top: 4.23%;
    height: 2.50vh;
    opacity: 1;
    font-size: 1.04vw;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 2.44vh;
    color: rgba(0, 43, 255, 1);
    text-align: left;
    vertical-align: top;
  }
  #tb1{
    width: 5.21vw;
  }
  #tb2{
    width: 3.125vw;
  }
  .whs{
    position: absolute;
    left: 8.52%;
    width: 35.57vw;
    height: 8.24vh;
    opacity: 1;
    border-radius: 0.73vw;
    background: rgba(255, 255, 255, 1);
    border: 0.03vw solid rgba(166, 166, 166, 1);
  }
  #whs11{
    position: absolute;
    top: 14.06%;
  }
  #whs12{
    position: absolute;
    top: 26.51%;
  }
  #whs21{
    position: absolute;
    top: 14.06%;
  }
  #whs22{
    position: absolute;
    top: 26.51%;
  }
  .Intextblue{
    position: absolute;
    left: 89.17%;
    top: 35.71%;
    width: 2vw;
    height: 2.22vh;
    opacity: 1;
    font-size: 0.83vw;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 2.15vh;
    color: rgba(0, 43, 255, 1);
    text-align: right;
    vertical-align: top;
  }
  .Intextblack{
    position: absolute;
    left: 15.67%;
    top: 35.71%;
    width: 10.35vw;
    height: 2.22vh;
    opacity: 1;
    font-size: 0.83vw;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 2.15vh;
    color: rgba(0, 0, 0, 1);
    text-align: left;
    vertical-align: top;
  }
  .way1{
    position: absolute;
    left: 92.68%;
    top: 42.86%;
    width: 0.625vw;
    height: 1.11vh;
  }
  .way2{
    position: absolute;
    left: 94.00%;
    top: 43.65%;
    width: 0.15625vw;
    height: 0.278vh;
  }
  #textred{
    position: absolute;
    left: 75.11%;
    top: 35.71%;
    width: 4.5vw;
    height: 2.22vh;
    opacity: 1;
    font-size: 0.83vw;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 2.15vh;
    color: rgba(255, 87, 51, 1);
    text-align: right;
    vertical-align: top;
  }
  #textgreen{
    position: absolute;
    left: 77.45%;
    top: 35.71%;
    width: 3.5vw;
    height: 2.22vh;
    opacity: 1;
    font-size: 0.83vw;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 2.15vh;
    color: rgba(67, 207, 124, 1);
    text-align: right;
    vertical-align: top;
  }
  .blue_rec{
    position: absolute;
    left: 3.81%;
    top: 38.095%;
    width: 2.5vw;
    height: 1.94vh;
    opacity: 1;
    border-radius: 0.15625vw;
    background: rgba(0, 43, 255, 1);
  }
  .textwh_long{
    position: absolute;
    left: 2%;
    top: 4.76%;
    width: 2.6vw;
    height: 1.67vh;
    opacity: 1;
    font-size: 0.625vw;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 1.61vh;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    vertical-align: top;
  }
</style>