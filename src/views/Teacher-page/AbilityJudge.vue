<template>
  <div class="CentetBox">
    <div>
      <div class="above">B22042219梁少峻的能力分申报</div>
      <div class="whitecenter">
        <img src="../../assets/img/round.png" class="round">
        <img src="../../assets/img/route1.png" class="route1">
        <img src="../../assets/img/route2.png" class="route2">
        <router-link to="./auditlist"><div class="grey">返回</div></router-link>
        <img src="../../assets/img/blue.png" class="blue">
        <div class="title">已申报项目详情</div>
        <div class="item" id="i1">类型</div>
        <div class="inblue" id="ib1">学术科技成果（含论文报告）</div>
        <div class="item" id="i2">分数</div>
        <div class="inblue" id="ib2">15</div>
        <div class="item" id="i3">具体描述</div>
        <div class="grey_rec">
            <div class="innertext">用户分享内容到社交媒体或好友，不应该是一种粗暴的强制行为，我们应该在保证产品本身内容有吸引力的核心前提下，仔细揣摩用户心理，结合产品本身的特色，在不同情境下提供给用户最合适的分享平台及方式，让用户分享成为一种水到渠成的自然行为，甚至在某些时候还能给用户带来一...</div>
        </div>
        <div class="item" id="i4">附件</div>
        <div class="yes">
          <div class="yestext">通过</div>
        </div>
        <div class="no">
          <div class="notext">不通过</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    components: {
      
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
  .above{
    position: absolute;
    left: 29.95%;
    top: 13.06%;
    width: 20.9375vw;
    height: 2.96vh;
    opacity: 1;
    font-size: 1.25vw;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 2.93vh;
    color: rgba(0, 0, 0, 1);
    text-align: left;
    vertical-align: top;
  }
  .whitecenter{
    position: absolute;
    left: 28.59375%;
    top: 18.98%;
    width: 42.8125vw;
    height: 81.02vh;
    opacity: 1;
    background: rgba(255, 255, 255, 0.8);
  }
  .round{
    position: absolute;
    left: 4.08%;
    top: 3.6%;
    width: 0.78125vw;
    height: 1.39vh;
  }
  .route1{
    position: absolute;
    left: 4.55%;
    top: 4.09%;
    width: 0.18vw;
    height: 0,625vh;
  }
  .route2{
    position: absolute;
    left: 4.55%;
    top: 4.4%;
    width: 0.3515625vw;
    height: 0.1vh;
  }
  .grey{
    position: absolute;
    left: 6.81%;
    top: 3.086%;
    width: 3.75vw;
    height: 2.22vh;
    opacity: 1;
    font-size: 0.9375vw;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 2.20vh;
    color: rgba(166, 166, 166, 1);
    text-align: left;
    vertical-align: top;
  }
  .blue{
    position: absolute;
    left: 4.62%;
    top: 8.76%;
    width: 0.26vw;
    height: 2.25vh;
  }
  .title{
    position: absolute;
    left: 6.20%;
    top: 8.34%;
    width: 10.42vw;
    height: 2.5vh;
    opacity: 1;
    font-size: 1.04vw;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 2.44vh;
    color: rgba(0, 43, 255, 1);
    text-align: left;
    vertical-align: top;
  }
  .item{
    position: absolute;
    left: 9.73%;
    width: 4.17vw;
    height: 2.69vh;
    opacity: 1;
    font-size: 1.04vw;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 2.68vh;
    color: rgba(0, 0, 0, 1);
    text-align: left;
    vertical-align: top;
  }
  #i1{
    position: absolute;
    top: 16.69%;
  }
  #i2{
    position: absolute;
    top: 23.6%;
  }
  #i3{
    position: absolute;
    top: 30.51%;
  }
  #i4{
    position: absolute;
    top: 58.86%;
  }
  .grey_rec{
    position: absolute;
    left: 9.73%;
    top: 35.66%;
    width: 34.0625vw;
    height: 15.93vh;
    opacity: 1;
    border-radius: 0.3125vw;
    background: rgba(245, 245, 245, 1);
  }
  .innertext{
    position: absolute;
    left: 3.67%;
    top: 10.465%;
    width: 31.5625vw;
    height: 7.87vh;
    opacity: 1;
    font-size: 0.83vw;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 1.95vh;
    color: rgba(0, 0, 0, 1);
    text-align: justify;
    vertical-align: top;
  }
  .yes{
    position: absolute;
    left: 27.70%;
    top: 79.77%;
    width: 7.29vw;
    height: 4.26vh;
    opacity: 1;
    border-radius: 1.20vw;
    background: rgba(67, 207, 124, 1);
  }
  .no{
    position: absolute;
    left: 57.30%;
    top: 79.77%;
    width: 7.29vw;
    height: 4.26vh;
    opacity: 1;
    border-radius: 1.20vw;
    background: rgba(255, 87, 51, 1);
  }
  .yestext{
    position: absolute;
    left: 35.71%;
    top: 21.74%;
    width: 2.08vw;
    height: 2.5vh;
    opacity: 1;
    font-size: 1.04vw;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 2.44vh;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    vertical-align: top;
  }
  .notext{
    position: absolute;
    left: 28.57%;
    top: 21.74%;
    width: 3.125vw;
    height: 2.5vh;
    opacity: 1;
    font-size: 1.04vw;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 2.44vh;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    vertical-align: top;
  }
  .inblue{
    position: absolute;
    right: 12.29%;
    height: 2.5vh;
    opacity: 1;
    font-size: 1.04vw;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 2.44vh;
    color: rgba(0, 43, 255, 1);
    text-align: right;
    vertical-align: top;
  }
  #ib1{
    position: absolute;
    top: 16.8%;
    width: 13.54vw;
  }
  #ib2{
    position: absolute;
    top: 23.71%;
    width: 1.15vw;
  }
</style>