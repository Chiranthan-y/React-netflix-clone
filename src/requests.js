const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchTreanding: `/trending/all/week?api_key=${API_KEY}&language=en-IN`,
  fetchNetflixOriginals: `/trending/tv/week?api_key=${API_KEY}&with_networks=123`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
