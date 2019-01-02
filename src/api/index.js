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
  },

  // 发起支付
  payment(orderData) {
    return axios.post("/order/pay", orderData);
  },

  // 提交订单
  commitOrder(data) {
    return axios.post("/order/add", data);
  },

  // 提交购物车
  commitScart(data) {
    return axios.post("/scart/add", data);
  },

  // 获取我的订单数据
  getOrder(id) {
    return axios.get("/order/" + id);
  },

  // 获取我的购物车数据
  getScart(id) {
    return axios.get("/scart/" + id);
  }
};
