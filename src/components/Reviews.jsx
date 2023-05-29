import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import getMovieReviews from '../ApiRequests/getMovieReviews';
import 'react-toastify/dist/ReactToastify.css';

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
   }, []);
  
  return (
    <div>
      <ul style={{borderTop: "1px solid gray"}}> 
        {reviews?.length > 0 && reviews.map(review => (
          <li key={review.id} state={{ from: location }} >
                <p><b> Author: {review.author}</b></p>
                <p>{review.content}</p>
          </li> 
        ))} 
      </ul>
      {noReviews && <p>We don't have any reviews for this movie.</p>}
    </div>
  )
}
