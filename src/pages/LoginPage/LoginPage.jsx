import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { login } from 'redux/auth/auth-operations';
import { isUserLogin } from 'redux/auth/auth-selectors';

import Login from '../../components/Login/Login';

const LoginPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();
  const handleLogin = data => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <>
      <Login onSubmit={handleLogin} />
    </>
  );
};

export default LoginPage;
