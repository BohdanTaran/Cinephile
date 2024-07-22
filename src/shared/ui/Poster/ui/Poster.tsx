import notPoster from '../../../../../public/notPoster.jpg';

const BASE_IMAGE_URL = import.meta.env.VITE_BASE_IMAGE_URL;

interface Props {
  path: string;
}

export const Poster = ({ path }: Props) => {
  return (
    <>
      {path ? (
        <img className="xs:w-40 rounded-lg mb-1" src={`${BASE_IMAGE_URL}${path}`} alt="poster" />
      ) : (
        <img className="xs:w-40 rounded-lg mb-1" src={notPoster} alt="poster" />
      )}
    </>
  );
};
