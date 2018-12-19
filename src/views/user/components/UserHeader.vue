<template>
  <section class="user-header border-bottom">
    <div class="avatar">
      <i>&#xe620;</i>
    </div>
    <div class="action-area">
      <a class="log" href="javascript:;" @click="handleGoLog">登陆</a>
      <a class="reg" href="javascript:;" @click="handleGoReg">注册</a>
    </div>
    <footer class="pint">未登录</footer>
  </section>
</template>

<script>
export default {
  name: "UserHeader",
  methods: {
    handleGoLog() {
      this.$router.push('/login');
    },
    handleGoReg() {
      this.$router.push('/');
    }
  }
}
</script>

<style lang="less" scoped>
.btnStyle() {
  background: #0084ff;
  color: #fff;
  padding: 8px 20px;
  border-radius: 4px;
}

  .user-header {
    text-align: center;
    padding: .3rem 0;
    box-shadow: 0 2px 12px rgba(0, 0, 0, .2);
    background: #fff;

    .avatar {
      i {
        font-family: "iconfont";
        font-size: .8rem;
        line-height: 1;
      }
    }

    .action-area {
      padding: 10px 0;
      margin-top: .1rem;

      .log, .reg {
        .btnStyle();
      }

      & a:nth-child(1) {
        margin-right: 5px;
      }
    }

    .pint {
      margin-top: .1rem;
    }
  }
</style>


