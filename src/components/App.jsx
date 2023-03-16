import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AuthLayout from '../components/AuthLayout/AuthLayout';
import Navbar from '../components/Navbar/Navbar';
import UserRoutes from './UserRoutes';

import { store, persistor } from '../redux/store';

import css from './App.module.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthLayout>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <div className={css.wrapper}>
              <Navbar />
              <UserRoutes />
            </div>
          </BrowserRouter>
        </AuthLayout>
      </PersistGate>
    </Provider>
  );
}

export default App;
