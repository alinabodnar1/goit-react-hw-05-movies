import React, {useState, useEffect} from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getMovieCast } from '../fetchMovies';
import { ItemCast, ListLine, List } from './Components.styled';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const [noCast, setNoCast] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const imgURL = 'https://image.tmdb.org/t/p/w300';
  
  useEffect(() => {
    getMovieCast(movieId).then(data => {
      if (data.cast.length === 0 || !data.cast) {
        setNoCast(true);
        return;
      }
        setCast(data.cast);
    })
    .catch(() => {
        alert("An error occurred while responding Cast from the backend.")
      });
  }, []);

  return (
    <div>
      <ListLine> 
        <List>
            {cast.map(item => (
          <ItemCast key={item.id} state={{ from: location }} >
            <img src={`${imgURL}${item.profile_path}`}
                    width="100"
                    alt={item.name}></img>
                <p><b>{item.name}</b></p>
                <p><b>Role: </b>{item.character}</p>
          </ItemCast> 
        ))}
        </List>
      </ListLine>
      {noCast && <p>We don't have any cast for this movie.</p>}
    </div>
  )
}
