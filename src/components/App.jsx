import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Loader from 'shared/components/Loader/Loader';
import store from '../redux/store';

const Navbar = lazy(() => import('./Navbar/Navbar'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const MyContactsPage = lazy(() =>
  import('pages/MyContactsPage/MyContactsPage')
);

export const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<MyContactsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </Provider>
  );
};
