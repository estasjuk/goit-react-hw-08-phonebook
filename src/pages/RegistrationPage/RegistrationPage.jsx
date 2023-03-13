import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { signup } from 'redux/auth/auth-operations';
import { isUserLogin } from 'redux/auth/auth-selectors';

import Registration from '../../components/Registration/Registration';

const RegistrationPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();
  const handleSignup = data => {
    dispatch(signup(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <>
      <Registration onSubmit={handleSignup} />
    </>
  );
};

export default RegistrationPage;
