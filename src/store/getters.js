export default {
  isLogin: state => {
    return Boolean(state.user);
  },
  isAllChecked: state => {
    const flag = state.cart.some(item => {
      return item.checked === false;
    });
    return !flag;
  },
  cartTotal: state => state.cart.length,
  cartTotalPrice: state => {
    let totalPrice = 0;
    if (state.cart.length !== 0) {
      state.cart.forEach(item => {
        totalPrice += item.buyNum * item.price;
      });
    }

    return totalPrice;
  }
};
