import axios from 'axios';

export const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const movieService = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: 'd4c1160dfb24302d7b96bc867bcaabe6'
    }
})

export const getMovieTrending = async () => {
    const {data} = await movieService.get('trending/movie/day');
    return data;
};


export const getMovieSearch  = async params => {
  const { data } = await movieService.get('/search/movie', { params });
  return data;
};

export const getMovieDetails  = async id => {
  const { data } = await movieService.get(`/movie/${id}` );
  return data;
};

export const getMovieCredits  = async id => {
  const { data } = await movieService.get(`/movie/${id}/credits`);
  return data;
};

export const getMovieReviews  = async id => {
  const { data } = await movieService.get(`/movie/${id}/reviews`);
  return data;
};