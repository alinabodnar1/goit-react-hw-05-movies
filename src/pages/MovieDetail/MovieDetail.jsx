import React, {useState, useEffect,  Suspense, useRef } from 'react';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { getMovieDetails } from '../../fetchMovies';
import { Button, Container,Image, Title, Paragraph, StyledLink } from './MovieDetail.styled';

const getGenres = genresArray =>  {
  return genresArray.map(genre => genre.name).join(', ');
}

export default function MovieDetail() {
  const [movie, setMovie] = useState(''); 
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/");
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
  }, [movieId]);

  if (!movie) {
     return toast.error("There is no movie details for this movie.")
  }
  
  const genres = getGenres(movie.genres);
  
  return (
    <>
      <Link to={backLinkHref.current}>
        <Button variant="text">Back</Button>
      </Link>
      <div>
        <Container>
          <Image src={movie.poster_path && `${imgURL}${movie.poster_path}`}
            alt={movie.title} />
          <div >
            <Title>{movie.title}</Title>
            <p><b>Popularity:</b> {movie.popularity}</p>
            <p><b>Overview:</b>
              <Paragraph>{movie.overview}</Paragraph>
            </p>
            <p><b>Genres:</b> {genres}</p>
          </div>
        </Container>
        <ul>
          <li><StyledLink to="cast">Cast</StyledLink></li>
          <li><StyledLink to="reviews">Reviews</StyledLink></li>
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
