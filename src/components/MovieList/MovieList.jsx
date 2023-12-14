import { Link, useLocation } from "react-router-dom"
import PropTypes from 'prop-types';

export const MovieList =({movie}) =>{
    const location = useLocation();
    return(
        <ul>
        {movie.map(item => (
          <li key={item.id}>
            <Link state={{ from: location }} to={`/movies/${item.id}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    )
}

MovieList.propTypes = {
    movie: PropTypes.array.isRequired
}