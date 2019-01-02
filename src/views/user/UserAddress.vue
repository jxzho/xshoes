<template>
  <div class="user-address">
    <HeaderNav :navOptions="navOptions"></HeaderNav>
    <div class="addBtn" @click="handleAddAddress">添加新地址</div>
    <section class="address-info">
      <ul class="list">
        <li class="list-item" 
            v-for="(item, index) of userAddress" 
            :key="index"
            @click="handleToOrder(item)">
          <i class="circle">{{item.name[0]}}</i>
          <div class="info">
            <div class="name-tel">
              {{item.name}}
              <span>{{item.tel}}</span>
            </div>
            <p class="address">
              <van-tag type="danger" size="medium" v-if="item.isDefault">默认</van-tag>
              {{item.area + item.detail}}
            </p>
          </div>
          <button class="border-left" @click="handleUpdateAddress(index)">编辑</button>
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
      },
      isClickAllow: false
    }
  },
  methods: {
    handleAddAddress() {
      this.$router.push('/user/address/add');
    },
    handleUpdateAddress(index) {
      this.$router.push('/user/address/update?index=' + index);
    },
    handleToOrder(address) {
      if (this.isClickAllow) {
        this.$store.commit('setChangeAddress', address);
        this.$router.push({
          name: "Order",
          params: {
            scart_id: this.$route.params.scart_id
          }
        });
      }
    }
  },
  computed: {
    ...mapState(['user']),
    userAddress() {
      if (typeof this.user.address === 'string') {
        return JSON.parse(this.user.address);
      }
      return this.user.address;
    }
  },
  mounted() {
    if (this.userAddress.length === 0) {
      Toast.fail('您还没有收货地址哦，快去添加一个吧~');
    }
  },
  components: {
    HeaderNav
  },
  beforeRouteEnter (to, from, next) {
    if (from.name === 'Order') {
      next(vm => {
        vm.isClickAllow = true;
      });
    }
    next();
  }
}
</script>

<style lang="less" scoped>
@circle: .25rem;
@grey: rgb(250, 248, 248);

.user-address {
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0;
  z-index: 2;
  
  .address-info {
    position: absolute;
    top: .45rem; bottom: 0; left: 0; right: 0;
    overflow: hidden;
    background: @grey;

    .list {
      background: #fff;
      .list-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .15rem 0;
        &:active {
          background: @grey;
        }

        .circle {
          display: block;
          width: @circle;
          height: @circle;
          line-height: @circle;
          border-radius: @circle;
          background: royalblue;
          text-align: center;
          margin: 0 .1rem;
          color: #fff;
        }

        .info {
          flex: 1;
          margin-right: .1rem;

          .name-tel {
            margin-bottom: .05rem;
          }

          .address {
            line-height: 1.1;
            .mul-overflow();
          }
        }

        button {
          padding: 0 .1rem;
          background: transparent;
        }
      }
    }
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

