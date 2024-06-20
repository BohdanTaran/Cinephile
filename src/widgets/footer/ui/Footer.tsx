import logo from '../../../../public/icons/logo.png';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_items}>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
          <h1>Social Links:</h1>
        </div>
      </div>
    </footer>
  );
};
