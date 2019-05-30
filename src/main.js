import Vue from "vue";
import './plugins/axios'
import App from "./App.vue";
import router from "./router/router.js";

//引入ElementUI组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element.js'
import store from './store.js'


//引入标签页
import { Tabbar, TabbarItem } from 'vant';
import { Tab, Tabs } from 'vant';

Vue.use(Tab).use(Tabs);
Vue.use(Tabbar).use(TabbarItem);

Vue.config.productionTip = false;

//注册组件
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
