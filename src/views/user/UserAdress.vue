<template>
  <div class="user-address">
    <HeaderNav :navOptions="navOptions"></HeaderNav>
    <div class="addBtn" @click="handleAddAddress">添加新地址</div>
    <section class="address-info">
      <ul class="list">
        <li class="item" v-for="(item, index) of user.address" :key="index">
          {{item}}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import HeaderNav from "common/HeaderNav.vue";
import { mapState } from "vuex";
import { Toast } from 'vant';

export default {
  name: "UserAddress",
  data() {
    return {
      navOptions: {
        title: "收货地址"
      }
    }
  },
  methods: {
    handleAddAddress() {
      this.$router.push('/user/addAddress');
    }
  },
  computed: {
    ...mapState(['user'])
  },
  mounted() {
    
  },
  components: {
    HeaderNav
  }
}
</script>

<style lang="less" scoped>
.user-address {
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0;
  z-index: 2;
  background: #fff;
  
  .address-info {
    position: absolute;
    top: .45rem; bottom: 0; left: 0; right: 0;
    overflow: hidden;
  }

  .addBtn {
    position: fixed;
    top: 0; right: .1rem;
    line-height: .45rem;
    height: .45rem;
    color: #fff;
    font-weight: 100;
    z-index: 3;
  }
}
</style>

