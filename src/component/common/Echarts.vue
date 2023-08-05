<template>
  <div class="echarts-box" ref="echartsContainer">
    <div id="main" style="width: 100px; height: 100%"></div>
  </div>
</template>

<script>
  import * as echarts from "echarts";
  import elementResizeDetectorMaker from "element-resize-detector";
  export default {
    mounted() {
      this.changeEchartsWidthApi();
    },
    methods: {
      changeEchartsWidthApi() {
        var erd = elementResizeDetectorMaker();
        var self = this;
        erd.listenTo(document.getElementById("main"), function (element) {
          self.speedChartsApi();
        });
      },
      speedChartsApi() {
        this.$nextTick((_) => {
          const dom = this.$refs.echartsContainer;
          dom.style.width = "75%";
          dom.style.height = "80%";
          var myChart = echarts.init(this.$refs.echartsContainer);
          myChart.setOption({
            xAxis: {
              type: "category",
              data: ["2020", "2021", "2022", "2023"],
            },
            yAxis: {
              type: "value",
            },
            color: [
              //   "#c23531",
              "#91c7ae",

              "#c4ccd3",
            ],
            series: [
              {
                data: [0, 40, 20, 60, 80, 100],
                type: "line",
              },
            ],
            grid: {
              top: 15,
              left: 150,
              right: 0,
              bottom: 5,
              width: "auto",
              height: "auto",
            },
          });
          myChart.resize();
          setTimeout(function () {
            window.addEventListener("resize", () => {
              myChart.resize();
              this.changeEchartsWidthApi();
            });
          }, 200);
        });
      },
    },
  };
</script>

<style scoped>
  .echarts-box {
    padding: 0;
    height: 100%;
    width: 100%;
  }
</style>
