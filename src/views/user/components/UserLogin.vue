<template>
  <div class="user-login">
    <section class="login-area">
      <div class="input-area">
        <i class="icon">&#xe620;</i>
        <input class="usn" type="text" v-model="input.username" placeholder="用户名">
      </div>
      <div class="input-area">
        <i class="icon">&#xe64a;</i>
        <input class="psw" type="password" v-model="input.password" placeholder="密码">
      </div>
    </section>
    <div class="control">
      <a class="log" @click="handleLoginClick">登陆</a>
      <a class="reg" @click="handleRegClick">注册</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      navOptions: {
        title: "LOGIN"
      },
      input: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    handleLoginClick() {
      // console.log(this.input.username, this.input.password);
    },
    handleRegClick() {
      this.$emit('show-reg-event');
    }
  }
}
</script>

<style lang="less">
.user-login {
  position: absolute;
  top: 0;
  .flex-column();

  .login-area {
    .flex-column();
    width: 3.5rem;
    margin: 0 auto;
    padding: .1rem .2rem;
    box-shadow: 0 0 8px rgba(0, 0, 0, .3);
    border-radius: 4px;
    box-sizing: border-box;
    background: #fff;

    .input-area {
      display: flex;
      justify-content: center;
      align-items: center;

      .icon {
        font-family: 'iconfont';
        font-size: .2rem;
        line-height: .2rem;
      }

      .usn, .psw {
        display: block;
        width: 2.8rem;
        box-sizing: border-box;
        padding: .1rem .15rem;
        font-size: .18rem;
        line-height: .18rem;
      }
    }
  }
  
  .control {
    margin: .2rem 0;
    display: flex;
    justify-content: space-around;
    .log, .reg {
      .btnStyle();
      box-shadow: 0 0 15px rgba(0, 0, 0, .25);
    }
    .reg {
      background: @xRed;
    }
  }
}
</style>

