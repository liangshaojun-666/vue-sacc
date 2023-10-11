import { request } from "./request";

//学生端的接口方法
// 1)登录login
export const login = (data) => {
  return request({
    url: "/login",
    method: "POST",
    data,
  });
};
// 2）退出登录
export function logout() {
  return request({
    url: "/exit",
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
export const studentPage = (year) => {
  return request({
    url: `/student/${year}`,
    method: "GET",
  });
};

//4)综合测评
export const getMoral = (year) => {
  return request({
    url: "/student/moral_quality_score/{year}",
    method: "GET",
  });
};
//5)获取能力分申报
export const getCredit = (year) => {
  return request({
    url: "/student/item/{year}",
    method: "GET",
    params: { year: year },
  });
};

//6)获取评奖评优信息
export const getAward = (year) => {
  return request({
    url: "/student/award/{year}",
    method: "GET",
    params: { year: year },
  });
};

//7)获取公钥接口
export const getpubKey = () => {
  return request({
    url: "/get_public_key",
    method: "get",
  });
};
