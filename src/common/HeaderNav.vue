<template>
  <header class="navigator">
    <i class="backBtn" @click="handleBackBtn">&#xe604;</i>
    <span class="title">{{navOptions.title}}</span>
  </header>
</template>

<script>
export default {
  name: "HeaderNav",
  props: {
    navOptions: Object
  },
  methods: {
    handleBackBtn() {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="less" scoped>
  .navigator {
    background: @tColor;
    height: .45rem;
    line-height: .45rem;
    text-align: center;
    color: #fff;
    position: relative;

    .backBtn {
      position: absolute;
      font-family: "iconfont";
      font-size: .3rem;
      left: 0;
    }

    .title {
      font-size: .18rem;
      font-weight: 900;
    }
  }
</style>

