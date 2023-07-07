import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
// import PageTwo from "../views/PageTwo.vue";

const routes = [
  //最初的登录主页面，未完善
  {
    path: "/login",
    name: "login",
    component: Login, //组件还没完善
  },

  //综合测评（首页）
  //评奖评优和测评公示为子路由
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        //综合测评
        path: "totalassessment",
        name: "totalassessment",
        component: () => import("../views/TotalAssessment.vue"),
      },
      {
        //评奖评优
        path: "judgeaward",
        name: "judgeaward",
        component: () => import("../views/JudgeAwards.vue"),
      },
      {
        //测评公示
        path: "evaluation",
        name: "evaluation",
        component: () => import("../views/Evaluation.vue"),
      },
    ],
  },
  //懒加载代码段
  // {
  //   path: "/xxx",
  //   name: "xxx",
  //   component: () =>
  //     import("../views/XXX.vue")
  // },
  //懒加载代码段
  // {
  //   path: "/xxx",
  //   name: "xxx",
  //   component: () =>
  //     import("../views/XXX.vue")
  // },
  //懒加载代码段
  // {
  //   path: "/xxx",
  //   name: "xxx",
  //   component: () =>
  //     import("../views/XXX.vue")
  // },
  //重定向
  // { path: "/home", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory("/sacc"),
  routes,
});

export default router;
