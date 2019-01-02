<template>
  <div class="order-shoes" v-if="isOrderExsit">
    <div class="picture">
      <img :src="order.picture">
    </div>
    <section class="info">
      <div>
        <span class="name">{{order.name}}</span>
        <p class="desc">{{order.description}}</p>
        <span class="size">size: {{order.size}}</span>
      </div>
      <footer class="price">
        <span>¥ {{order.price}}</span>
        <i>×{{order.buyNum}}</i>
      </footer>
    </section>
    <div class="change-buy-num">
      <h2 class="title">购买数量</h2>
      <van-stepper v-model="order.buyNum" @change="handleBuyNumChange"/>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "OrderShoes",
  methods: {
    handleBuyNumChange(num) {
      this.$store.commit('updateOrder', num);
    }
  },
  computed: {
    ...mapState(['order']),
    isOrderExsit() {
      if (Object.keys(this.order).length === 0) {
        return false;
      }
      return true;
    }
  }
}
</script>

<style lang="less" scpoed>
  .order-shoes {
    margin-top: .1rem;
    padding: .1rem;
    background: #fff;
    display: flex;

    .picture {
      width: 1rem;
      height: 1rem;
      border-radius: 5px;
      margin-right: .1rem;
      overflow: hidden;

      img {
        width: 100%;
      }
    }

    .info {
      flex: 1;
      .flex-column();
      justify-content: space-between;

      .name {
        font-size: .16rem;
        line-height: 1;
        color: #000;
        font-weight: 500;
        margin-bottom: .05rem;
      }

      .desc {
        color: #000;
        font-size: .14rem;
        line-height: .15rem;
        .mul-overflow();
      }

      .size {
        display: block;
        margin-top: .08rem;
      }

      .price {
        display: flex;
        justify-content: space-between;

        span {
          color: @xRed;
          font-size: .18rem;
          line-height: 1;
          align-items: self-end;
        }
      
        i {
          font-size: .14rem;
          line-height: .14rem;
          font-weight: 500;
          color: rgba(0, 0, 0, 1);
        }
      }
    }

    .change-buy-num {
      position: absolute;
      bottom: -30px; left: 0; right: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px 5px 10px;
      background: #fff;

      .title {
        color: #000;
        line-height: 1;
      }
    }
  }
</style>


