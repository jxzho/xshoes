<template>
  <div class="cart-contents" ref="wrapper">
    <ul class="content-list">
      <li class="item" v-for="(item, index) in cart" :key="index">
        <van-checkbox 
          v-model="item.checked" 
          @change="handleCheckedChange(item.id, item.checked)"
          checked-color="#51C57F">
        </van-checkbox>
        <div class="img"><img :src="item['shoe_info'].picture"></div>
        <div class="text">
          <h2 class="name">{{item['shoe_info'].name}}</h2>
          <p class="desc">{{item['shoe_info'].description}}</p>
          <span class="size">尺码：{{item.shoe_size}}</span>
          <span class="price">¥ {{item['shoe_info'].price}}</span>
          <section class="update-num">
            <span class="add border-right" @click="handleChangeNum(item.id, -1)">-</span>
            <b>{{item.shoe_num}}</b>
            <span class="min border-left" @click="handleChangeNum(item.id, 1)">+</span>
          </section>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BScroll from 'better-scroll';
import api from "@/api";
import { Toast } from "vant";

export default {
  name: "CartContents",
  data() {
    return {
      cart: []
    }
  },
  methods: {
    handleChangeNum(id, num) {
      this.$store.commit('updateCart', { id, num });
    },
    handleCheckedChange(id, checked) {
      this.$store.commit('updateCartCheck', { id, checked });
    },
    bscrollInit() {
      this.$nextTick(() => {
        if (!this.scroll) {
          const wrapper = this.$refs.wrapper;
          this.scroll = new BScroll(wrapper, {
            scrollbar: false,
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
    number() {
      return item.buyNum;
    },
    ...mapState(['user'])
  },
  mounted() {
    this.bscrollInit();
    Toast.loading({ mask: true, duration: 0 });
    api.getScart(this.user.id).then(({ data }) => {
      const res = data;
      if (res.status === 1) {
        Toast.clear();
        this.cart = res.data;
        this.$store.commit('initCart', res.data);
      }
    });
  },
  components: {
    BScroll
  }
}
</script> 

<style lang="less" scoped>
@imgLen: 1rem;
  .cart-contents {
    position: absolute;
    top: .52rem; bottom: .5rem; left: 0; right: 0;

    .content-list {
      margin: 0 .1rem;

      .item {
        display: flex;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 2px 20px rgba(0, 0, 0, .1);
        padding: .1rem .15rem;
        margin-bottom: .08rem;

        .img {
          width: @imgLen;
          height: @imgLen;
          border-radius: 4px;
          overflow: hidden;
          margin: 0 .1rem;

          img {
            width: 100%;
          }
        }

        .text {
          flex: 1;
          position: relative;
          .flex-column();
          .mul-overflow();
          padding-right: .46rem;

          .name {
            color: rgba(0, 0, 0, .7);
            line-height: .15rem;
            font-weight: 600;
            margin-bottom: .05rem;
          }

          .desc {
            -webkit-box-orient: vertical;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }

          .size {
            font-size: .12rem;
            line-height: 1;
            position: absolute;
            right: 0; top: 0;
          }

          .price {
            color: @xRed;
            font-weight: 500;
            line-height: 1;
            position: absolute;
            bottom: 0; left: 0;
          }

          .update-num {
            position: absolute;
            bottom: 0;
            right: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgba(0, 0, 0, .02);
            border: 1px solid rgba(0, 0, 0, .08);
            border-radius: .2rem;
            overflow: hidden;

            .add, .min {
              font-family: 'iconfont';
              width: .2rem;
              font-size: .2rem;
              line-height: .2rem;
              text-align: center;
              &:active {
                background: royalblue;
                color: #fff;
              }
            }

            b {
              padding: 0 .1rem;
              font-weight: 500;
            }
          }

        }

        .van-checkbox {
          display: flex;
          justify-content: center;
          align-items: center;  
        }
      }
    }
  }
</style>


