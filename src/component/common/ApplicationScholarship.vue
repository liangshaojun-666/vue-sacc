<template>
  <div class="CenterBox">
    <div class="leftBox">
      <div class="BlueText">
        <img src="../../assets/img/blue.png" alt="" />
        奖学金申请
      </div>
      <div class="dataArea">
        <div class="data">综测总分/排名 86.35(1/120)</div>
        <div class="data">综测总分/排名</div>
        <div class="data">综测总分/排名</div>
        <div class="data">综测总分/排名</div>
      </div>
      <div class="select">
        <div class="leftalabel">奖项名称</div>
        <div class="rightalabel">
          <Selector></Selector>
        </div>
      </div>
      <div class="select">
        <div class="leftalabel">等级</div>
        <div class="rightalabel">无等级</div>
      </div>
      <div class="inputArea">
        <div>申请理由</div>
        <textarea v-model="msg" @focus="handleFocus" @blur="handleBlur" />
      </div>

      <div>上传附件</div>
      <div class="File">
        <p>单个文件最大10MB，最多上传10个文件，文件格式不限。</p>
        <div class="fplace"></div>
        <button class="btn">提交</button>
      </div>
    </div>
    <div class="rightBox">
      <div class="BlueText fixOne">
        <img src="../../assets/img/blue.png" alt="" />
        已申请奖学金
      </div>
      <div class="rightContent">
        <div v-for="item in objects" :key="item.id" class="awardBox">
          <div class="name">
            <h4>{{ item.awardName }}</h4>
          </div>
          <p>{{ item.awardLevel }}</p>
          <p class="money">{{ item.awardMoney }}</p>
          <div class="state">
            <div :class="getStatusClass(item.state)">
              {{ statusText(item.state) }}
            </div>
            <el-button
              type="text"
              v-if="item.state === 0"
              @click="open(item.id)"
              >撤销</el-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Selector from "./Selector.vue";

  export default {
    data() {
      return {
        msg: "请输入申请理由",
        objects: [], // 存储后端返回的对象数组
      };
    },
    components: { Selector },
    methods: {
      handleFocus() {
        if (this.msg === "请输入申请理由") {
          this.msg = "";
        }
      },
      handleBlur() {
        if (this.msg === "") {
          this.msg = "请输入申请理由";
        }
      },
      open(id) {
        this.$confirm("此操作将永久删除该文件，是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            this.$message({
              type: "success",
              message: "删除成功！",
            });
            const index = this.objects.findIndex((item) => item.id === id);
            if (index !== -1) {
              this.objects.splice(index, 1);
            }
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除",
            });
          });
      },
      getStatusClass(state) {
        switch (state) {
          case 0:
            return "status-0";
          case 1:
            return "status-1";
          case 2:
            return "status-2";
          default:
            return "";
        }
      },
      statusText(state) {
        if (state === 0) {
          return "审核中";
        } else if (state === 1) {
          return "已通过";
        } else if (state === 2) {
          return "未通过";
        } else {
          return "";
        }
      },
    },

    mounted() {
      // 在mounted生命周期钩子中获取后端返回的对象数组
      // 并将其赋值给objects数组
      // 可以使用axios等库发送请求获取数据
      // 示例中假设已经获取到了对象数组
      this.objects = [
        {
          id: 0,
          awardName: "精神文明奖",
          awardLevel: "一等奖",
          awardMoney: 1000,
          state: 0,
        },
        {
          id: 1,
          awardName: "精神文明奖",
          awardLevel: "一等奖",
          awardMoney: 1000,
          state: 2,
        },
        {
          id: 2,
          awardName: "精神文明奖",
          awardLevel: "二等奖",
          awardMoney: 1000,
          state: 1,
        },
        {
          id: 3,
          awardName: "精神文明奖",
          awardLevel: "一等奖",
          awardMoney: 1000,
          state: 1,
        },

        {
          id: 4,
          awardName: "精神文明奖",
          awardLevel: "一等奖",
          awardMoney: 1000,
          state: 1,
        },
        {
          id: 5,
          awardName: "精神文明奖",
          awardLevel: "一等奖",
          awardMoney: 1000,
          state: 2,
        },
        {
          id: 6,
          awardName: "精神文明奖",
          awardLevel: "一等奖",
          awardMoney: 1000,
          state: 0,
        },
        {
          id: 7,
          awardName: "精神文明奖",
          awardLevel: "一等奖",
          awardMoney: 1000,
          state: 2,
        },
      ];
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
    color: #000;
    display: flex;
  }
  .fixOne {
    position: fixed;
    width: 33%;
    background-color: #ffffff;
    padding-bottom: 5px;
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
    margin-left: 0em;
  }
  .leftBox {
    position: relative;
    /* background-color: rgba(44, 44, 49, 1); */
    width: 55%;
    height: 100%;
    padding: 0 2em;
    /* border-right: 1px solid rgba(166, 166, 166, 1); */
  }
  .leftBox::before {
    content: "";
    width: 1px;
    height: 80%;
    position: absolute;
    right: 0;
    top: 10%;
    background-color: rgba(166, 166, 166, 1);
  }
  .rightContent {
    height: 100%;
    margin-top: 1.25rem;
    overflow-y: scroll;
  }
  .rightBox {
    /* background-color: rgba(44, 44, 49, 1); */
    width: 45%;
    height: 90%;
    padding: 0 2em;
  }
  .dataArea {
    box-sizing: border-box;
    margin: 1rem 0;
    padding: 1rem 3rem;
    height: 12%;
    border-radius: 0.5em;
    width: 100%;
    background-color: rgba(245, 245, 245, 1);
    display: flex;
    flex-wrap: wrap;
    font-size: clamp(0.2rem, 0.489rem + 0.4vw, 1rem);
  }
  .data {
    box-sizing: border-box;
    height: 50%;
    width: 50%;
    text-align: left;
    color: rgba(97, 97, 97, 1);
    display: flex;
  }
  .select {
    height: 1.5rem;
    width: 100%;
    padding: 0.4rem 0;
    display: flex;
    align-content: space-around;
  }
  .leftalabel {
    height: 100%;
    width: 50%;
  }
  .rightalabel {
    height: 100%;
    width: 50%;
    text-align: right;
    color: rgba(0, 43, 255, 1);
  }
  .inputArea {
    box-sizing: border-box;
    margin: 0rem 0;
    height: 30%;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  .inputArea textarea {
    border: 0;
    outline: 0;
    box-sizing: border-box;
    height: 100%;
    border-radius: 0.5em;
    width: 100%;
    text-align: left;
    background-color: rgba(245, 245, 245, 1);
    color: rgba(97, 97, 97, 1);
    resize: none;
    caret-color: rgba(166, 166, 166, 1);
    font-size: clamp(0.2rem, 0.489rem + 0.4vw, 1rem);
    padding: 1rem 1.5rem;
    vertical-align: top;
  }
  .inputArea textarea:focus {
    outline: 1.5px solid rgb(28, 60, 219);
  }
  .inputArea div {
    padding-bottom: 0.5rem;
  }
  .awardBox {
    box-sizing: border-box;
    margin: 1.5rem 0;
    padding: 1rem 1rem 1rem 2rem;
    height: 12%;
    border-radius: 0.6em;
    border: 0.5px solid rgba(166, 166, 166, 1);
    width: 100%;
    display: flex;
    align-items: center;
  }
  .awardBox:first-child {
    margin: 2rem 0 1.5rem 0;
  }
  .name {
    color: rgb(28, 60, 219);
    padding-right: 4rem;
  }
  .money {
    display: block;
    color: rgb(28, 60, 219);
    padding: 0 2.5rem;
  }
  .state {
    width: 22.5%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .state button {
    color: rgba(255, 87, 51, 1);
    border: 0;
    cursor: pointer;
    background-color: #fff;
  }
  .awardBox .status-0 {
    /* 样式1  - 审核中*/
    margin-right: 5px;
    padding: 5px 8px;
    color: rgba(255, 255, 255, 1);
    background: rgba(0, 43, 255, 1);
    border-radius: 5px;
    font-size: 14px;
  }
  .awardBox .status-1 {
    /* 样式2  - 已通过*/
    padding: 5px 8px;
    color: rgba(255, 255, 255, 1);
    background: rgba(67, 207, 124, 1);
    border-radius: 5px;
    font-size: 14px;
  }
  .awardBox .status-2 {
    /* 样式3  - 未通过*/
    padding: 5px 8px;
    color: rgba(255, 255, 255, 1);
    background: rgba(255, 69, 0);
    border-radius: 5px;
    font-size: 14px;
  }
  .File > p {
    font-size: 0.85rem;
    color: rgba(255, 87, 51, 1);
  }
  .File {
    width: 100%;
    height: 15%;
  }
  .fplace {
    width: 100%;
    height: 100%;
    background-color: rgb(255, 255, 255);
  }
  .btn {
    position: absolute;
    width: 8rem;
    height: 2.5rem;
    border-radius: 1.4375rem;
    background-color: rgba(0, 43, 255, 1);
    color: rgba(255, 255, 255, 1);
    font-size: 1.15rem;
    border: 0;
    transition: 0.2s;
    cursor: pointer;
    margin-top: 1rem;
    left: 50%;
    margin-left: -4rem;
  }
  .btn:hover {
    width: 8.2rem;
    height: 2.6rem;
    background-color: #4176e9;
  }
</style>
