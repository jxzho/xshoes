<template>
  <footer class="home-footer">
    <ul class="navigator">
      <router-link tag="li" to="/" class="nav-item">
        <i class="icon">&#xe749;</i>
        <span class="icon-msg">首页</span>
      </router-link>
      <router-link tag="li" to="/classify" class="nav-item">
        <i class="icon">&#xe6ef;</i>
        <span class="icon-msg">分类</span>
      </router-link>
      <router-link tag="li" to="/stroll" class="nav-item">
        <i class="icon">&#xe68b;</i>
        <span class="icon-msg">逛</span>
      </router-link>
      <router-link tag="li" to="/cart" class="nav-item">
        <i class="icon">&#xe62e;</i>
        <span class="icon-msg">购物车</span>
      </router-link>
      <router-link tag="li" to="/user" class="nav-item">
        <i class="icon">&#xe620;</i>
        <span class="icon-msg">我的</span>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "HomeFooter"
}
</script>

<style lang="less" scoped>
@footer-height: .55rem;
.home-footer {
  width: 100%;
  height: @footer-height;
  position: fixed;
  left: 0;
  bottom: 0;
  line-height: @footer-height;

  .navigator {
    height: 100%;
    display: flex;
    box-shadow: 0 -2px 12px 0 rgba(0, 0, 0, .1);

    .nav-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: .05rem;

      .icon {
        display: block;
        font-family: "iconfont";
        font-size: .3rem;
        line-height: 1;
      }

      .icon-msg {
        line-height: 1;
      }
    }
  }
}
</style>
