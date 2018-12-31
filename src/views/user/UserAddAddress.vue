<template>
  <div class="user-add-address">
    <HeaderNav :navOptions="navOptions"></HeaderNav>
    <section class="add-area">
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
      </ul>
    </section>
    <div class="saveBtn" @click="handleSaveInfo">保存</div>
  </div>
</template>

<script>
import HeaderNav from "common/HeaderNav.vue";
import { mapState } from "vuex";

export default {
  name: "UserAddAddress",
  data() {
    return {
      navOptions: {
        title: "添加收货地址"
      },
      areaList: this.area,
      name: '',
      tel: '',
      area: '',
      detail: '',
      isShowAreaPicker: false,
      areaSelected: ''
    }
  },
  methods: {
    handleAreaConfirm(area) {
      let str = '';
      area.forEach(item => {
        str += item.name;
      });
      this.areaSelected = str;
    },
    handleSaveInfo() {
      this.$store.dispatch({
        type: "addAddress",
        addressInfo: {
          userId: this.user.id,
          ...this.addressInfo
        }
      });
    }
  },
  computed: {
    addressInfo() {
      return {
        name: this.name,
        tel: this.tel,
        address: this.areaSelected + this.detail
      }
    },
    ...mapState(['user'])
  },
  mounted() {
  },
  components: {
    HeaderNav
  }
}
</script>

<style lang="less" scoped>
.inputStyle() {
  width: 100%;
  padding: .1rem 0 .1rem .1rem;
}

.user-add-address {
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0;
  z-index: 2;
  background: #f3f2f2;

  .add-area {
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

