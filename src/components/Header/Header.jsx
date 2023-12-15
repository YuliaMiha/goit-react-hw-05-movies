import {Link, NavLink} from 'react-router-dom'

export const Header =()=>{

    return(
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
        FILMOTEKA
    </Link>
    <button 
    className="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarNav" 
    aria-controls="navbarNav" 
    aria-expanded="false" 
    aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <NavLink className="nav-link block" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link block" to="/movies">
              Movie
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};