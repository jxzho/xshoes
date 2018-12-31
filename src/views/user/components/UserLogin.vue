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
      <!-- <div class="input-area">
        <i class="icon">&#xe637;</i>
        <input class="vrf" type="text" placeholder="验证码" v-model="input.code">
        <a class="sendSMS" href="javascript:;" @click="handleSendSMS">发送验证码</a>
      </div> -->
    </section>
    <div class="control">
      <a class="log" @click="handleLoginClick">登陆</a>
      <a class="reg" @click="handleRegClick">注册</a>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import { Toast } from "vant";

export default {
  name: "Login",
  data() {
    return {
      navOptions: {
        title: "LOGIN"
      },
      input: {
        username: '',
        password: '',
        code: ''
      }
    }
  },
  methods: {
    handleSendSMS() {
      api.sendCode(this.code).then(res => {
        console.log(res);
      });
    },
    handleLoginClick() {
      // console.log(this.input.username, this.input.password);
      Toast.loading({
        mask: true,
        duration: 0
      });
      api.login(this.input.username, this.input.password)
        .then(res => {
          const data = res.data;
          data.status === 1 && Toast('登陆成功');
          this.$store.commit('userLogin', data.data);
          this.$router.push('/'); 
        });
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
  top: 0; left: 0; right: 0;
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
      position: relative;

      .icon {
        font-family: 'iconfont';
        font-size: .2rem;
        line-height: .2rem;
      }

      .usn, .psw, .vrf {
        display: block;
        width: 2.8rem;
        box-sizing: border-box;
        padding: .1rem .15rem;
        font-size: .18rem;
        line-height: .18rem;
      }

      .sendSMS {
        .btnStyle();
        position: absolute;
        right: 0;
      }
    }
  }
  
  .control {
    margin: .2rem 0;
    text-align: center;
    display: flex;
    justify-content: space-around;

    .log, .reg, {
      .btnStyle();
      line-height: 1.5;
    }
    .reg {
      background: @xRed;
    }
  }
}
</style>

