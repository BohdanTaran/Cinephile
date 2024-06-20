import { Logo } from '../../../shared/ui/Logo';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_items}>
          <Logo />
          <h1>Social Links:</h1>
        </div>
      </div>
    </footer>
  );
};
