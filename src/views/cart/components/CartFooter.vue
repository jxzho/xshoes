<template>
  <div class="cart-footer">
    <van-submit-bar
      v-show="true"
      :price="cartTotalPrice * 100"
      button-text="提交订单"
      @submit="onSubmit"
    >
      <van-checkbox 
        v-model="checkedStatus"
        checked-color="#51C57F">
        全选
      </van-checkbox>
    </van-submit-bar>
  </div>  
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { Toast } from "vant";
import md5 from "js-md5";

export default {
  name: "CartFooter",
  data() {
    return {
    }
  },
  methods: {
    onSubmit() {
      let data = {
        id: new Date().getTime() + md5("xshoes_order") + this.user.id,
        user: this.user,
        cart: this.cart,
      };
      console.log(data);
    },
    handleChangeChecked(status) {
      this.$store.commit(
        'updateCartCheck', 
        status
      );
    }
  },
  computed: {
    checkedStatus: {
      get: function () {
        return this.$store.getters.isAllChecked;
      },
      set: function (status) {
        this.handleChangeChecked(status);
      }
    },
    ...mapState(['user', 'cart']),
    ...mapGetters(['cartTotalPrice'])
  },
  mounted() {
  }
}
</script>

<style lang="less" scoped>
  .cart-footer {
    position: fixed;
    left: 0; right: 0; bottom: 0;

    .van-checkbox {
      margin-left: .1rem;
    }
  }
</style>


