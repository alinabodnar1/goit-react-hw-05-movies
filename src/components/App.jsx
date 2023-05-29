import { Routes, Route } from 'react-router-dom';
import { lazy } from "react";
import  Layout  from './Layout';
// import Home from '../pages/Home';
// import Movies from '../pages/Movies';
// import MovieDetail from '../pages/MovieDetail';
// import Cast from './Cast';
// import Reviews from './Reviews';


const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MovieDetail = lazy(() => import("../pages/MovieDetail"));
const Cast = lazy(() => import("./Cast"));
const Reviews = lazy(() => import("./Reviews"));

export const App = () => {
  return (
    //   <Routes>
    //     <Route path='/' element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path='movies' element={<Movies />} />
    //       <Route path='movies/:movieId' element={<MovieDetail/>} >
    //           <Route path='cast' element={<Cast />} />
    //           <Route path='reviews' element={<Reviews />} />
    //       </Route>
    //     </Route>
    //  </Routes>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
            <Route path=':movieId' element={<MovieDetail />} > 
              <Route path='cast' element={<Cast />} />
              <Route path='reviews' element={<Reviews />} />
            </Route>
            <Route path='movies' element={<Movies />} />
            <Route path='movies/:movieId' element={<MovieDetail/>} >
              <Route path='cast' element={<Cast />} />
              <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
     </Routes>
  );
};
