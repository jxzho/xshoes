let userInfo = {};

try {
  if (localStorage.user) {
    userInfo = JSON.parse(localStorage.user);
  }
} catch (e) {
  throw new Error(e);
}

export default {
  shoes: [],
  user: userInfo,
  cart: [],
  order: {}
};
