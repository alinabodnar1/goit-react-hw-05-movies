import React, {useState, useEffect} from 'react';
import getTrendMovies from '../ApiRequests/getTrendMovies';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useLocation } from 'react-router-dom';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  
  useEffect(() => {
    getTrendMovies().then(data => {
      if (data.results) {
        setMovies(data.results);
      }
    })
      .catch(() => {
        toast.error("An error occurred while responding trending movies from the backend.")
      });
  }, []);
 
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <Link key={movie.id}
            to={`${movie.id}`}
            state={{from: location}}
            style={{ display: "block" }}>
            {movie.original_title}
          </Link>
        ))}
     </ul>
      <ToastContainer
            autoClose={3000}
            position="top-left" />
    </div>
  )
}