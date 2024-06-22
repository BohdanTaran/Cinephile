import { axiosInstance } from '../../../shared/api/axiosInstance';

export const getNowPlayingFilms = async () => {
  try {
    const { data } = await axiosInstance.get('/movie/now_playing');
    return data.results;
  } catch (error) {
    throw new Error('Failed to fetch NowPlaying films');
  }
};
