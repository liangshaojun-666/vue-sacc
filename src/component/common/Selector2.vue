//适配能力分申报

<template>
  <el-select v-model="value" filterable placeholder="请选择" id="sou">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>
<style>
  input {
    caret-color: rgb(65, 64, 64);
  }
  .el-input__wrapper {
    caret-color: transparent;
  }
</style>
<script>
  export default {
    data() {
      return {
        ///假数据
        options: [
          {
            value: "选项1",
            label: "社会工作能力",
          },
          {
            value: "选项2",
            label: "学术科技成果（含论文报告）",
          },
        ],
        value: "",
      };
    },
  };
</script>
