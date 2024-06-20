import logo from '../../../../public/icons/logo.png';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_items}>
          <div className={styles.helpers}>
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
            <div>
              <button className={styles.auth_btn}>Login</button>
            </div>
          </div>
          <div className={styles.categories}>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <a href="">Now Playing</a>
              </li>
              <li className={styles.li}>
                <a href="">Popular</a>
              </li>
              <li className={styles.li}>
                <a href="">Top Rated</a>
              </li>
              <li className={styles.li}>
                <a href="">Upcoming</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
