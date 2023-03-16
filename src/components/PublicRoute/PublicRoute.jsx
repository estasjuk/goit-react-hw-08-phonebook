import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getAuth } from '../../redux/auth/auth-selectors';

import Loader from 'shared/components/Loader/Loader';

const PublicRoute = () => {
  const { isLogin, token } = useSelector(getAuth);

  if (!isLogin && token) {
    return <Loader />;
  }

  if (isLogin) {
    return <Navigate to="/my-contacts" />;
  }

  return <Outlet />;
};

export default PublicRoute;
