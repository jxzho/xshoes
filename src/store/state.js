let userInfo = null;

try {
  if (localStorage.user) {
    userInfo = JSON.parse(localStorage.user);
  }
} catch (e) {
  throw new Error(e);
}

export default {
  user: userInfo,
  cart: []
};
