import { Button } from '../../../shared/ui/Button';
import { Logo } from '../../../shared/ui/Logo';
import { Navbar } from '../../Navbar/ui/Navbar';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_items}>
          <div className={styles.helpers}>
            <Logo />
            <div>
              <Button style="primary">Login</Button>
            </div>
          </div>
          <Navbar />
        </div>
      </div>
    </header>
  );
};
