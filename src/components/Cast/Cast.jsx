import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import { getMovieCredits } from 'services/movieApi';
import { IMG_URL } from 'services/movieApi';


export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const movieCast = async () => {
      try {
        const data = await getMovieCredits(movieId);
        setCast(data.cast);
      } catch (error) {
        console.log(error);
        Notify.failed('No detals');
      }
    };

    movieCast();
  }, [movieId]);

  return (
    <ul className="row row-cols-1 row-cols-md-5 g-5">
      {cast.map(item => (
        <li key={item.id}>
          <img
            className="card-img-top"
            src={`${IMG_URL}${item.profile_path}`}
            alt={item.name}
          />
          <p className="card-title">{item.name}</p>
        </li>
      ))}
    </ul>
  );
};