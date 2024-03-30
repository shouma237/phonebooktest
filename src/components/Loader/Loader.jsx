import { HashLoader } from 'react-spinners';
import css from './Loader.module.css';

export const Loader = () => {
  return <HashLoader className={css.loader} color="#366bd6" />;
};
