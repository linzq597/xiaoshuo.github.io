import Vue from "vue";
import './plugins/axios'
import App from "./App.vue";
import router from "./router/router.js";

//引入ElementUI组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element.js'

Vue.config.productionTip = false;

//注册组件
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
