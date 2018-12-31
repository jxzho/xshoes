import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/";
import area from "assets/js/area";
import VueAwesomeSweiper from "vue-awesome-swiper";
import Vant from "vant"; // vant

// CSS
import "vant/lib/index.css"; // vant.css
import "./assets/styles/border.css";
import "./assets/styles/reset.css";
import "./assets/styles/iconfont.css";

Vue.config.productionTip = false;
Vue.use(VueAwesomeSweiper);
Vue.use(Vant);
Vue.prototype.area = area;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
