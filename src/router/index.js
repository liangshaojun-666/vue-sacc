import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import PageOne from "../views/PageOne.vue";
import PageTwo from "../views/PageTwo.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home, //组件还没完善
  },
  {
    path: "/page1",
    name: "page1",
    component: PageOne, //组件还没完善
  },
  {
    path: "/page2",
    name: "page2",
    component: PageTwo, //组件还没完善
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
  // {
  //   path: "*",
  //   redirect: "/",
  // },
];

const router = createRouter({
  history: createWebHistory("/sacc"),
  routes,
});

export default router;
