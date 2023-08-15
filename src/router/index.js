import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Stu-page/Home.vue";
import T_home from "../views/Teacher-page/T_home.vue";
import Login from "../views/Stu-page/Login.vue";
// import PageTwo from "../views/PageTwo.vue";

const routes = [
  //最初的登录主页面，未完善
  {
    path: "/",
    name: "Login",
    component: Login, //组件还没完善
  },

  //综合测评（首页）
  //评奖评优和测评公示为子路由
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      //以下三个为导航栏中的子组件
      {
        //综合测评
        path: "totalassessment",
        name: "totalassessment",
        component: () => import("../views/Stu-page/TotalAssessment.vue"),
      },
      {
        //评奖评优
        path: "judgeaward",
        name: "judgeaward",
        component: () => import("../views/Stu-page/JudgeAwards.vue"),
      },
      {
        //测评公示
        path: "evaluation",
        name: "evaluation",
        component: () => import("../views/Stu-page/Evaluation.vue"),
      },
      //导航栏到此结束

      //以下三个为常用工具的三个子路由
      {
        //德育自我评价
        path: "moraleducation",
        name: "moraleducation",
        component: () => import("../views/Stu-page/MoralEducation.vue"),
      },
      {
        //能力分申报
        path: "creditapplication",
        name: "creditapplication",
        component: () => import("../views/Stu-page/CreditApplication.vue"),
      },
      {
        //学生手册
        path: "",
        name: "",
        component: () => import("../views/Stu-page/Evaluation.vue"),
      },
      //常用工具到此结束
    ],
  },

  //教师端路由
  {
    path: "/t_home",
    name: "T_home",
    component: T_home,
    children: [
      {
        path: "auditlist",
        name: "auditlist",
        component: () => import("../views/Teacher-page/AuditList.vue"),
      },
      {
        path: "stulist",
        name: "stulist",
        component: () => import("../views/Teacher-page/StuList.vue"),
      },
      {
        path: "applicationcheck",
        name: "applicationcheck",
        component: () => import("../views/Teacher-page/ApplicationCheck.vue"),
      },
      {
        path: "moralevaluation",
        name: "moralevaluation",
        component: () => import("../views/Teacher-page/MoralEvaluation.vue"),
      },
      {
        path: "abilityjudge",
        name: "abilityjudge",
        component: () => import("../views/Teacher-page/AbilityJudge.vue"),
      },
      {
        path: "awardjudge",
        name: "awardjudge",
        component: () => import("../views/Teacher-page/AwardJudge.vue"),
      }
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
  linkActiveClass: "active",
});

export default router;
