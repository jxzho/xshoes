<template>
  <div class="classify">
    <HeaderNav :navOptions="{ title: 'CLASSIFY' }"></HeaderNav>
    <section class="main">
      <van-tabs>
        <van-tab 
          v-for="(item, index) in classify" 
          :title="item.title" 
          :key="'xshoes-classify-' + index"
          >
          <div class="shoes-item" 
              v-for="(shoes, index) in item.contents" 
              :key="index">
            <van-card
            tag="限时特价"
            price="20.00"
            desc="运动生活"  
            title="健身衣服"
            :thumb="'http://shihuo.hupucdn.com/ucditor/20180910/720x720_6b83607247ff03139a9a37e7acdf533a.jpeg?imageMogr2/format/jpg'"
            origin-price="100.00"
            @click.native="handleDetailClick(shoes.id)"
            ></van-card>
          </div>
        </van-tab>
      </van-tabs>
    </section>
    <FooterNav></FooterNav>
  </div>
</template>

<script>
import HeaderNav from "common/HeaderNav";
import FooterNav from "common/FooterNav";
import classifyInfo from "assets/js/classify";
import BScroll from "better-scroll";

export default {
  name: "Classify",
  data() {
    return {
      classify: classifyInfo,
      // 左侧高亮元素的index
      mainActiveIndex: 0,
      activeId: 1
    };
  },
  methods: {
    handleDetailClick(id) {
      console.log(id);
      this.$router.push(`/shoes/${id}`);
    },
    bscrollInit() {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(".van-tabs__content", {
            scrollbar: true,
            click: true
          });
        } else {
          this.scroll.refresh();
        }
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.bscrollInit();
    });
  },
  components: {
    HeaderNav,
    FooterNav
  }
};
</script>

<style lang="less" scoped>
.classify {
  height: 100%;
  overflow: hidden;
  position: relative;

  .main {
    position: absolute;
    top: 0.45rem;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;

    .shoes-item {
      margin: 0 .2rem .05rem .2rem;
      background: #fff;
      border-radius: 6px;
      overflow: hidden;
    }

    & /deep/ .van-tabs__content {
      position: fixed;
      top: .9rem; left: 0; right: 0; bottom: .55rem;
    }
  }
}
</style>

