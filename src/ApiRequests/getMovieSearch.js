import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'd9ccf9379e20517fec2957866e8ec079';

async function getMovieSearch(query) {
  try {
      const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    alert('Oops, an error occurred');
  } 
}

export default getMovieSearch;