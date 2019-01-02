<template>
  <div class="order-detail">
    <HeaderNav :navOptions="navOptions"/>
    <section class="detail-area">
      <div class="address">
        <span>收货人：{{addressInfo.name}}</span>
        <span>手机：{{addressInfo.tel}}</span>
        <p>地址{{addressInfo.area + addressInfo.detail}}</p>
      </div>
      <div class="order">
        <span>订单编号：{{order.dingdanhao}}</span>
        <span>创建时间：{{order.create_time}}</span>
        <span>成交时间：{{order.update_time}}</span>
      </div>
      <ul class="detail-list">
        <li v-for="(item, index) of order.detail" :key="index">
          {{item}}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import HeaderNav from "common/HeaderNav.vue";

export default {
  name: "OrderDetail",
  data() {
    return {
      navOptions: {
        title: "订单详情"
      },
      order: this.$route.params.data
    }
  },
  computed: {
    addressInfo() {
      return JSON.parse(this.order.address);
    }
  },
  mounted() {
  },
  components: {
    HeaderNav
  }
}
</script>

<style lang="less" scoped>
  .order-detail {
    position: absolute;
    left: 0; right: 0; top: 0; bottom: 0;
    background: rgba(0, 0, 0, .03);
    overflow: hidden;

    .detail-area {
      position: absolute;
      top: .45rem; left: 0; right: 0;

      .address {
        .flex-column();
        margin-bottom: .1rem;
      }

      .order {
        .flex-column();
        margin-bottom: .1rem;
      }

      .detail-list {

      }
    }
  }
</style>


