import React, {useState, useEffect,  Suspense } from 'react';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import getMovieDetails from '../ApiRequests/getMovieById';
import genresItems, { genresGalleryEditor } from 'getGenres';
import Button from '@mui/material/Button';

export default function MovieDetail() {
 const [movie, setMovie] = useState('');
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/products";
  
  const genres = genresItems(movie.genres);
  
  const imgURL = 'https://image.tmdb.org/t/p/w200';
  useEffect(() => {
    getMovieDetails(movieId).then(data => {
      if (data) {
        setMovie(data);
      }
    })
    .catch(() => {
        toast.error("An error occurred while responding movie details from the backend.")
      });
  }, []);

  return (
    <>
      <Link to={location.state.from}>
        <Button variant="text">Back</Button>
      </Link>
      <div>
        <div style={{display: "flex"}}>
          <img src={`${imgURL}${movie.poster_path}`}
            alt={movie.title} />
          <div >
            <h2>{movie.title}</h2>
            <p>Popularity: {movie.popularity}</p>
            <p><b>Overview:</b> {movie.overview}</p>
            <p><b>Genres:</b> {genresGalleryEditor(movie.genres)}</p>
          </div>
        </div>
        <h3>Additional Information</h3>
        <ul>
          <li><Link to="cast">Cast</Link></li>
          <li><Link to="reviews">Reviews</Link></li>
        </ul>
        <Suspense fallback={<div>Loading additional information...</div>}>
          <Outlet />
        </Suspense>
        <ToastContainer
            autoClose={3000}
            position="top-left" />
      </div> 
    </>
  )
}
