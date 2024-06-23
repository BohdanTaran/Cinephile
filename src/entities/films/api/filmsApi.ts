import { axiosInstance } from '../../../shared/api/axiosInstance';

export const getNowPlayingFilms = async (page = 1) => {
  try {
    const { data } = await axiosInstance.get('/movie/now_playing', {
      params: {
        page,
      },
    });

    return data;
  } catch (error) {
    throw new Error('Failed to fetch NowPlaying films');
  }
};
