<template>
  <div class="order-address border-bottom">
    <section v-if="userAddress.length" @click="handleChangeAddress">
      <div class="top-area">
        <span class="username">收货人：{{addressSelected.name}}</span>
        <div class="tel">{{addressSelected.tel}}</div>
      </div>
      <div class="address-area">
        <i class="pos">&#xe651;</i>
        <p class="text">
          <van-tag type="danger" size="medium" v-show="addressSelected.isDefault">
            默认
          </van-tag>
          收货地址：{{addressSelected.area + addressSelected.detail}}
        </p>
        <i class="change">&#xe604;</i>
      </div>
      <div class="line"></div>
    </section>
    <section class="add-area" @click="handleAddressAdd" v-if="!userAddress.length">
      <button class="addBtn">
        添加收货地址
      </button>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "OrderAddress",
  data() {
    return {
      addressSelected: ''
    }
  },
  methods: {
    handleAddressAdd() {
      this.$router.push('/user/address/add');
    },
    handleChangeAddress() {
      this.$router.push('/user/address');
    }
  },
  computed: {
    ...mapState(['user', 'changedAddress']),
    userAddress() {
      if (typeof this.user.address === 'string') {
        return JSON.parse(this.user.address);
      }
      return this.user.address;
    }
  },
  mounted() {
    if (this.userAddress.length > 0) {
      this.addressSelected = this.userAddress.find(item => item.isDefault);
      if (this.changedAddress) {
        this.addressSelected = this.changedAddress;
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .area-style() {
    margin: 0 0 .05rem 0;
    padding-left: .3rem;
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
        font-size: .20rem;
        line-height: 1;
        position: absolute;
        left: 0;
      }
      .change {
        font-family: "iconfont";
        position: absolute;
        right: 0;
        transform: rotate(180deg);
      }

      .text {
        flex: 1;
      }
    }

    .add-area {
      .addBtn {
        color: @xRed;
        background: inherit;
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

