import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAwesomeSweiper from "vue-awesome-swiper";
// import Vant from "vant";
// import "vant/lib/index.css";
import "./assets/styles/border.css";
import "./assets/styles/reset.css";
import "./assets/styles/iconfont.css";

Vue.config.productionTip = false;
Vue.use(VueAwesomeSweiper);
// Vue.use(Vant);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
