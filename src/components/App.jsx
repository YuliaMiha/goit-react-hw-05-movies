import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";


const HomePage = lazy(() => import('../pages/HomePage'));
const Movie = lazy(() => import('../pages/Movie'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../components/Cast'));
const Reviews = lazy(() => import('../components/Reviews'));
const Header = lazy(() => import('../components/Header'));


export const App = () => {
  return (
   <>
   <Header />
   <Suspense fallback={<p>Loading...</p>}>
    <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/movies' element={<Movie />} />
    <Route path='/movies/:movieId' element={<MovieDetails />}>
     <Route path='cast' element={<Cast />} />
     <Route path="reviews" element={<Reviews />} />
    </Route>
    </Routes>
   </Suspense>
   </>
  );
};
