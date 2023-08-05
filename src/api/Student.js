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
export const exit = () => {
  return request({
    url: "http://127.0.0.1:8080/exit",
    methods: "POST",
    headers: {
      TOKEN: "",
    },
  }).then((res) => {
    this.$router.push("/login");
  });
};

// 3）主页
// import Todata from "../views/Stu-page/TotalAssessment.vue";
export const studentPage = (data) => {
  return request({
    url: "http://127.0.0.1:8080/student/",
    methods: "GET",
  });
};
