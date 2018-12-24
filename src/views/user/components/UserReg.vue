<template>
  <div class="user-reg">
    <section class="reg-area">
      <div class="input-area">
        <i class="icon">&#xe607;</i>
        <input class="tel" 
               type="text" 
               placeholder="手机号码" 
               @focus="handleTelFocus"
               @blur="handleTelBlur"
               v-model="input.tel">
      </div>
      <div class="input-area">
        <i class="icon">&#xe637;</i>
        <input class="vrf" 
               type="text" 
               :placeholder="codePlaceholder"
               @focus="handleCodeFocus"
               @blur="handleCodeBlur"
               v-model="input.code">
        <a class="sendSMS" 
           href="javascript:;"
           @click="handleSendSMS"
           v-show="!showVerify">
          发送验证码
        </a>
      </div>
      <div class="verify-area"
           v-show="showVerify">
        <a class="verifyBtn" 
           href="javascript:;"
           @click="handleVerifyClick">
          注册
        </a>
      </div>
      <van-number-keyboard
        :show="showKeyboard"
        close-button-text="完成"
        @input="handleKeyboardInput"
        @delete="handleKeyboardDelete"
      />
    </section>
  </div>
</template>

<script>
import { Toast } from 'vant';
import api from "@/api";

export default {
  name: "UserReg",
  data() {
    return {
      codePlaceholder: "验证码",
      telFocus: false,
      codeFocus: false,
      showKeyboard: false,
      showVerify: false,
      input: {
        tel: '',
        code: ''
      }
    }
  },
  methods: {
    handleSendSMS() {
      api.sendCode(this.input.tel).then(res => {
          const data = res.data;
          // console.log(data);
          Toast(data.message);
          this.input.code = res.data.data.code;
          data.status === 1 && (this.showVerify = true);
        });
    },
    handleVerifyClick() {
      api.verifyCode(this.input.tel, this.input.code)
          .then(res => {
            const data = res.data;
            Toast(data.message + ', 已为您自动登陆');
            if (data.status === 1) {
              this.$store.commit('userLogin', data.data.user);
              this.$router.push('/');
            }
          });
    },
    handleKeyboardInput(value) {
      this.telFocus && (
        this.input.tel = (this.input.tel += value).slice(0, 11)
      );
      this.codeFocus && (
        this.input.code = (this.input.code += value).slice(0, 6)
      );
    },
    handleKeyboardDelete() {
      // ...
    },
    handleTelFocus() {
      this.telFocus = this.showKeyboard = true;
    },
    handleTelBlur() {
      this.telFocus = this.showKeyboard = false;
    },
    handleCodeFocus() {
      this.codePlaceholder = "6位验证码";
      this.codeFocus = this.showKeyboard = true;
    },
    handleCodeBlur() {
      this.codePlaceholder = "验证码";
      this.codeFocus = this.showKeyboard = false;
    }
  },
  computed: {
    
  }
}
</script>

<style lang="less" scoped>
.user-reg {
  position: absolute;
  top: 0;
  background: #fff;
  border-radius: 4px;
  .flex-column();

  .reg-area {
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
      align-items: center;
      position: relative;

      .icon {
        font-family: 'iconfont';
        font-size: .2rem;
        line-height: .2rem;
      }

      .tel, .vrf {
        display: block;
        box-sizing: border-box;
        padding: .1rem .15rem;
        font-size: .18rem;
        line-height: .18rem;
        text-shadow: 0 0 2px rgba(0, 0, 255, .2);
      }
      .tel {
        flex: 1;
      }
      .vrf {
        color: rgb(65, 65, 235);
      }

      .sendSMS {
        .btnStyle();
        position: absolute;
        right: 0;
      }

    }

    .verify-area {
      display: flex;
      justify-content: center;
      .verifyBtn {
        .btnStyle();
        line-height: 1.3;
      }
    } 
  }
}
</style>


