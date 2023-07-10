// 年份选择器
<template>
  <div class="DateSelector">
    <div id="year">学年</div>
    <el-select v-model="value" placeholder="请选择学年" class="dateShow">
      <el-option v-for="item in cities" :key="item.value" :value="item.value">
        <span>{{ item.value }}</span>
        <!-- <span style="float: right; color: #8492a6; font-size: 13px">
          {{ item.value }}
        </span> -->
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cities: [
        {
          value: "2017-2018",
        },
        {
          value: "2018-2019",
        },
        {
          value: "2019-2020",
        },
        {
          value: "2020-2021",
        },
        {
          value: "2021-2022",
        },
        {
          value: "2022-2023",
        },
        {
          value: "2023-2024",
        },
        {
          value: "2024-2025",
        },
        {
          value: "2025-2026",
        },
        {
          value: "2026-2027",
        },
      ],
      value: "",
    };
  },
};
</script>


<style scoped>
.DateSelector {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 9.73vh;
}
.dateShow {
  text-align: center;
}
#year {
  padding: 1.5rem 0.55rem 1.5rem 9rem;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 3px;
}
</style>