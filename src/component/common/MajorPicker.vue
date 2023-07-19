// 专业选择器
<template>
  <div class="MajorSelector">
    <div id="major">专业</div>
    <el-select v-model="value" placeholder="请选择专业" class="majorShow">
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
          value: "计算机科学与技术",
        },
        {
          value: "信息安全",
        },
        {
          value: "软件工程",
        },
        {
          value: "软件工程嵌入式培养",
        },
        {
          value: "数据科学与大数据技术",
        },
      ],
      value: "",
    };
  },
};
</script>


<style scoped>
.MajorSelector {
  display: inline-block;
  align-items: center;
  box-sizing: border-box;
  height: 9.73vh;
}
.majorShow {
  text-align: center; 
  display: inline-block; 
}
#major {
  padding: 1.5rem 0.55rem 1.5rem 9rem;
  font-size: 2vw;
  font-weight: 500;
  letter-spacing: 3px;
  display: inline-block;
}
</style>