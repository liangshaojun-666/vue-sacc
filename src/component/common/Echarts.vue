<template>
  <div class="table">
    <div
      class="echarts-box"
      ref="echartsContainer"
      style="width: 100%; height: 100%"
    ></div>
  </div>
</template>

<script>
  import * as echarts from "echarts";
  import elementResizeDetectorMaker from "element-resize-detector";

  export default {
    data() {
      return {
        dataPoints: [
          { date: "2020-2021", value: 60 },
          { date: "2021-2022", value: 98 },
          { date: "2022-2023", value: 77 },
          { date: "2023-2024", value: 83 },
        ],
      };
    },
    mounted() {
      this.initEcharts();
    },
    methods: {
      initEcharts() {
        const erd = elementResizeDetectorMaker();
        const self = this;
        erd.listenTo(this.$refs.echartsContainer, function (element) {
          self.resizeEcharts();
        });
        this.resizeEcharts();
      },
      resizeEcharts() {
        this.$nextTick(() => {
          const dom = this.$refs.echartsContainer;
          const myChart = echarts.init(dom);
          const option = {
            xAxis: {
              type: "category",
              data: this.dataPoints.map((point) => point.date),
              axisLine: {
                lineStyle: {
                  color: "rgba(128, 128, 128, 1)", // Change the axis line color
                  type: "solid", // Change to solid line
                },
              },
              axisTick: {
                show: false,
              },
            },
            yAxis: {
              type: "value",
              min: 0,
              max: 100,
              interval: 20,
              axisLine: {
                lineStyle: {
                  color: "rgba(229, 229, 229, 1)", // Change the axis line color
                  type: "dashed", // Change to dashed line
                },
              },
              axisLabel: {
                formatter: "{value}", // Removed the percentage symbol
                color: "rgba(128, 128, 128, 1)", // Change the font color
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: "rgba(229, 229, 229, 1)", // Change the grid line color
                  type: "dashed", // Change to dashed line
                },
              },
            },
            color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [
              { offset: 0, color: "rgba(27, 164, 222, 1)" },
              { offset: 1, color: "rgba(225, 21, 116, 1)" },
            ]),
            series: [
              {
                data: this.dataPoints.map((point) => point.value),
                type: "line",
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 2.5,
                      type: "solid", // Change to dashed line
                    },
                  },
                },
                markPoint: {
                  symbol: "circle",
                  symbolSize: 12,
                  data: this.dataPoints.map((point) => ({
                    name: "转折点",
                    value: point.value,
                    xAxis: point.date,
                    yAxis: point.value,
                    label: {
                      formatter: "{c}", // Removed the percentage symbol
                      show: true,
                      position: "top",
                      color: "rgba(41, 100, 227, 1)",
                      fontSize: 12,
                    },
                  })),
                },
              },
            ],
            grid: {
              top: "14%", // Set the top padding to 10% of the container height
              left: "6%",
              right: "6%",
              bottom: "10.5%", // Set the bottom padding to 0
              containLabel: false, // Avoid labels overflowing outside the chart
            },
          };

          // Modify markPoint to add custom markers for each data point
          option.series[0].markPoint = {
            symbol: "circle",
            symbolSize: 10,
            data: this.dataPoints.map((point) => ({
              name: "转折点",
              value: point.value,
              xAxis: point.date,
              yAxis: point.value,
              label: {
                formatter: "{c}", // Removed the percentage symbol
                show: true,
                position: "top",
                color: "rgba(41, 100, 227, 1)",
                fontSize: 12,
              },
            })),
          };

          myChart.setOption(option);
          myChart.resize();
        });
      },
    },
  };
</script>

<style scoped>
  .table {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .echarts-box {
    width: 100%;
    height: 100%;
  }
</style>
