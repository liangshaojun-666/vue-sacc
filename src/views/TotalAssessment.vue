
<template>
  <div class="container">
    <DatePicker></DatePicker>
    <ScoreShow></ScoreShow>
  </div>
</template>

<script>
import DatePicker from "../component/common/DatePicker.vue";
import ScoreShow from "../component/common/ScoreShow.vue";

export default {
  data() {
    return {};
  },
  components: {
    DatePicker,
    ScoreShow,
  },
};
</script>

<style scoped>
.CenterBox {
  margin: 0 auto;
}
</style>