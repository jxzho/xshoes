<template>
  <div class="user-reg">
    <section class="reg-area">
      <div class="input-area">
        <i class="icon">&#xe607;</i>
        <input class="tel" type="text" placeholder="手机号码">
      </div>
      <div class="input-area">
        <i class="icon">&#xe637;</i>
        <input class="vrf" type="text" placeholder="验证码">
        <a class="sendSMS" href="javascript:;">发送验证码</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "UserReg"
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
      }
      .tel {
        flex: 1;
      }

      .sendSMS {
        .btnStyle();
        position: absolute;
        right: 0;
      }

    }
  }
}
</style>


