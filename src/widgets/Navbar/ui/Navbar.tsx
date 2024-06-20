import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
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
  );
};
