import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getMovieReviews } from '../fetchMovies';
import { Paragraph, ListLine } from './Components.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [noReviews, setNoReviews] = useState(false);
    const { movieId } = useParams();
    const location = useLocation();
  
   useEffect(() => {
     getMovieReviews(movieId).then(data => {
       if (data.results.length === 0 || !data.results) {
         setNoReviews(true);
        return;
      }
         setReviews(data.results);
     })
     .catch(() => {
        alert("An error occurred while responding movies from the backend.")
      });
   }, [movieId]);
  
  return (
    <div>
      <ListLine> 
        {reviews?.length > 0 && reviews.map(review => (
          <li key={review.id} state={{ from: location }} >
                <p><b> Author: {review.author}</b></p>
                <Paragraph>{review.content}</Paragraph>
          </li> 
        ))} 
      </ListLine>
      {noReviews && <p>We don't have any reviews for this movie.</p>}
    </div>
  )
}
