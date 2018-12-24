<template>
  <section class="user-header border-bottom">
    <div class="avatar">
      <img v-if="isLogin"
           :src="user.avatar">
    </div>
    <div class="action-area" v-if="!isLogin">
      <a class="log" href="javascript:;" @click="handleGoLog">登陆</a>
      <a class="reg" href="javascript:;" @click="handleGoReg">注册</a>
    </div>
    <footer class="pint">{{userId}}</footer>
    <UserItem v-if="isLogin" key="UserItem"></UserItem>
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import UserItem from "./UserItem";

export default {
  name: "UserHeader",
  data() {
    return {
    }
  },
  methods: {
    handleGoLog() {
      this.$emit('show-login-event');
    },
    handleGoReg() {
      this.$emit('show-reg-event');
    }
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isLogin']),
    userId() {
      return this.isLogin ? ('id: xs-hvagd-' + this.user.id) : '未登录';
    }
  },
  components: {
    UserItem
  }
}
</script>

<style lang="less" scoped>
@avatarLen: .8rem;
.user-header {
  position: absolute;
  top: 0; left: 0; right: 0;
  width: 3.5rem;
  margin: 0 auto;
  border-radius: 4px;
  text-align: center;
  padding: .3rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, .2);
  background: #fff;

  .avatar {
    width: @avatarLen;
    height: @avatarLen;
    border-radius: unit(@avatarLen / 2, rem);
    overflow: hidden;
    box-shadow: 1px 3px 8px rgba(0, 0, 0, .2);
    margin: 0 auto .15rem auto;
    background: url('~assets/image/user.svg') no-repeat center center / 100% 100%;

    img {
      width: 100%;
    }
    i {
      font-family: "iconfont";
      font-size: .8rem;
      line-height: 1;
    }
  }

  .action-area {
    padding: 10px 0;
    margin-top: .1rem;

    .log, .reg, .vrf {
      .btnStyle();
    }
    .reg {
      background: @xRed;
    }

    & a:nth-child(1) {
      margin-right: .2rem;
    }
  }

  .pint {
    margin-top: .1rem;
    color: #000;
    font-size: .15rem;
  }
}
</style>


