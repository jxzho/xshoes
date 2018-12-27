<template>
  <section class="home-body wrapper" ref="wrapper">
    <div class="content">
      <HomeBDSwiper></HomeBDSwiper>
      <HomeBDClassify></HomeBDClassify>
      <HomeBDDiscount></HomeBDDiscount>
      <HomeBDDiscount></HomeBDDiscount>
      <HomeBDDiscount></HomeBDDiscount>
      <HomeBDDiscount></HomeBDDiscount>
    </div>
  </section>
</template>

<script>
import HomeBDSwiper from "./components/HomeBodySwiper";
import HomeBDClassify from "./components/HomeBodyClassify";
import HomeBDDiscount from  "./components/HomeBodyDiscount";
import BScroll from 'better-scroll';

export default {
  name: "HomeBody",
  methods: {
    bscrollInit() {
      this.$nextTick(() => {
        if (!this.scroll) {
          const wrapper = this.$refs.wrapper;
          this.scroll = new BScroll(wrapper, {
            scrollbar: true,
            pullDownRefresh: {
              threshold: 50,
              stop: 30
            },
            pullUpLoad: {
              threshold: 50
            }
          });
          this.scroll.on('touchEnd', function (pos) {
            const _this = this;
            if (pos.y > 50) {
              // 下拉加载
              setTimeout(() => {
                _this.finishPullDown();
              }, 1000);
              console.log('下拉数据加载中');
            }
            if (this.maxScrollY - pos.y > 30) {
              // 上拉加载
              setTimeout(() => {
                _this.finishPullUp();
              }, 1000);
              console.log('上拉加载');
            }
          });
        } else {
          this.scroll.refresh();
        }
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.bscrollInit();
    });
  },
  components: {
    HomeBDSwiper,
    HomeBDClassify,
    HomeBDDiscount,
    BScroll
  },
}
</script>

<style lang="less" scoped>
  .home-body {
    position: absolute;
    left: 0;
    right: 0;
    top: .45rem;
    bottom: .55rem;
    background: rgba(0, 0, 0, .05);
    overflow: hidden;
  }
</style>

