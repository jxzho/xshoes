import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAwesomeSweiper from "vue-awesome-swiper";
import "./assets/styles/border.css";
import "./assets/styles/reset.css";
import "./assets/styles/iconfont.css";

Vue.config.productionTip = false;
Vue.use(VueAwesomeSweiper);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
