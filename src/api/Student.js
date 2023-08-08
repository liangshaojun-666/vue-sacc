import { request } from "./request";

//学生端的接口方法
// 1)登录login
export const login = (data) => {
  return request({
    url: "/login",
    methods: "post",
    data,
  });
};
// 2）退出登录
export function logout() {
  return myRequest({
    url: "/api/logout",
    method: "POST",
  })
    .then((response) => {
      // 这里进行跳转逻辑
      // 例如：跳转到登录页面
      window.location.href = "/login";
      return response;
    })
    .catch((error) => {
      console.error("退出登录失败:", error);
      throw error;
    });
}

// 3）主页
// import Todata from "../views/Stu-page/TotalAssessment.vue";
export const studentPage = (data) => {
  return request({
    url: "http://127.0.0.1:8080/student/",
    methods: "GET",
  });
};
