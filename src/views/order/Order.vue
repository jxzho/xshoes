<template>
  <div class="order">
    <HeaderNav :navOptions="navOptions"></HeaderNav>
    <section class="main" ref="wrapper">
      <div class="content">
        <OrderAddress></OrderAddress>
        <OrderShoes :shoesData="shoesData"></OrderShoes>
      </div>
    </section>
    <van-submit-bar
      :price="0"
      button-text="提交订单"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
import HeaderNav from "common/HeaderNav";
import OrderAddress from "./components/OrderAddress";
import OrderShoes from "./components/OrderShoes";
import BScroll from 'better-scroll';

export default {
  name: "Order",
  data() {
    return {
      navOptions: {
        title: "确认订单"
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(this.shoesData);
    },
    bscrollInit() {
      this.$nextTick(() => {
        if (!this.scroll) {
          const wrapper = this.$refs.wrapper;
          this.scroll = new BScroll(wrapper, {
            scrollbar: true,
            click: true,
            preventDefaultException: {
              tagName: /^SPAN$/
            }
          });
        } else {
          this.scroll.refresh();
        }
      });
    },
  },
  computed: {
    shoesData() {
      return this.$route.params.data;
    }
  },
  mounted() {
    this.bscrollInit();
  },
  components: {
    HeaderNav,
    OrderAddress,
    OrderShoes
  }
}
</script>

<style lang="less" scoped>
  .order{
    position: relative;
    height: 100%;
    background: rgba(0, 0, 0, .03);

    .main {
      position: absolute;
      top: .45rem; left: 0; right: 0; bottom: .5rem;
      overflow: hidden;
    }
  }
</style>


