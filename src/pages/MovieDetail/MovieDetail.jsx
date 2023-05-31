import React, {useState, useEffect,  Suspense, useRef } from 'react';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { getMovieDetails } from '../../fetchMovies';
import { genresGalleryEditor, genresDetail  } from 'getGenres';
import { Button, Container,Image, Title, Paragraph, StyledLink } from './MovieDetail.styled';

export default function MovieDetail() {
 const [movie, setMovie] = useState('');
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/");
  
  const genres = genresDetail(movie.genres);
  const genres1 = genresGalleryEditor(movie.genres);
  console.log("genresDetail:", genres);
  console.log("genresGalleryEditor:", genres1);
  
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
            <p><b>Genres:</b> {genresGalleryEditor(movie.genres)}</p>
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
