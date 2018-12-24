export default {
  userLogin(state, user) {
    localStorage.user = JSON.stringify(user);
    state.user = user;
  },
  userLogout(state) {
    localStorage.removeItem("user");
    state.user = null;
  }
};
