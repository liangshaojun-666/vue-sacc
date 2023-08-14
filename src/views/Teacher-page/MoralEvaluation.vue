<template>
  <div class="CenterBox">
    <div>
      <div class="above">B22042219梁少峻的德育素质测评</div>
      <div class="whitelarge">
        <img src="../../assets/img/round.png" class="round">
        <img src="../../assets/img/route1.png" class="route1">
        <img src="../../assets/img/route2.png" class="route2">
        <router-link to="./auditlist"><div class="grey">返回首页</div></router-link>
        <img src="../../assets/img/blue.png" class="blue">
        <div class="title">德育素质自我测评结果</div>
        <div class="whs" id="whs1">
          <div class="poli">政治思想</div>
          <div class="text">用户主动点击分享&nbsp;绝大多数APP都是在详情页等需要分享的页面放置一个分享按钮，由用户自行选择分享。这种情况下用户是否分享主要是取决于产品内容本身，比如内容有趣或是有用。在一些APP中设计者会对这个分享按钮加一些鼓励的文案或着重的设计来促进用户分享。<br>用户分享内容到社交媒体或好友，不应该是一种粗暴的强制行为，我们应该在保证...</div>
          <div class="grey_rec">
            <div class="blacknum">15</div>
          </div>
          <div class="bluenum">/15</div>
        </div>
        <div class="whs" id="whs2">
          <div class="poli">政治思想</div>
          <div class="text">用户主动点击分享&nbsp;绝大多数APP都是在详情页等需要分享的页面放置一个分享按钮，由用户自行选择分享。这种情况下用户是否分享主要是取决于产品内容本身，比如内容有趣或是有用。在一些APP中设计者会对这个分享按钮加一些鼓励的文案或着重的设计来促进用户分享。<br>用户分享内容到社交媒体或好友，不应该是一种粗暴的强制行为，我们应该在保证...</div>
          <div class="grey_rec">
            <div class="blacknum">15</div>
          </div>
          <div class="bluenum">/15</div>
        </div>
        <div class="whs" id="whs3">
          <div class="poli">政治思想</div>
          <div class="text">用户主动点击分享&nbsp;绝大多数APP都是在详情页等需要分享的页面放置一个分享按钮，由用户自行选择分享。这种情况下用户是否分享主要是取决于产品内容本身，比如内容有趣或是有用。在一些APP中设计者会对这个分享按钮加一些鼓励的文案或着重的设计来促进用户分享。<br>用户分享内容到社交媒体或好友，不应该是一种粗暴的强制行为，我们应该在保证...</div>
          <div class="grey_rec">
            <div class="blacknum">15</div>
          </div>
          <div class="bluenum">/15</div>
        </div>
        <input type="submit" value="打分" class="btn" />
      </div>
    </div>        
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
    left: 9.01%;
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
  .whitelarge{
    position: absolute;
    left: 9.01%;
    top: 18.98%;
    width: 80.36vw;
    height: 81.02vh;
    opacity: 1;
    background: rgba(255, 255, 255, 0.8);
  }
  .whs{
    position: absolute;
    left: 4.47%;
    width: 74.84vw;
    height: 14.17vh;
    opacity: 1;
    border-radius: 0.73vw;
    background: rgba(255, 255, 255, 1);
    border: 0.03vw solid rgba(166, 166, 166, 1);
  }
  #whs1{
    position: absolute;
    top: 14.86%;
  }
  #whs2{
    position: absolute;
    top: 36.11%;
  }
  #whs3{
    position: absolute;
    top: 57.37%;
  }
  .round{
    position: absolute;
    left: 2.17%;
    top: 3.6%;
    width: 0.78125vw;
    height: 1.39vh;
  }
  .route1{
    position: absolute;
    left: 2.43%;
    top: 4.09%;
    width: 0.18vw;
    height: 0,625vh;
  }
  .route2{
    position: absolute;
    left: 2.43%;
    top: 4.4%;
    width: 0.3515625vw;
    height: 0.1vh;
  }
  .grey{
    position: absolute;
    left: 3.63%;
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
    left: 2.46%;
    top: 8.76%;
    width: 0.26vw;
    height: 2.25vh;
  }
  .title{
    position: absolute;
    left: 3.31%;
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
  .poli{
    position: absolute;
    left: 2.99%;
    top: 41.18%;
    width: 3.75vw;
    height: 2.5vh;
    opacity: 1;
    font-size: 0.9375vw;
    font-weight: 900;
    letter-spacing: 0px;
    line-height: 2.41vh;
    color: rgba(0, 43, 255, 1);
    text-align: left;
    vertical-align: top;
  }
  .text{
    position: absolute;
    left: 20.46%;
    top: 16.34%;
    width: 43vw;
    height: 9.72vh;
    opacity: 1;
    font-size: 0.9375vw;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 2.41vh;
    color: rgba(0, 0, 0, 1);
    text-align: justify;
    vertical-align: top;
  }
  .grey_rec{
    position: absolute;
    left: 90.95%;
    top: 41.83%;
    width: 1.93vw;
    height: 2.22vh;
    opacity: 1;
    border-radius: 0.21vw;
    background: rgba(245, 245, 245, 1);
    border: 0.03vw solid rgba(53, 117, 251, 1);
  }
  .blacknum{
    position: absolute;
    left: 18.92%;
    top: -4.16%;
    width: 1.20vw;
    height: 2.5vh;
    opacity: 1;
    font-size: 1.04vw;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 2.44vh;
    color: rgba(0, 0, 0, 1);
    text-align: left;
    vertical-align: top;
  }
  .bluenum{
    position: absolute;
    left: 93.53%;
    top: 42.48%;
    width: 1.98vw;
    height: 2.22vh;
    opacity: 1;
    font-size: 0.9375vw;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 2.20vh;
    color: rgba(0, 43, 255, 1);
    text-align: left;
    vertical-align: top;
  }
  .btn {
    position: absolute;
    left: 46.47%;
    top: 85.94%;
    width: 8.75rem;
    height: 2.875rem;
    border-radius: 1.4375rem;
    background-color: rgba(0, 43, 255, 1);
    color: rgba(255, 255, 255, 1);
    font-size: 1.15rem;
    border: 0;
    transition: 0.2s;
    cursor: pointer;
  }
  .btn:hover {   
    width: 9rem;
    height: 3rem;
    background-color: #4176e9;
  }
  input[type="submit"] {
    margin-top: 4vh;
  }
</style>