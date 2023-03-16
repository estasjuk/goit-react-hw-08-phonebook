export const isUserLogin = state => state.auth.isLogin;
export const getUser = state => {
  console.log(state.auth.user);
  return state.auth.user;
};
export const getAuth = state => {
  const { isLogin, token } = state.auth;
  return { isLogin, token };
};