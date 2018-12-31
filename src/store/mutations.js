export default {
  setShoes(state, shoes) {
    state.shoes = shoes;
  },

  userLogin(state, user) {
    localStorage.user = JSON.stringify(user);
    state.user = user;
  },

  userLogout(state) {
    localStorage.removeItem("user");
    state.user = {};
  },

  updateUserInfo(state, update) {
    let user = state.user;
    for (let key in user) {
      if (key === update.attr) {
        user[key] = update.data;
      }
    }
  },

  addToCart(state, shoes) {
    try {
      state.cart.push(shoes);
    } catch (e) {
      throw new Error("添加至购物车失败: " + e);
    }
  },

  updateCart(state, data) {
    let cart = state.cart;
    cart = cart.map(item => {
      if (item.id === data.id) {
        if (!(item.buyNum === 1 && data.num < 0)) item.buyNum += data.num;
      }
      return item;
    });
  },

  updateCartCheck(state, data) {
    let cart = state.cart;
    if (data instanceof Object) {
      cart = cart.map(item => {
        if (item.id === data.id) {
          item.checked = data.checked;
        }
        return item;
      });
    }
    if (Object.prototype.toString.call(data) === "[object Boolean]") {
      cart = cart.map(item => {
        item.checked = data;
        return item;
      });
    }
  },

  clearCart(state) {
    state.cart = {};
  },

  createOrder(state, order) {
    state.order = order;
  },

  updateOrder(state, num) {
    let order = state.order;
    if (num < 0 && order.buyNum === 1) {
      order.buyNum += num;
    }
  },

  addAddressMTS(state, address) {
    state.user.address = [address];
  }
};
