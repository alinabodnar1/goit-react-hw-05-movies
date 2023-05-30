import React, {useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, Link } from 'react-router-dom';
import Searchbar from "../components/Searchbar";
import { getMovieSearch } from '../fetchMovies';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const location = useLocation();

  const handleSearch = (query) => {
    setQuery(query.trim());
    setMovies([]);
  }

  useEffect(() => {
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
  }, [query]);
 

  return (
    <div>
      <Searchbar handleSearch={handleSearch}/>
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

