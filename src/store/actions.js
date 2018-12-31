import api from "@/api";
import { Toast } from "vant";
import router from "@/router";

export default {
  addAddress({ commit }, data) {
    const addressInfo = data.addressInfo;
    Toast.loading({ mask: true, duration: 0 });
    api.addUserAddress(addressInfo).then(res => {
      if (res.data.status == 1) {
        Toast.success("添加成功");
        commit("addAddressMTS", addressInfo.address);
        router.go(-1);
      } else {
        Toast.fail("添加失败");
      }
    });
  }
};
