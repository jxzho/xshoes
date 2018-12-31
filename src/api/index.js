import axios from "axios";
axios.defaults.baseURL = "http://xshoes.cn:8000";
axios.defaults.withCredentials = true; // axios每次请求带上cookie

export default {
  sendCode(tel) {
    return axios.get(`/user/sendCode?tel=${tel}`);
  },
  verifyCode(tel, code) {
    return axios.get(`/user/verify?tel=${tel}&code=${code}`);
  },
  login(username, password) {
    return axios.post(`/user/login`, {
      username,
      password
    });
  },

  // 首页
  getShoes() {
    return axios.get("/shoes");
  },

  // 添加地址
  editAddress(address, action) {
    return axios.post("/user/address/" + action, address);
  }
};
