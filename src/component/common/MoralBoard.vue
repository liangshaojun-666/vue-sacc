<template>
  <div class="CenterBox">
    <div class="header">
      <img src="../../assets/img/fontIcon.png" alt="" @click="back" />
      <router-link :to="{ name: 'totalassessment' }">返回首页</router-link>
    </div>
    <div class="BlueText">
      <img src="../../assets/img/blue.png" alt="" />
      德育素质自我测评
    </div>
    <div class="container">
      <div class="scroll-container">
        <div v-for="(item, index) in dataList" :key="index" class="box">
          <h4>{{ item.Name }}</h4>
          <h5>{{ item.content }}</h5>
          <div class="mark">
            <input
              type="number"
              v-model.number="item.mark"
              @input="updateMark(index, $event.target.value)"
              min="0"
              max="15"
            />
            <h4>/15</h4>
          </div>
        </div>
      </div>
    </div>
    <button class="btn">提交</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        input: "",
        //存储box内的文字
        dataList: [
          {
            moralQualityID: 1,
            Name: "政治思想",
            content:
              "用户主动点击分享 绝大多数APP都是在详情页等需要分享的页面放置一个分享按钮，由用户自行选择分享。这种情况下用户是否分享主要是取决于产品内容本身，比如内容有趣或是有用。在一些APP中设计者会对这个分享按钮加一些鼓励的文案或着重的设计来促进用户分享。用户分享内容到社交媒体或好友，不应该是一种粗暴的强制行为，我们应该在保证...",
          },
          {
            moralQualityID: 2,
            Name: "政治思想",
            content:
              "用户主动点击分享 绝大多数APP都是在详情页等需要分享的页面放置一个分享按钮，由用户自行选择分享。这种情况下用户是否分享主要是取决于产品内容本身，比如内容有趣或是有用。在一些APP中设计者会对这个分享按钮加一些鼓励的文案或着重的设计来促进用户分享。用户分享内容到社交媒体或好友，不应该是一种粗暴的强制行为，我们应该在保证...",
          },
          {
            moralQualityID: 3,
            Name: "政治思想",
            content:
              "用户主动点击分享 绝大多数APP都是在详情页等需要分享的页面放置一个分享按钮，由用户自行选择分享。这种情况下用户是否分享主要是取决于产品内容本身，比如内容有趣或是有用。在一些APP中设计者会对这个分享按钮加一些鼓励的文案或着重的设计来促进用户分享。用户分享内容到社交媒体或好友，不应该是一种粗暴的强制行为，我们应该在保证...",
          },
          {
            moralQualityID: 4,
            Name: "政治思想",
            content:
              "用户主动点击分享 绝大多数APP都是在详情页等需要分享的页面放置一个分享按钮，由用户自行选择分享。这种情况下用户是否分享主要是取决于产品内容本身，比如内容有趣或是有用。在一些APP中设计者会对这个分享按钮加一些鼓励的文案或着重的设计来促进用户分享。用户分享内容到社交媒体或好友，不应该是一种粗暴的强制行为，我们应该在保证...",
          },
          {
            moralQualityID: 5,
            Name: "政治思想",
            content:
              "用户主动点击分享 绝大多数APP都是在详情页等需要分享的页面放置一个分享按钮，由用户自行选择分享。这种情况下用户是否分享主要是取决于产品内容本身，比如内容有趣或是有用。在一些APP中设计者会对这个分享按钮加一些鼓励的文案或着重的设计来促进用户分享。用户分享内容到社交媒体或好友，不应该是一种粗暴的强制行为，我们应该在保证...",
          },
          {
            moralQualityID: 6,
            Name: "政治思想",
            content:
              "用户主动点击分享 绝大多数APP都是在详情页等需要分享的页面放置一个分享按钮，由用户自行选择分享。这种情况下用户是否分享主要是取决于产品内容本身，比如内容有趣或是有用。在一些APP中设计者会对这个分享按钮加一些鼓励的文案或着重的设计来促进用户分享。用户分享内容到社交媒体或好友，不应该是一种粗暴的强制行为，我们应该在保证...",
          },
          {
            moralQualityID: 7,
            Name: "政治思想",
            content:
              "用户主动点击分享 绝大多数APP都是在详情页等需要分享的页面放置一个分享按钮，由用户自行选择分享。这种情况下用户是否分享主要是取决于产品内容本身，比如内容有趣或是有用。在一些APP中设计者会对这个分享按钮加一些鼓励的文案或着重的设计来促进用户分享。用户分享内容到社交媒体或好友，不应该是一种粗暴的强制行为，我们应该在保证...",
          },
        ],
      };
    },
    watch: {
      dataList: {
        deep: true,
        handler(newVal) {
          newVal.forEach((item) => {
            if (item.mark < 0) {
              item.mark = 0;
            } else if (item.mark > 15) {
              item.mark = 15;
            }
          });
        },
      },
    },
    //添加了mounted生命周期钩子函数来在组件挂载后加载之前保存的数据。

    mounted() {
      this.loadMarks();
    },

    methods: {
      back() {
        this.$router.push("/home/totalassessment");
      },
      updateMark(index, value) {
        this.dataList[index].mark = parseInt(value);
        this.saveMarks();
      },
      saveMarks() {
        localStorage.setItem("marks", JSON.stringify(this.dataList));
      },
      //loadMarks方法从本地存储中获取保存的数据，并将其赋值给dataList数组。

      loadMarks() {
        const marks = localStorage.getItem("marks");
        if (marks) {
          this.dataList = JSON.parse(marks);
        }
      },
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
  }
  .header {
    display: block;
    width: 20%;
    height: 8%;
    box-sizing: border-box;
    padding: 1% 3% 1% 2%;
    display: flex;
    align-items: center;
  }
  .header a {
    display: block;
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: rgba(166, 166, 166, 1);
    font-size: 0.85rem;
    padding-left: 0.4rem;
    display: flex;
    align-items: center;
  }
  .header img {
    height: 70%;
    cursor: pointer;
  }
  .BlueText {
    height: 1.25em;
    display: flex;
    align-items: center;
    color: rgba(0, 43, 255, 1);

    font-size: 2.2vh;
  }
  .BlueText img {
    height: 100%;
    margin-right: 0.5em;
    margin-left: 1.75rem;
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
    margin-top: 4rem;
    left: 50%;
    margin-left: -4rem;
  }
  .btn:hover {
    width: 8.2rem;
    height: 2.6rem;
    background-color: #4176e9;
  }
  .container {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden; /* Hide overflow to prevent double scrollbar */
  }
  .scroll-container {
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
  .box {
    margin: 0 auto;
    width: 92%;
    height: 25%;
    border-radius: 0.5rem;
    background: rgba(255, 255, 255, 1);
    margin-top: 1rem;
    border: 0.5px solid rgba(166, 166, 166, 1);
    display: flex;
    align-items: center;
  }
  .box h4 {
    margin-left: 2rem;
    width: 15%;
    font-size: 1.3vw;
    color: rgba(0, 43, 255, 1);
  }
  .box h5 {
    width: 55%;
    font-weight: normal;
  }
  .mark {
    width: 30%;
    display: flex;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mark h4 {
    font-weight: normal;
    margin-left: 0;
  }
  .mark input {
    width: 3vw;
    height: 2vw;
    font-size: larger;
    text-align: center;
    border: 0;
    background-color: rgba(245, 245, 245, 1);
    display: flex;
    align-items: center; /* 垂直居中 */
  }
</style>
