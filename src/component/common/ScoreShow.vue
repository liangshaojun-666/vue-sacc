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
          <div class="box"></div>
          <div class="box"></div>
          <div class="box"></div>
          <div class="box"></div>
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
  height: 62.6285%;
}
.BlueText {
  height: 1.25em;
  display: flex;
  align-items: center;
  color: rgba(0, 43, 255, 1);
  padding-top: 1rem;
}
.BlueText img {
  height: 100%;
  margin-right: 0.5em;
  margin-left: 2em;
}
.BoxGroup {
  width: 92.397%;
  height: 86.6788%;
  /* background-color: aqua; */
  margin-left: 2em;
  margin-top: 0.8rem;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}
.box {
  box-sizing: border-box;
  height: 50%;
  width: 50%;
  border: 1px solid orange;
}
.list {
  margin-left: 2em;
}
</style>