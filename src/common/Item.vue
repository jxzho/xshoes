<template>
  <div class="item">
    <HeaderNav :navOptions="navOptions"></HeaderNav>
    <section class="body">
      <nav class="nav" ref="nav">
        <van-tabs @click="handleToComment">
          <van-tab title="详情"></van-tab>
          <van-tab title="评论"></van-tab>
        </van-tabs>
      </nav>
      <div class="wrapper" ref="wrapper">
        <div class="content">
          <!-- 轮播 -->
          <section class="imgs">
            <swiper :options="swiperOption">
              <swiper-slide v-for="(img, index) in item.imgs" :key="index">
                <img :src="img">
              </swiper-slide>
            </swiper>
          </section>
          <section class="info">
            <div class="name">{{item.name}}</div>
            <div class="desc">{{item.description}}</div>
            <div class="price border-bottom">¥{{item.price}}</div>
            <div class="pint">
              <span class="postage">运费: 免运费</span>
              <span class="num">剩余: {{item.num}}</span>
            </div>
          </section>
          <section class="comment" ref="comment">
            <div class="title">
              <span class="comments-num">商品评价 ({{item.comments.length}})</span>
              <a class="view-all-comments" href="javascript:;">查看全部 ></a>
            </div>
            <div class="comment-one">
              
            </div>
          </section>
        </div>
      </div>
    </section>
    <transition name="upSlide">
      <aside class="shoesInfo-area" 
            v-show="showInfoSelect">
        <van-icon name="clear" @click="handleHideSelect"/>
        <div class="shoes-info border-bottom">
          <div class="img">
            <img :src="item.picture">
          </div>
          <div class="info">
            <span class="price">¥ {{item.price}}</span>
            <div class="num">库存{{item.num}}件</div>
          </div>
        </div>
        <div class="size-area border-bottom">
          <h2 class="title">尺码</h2>
          <div class="size-select" @click="handleSizeSelect">
            <span class="size"
                  :class="{selected: size === shoesSelect.size}" 
                  v-for="(size, index) in shoesSize" 
                  :key="index">
              {{size}}
            </span>
          </div>
        </div>
        <div class="buy-num-select border-bottom">
          <h2 class="title">购买数量</h2>
          <van-stepper v-model="shoesSelect.buyNum" />
        </div>
        <div class="address-select"></div>
        <div class="commit" @click="handleToOrder">确定</div>
      </aside>
    </transition>
    <footer class="action">
      <van-goods-action>
        <van-goods-action-mini-btn
          icon="chat-o"
          text="客服"
        />
        <van-goods-action-mini-btn
          icon="cart-o"
          text="购物车"
          :info="cartTotal"
          @click="handleToCart"
        />
        <van-goods-action-big-btn
          :disabled="isAddCart"
          :text="AddCartText"
          @click="handleAddCart"
        />
        <van-goods-action-big-btn
          primary
          text="立即购买"
          @click="handleBuyNow"
        />
      </van-goods-action>
    </footer>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import HeaderNav from "common/HeaderNav";
import { mapState, mapGetters } from "vuex";
import { Toast } from "vant";

export default {
  name: "Item",
  data() {
    return {
      item: {
        imgs: [],
        comments: []
      },
      curIndex: 0,
      navOptions: {
        title: "SHOES DETAIL"
      },
      shoesSelect: {
        size: 38,
        buyNum: 0
      },
      shoesSize: [
        36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46
      ],
      showInfoSelect: false,
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    initData() {
      let params = this.$route.params,
          item = undefined;

      try {
        item = this.shoes.find(item => {
          return item.id == params.id
        })
        item = Object.assign({}, item);
        item.imgs = JSON.parse(item.imgs);
      } catch (e) {
        console.log(e);
      }
      
      this.item = item;
    },
    onImgChange(index) {
      return this.curIndex = index;
    },
    bscrollInit() {
      this.$nextTick(() => {
        if (!this.scroll) {
          const wrapper = this.$refs.wrapper;
          this.scroll = new BScroll(wrapper, {
            scrollbar: true
          });
        } else {
          this.scroll.refresh();
        }
      });
    },
    handleToComment(index) {
      let targetEle = null;
      if (index === 1) targetEle = this.$refs.comment;
      if (index === 0) targetEle = this.$refs.nav;
      this.scroll.scrollToElement(targetEle, 800);
    },
    handleToCart() {
      this.$router.push('/cart');
    },
    handleAddCart() {
      const item = this.item;
      this.$store.commit('addToCart', {
        id: this.$route.params.id,
        price: item.price,
        picture: item.picture,
        name: item.name,
        description: item.description,
        buyNum: 1,
        checked: true,
        isAdd: 1
      });
      Toast.success('添加成功');
    },
    handleSizeSelect(e) {
      const curEle = e.target,
            buyNum = +curEle.innerText;
      this.shoesSelect.size = buyNum;
    },
    handleBuyNow() {
      this.showInfoSelect = true;
    },
    handleHideSelect() {
      this.showInfoSelect = false;
    },
    handleToOrder() {
      this.$store.commit('createOrder', this.shoesOrderInfo);
      this.$router.push('/order');
    }
  },
  computed: {
    ...mapState(['shoes', 'user', 'cart']),
    ...mapGetters(['cartTotal']),
    imgsLength() {
      return this.item.imgs.length;
    },
    AddCartText() {
      return this.isAddCart ? "已加入购物车" : "加入购物车"; 
    },
    isAddCart() {
      const cart = this.cart,
        curId = this.$route.params.id,
        status = cart.some(item => item.id === curId);
      return status;
    },
    shoesOrderInfo() {
      return {
        id: this.item.id,
        name: this.item.name,
        description: this.item.description,
        picture: this.item.picture,
        price: this.item.price,
        buyNum: this.shoesSelect.buyNum,
        size: this.shoesSelect.size
      }
    }
  },
  mounted() {
    this.initData();
    this.$nextTick(() => {
      this.bscrollInit();
    });
  },
  components: {
    HeaderNav
  }
}
</script>

<style lang="less">
  .item {
    position: relative;
    height: 100%;
    background: rgba(0, 0, 0, .03);

    .body {
      position: absolute;
      top: .45rem; left: 0; right: 0; bottom: .5rem;

      .nav {
        .van-tabs {
          padding: 0;
          height: .3rem;
          .van-tabs__wrap {
            height: 100%;
            .van-ellipsis {
              line-height: .3rem;
            }
          } 
        }
      }

      .wrapper {
        position: absolute;
        top: .3rem; bottom: 0; left: 0; right: 0;
        overflow: hidden;

        .imgs {
          background: #fff;

          & /deep/ .swiper-wrapper {
            display: flex;
          }
          & /deep/ .swiper-slide img {
            width: 3.75rem;
          }
          & /deep/ .swiper-pagination-bullet-active {
            background: #fff;
          }
        }

        .info {
          margin-top: 5px;
          background: #fff;
          padding: .15rem 0 .15rem .1rem;

          .name, .desc {
            color: #000;
            font-size: .22rem;
            padding-bottom: .1rem;
            font-weight: 600;
          }
          .desc {
            font-size: .16rem;
            line-height: .16rem;
            .mul-overflow();
          }

          .price {
            color: @xRed;
            padding: .1rem 0;
            font-weight: 500;
            font-size: .16rem;
          }

          .pint {
            padding-top: .08rem;
            
            .postage {
              margin-right: .2rem;
            }
          }
        }

        .comment {
          margin-top: 5px;
          background: #fff;
          padding: 0 .1rem;

          .title {
            display: flex;
            justify-content: space-between;
            padding: 0 .05rem;
            padding: .15rem 0;

            .comments-num {
              color: royalblue;  
            }

            .view-all-comments {
              color: @xRed;
            }
          }      
        }
      }
    }

    .shoesInfo-area {
      position: fixed;
      bottom: 0; left: 0; right: 0;
      height: 5rem;
      background: #fff;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      padding: 0 .1rem;
      z-index: 3;
      box-shadow: 0 2px 20px rgba(0, 0, 0, .1);

      .van-icon {
        position: absolute;
        top: 0; right: 0;
        font-size: .2rem;
        line-height: .2rem;
        margin: .1rem .1rem 0 0;
        z-index: 3;
      }

      .shoes-info {
        display: flex;
        padding: .1rem 0;

        .img {
          width: 1rem;
          height: 1rem;
          border-radius: 4px;
          overflow: hidden;
          margin-right: .1rem;
          img { width: 100%; }
        }

        .info {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;

          .price {
            font-size: .18rem;
            line-height: .18rem;
            color: @xRed;
          }
          .num { line-height: 1; }
        }
      }

      .size-area {
        padding: .1rem 0;

        .title {
          font-size: .16rem;
          color: #000;
        }	

        .size-select {
          display: flex;
          flex-wrap: wrap;

          .size {
            background: rgba(143, 143, 143, 0.1);
            padding: .02rem .1rem;
            margin: .1rem;
            color: #000;
            border-radius: 4px;
            overflow: hidden;
            font-size: .14rem;
            line-height: .15rem;

            &.selected {
              background: @xRed;
              color: #fff;
            }
          }
        }
      }
      
      .buy-num-select {
        padding: .1rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .title {
          font-size: .16rem;
          color: #000;
        }

        & /deep/ .van-stepper .van-stepper__input {
          color: #000;
        }
      }

      .commit {
        position: absolute;
        bottom: 0; left: 0; right: 0;
        height: .5rem;
        line-height: .5rem;
        font-size: .2rem;
        color: #fff;
        background: @xRed;
        text-align: center;
        &:active {
          filter: brightness(80%);
        }
      }
    }

    .action {
      position: absolute;
      height: .5rem;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }

  .upSlide-enter, .upSlide-leave-to {
    opacity: 1;
    transform: translateY(100%);
  }
  .upSlide-enter-active, .upSlide-leave-active {
    transition: .3s ease;
  }
</style>


