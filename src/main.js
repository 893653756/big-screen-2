import Vue from "vue";
import App from "./App.vue";
import SvgIcon from "./components/SvgIcon";
import "./icons/index";
import "normalize.css";
import * as echarts from "echarts";
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
Vue.component(SvgIcon.name, SvgIcon);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
