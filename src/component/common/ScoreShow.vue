// 首页中部大展示台组件
// 宽80.36,高81.02
<template>
  <div class="CenterBox">
    <div class="LeftContainer">
      <div class="LeftTop">
        <div class="BlueText">
          <img src="../../assets/img/blue.png" alt="" />
          信息速览
        </div>
        <div class="BoxGroup">
          <div class="box">
            <div class="rankList">
              <img src="../../assets/img/logo1.png" alt="" class="logo" />
              <div class="RankData orange">排名 1/191</div>
            </div>
            <div class="dataContainer">
              <div class="title">学分<br />绩点</div>
              <div class="score orange">4.09</div>
            </div>
          </div>
          <div class="box">
            <div class="rankList">
              <img src="../../assets/img/logo2.png" alt="" class="logo" />
              <div class="RankData"></div>
            </div>
            <div class="dataContainer">
              <div class="title">德育<br />素质</div>
              <div class="score green">10'</div>
            </div>
          </div>
          <div class="box">
            <div class="rankList">
              <img src="../../assets/img/logo3.png" alt="" class="logo" />
              <div class="RankData red">排名 1/191</div>
            </div>
            <div class="dataContainer">
              <div class="title">综测<br />总分</div>
              <div class="score red">86.23</div>
            </div>
          </div>
          <div class="box">
            <div class="rankList">
              <img src="../../assets/img/logo4.png" alt="" class="logo" />
              <div class="RankData"></div>
            </div>
            <div class="dataContainer">
              <div class="title">能力<br />分数</div>
              <div class="score blue">26.5'</div>
            </div>
          </div>
        </div>
      </div>
      <div class="LeftButtom">
        <div class="BlueText">
          <img src="../../assets/img/blue.png" alt="" />
          历年综测成绩对比
        </div>
        <div class="table"></div>
      </div>
    </div>
    <div class="RightContainer">
      <div class="RightTop">
        <div class="BlueText">
          <img src="../../assets/img/blue.png" alt="" />
          常用功能
        </div>
        <div>
          <div class="list">德育素质自我评价</div>
          <div class="list">能力分申报</div>
          <div class="list">学生手册</div>
        </div>
      </div>
      <div class="RightBottom">
        <div class="BlueText">
          <img src="../../assets/img/blue.png" alt="" />
          个人各项能力对比
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
};
</script>

<style scoped>
.CenterBox {
  width: 80.36vw;
  height: 81.02vh;
  background-color: rgba(255, 255, 255, 0.8);
  box-sizing: border-box;
  border-radius: 15px 15px 0px 0px;
  display: flex;
}
.LeftContainer {
  height: 100%;
  width: 72.45%;
  /* background-color: #e3c5c5; */
  box-sizing: border-box;
}
.LeftTop {
  box-sizing: border-box;
  height: 60%;
}
.LeftButtom {
  box-sizing: border-box;
  height: 100%-60%;
}
.BlueText {
  height: 1.25em;
  display: flex;
  align-items: center;
  color: rgba(0, 43, 255, 1);
  padding-top: 1rem;
  font-size: 2.2vh;
}
.BlueText img {
  height: 100%;
  margin-right: 0.5em;
  margin-left: 2em;
}
.BoxGroup {
  width: 92.397%;
  height: 83.6788%;
  /* background-color: aqua; */
  margin-left: 2em;
  margin-top: 0.8rem;
  margin-bottom: 3vh;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}
.box {
  box-sizing: border-box;
  height: 50%;
  width: 47%;
  /* border: 1px solid orange; */
  border-radius: 14px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 10px rgba(128, 128, 128, 0.16);
  margin-bottom: 2vh;
  margin-right: 1vw;
}
.list {
  margin-left: 2em;
}
.rankList {
  width: 100%;
  height: 25%;
  /* background-color: #9cd5c1; */
  display: flex;
  box-sizing: border-box;
  padding-top: 1.5%;
  padding-bottom: 1.5%;
  padding-left: 0.5em;
}
.logo {
  height: 100%;
}
.orange {
  color: rgba(255, 141, 26, 1);
}
.red {
  color: rgba(255, 87, 51, 1);
}
.green {
  color: rgba(67, 207, 124, 1);
}
.blue {
  color: rgba(26, 175, 255, 1);
}
.RankData {
  display: flex;
  align-items: center;
  margin-left: 1rem;
  font-size: 0.9vw;
}
.dataContainer {
  display: flex;
  width: 100%;
  height: 75%;
}
.title {
  height: 100%;
  font-size: 4.2vh;
  padding-top: 1.2%;
  padding-left: 12%;
  width: 50%;
  box-sizing: border-box;
}
.score {
  font-size: 4.5vw;
  height: 100%;
  width: 50%;
  padding-right: 5%;
  display: flex;
  justify-content: flex-end;
}
</style>