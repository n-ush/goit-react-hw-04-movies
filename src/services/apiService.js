import axios from "axios";

const KEY = "5fd54ae78b9e52e0d1695927f83f45b9";

const fetchTrending = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY} `
  );

  return data.results;
};

const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}`
  );
  return response.data;
};

const fetchMovieCast = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}`
  );
  return response.data.cast;
};

const fetchReviews = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}`
  );
  return response.data.results;
};

const searchMovies = (query) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${KEY}`
    )
    .then((response) => response.data.results);
};

export {
  fetchTrending,
  searchMovies,
  fetchMovieDetails,
  fetchMovieCast,
  fetchReviews,
};
