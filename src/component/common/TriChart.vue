<template>
  <div class="table">
    <div class="echarts-box" ref="echartsContainer"></div>
  </div>
</template>

<script>
  import * as echarts from "echarts";

  export default {
    mounted() {
      this.initChart();
    },
    methods: {
      initChart() {
        // ECharts configuration
        const option = {
          radar: {
            // shape: 'circle',
            indicator: [
              { name: "德育素质", max: 6500 },
              { name: "能力分数", max: 16000 },
              { name: "学分绩点", max: 30000 },
            ],
          },

          series: [
            {
              name: "Budget vs spending",
              type: "radar",
              data: [
                {
                  value: [4200, 3000, 20000, 35000, 50000, 18000],
                  name: "Allocated Budget",
                },
              ],
            },
          ],
        };

        // Initialize ECharts instance and render the chart
        const echartsContainer = this.$refs.echartsContainer;
        const chart = echarts.init(echartsContainer);
        chart.setOption(option);

        // Resize chart when the container size changes (optional)
        window.addEventListener("resize", () => {
          chart.resize();
        });
      },
    },
  };
</script>

<style scoped>
  .table {
    height: 100%;
  }

  .echarts-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%; /* 设置宽度以充满父容器 */
    height: 100%; /* 设置高度以充满父容器 */
  }
</style>

<style scoped>
  .table {
    height: 100%;
  }

  .echarts-box .ec-name {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .echarts-box .ec-name div {
    display: flex;
  }
</style>
