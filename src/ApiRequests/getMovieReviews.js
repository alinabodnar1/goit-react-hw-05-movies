import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'd9ccf9379e20517fec2957866e8ec079';

async function getMovieReviews(id) {
  try {
    const url = `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    alert('Oops, an error occurred');
  } 
}
export default getMovieReviews;