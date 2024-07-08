import notPoster from '../../../../../public/notPoster.jpg';
import styles from './Poster.module.css';

const BASE_IMAGE_URL = import.meta.env.VITE_BASE_IMAGE_URL;

interface Props {
  path: string;
}

export const Poster = ({ path }: Props) => {
  return (
    <>
      {path ? (
        <img className={styles.img} src={`${BASE_IMAGE_URL}${path}`} alt="poster" />
      ) : (
        <img className={styles.img} src={notPoster} alt="poster" />
      )}
    </>
  );
};
