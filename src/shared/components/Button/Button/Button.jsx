import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ children, type = 'submit' }) => {
  return (
    <button type="type" className={css.Button}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
};
