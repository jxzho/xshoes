<template>
  <div class="order-list">
    <HeaderNav :navOptions="navOptions"/>
    <section class="order-pannel">
      <van-tabs animated>
        <van-tab 
          v-for="(item, index) in classifiedOrder" 
          :title="item.title"
          :key="index">
          <ul class="content-list">
            <li class="content-item" v-for="(order, index) of item.contents" 
                :key="index"
                @click="handleToDetail(order)">
              <div class="header">
                <span>xshoes官方</span>
                <span class="status">{{order.status | StatusConvert}}</span>
              </div>
              <div class="content">
                <div class="img">
                  <img :src="order.detail[0].picture">
                </div>
                <div class="info">
                  <div>
                    <span class="name">{{order.detail[0].name}}</span>
                    <p class="desc">{{order.detail[0].description}}</p>
                  </div>
                </div>
                <div class="price-num">
                  <span class="price">¥ {{order.detail[0].price}}</span>
                  <span class="num">× {{order.detail[0].buyNum}}</span>
                </div>
              </div>
              <span class="footer">
                <span class="size">尺码: {{order.detail[0].size}}</span>
                <span class="total">共{{order.detail.length}}件商品 合计: ¥{{order.total_price}}</span>
              </span>
            </li>
          </ul>
        </van-tab>
      </van-tabs>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HeaderNav from "common/HeaderNav.vue";
import api from "@/api";
import { Toast } from 'vant';

export default {
  name: "OrderList",
  data() {
    return {
      navOptions: {
        title: "我的订单"
      },
      orderStatus: ['全部', '待付款', '待发货', '已发货', '已收货'],
      orders: []
    }
  },
  methods: {
    getData() {
      Toast.loading({ mask: true, duration: 0 });
      api.getOrder(this.user.id).then(({ data }) => {
        const res = data;
        if (res.status === 1) {
          Toast.clear();
          this.orders = res.data.order;
        }
        if (res.status === 0) {
          Toast.fail('获取订单失败，请刷新重新获取订单数据');
        }
      });
    },
    handleToDetail(data) {
      this.$router.push({
        name: "OrderDetail",
        params: { data }
      });
    }
  },
  computed: {
    ...mapState(['user']),
    classifiedOrder() {
      const orders = [];
      this.orderStatus.forEach((item) => {
        orders.push({
          title: item,
          contents: []
        });
      });

      orders[0].contents = this.orders;
      this.orders.forEach(item => {
        orders[item.status + 2].contents.push(item);
      });

      return orders;
    }
  },
  filters: {
    StatusConvert(status) {
      let result = '';
      switch (status) {
        case -1:
          result = '待付款';
          break;
        case 0:
          result = '待发货';
          break;
        case 1:
          result = '已发货';
          break;
        case 2:
          result = '已收货';
          break;
      }
      return result;
    }
  },
  mounted() {
    this.getData();
  },
  components: {
    HeaderNav
  }
}
</script>

<style lang="less" scoped>
@orange: rgb(255, 115, 0);
  .order-list {
    position: relative;
    height: 100%;
    background: rgba(0, 0, 0, .03);

    .order-pannel {
      position: absolute;
      left: 0; right: 0; top: .45rem;
      z-index: 1;
      background: rgb(248, 248, 248);

      .content-list {
        margin: .15rem;

        .content-item {
          .flex-column();
          background: #fff;
          padding: .15rem;
          font-size: .15rem;
          line-height: 1;
          color: rgb(29, 28, 28);
          margin-bottom: .1rem;
          border-radius: 6px;
          box-shadow: 0 0 10px rgba(0, 0, 0, .2);

          .header {
            display: flex;
            justify-content: space-between;
            margin-bottom: .1rem;
            .status {
              color: @orange;
            }
          }

          .content {
            margin-bottom: .02rem;
            display: flex;

            .img {
              width: 1rem;
              height: 1rem;
              border-radius: 4px;
              overflow: hidden;
              img {
                width: 100%;
              }
            }

            .info {
              flex: 1;
              .flex-column();
              justify-content: space-between;
              padding: 0 .05rem;

              .name {
                color: #000;
              }
              .desc {
                color: #aaa;
              }
            }

            .price-num {
              .flex-column();

              .num {
                text-align: right;
              }
            }
          }

          .footer {
            display: flex;
            justify-content: space-between;
            font-size: .16rem;

            .size {
              font-size: .14rem;
              line-height: 1;
              color: rgb(28, 28, 28);
            }
          }

        }
      }
    }
  }
</style>


