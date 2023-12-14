 import { useEffect, useState } from 'react';
import { getMovieTrending } from 'services/movieApi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { MovieList } from 'components/MovieList/MovieList';

export const HomePage = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getMovieTrending();
        if (data.results.length) {
          setMovie(data.results);
        }
      } catch (error) {
        console.log(error);
        Notify.failed('No films');
      }
    };
    fetchMovie();
  }, []);

  return <MovieList movie={movie} />;
};