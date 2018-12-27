<template>
  <div class="cart">
    <HeaderNav :navOptions="{ title: 'MY CART' }"></HeaderNav>
    <CartContents></CartContents>
    <CartFooter></CartFooter>
  </div>  
</template>

<script>
import HeaderNav from "common/HeaderNav";
import CartContents from "./components/CartContents";
import CartFooter from "./components/CartFooter";

export default {
  name: "Cart",
  data() {
    return {
    };
  },
  computed: {
  },
  components: {
    HeaderNav,
    CartContents,
    CartFooter
  }
}
</script>

<style lang="less" scoped>
  .cart {
    height: 100%;
    overflow: hidden;
    background: rgba(0, 0, 0, .02);
    position: relative;

    .body {
      position: absolute;
      top: .45rem; bottom: 0; left: 0; right: 0;
    }
  }
</style>

