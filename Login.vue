<template>
  <body>
    <img class="nan" src="../assets/img/left-img.png" alt="">
    <img class="jing" src="../assets/img/center-img.png" alt="">
    <img class=njupt src="../assets/img/综合测评系统.png" alt="">
    <input type="text" class="text" placeholder="输入学号"/><br>
  <input type="password" class="password" placeholder="输入统一身份认证密码" name="" id="" /><br>
    <input type="submit" class="btn" value="登录"><br>
  </body>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    go() {
      this.$router.push("/home/totalassessment");
    },
  },
};
</script>

<style scoped>
*{
  user-select: none;
}
body{
  width: 1707px;
height: 914px;
opacity: 1;
display: flex;
background: url(https://img.js.design/assets/img/634fa18f4097fae10fe8066f.png#30a1e667d043f905008cbbc8ad0ed09f)
no-repeat;
background-size: cover;
background-attachment: fixed;
}

.njupt {
  position: absolute;
  left: 38%;
top: 31%;
width: 24%;
height: 9%;
opacity: 1;
text-align: left;
}
.text {
position: absolute;
 width: 15%;
 left: 42.5%;
 top: 47.6%;
 height: 4%;
border-radius: 14px;
}
.password {
  position: absolute;
  left: 42.5%;
  top: 55%;
  width: 15%;
  height: 4%;
  border-radius: 14px;
}
.btn {
  position: absolute;
  left: 46.3%;
  top: 62%;
  width: 7%;
  height: 4%;
  border-radius: 23px;
  background: rgba(0, 43, 255, 1);
}
.nan {
  position: absolute;
  left: 41.1%;
  top: 17.1%;
  width: 3.4%;
  height: 6.2%;
}
.jing {
  position: absolute;
  left: 45.6%;
  top: 16.9%;
  width: 13%;
  height: 6.3%;
}
</style>