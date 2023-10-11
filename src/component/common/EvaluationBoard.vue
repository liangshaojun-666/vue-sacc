// 测评公式中间板

<template>
  <div class="CenterBox">
    <div class="BlueText">
      <img src="../../assets/img/blue.png" alt="" />
      公示列表
    </div>
    <div class="container">
      <div class="scroll-container">
        <!-- Your boxes go here -->
        <div v-for="(item, index) in dataList" :key="index" class="box">
          <h4>{{ item.fileName }}</h4>
          <a :href="item.fileURL" target="_blank">下载</a>
        </div>
        <!-- Repeat more box elements as needed -->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dataList: [], // Initialize with the array you receive from the backend
      };
    },
    methods: {
      async fetchData() {
        try {
          const response = await axios.get("YOUR_API_ENDPOINT"); // Replace with your actual API endpoint
          const { data } = response.data;
          this.dataList = data;
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      },
    },
    mounted() {
      // Simulating backend response for demonstration purposes
      const backendResponse = {
        success: true,
        errCode: null,
        errMsg: null,
        data: [
          {
            fileName: "南京邮电大学优秀毕业生评选办法",
            fileURL:
              "https://xgwx.njupt.edu.cn/swms/a/zsk/zskwh/downloadAllFile?isAll=0&chk=7846463273CD44089B106C0F7CDD334F",
          },
          {
            fileName: "南京邮电大学优秀毕业生评选办法",
            fileURL:
              "https://xgwx.njupt.edu.cn/swms/a/zsk/zskwh/downloadAllFile?isAll=0&chk=7846463273CD44089B106C0F7CDD334F",
          },
          {
            fileName: "南京邮电大学优秀毕业生评选办法",
            fileURL:
              "https://xgwx.njupt.edu.cn/swms/a/zsk/zskwh/downloadAllFile?isAll=0&chk=7846463273CD44089B106C0F7CDD334F",
          },
          {
            fileName: "南京邮电大学优秀毕业生评选办法",
            fileURL:
              "https://xgwx.njupt.edu.cn/swms/a/zsk/zskwh/downloadAllFile?isAll=0&chk=7846463273CD44089B106C0F7CDD334F",
          },
          {
            fileName: "南京邮电大学优秀毕业生评选办法",
            fileURL:
              "https://xgwx.njupt.edu.cn/swms/a/zsk/zskwh/downloadAllFile?isAll=0&chk=7846463273CD44089B106C0F7CDD334F",
          },
          {
            fileName: "南京邮电大学优秀毕业生评选办法",
            fileURL:
              "https://xgwx.njupt.edu.cn/swms/a/zsk/zskwh/downloadAllFile?isAll=0&chk=7846463273CD44089B106C0F7CDD334F",
          },
          {
            fileName: "南京邮电大学优秀毕业生评选办法",
            fileURL:
              "https://xgwx.njupt.edu.cn/swms/a/zsk/zskwh/downloadAllFile?isAll=0&chk=7846463273CD44089B106C0F7CDD334F",
          },
          {
            fileName: "南京邮电大学优秀毕业生评选办法",
            fileURL:
              "https://xgwx.njupt.edu.cn/swms/a/zsk/zskwh/downloadAllFile?isAll=0&chk=7846463273CD44089B106C0F7CDD334F",
          },
          // ... other items ...
        ],
      };
      this.dataList = backendResponse.data;
      this.fetchData();
    },
  };
</script>
<style scoped>
  .CenterBox {
    width: 42vw;
    height: 81.02vh;
    background-color: rgba(255, 255, 255, 0.8);
    box-sizing: border-box;
    border-radius: 15px 15px 0px 0px;
    color: #000;
  }
  .BlueText {
    height: 1.25em;
    display: flex;
    align-items: center;
    color: rgba(0, 43, 255, 1);
    padding-top: 2rem;
    font-size: 2.2vh;
  }
  .BlueText img {
    height: 100%;
    margin-right: 0.5em;
    margin-left: 2em;
  }
  .container {
    width: 100%;
    height: 92%;
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
    width: 80%;
    height: 13%;
    border-radius: 1rem;
    background: rgba(255, 255, 255, 1);
    margin-top: 1rem;
    border: 0.5px solid rgba(166, 166, 166, 1);
    display: flex;
    align-items: center;
  }
  .box h4 {
    margin-left: 1.6rem;
    width: 80%;
    font-size: 1vw, 2vh;
  }
  .box a {
    display: block;
    padding: 5px 10px;
    color: rgba(255, 255, 255, 1);
    background: rgba(0, 43, 255, 1);
    border-radius: 5px;
    font-size: 2vh;
    cursor: pointer;
    text-decoration: none;
  }
  .box:first-child {
    margin-top: 2.2rem;
  }
</style>
