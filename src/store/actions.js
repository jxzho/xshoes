import api from "@/api";
import { Toast } from "vant";
import router from "@/router";

export default {

  editAddress({ commit }, data) {
    const addressInfo = data.addressInfo;
    Toast.loading({ mask: true, duration: 0 });

    api.editAddress(addressInfo, data.action).then(resp => {
      const res = resp.data;
      if (res.status == 1) {
        Toast.success("操作成功");
        commit("updateAddressMTS", res.data.address);
        router.go(-1);
      } else {
        Toast.fail("操作失败");
      }
    });
  },

  addToCart({ commit }, data) {
    
  }

};
