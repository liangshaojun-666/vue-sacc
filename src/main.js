import { createApp } from "vue";

//引入公共css文件
import "./style.css";

// 引入组件
import App from "./App.vue";
// 引入资源
import router from "./router/index.js";
//全局引入Ui库
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// 创建app
const app = createApp(App);
// 注入路由
app.use(router);
//注入组件库
app.use(ElementPlus);
// 挂载实例
app.mount("#app");
