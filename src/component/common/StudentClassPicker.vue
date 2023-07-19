// 班级选择器
<template>
  <div class="StudentClassSelector">
    <div id="studentClass">班级</div>
    <el-select v-model="value" placeholder="请选择班级" class="studentClassShow">
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
          value: "B210300",
        },
        {
          value: "B210301",
        },
        {
          value: "B210302",
        },
        {
          value: "B210303",
        },
        {
          value: "B210304",
        },
        {
          value: "B210305",
        },
        {
          value: "B210306",
        },
        {
          value: "B210307",
        },
        {
          value: "B210308",
        },
        {
          value: "B210309",
        },
        {
          value: "B210310",
        },
        {
          value: "B210311",
        },
        {
          value: "B210312",
        },
        {
          value: "B210313",
        },
        {
          value: "B210314",
        },
        {
          value: "B210315",
        },
        {
          value: "B210316",
        },
        {
          value: "B210317",
        },
        {
          value: "B210318",
        },
        {
          value: "B210319",
        },
        {
          value: "B210320",
        },
        {
          value: "B210321",
        },
        {
          value: "B210322",
        },
        {
          value: "B220400",
        },
        {
          value: "B220401",
        },
        {
          value: "B220402",
        },
        {
          value: "B220403",
        },
        {
          value: "B220404",
        },
        {
          value: "B220405",
        },
        {
          value: "B220406",
        },
        {
          value: "B220407",
        },
        {
          value: "B220408",
        },
        {
          value: "B220409",
        },
        {
          value: "B220410",
        },
        {
          value: "B220411",
        },
        {
          value: "B220412",
        },
        {
          value: "B220413",
        },
        {
          value: "B220414",
        },
        {
          value: "B220415",
        },
        {
          value: "B220416",
        },
        {
          value: "B220417",
        },
        {
          value: "B220418",
        },
        {
          value: "B220419",
        },
        {
          value: "B220420",
        },
        {
          value: "B220421",
        },
        {
          value: "B220422",
        },
        {
          value: "B220423",
        },
        {
          value: "B220424",
        },
        {
          value: "B220425",
        },
      ],
      value: "",
    };
  },
};
</script>


<style scoped>
.StudentClassSelector {
  display: inline-block;
  align-items: center;
  box-sizing: border-box;
  height: 9.73vh;
}
.studentClassShow {
  text-align: center; 
  display: inline-block; 
}
#studentClass {
  padding: 1.5rem 0.55rem 1.5rem 9rem;
  font-size: 2vw;
  font-weight: 500;
  letter-spacing: 3px;
  display: inline-block;
}
</style>