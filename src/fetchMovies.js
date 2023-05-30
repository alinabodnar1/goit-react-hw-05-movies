import axios from "axios";
import { Loading } from 'notiflix/build/notiflix-loading-aio';

export function startLoader() { 
    Loading.circle({
        svgColor: '#B92F2C',
    });
};

export function stopLoader() { 
    Loading.remove();
};

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'd9ccf9379e20517fec2957866e8ec079';

async function getTrendMovies() {
  try {
        const url = `${BASE_URL}movie/popular?api_key=${API_KEY}`;
        startLoader();
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        alert('Oops, an error occurred');
    } finally {
        stopLoader();
    }
}

async function getMovieDetails(id) {
  try {
        const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
        startLoader();
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        alert('Oops, an error occurred');
    } finally {
        stopLoader();
    }
}

async function getMovieCast(id) {
  try {
        const url = `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        alert('Oops, an error occurred');
    } 
}
async function getMovieReviews(id) {
  try {
    const url = `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    alert('Oops, an error occurred');
  } 
}

async function getMovieSearch(query) {
  try {
        const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
        startLoader();
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        alert('Oops, an error occurred');
    } finally {
        stopLoader();
    } 
}
export {getTrendMovies, getMovieDetails, getMovieCast, getMovieReviews, getMovieSearch} ;