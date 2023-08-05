//配置全局基础配置
import axios from "axios";
//配置中心
import WebConfig from "./global.config";
import router from "./router/index.js";
//后面的请求用request来发
let request = axios.create({
  baseURL: "",
  timeout: 30 * 1000,
  responseType: "json",
  headers: {},
});

//请求拦截器
request.interceptors.request.use(
  (config) => {
    //token设置
    let whiteList = WebConfig.whiteListApi;
    let url = config.url;
    ////////

    let token = localStorage.getItem("token");

    ///////
    //如果该url不在api白名单里，并且你已经登录了，就向请求头里存一下token.
    if (whiteList.indexOf(url) === -1 && token) {
      config.headers.token = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(new Error(error));
  }
);

//响应拦截器,处理返回的状态码
request.interceptors.response.use(
  (res) => {
    //响应统一处理
    const status = res.data.code || 200;
    const message = res.data.msg || "未知错误";
    //对一些状态码做兜底处理
    if (status == 401) {
      alert("你没有权限");
      router.push("/");
      return Promise.reject(new Error(message));
    }
    if (status != 200) {
      alert("错误码+status" + "   " + message);
      return Promise.reject(new Error(message));
    }
    return res;
  },
  (error) => {
    // alert("error");
    return Promise.reject(new Error(error));
  }
);

export default request;
