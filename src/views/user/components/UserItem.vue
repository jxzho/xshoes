<template>
  <section class="user-item">
    <ul class="contents">
      <li><router-link to="/cart"><i>&#xe60e;</i>收藏</router-link></li>
      <li><router-link to="/cart"><i>&#xe603;</i>购物车</router-link></li>
      <li><router-link :to="{ path: '/myOrder/' + user.id }"><i>&#xe626;</i>订单</router-link></li>
      <li><router-link to="/user/address"><i>&#xe63c;</i>地址管理</router-link></li>
    </ul>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "UserItem",
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style lang="less" scoped>
  .user-item {
    padding: .3rem 0 0 0;

    .contents {
      display: flex;
      justify-content: space-around;
      li {
        a {
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
  }
</style>

