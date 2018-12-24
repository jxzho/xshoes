<template>
  <section class="user-item">
    <ul class="contents">
      <li><i>&#xe60e;</i>收藏</li>
      <li><i>&#xe603;</i>购物车</li>
      <li><i>&#xe626;</i>订单</li>
      <li><i>&#xe63c;</i>地址管理</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "UserItem"
}
</script>

<style lang="less" scoped>
  .user-item {
    padding: .3rem 0 0 0;

    .contents {
      display: flex;
      justify-content: space-around;
      li {
        .flex-column();
        justify-content: center;
        align-items: center;
        i {
          font-family: "iconfont";
          font-size: .3rem;
          line-height: 1;
          margin-bottom: 3px;
        }
      }
    }
  }
</style>

