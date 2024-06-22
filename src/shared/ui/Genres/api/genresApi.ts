import { axiosInstance } from '../../../api/axiosInstance';

export const getGenresList = async () => {
  try {
    const { data } = await axiosInstance.get('/genre/movie/list');
    return data.genres;
  } catch (error) {
    throw new Error('Failed to catch genres list');
  }
};
