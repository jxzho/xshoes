<template>
  <header class="navigator">
    <i class="backBtn" @click="handleBackBtn">&#xe604;</i>
    <span class="title">{{navOptions.title}}</span>
    <i class="menu" @click="handleMenuClick" v-if="navOptions.showMenu">&#xe6ac;</i>
    <aside class="menu-panel">
      <van-actionsheet
        v-model="isShowMenu"
        :actions="menuActions"
        @select="handleMenuSelect"
      />
    </aside>
    <aside class="info-panel" v-show="isShowInfo">
      <transition name="info">
        <ul class="info" v-show="isShowInfo">
          <li class="info-item border-bottom">
            <span class="title">我的头像</span>
            <div class="info-show">
              <div class="img">
                <img class="avatar" :src="user.avatar">
              </div>
              <i class="change-icon">&#xe604;</i>
            </div>
          </li>
          <li class="info-item border-bottom">
            <span class="title">用户名</span>
            <div class="info-show">
              {{user.username ? user.username : '未设置'}}
            </div>
          </li>
          <li class="info-item border-bottom" @click="isSetNickName = true">
            <span class="title">昵称</span>
            <div class="info-show">
              {{user.nickname ? user.nickname : '未设置'}}
              <i class="change-icon">&#xe604;</i>
            </div>
          </li>
          <li class="info-item border-bottom" @click="isShowSex = true">
            <span class="title">性别</span>
            <div class="info-show">
              {{user.sex === 0 ? '女' : '男'}}
              <i class="change-icon">&#xe604;</i>
            </div>
          </li>
          <li class="info-item border-bottom">
            <span class="title">我的手机</span>
            <div class="info-show">
              {{user.tel}}
              <i class="change-icon">&#xe604;</i>
            </div>
          </li>
          <li class="info-item border-bottom" @click="handleToUserAddress">
            <span class="title">我的收货地址</span>
            <div class="info-show">
              {{userAddress.length ? userAddress.length : '未设置'}}
              <i class="change-icon">&#xe604;</i>
            </div>
          </li>
        </ul>
      </transition>
    </aside>
    <van-dialog
      v-model="isSetNickName"
      show-cancel-button
      :before-close="beforeClose">
      <van-field
        v-model="newNickname"
        label="昵称"
        placeholder="请输入新昵称"
      />
    </van-dialog>
    <transition name="fadeIn">
      <aside class="sex-panel" v-show="isShowSex">
        <transition name="upSlide">
          <van-picker
            v-show="isShowSex"
            show-toolbar
            title="性别"
            :columns="sexColumns"
            @cancel="onSexCancel"
            @confirm="onSexConfirm"
          />
        </transition>
      </aside>
    </transition>
  </header>
</template>

<script>
import { Actionsheet, Toast } from 'vant';
import { mapState } from "vuex";

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
      isShowMenu: false,
      isShowInfo: false,
      isSetNickName: false,
      isShowSex: false,
      newNickname: '',
      sexColumns: ['女', '男']
    }
  },
  methods: {
    handleBackBtn() {
      if (this.isShowInfo) {
        this.isShowInfo = false;
        this.navOptions.title = "USER"; 
      } else {
        this.$router.go(-1);
      }
    },
    handleMenuClick() {
      this.isShowMenu = true;
    },
    handleMenuSelect(item) {
      switch (item.name) {
        case '设置':
          this.showInfo();
          break;
        case '注销':
          this.logout();
          break;
      }
    },
    logout() {
      this.isShowMenu = false;
      this.$store.commit('userLogout');
    },
    showInfo() {
      this.navOptions.title = "设置"; // 修改props 危险
      this.isShowMenu = false;
      this.isShowInfo = true;
    },
    beforeClose(action, done) {
      if (action === "confirm") {
        if (this.newNickname === this.user.nickname) {
          Toast.fail('与原昵称重复');
          return done(false);
        }
        this.$store.commit('updateUserInfo', {
          attr: 'nickname',
          data: this.newNickname
        });
      }
      done();
    },
    onSexCancel() {
      this.isShowSex = false;
    },
    onSexConfirm(value, index) {
      this.$store.commit('updateUserInfo', {
        attr: 'sex',
        data: index
      });
      this.isShowSex = false;
    },
    handleToUserAddress() {
      if (!this.user.address) {
        Toast.fail('你还没有收货地址，还去添加一个吧~');
        this.$router.push('/user/address/add');
      } else {
        this.$router.push("/user/address");
      }
    }
  },
  computed: {
    ...mapState(['user']),
    userAddress() {
      if (!this.user.address) return [];
      if (typeof this.user.address === 'string') {
        return JSON.parse(this.user.address);
      }
      return this.user.address;
    }
  },
  components: {
    Actionsheet
  }
}
</script>

<style lang="less" scoped>
  .navigator {
    background: @tColor;
    height: .45rem;
    line-height: .45rem;
    text-align: center;
    color: #fff;
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 2;
    // box-shadow: 0 4px 10px rgba(0, 0, 0, .3);

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

    .info-panel {
      position: fixed;
      top: .45rem; left: 0; right: 0; bottom: 0;
      z-index: 2007;
      background: rgba(0, 0, 0, .8);

      .info {
        height: 100%;
        color: rgba(0, 0, 0, .8);
        background: rgb(248, 248, 248);

        .info-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #fff;
          padding: 0 .1rem;
          
          .title {
            font-size: .14rem;
            line-height: .14rem;
          }

          .info-show {
            display: flex;
            align-items: center;
            
            .img {
              display: block;
              width: .4rem;
              height: .4rem;
              border-radius: .4rem;
              margin: .1rem 0;
              overflow: hidden;
              position: relative;

              .avatar {
                position: absolute;
                left: 0; top: 0;
                width: 100%;
              }
            }
            .change-icon {
              font-family: "iconfont";
              transform: rotate(180deg);
              margin-left: .1rem;
            }
          }
          
          &:active {
            background: rgba(0, 0, 0, .3);
          }
        }
      }
    }

    .sex-panel {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0, 0, 0, .6);
      z-index: 2008;
      
      
      .van-picker {
        position: absolute;
        bottom: 0; left: 0; right: 0;
      }

      & /deep/ .van-picker-column__item--selected {
        color: #000;
        font-size: .22rem;
        font-weight: 500;
      }
    }
    

    & /deep/ .van-dialog {
      z-index: 2029 !important;
    }
    & > .van-overlay {
      z-index: 2030 !important;
    }

  }

.info-enter, .info-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.upSlide-enter, .upSlide-leave-to {
  transform: translateY(100%);
}

.fadeIn-enter, .fadeIn-leave-to {
  opacity: 0;
}

.info-enter-active, .info-leave-active, 
.upSlide-enter-active, .upSlide-leave-active,
.fadeIn-enter-active, .fadeIn-leave-active {
  transition: .3s ease;
}

</style>

