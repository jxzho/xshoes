<template>
  <div class="order">
    <HeaderNav :navOptions="navOptions"></HeaderNav>
    <section class="main" ref="wrapper">
      <div class="content">
        <OrderAddress :scart_id="scart_id" @set-address="handleSetAddress"></OrderAddress>
        <OrderShoes></OrderShoes>
      </div>
    </section>
    <van-submit-bar
      :price="orderTotalPrice * 100"
      button-text="支付"
      @submit="onSubmit"
    />
    <div ref="form"></div>
  </div>
</template>

<script>
import HeaderNav from "common/HeaderNav";
import OrderAddress from "./components/OrderAddress";
import OrderShoes from "./components/OrderShoes";
import BScroll from 'better-scroll';
import { mapState, mapGetters } from "vuex";
import api from "@/api";
import { Toast } from 'vant';

export default {
  name: "Order",
  data() {
    return {
      navOptions: {
        title: "确认订单"
      },
      address: '',
      dingdanhao: ''
    }
  },
  methods: {
    handleSetAddress(address) {
      this.address = address;
    },
    onSubmit() {
      this.dingdanhao = this.createdOrderId();
      Toast.loading({ mask: true, duration: 0, message: '正跳转至支付宝页面' });
      this.commitOrder();
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
    createdOrderId() {
      const f = Date.now().toString(),
            s = Math.round(Math.random()*8999 + 1000).toString(),
            t = this.user.id.toString();
      return f + s + t;
    },
    pay() {
      const _this = this;
      const orderData = {
        'subject': this.order.name,
        'out_trade_no': this.dingdanhao,
        'total_amount': this.orderTotalPrice
      };
      api.payment(orderData).then(function (res) {
        const form = res.data;
        _this.$refs.form.innerHTML = form;
        document.forms['alipaysubmit'].submit();
      });
    },
    commitOrder() {
      const user = this.user;
      const data = {
        'dingdanhao': this.dingdanhao,
        'user_id': user.id,
        'address': this.address,
        'scart_id': this.scart_id,
        'total_price': this.orderTotalPrice
      };
      api.commitOrder(data).then(({ data }) => {
        if (data.status === 1) {
          this.pay();
        } else {
          Toast.fail('订单写入数据库失败, 请重新购买并支付！');
        }
      });
    }
  },
  computed: {
    ...mapState(['order', 'changedAddress', 'user']),
    ...mapGetters(['orderTotalPrice']),
    scart_id() {
      return this.$route.params['scart_id'];
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


