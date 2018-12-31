<template>
  <div class="user-edit-address">
    <HeaderNav :navOptions="navOptions"></HeaderNav>
    <section class="edit-area">
      <ul class="list">
        <li class="input-item border-bottom">
          <input type="text" v-model="name" placeholder="收货人">
        </li>
        <li class="input-item border-topbottom">
          <input type="text" v-model="tel" placeholder="手机号码">
        </li>
        <li class="input-item" @click="isShowAreaPicker = !isShowAreaPicker">
          <div class="area">
            <span>所在地区</span>
            {{areaSelected}}
            <i>&#xe604;</i>
          </div>
          <van-actionsheet v-model="isShowAreaPicker">
            <van-area :area-list="areaList" @confirm="handleAreaConfirm" value="440307"/>
          </van-actionsheet>
        </li>
        <li class="input-item border-top">
          <textarea  v-model="detail" rows="10"
          placeholder="详细地址：如道路，门派号，小去，楼栋号，单元室等">
          </textarea>
        </li>
        <li class="input-item default border-top">
          <span>设为默认地址</span>
          <van-switch v-model="isDefault" />
        </li>
      </ul>
      <div class="input-item delete-btn" @click="handleDeleteInfo"
           v-if="index != -1">
        删除收货地址
      </div>
    </section>
    <div class="saveBtn" @click="handleSaveInfo">保存</div>
  </div>
</template>

<script>
import HeaderNav from "common/HeaderNav.vue";
import { mapState } from "vuex";
import { Dialog } from "vant";

export default {
  name: "UserEditAddress",
  data() {
    return {
      areaList: this.area,
      name: '',
      tel: '',
      area: '',
      detail: '',
      isShowAreaPicker: false,
      areaSelected: '',
      index: -1,
      isDefault: false
    }
  },
  methods: {
    handleAreaConfirm(area) {
      let str = '';
      area.forEach(item => {
        str += item.name;
      });
      this.areaSelected = str;
      this.areaCode = area[2]['code'];
    },
    handleSaveInfo() {
      this.$store.dispatch({
        type: "editAddress",
        addressInfo: this.addressInfo,
        action: this.actionType
      });
    },
    handleDeleteInfo() {
      Dialog.confirm({
        message: '确定要删除该地址吗?'
      }).then(() => {
        this.$store.dispatch({
          type: 'editAddress',
          addressInfo: {
            id: this.user.id,
            index: this.index
          },
          action: 'delete'
        });
      });
    }
  },
  computed: {
    addressInfo() {
      return {
        id: this.user.id,
        name: this.name,
        tel: this.tel,
        area: this.areaSelected,
        detail: this.detail,
        index: this.index,
        isDefault: this.isDefault
      }
    },
    ...mapState(['user']),
    actionType() {
      return this.$route.params.action;
    },
    navOptions() {
      let title = '';
      if (this.actionType === 'add') title = '添加收货地址';
      if (this.actionType === 'update') title = '编辑收货地址';
      return { title };
    },
    userAddress() {
      if (typeof this.user.address === 'string') {
        return JSON.parse(this.user.address);
      }
      return this.user.address;
    }
  },
  mounted() {
    if (this.actionType === 'update') {
      const index = this.$route.query.index,
            addressInfo = this.userAddress[index];
      this.name = addressInfo.name;
      this.tel = addressInfo.tel;
      this.areaSelected = addressInfo.area;
      this.index = index;
      this.detail = addressInfo.detail;
      this.isDefault = addressInfo.isDefault;
    }
  },
  components: {
    HeaderNav
  },
  beforeRouteEnter (to, from, next) {
    next();
  }
}
</script>

<style lang="less" scoped>
.inputStyle() {
  width: 100%;
  padding: .1rem 0 .1rem .1rem;
}

.user-edit-address {
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0;
  z-index: 2;
  background: #f3f2f2;

  .edit-area {
    margin-top: .45rem;

    .list {
      display: flex;
      flex-direction: column;
      background: #fff;

      .input-item {

        input, textarea {
          .inputStyle();
        }

        .area {
          padding: .12rem;
          display: flex;
          justify-content: space-between;

          i {
            font-family: 'iconfont';
            transform: rotate(180deg);
          }
        }
      }

      .default {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .1rem;
        font-size: .15rem;
        color: #000;
      }
    }

    .delete-btn {
      color: @xRed;
      margin-top: .2rem;
      background: #fff;
      padding: .15rem 0 .15rem .1rem;
    }
  }
  
  .saveBtn {
    position: fixed;
    top: 0; right: .15rem;
    height: .45rem;
    line-height: .45rem;
    font-size: .16rem;
    font-weight: 100;
    color: #fff;
    z-index: 3;
  }
}
</style>

