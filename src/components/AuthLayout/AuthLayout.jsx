import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCurrentUser } from '../../redux/auth/auth-operations';

const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthLayout;
