import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NavbarUser from './NavbarUser/NavbarUser';
import NavbarAuth from './NavbarAuth/NavbarAuth';

import { isUserLogin } from 'redux/auth/auth-selectors';

import css from './Navbar.module.css';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <div className={css.wrapper}>
      <NavLink to="/" className={css.link}>
        Home
      </NavLink>
      {isLogin && (
        <NavLink to="/my-contacts" className={css.link}>
          Contacts
        </NavLink>
      )}
      {!isLogin && <NavbarAuth />}
      {isLogin && <NavbarUser />}
    </div>
  );
};

export default Navbar;
