import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/Home.vue";
import Classify from "./views/classify/Classify.vue";
import Stroll from "./views/stroll/Stoll.vue";
import Cart from "./views/cart/Cart.vue";
import User from "./views/user/User.vue";
import UserAdress from "./views/user/UserAdress.vue";
import UserEditAddress from "./views/user/UserEditAddress.vue";
import Order from "./views/order/Order.vue";
import Item from "./common/Item.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: "Classify",
      path: "/classify",
      component: Classify
    },
    {
      name: "Stroll",
      path: "/stroll",
      component: Stroll
    },
    {
      name: "Cart",
      path: "/cart",
      component: Cart
    },
    {
      name: "User",
      path: "/user",
      component: User,
      children: [
        {
          name: "UserAddress",
          path: "address",
          component: UserAdress
        },
        {
          name: "UserEditAddress",
          path: "address/:action",
          component: UserEditAddress
        }
      ]
    },
    {
      name: "Shoes",
      path: "/shoes/:id",
      component: Item
    },
    {
      name: "Order",
      path: "/order",
      component: Order,
      props: true
    },
    {
      name: "Home",
      path: "/",
      component: Home
    }
  ]
});
