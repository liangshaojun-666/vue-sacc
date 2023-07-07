<template>
  <router-link to="totalassessment">综合测评</router-link>
  <router-link to="judgeaward">评奖评优</router-link>
  <router-link to="evaluation">测评公示</router-link>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>


<style scoped>
a {
  padding: 20px;
}
</style>