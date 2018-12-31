export default {
  isLogin: state => {
    const result = JSON.stringify(state.user);
    return result === "{}" ? false : true;
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
  },
  orderTotalPrice: state => state.order.buyNum * state.order.price
};
