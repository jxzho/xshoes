<template>
  <div class="order-address border-bottom">
    <div class="top-area">
      <span class="username">收货人：{{user.name}}</span>
      <div class="tel">{{user.tel}}</div>
    </div>
    <div class="address-area">
      <i class="pos">&#xe651;</i>
      <p class="text">收货地址：{{user.address}}</p>
      <i class="change">&#xe604;</i>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "OrderAddress",
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style lang="less" scoped>
  .area-style() {
    margin: 0 0 .05rem 0;
    padding-left: .3rem;
    font-size: .16rem;
    line-height: 1;
  }

  .order-address {
    padding: .15rem .2rem .15rem .15rem;
    color: #000;
    background: #fff;
    position: relative;

    .top-area {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .area-style();

      .username {

      }

      .tel {

      }
    }

    .address-area {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      padding-right: .3rem;
      
      .area-style();

      .pos {
        font-family: "iconfont";
        font-size: .22rem;
        line-height: 1;
        position: absolute;
        left: 0;
      }
      .change {
        font-family: "iconfont";
        position: absolute;
        right: 0;
        transform: rotate(180deg);
        font-weight: 600;
      }

      .text {
        flex: 1;
      }
    }

    .line {
      position: absolute;
      left: 0; right: 0; bottom: 0;
      height: .05rem;
      background: -webkit-repeating-linear-gradient(
                    -30deg,
                    royalblue 0,
                    royalblue .2rem,
                    #fff .2rem,
                    #fff .3rem,
                    @xRed .3rem,
                    @xRed .5rem,
                    #fff .5rem,
                    #fff .6rem,
                  );
    }
  }
</style>

