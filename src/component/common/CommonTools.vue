// 封装为常用工具组件，包括三个路由：德育素质评价，能力分申报，学生手册
<template>
  <div class="ToolBox">
    <div class="list" id="list1">
      <img src="../../assets/img/think.png" alt="" />
      <router-link
        :to="{ name: 'moraleducation' }"
        custom
        v-slot="{ navigate, isActive }"
      >
        <li
          @click="navigate"
          @keypress.enter="navigate"
          :class="{ active: isActive }"
          role="link"
        >
          <p>德育素质自我评价</p>
        </li>
      </router-link>
    </div>
    <div class="list" id="list2">
      <img src="../../assets/img/give.png" alt="" />
      <router-link
        :to="{ name: 'creditapplication' }"
        custom
        v-slot="{ navigate, isActive }"
      >
        <li
          @click="navigate"
          @keypress.enter="navigate"
          :class="{ active: isActive }"
          role="link"
        >
          <p>能力分申报</p>
        </li>
      </router-link>
    </div>
    <div class="list" id="list3">
      <img src="../../assets/img/book.png" alt="" />
      <router-link
        :to="{ name: 'creditapplication' }"
        custom
        v-slot="{ navigate, isActive }"
      >
        <li
          @click="navigate"
          @keypress.enter="navigate"
          :class="{ active: isActive }"
          role="link"
        >
          <p>学生手册</p>
        </li>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
  };
</script>

<style scoped>
  .ToolBox {
    margin-left: 0rem;
    text-decoration: none;
  }
  .list li {
    text-decoration: none;
  }
  li {
    list-style-type: none;
    cursor: pointer;
  }
  .list {
    height: 2.8rem;
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    box-sizing: border-box;
  }
  .list img {
    height: 60%;
    padding-right: 8%;
    padding-left: 10%;
  }
  #list1,
  #list2 {
    border-bottom: 0.5px solid rgba(212, 212, 212, 1);
  }
  .ToolBox {
    width: 80%;
    margin-top: 0.8rem;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 0.9rem;
    box-shadow: 0px 0px 10px rgba(128, 128, 128, 0.16);
  }
</style>
