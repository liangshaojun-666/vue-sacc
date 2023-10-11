//添加额外功能
//封装额外方法，并且引入到教师端和学生端
//1.防止重复频繁提交请求
import request from "../axios";
var myRequest = (function () {
  let mem = {};
  let hasRequest = [];
  return function (config) {
    let url = config.url;
    if (mem[url]) {
      return Promise.resolve(mem[url]);
    } else {
      if (hasRequest.indexOf(url) !== -1) {
        return Promise.reject({ mes: "请求已经提交" });
      }
      hasRequest.push(url);
      return request({
        ...config,
      }).then((res) => {
        hasRequest = hasRequest.filter((item) => {
          if (item !== url) {
            return item;
          }
        });
        return res;
      });
    }
  };
})();
export { myRequest as request, request as initRequest };
