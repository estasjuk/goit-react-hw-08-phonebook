import css from './Homepage.module.css';
import { GiNotebook } from 'react-icons/gi';

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Welcome to the ContactsBook App</h1>
      <h4 className={css.text}>Manage your contacts simply and effectively</h4>
      <GiNotebook className={css.icon} />
    </div>
  );
};

export default HomePage;
