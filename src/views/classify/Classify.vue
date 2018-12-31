<template>
  <div class="classify">
    <HeaderNav :navOptions="{ title: 'CLASSIFY' }"></HeaderNav>
    <section class="main">
      <van-tabs>
        <van-tab 
          v-for="(item, index) in shoes" 
          :title="item.title" 
          :key="'xshoes-classify-' + index"
          >
          <div class="shoes-item" 
              v-for="(shoes, index) in item.contents" 
              :key="index">
            <van-card
            tag="限时特价"
            :price="shoes.price"
            :desc="shoes.description"  
            :title="shoes.name"
            :thumb="shoes.picture"
            :origin-price="shoes.price * 1.25"
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
import shoesConfig from "assets/js/shoes";
import BScroll from "better-scroll";
import api from "@/api";

export default {
  name: "Classify",
  data() {
    return {
      classifyInfo: classifyInfo,
      // 左侧高亮元素的index
      shoes: [],
      mainActiveIndex: 0,
      activeId: 1
    };
  },
  methods: {
    handleDetailClick(id) {
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
    getShoesData() {
      api.getShoes().then(res => {
        if (res.data.status === 1) {
          this.shoes = res.data.data;
          this.classifyShoess();
          this.$nextTick(() => {
            this.bscrollInit();
          });
        }
      });
    },
    classifyShoess() {
      let result = [],
          kinds = shoesConfig.kinds,
          keys = Object.keys(kinds),
          shoes = this.shoes;
      
      keys.forEach(key => {
        let item = kinds[key];
        result.push({
          title: item,
          contents: []
        });
      });

      shoes.forEach(item => {
        let kind = item.kind;
        result[kind - 1].contents.push(item);
      });

      this.shoes = result;
    }
  },
  mounted() {
    // 获取shoes所有数据
    this.getShoesData();
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

