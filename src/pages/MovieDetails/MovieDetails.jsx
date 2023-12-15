import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/movieApi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { MovieDetalComponent } from 'components/MovieDetalComponent/MovieDetalComponent';
import GoBack from 'components/GoBack/GoBack';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();

  useEffect(() => {
    const movieDetals = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
        Notify.failed('No detals');
      }
    };

    movieDetals();
  }, [movieId]);

// console.log(location);
  return (
    <>
      <GoBack />
      {movie && <MovieDetalComponent
        src={movie.poster_path}
        title={movie.title}
        overview={movie.overview}
        genres={movie.genres}
      />}
      <Link state={{ from: location.state?.from || location }} to="cast">
     
      <button className="btn btn-outline-primary m-3">Cast</button>
      </Link>
      <Link state={{ from: location.state?.from || location }} to="reviews">

        <button className="btn btn-outline-primary">Reviews</button>
      </Link>
      <Suspense fallback={<p>Зробіть свій вибір</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};