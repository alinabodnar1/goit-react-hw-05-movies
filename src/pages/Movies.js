import React, {useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useSearchParams } from 'react-router-dom';
import Searchbar from "../components/Searchbar";
import { getMovieSearch } from '../fetchMovies';
import { StyledLink } from '../pages/Home/Home.styled';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (query) => {
    setSearchParams({ query: query.trim() });
    setMovies([]);
  }

  useEffect(() => {
    const query = searchParams.get('query') ?? "";
      if (!query) {
          return;
      }
    getMovieSearch(query).then(data => {
      if (data.results.length === 0 || !data.results) {
        toast.error("Sorry, there are no movies matching your search query.");
        return;
      }
      if (data.results) {
        setMovies(data.results);
      }
    })
      .catch(() => {
        toast.error("An error occurred while responding movies from the backend.")
      });
  }, [searchParams]);
 

  return (
    <div>
      <Searchbar handleSearch={handleSearch}/>
        <ul>
        {movies.map(movie => (
          <StyledLink key={movie.id}
            to={`${movie.id}`}
            state={{from: location}}
            style={{ display: "block" }}>
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

