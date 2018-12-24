<template>
  <header class="navigator">
    <i class="backBtn" @click="handleBackBtn">&#xe604;</i>
    <span class="title">{{navOptions.title}}</span>
    <i class="menu" @click="handleMenuClick" v-show="navOptions.showMenu">&#xe6ac;</i>
    <aside class="menu-panel">
      <van-actionsheet
        v-model="showMenu"
        :actions="menuActions"
        @select="handleMenuSelect"
      />
    </aside>
  </header>
</template>

<script>
import { Actionsheet, Toast } from 'vant';

export default {
  name: "HeaderNav",
  props: {
    navOptions: Object
  },
  data() {
    return {
      menuActions: [
        {
          name: '设置',
          subname: '个人信息',
        },
        {
          name: '注销'
        }
      ],
      showMenu: false
    }
  },
  methods: {
    handleBackBtn() {
      this.$router.go(-1);
    },
    handleMenuClick() {
      this.showMenu = true;
    },
    handleMenuSelect(item) {
      switch (item.name) {
        case '设置':
          Toast('设置');
          break;
        case '注销':
          this.logout();
          break;
      }
    },
    logout() {
      this.showMenu = false;
      this.$store.commit('userLogout');
    }
  },
  components: {
    Actionsheet
  }
}
</script>

<style lang="less" scoped>
  .navigator {
    width: 100%;
    background: @tColor;
    height: .45rem;
    line-height: .45rem;
    text-align: center;
    color: #fff;
    position: fixed;
    top: 0; left: 0;
    z-index: 2;
    box-shadow: 0 4px 10px rgba(0, 0, 0, .3);

    .backBtn {
      position: absolute;
      left: 0;
      font-family: "iconfont";
      font-size: .3rem;
    }

    .title {
      font-size: .18rem;
      font-weight: 900;
    }

    .menu {
      position: absolute;
      right: 0;
      font-family: "iconfont";
      font-size: 0.23rem;
      margin-right: .08rem;
    }
  }
</style>

