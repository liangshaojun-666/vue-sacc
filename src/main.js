import { createApp } from "vue";

//引入公共css文件
import "./style.css";

// 引入组件
import App from "./App.vue";
// 引入资源
import router from "./router/index.js";
// 创建app
const app = createApp(App);
// 注入路由
app.use(router);
// 挂载实例
app.mount("#app");
