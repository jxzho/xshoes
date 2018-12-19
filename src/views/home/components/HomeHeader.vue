<template>
  <header class="home-header">
    <span class="menu">&#xe6ac;</span>
    <h1 class="title">XSHOES</h1>
    <span class="search">&#xe61d;</span>
  </header>
</template>

<script>
export default {
  name: "HomeHeader"
}
</script>

<style lang="less" scoped>
@headerHeight: .45rem;
.home-header {
  width: 100%;
  height: @headerHeight;
  position: fixed;
  left: 0;
  top: 0;
  background: @tColor;
  color: #fff;
  line-height: @headerHeight;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .4);
  z-index: 2;

  .menu {
    font-family: "iconfont";
    font-size: .23rem;
    margin-left: .1rem;
  }

  .title {
    width: 1rem;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -.5rem;
    font-weight: 900;
    font-size: .23rem;
  }

  .search {
    font-family: "iconfont";
    font-size: .3rem;
    margin-right: .1rem;
    position: absolute;
    right: 0;
  }
}
</style>
