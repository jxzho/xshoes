<template>
  <div class="cart-contents" ref="wrapper">
    <ul class="content-list">
      <li class="item" v-for="(item, index) in cart" :key="index">
        <van-checkbox 
          v-model="item.checked" 
          @change="handleCheckedChange(item.id, item.checked)"
          checked-color="royalblue">
        </van-checkbox>
        <div class="img"><img :src="item.picture"></div>
        <div class="text">
          <h2 class="name">{{item.name}}</h2>
          <p class="desc">{{item.desc}}</p>
          <span class="price">¥ {{item.price}}</span>
          <section class="update-num">
            <span class="add border-right" @click="handleChangeNum(item.id, -1)">-</span>
            <b>{{item.buyNum}}</b>
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

export default {
  name: "CartContents",
  data() {
    return {
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
    ...mapState(['cart'])
  },
  mounted() {
    this.bscrollInit();
  },
  components: {
    BScroll
  }
}
</script> 

<style lang="less" scoped>
@imgLen: 1.2rem;
  .cart-contents {
    position: absolute;
    top: .52rem; bottom: .5rem; left: 0; right: 0;

    .content-list {
      margin: 0 .1rem;

      .item {
        display: flex;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, .2);
        padding: .1rem .05rem;
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

          .name {
            color: rgba(0, 0, 0, .8);
            font-size: .20rem;
            line-height: .2rem;
            font-weight: 600;
            margin-bottom: .1rem;
          }

          .desc {
            -webkit-box-orient: vertical;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
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
      }
    }
  }
</style>


