import { Link, useLocation } from 'react-router-dom';

const GoBack = () => {
  const location = useLocation();
  return <Link  className="btn btn-primary" to={location.state?.from ?? '/'}>Go back</Link>;
};

export default GoBack;