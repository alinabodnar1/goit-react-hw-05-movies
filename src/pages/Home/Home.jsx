import React, {useState, useEffect} from 'react';
import { getTrendMovies } from '../../fetchMovies';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { Title, StyledLink } from './Home.styled';

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
      <Title>Trending today</Title>
      <ul>
        {movies.map(movie => (
          <StyledLink key={movie.id}
            to={`${movie.id}`}
            state={{from: location}} >
            
            {movie.original_title}
          </StyledLink>
        ))}
     </ul>
      <ToastContainer
            autoClose={3000}
            position="top-left" />
    </div>
  )
}