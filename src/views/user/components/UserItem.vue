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
    width: 3.5rem;
    padding: .2rem 0;
    margin: .1rem auto 0 auto;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 12px rgba(0, 0, 0, .2);

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

