import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Loader from 'shared/components/Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const MyContactsPage = lazy(() =>
  import('pages/MyContactsPage/MyContactsPage')
);

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/my-contacts" element={<MyContactsPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
