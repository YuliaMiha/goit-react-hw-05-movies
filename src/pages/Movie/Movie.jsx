
import { MovieList } from 'components/MovieList/MovieList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieSearch } from 'services/movieApi';

export const Movie = () => {
  const [movie, setMovie] = useState([]);
  const [params, setParams] = useSearchParams();
  const query = params.get('q') || '';

  useEffect(() => {
    if (query === '') {
      return;
    }
    const fetchMovie = async () => {
      try {
        const data = await getMovieSearch({ query, page: 1 });
        if (data.results.length === 0) {
          Notify.failure('Nothing found');
        }

        if (data.results.length) {
          setMovie(data.results);
        }
      } catch (error) {
        console.log(error);
        Notify.failure('Error');
      }
    };

    fetchMovie();
  }, [query]);

  const handleSearch = e => {
    setMovie([]);
    setParams({ q: e });
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} title={movie.title} />
      <MovieList movie={movie} />
    </>
  );
};