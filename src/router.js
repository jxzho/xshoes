import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/Home.vue";
import Login from "./views/login/Login.vue";
import Classify from "./views/classify/Classify.vue";
import Stroll from "./views/stroll/Stoll.vue";
import Cart from "./views/cart/Cart.vue";
import User from "./views/user/User.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/classify",
      name: "Classify",
      component: Classify
    },
    {
      path: "/stroll",
      name: "Stroll",
      component: Stroll
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart
    },
    {
      path: "/user",
      name: "User",
      component: User
    },
    {
      path: "*",
      name: "*",
      component: Home
    }
  ]
});
