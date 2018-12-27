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
          <section class="imgs">
            <van-swipe :autoplay="3000" indicator-color="royalblue" @change="onImgChange">
              <van-swipe-item v-for="(src, index) in shoes.imgs" :key="index">
                <div class="slide-img">
                  <img :src="src">
                </div>
              </van-swipe-item>
              <div class="custom-indicator" slot="indicator">
                {{ curIndex + 1 }}/{{ imgsLength }}
              </div>
            </van-swipe>
          </section>
          <section class="info">
            <div class="name">{{shoes.name}}</div>
            <div class="desc">{{shoes.desc}}</div>
            <div class="price border-bottom">¥{{shoes.price}}</div>
            <div class="pint">
              <span class="postage">运费: 免运费</span>
              <span class="num">剩余: {{shoes.num}}</span>
            </div>
          </section>
          <section class="comment" ref="comment">
            <div class="title">
              <span class="comments-num">商品评价 ({{shoes.comments.length}})</span>
              <a class="view-all-comments" href="javascript:;">查看全部 ></a>
            </div>
            <div class="comment-one">
              
            </div>
          </section>
        </div>
      </div>
    </section>
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
      shoes: {
        id: 1,
        name: "addidas",
        price: 100,
        desc: 'desc 我是描述',
        num: 10,
        picture: "//img.alicdn.com/imgextra/i4/834807033/O1CN01BWgcPq21pA0K8COgK_!!0-item_pic.jpg_760x760Q50s50.jpg",
        imgs: [
          "//img.alicdn.com/imgextra/i4/834807033/O1CN01BWgcPq21pA0K8COgK_!!0-item_pic.jpg_760x760Q50s50.jpg",
          "//img.alicdn.com/imgextra/i4/834807033/O1CN01BWgcPq21pA0K8COgK_!!0-item_pic.jpg_760x760Q50s50.jpg",
          "//img.alicdn.com/imgextra/i4/834807033/O1CN01BWgcPq21pA0K8COgK_!!0-item_pic.jpg_760x760Q50s50.jpg"
        ],
        comments: [
          "我是评论","我是评论","我是评论","我是评论"
        ]
      },
      curIndex: 0,
      navOptions: {
        title: "SHOES DETAIL"
      }
    }
  },
  methods: {
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
      const shoes = this.shoes;
      this.$store.commit('addToCart', {
        id: this.$route.params.id,
        price: shoes.price,
        picture: shoes.picture,
        name: shoes.name,
        desc: shoes.desc,
        buyNum: 1,
        checked: true,
        isAdd: 1
      });
      Toast.success('添加成功');
    }
  },
  computed: {
    imgsLength() {
      return this.shoes.imgs.length;
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
    ...mapState(['user', 'cart']),
    ...mapGetters(['cartTotal'])
  },
  mounted() {
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

          .van-swipe {

            .slide-img {
              width: 100%;
              img {
                width: 100%;
              }
            }

            .custom-indicator {
              position: absolute;
              right: .1rem;
              bottom: .1rem;
              background: #bbb;
              padding: 2px 10px;
              border-radius: 20px;
              color: #fff;
            }
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
            font-size: .18rem;
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
  }
</style>


