export const isUserLogin = state => state.auth.isLogin;
export const getUser = ({ auth }) => {
  return auth.user;
};
export const getAuth = state => {
  console.log(state);
  const { isLogin, token } = state.auth;
  return { isLogin, token };
};
