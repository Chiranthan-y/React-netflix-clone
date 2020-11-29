import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
const base_url = 'https://image.tmdb.org/t/p/original';

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div>
      {/* title */}
      {/* container => posters */}

      <div className='row'>
        <div className='row__title'>
          <h1 className>{title}</h1>
        </div>

        <div className='row__posters'>
          {/* row posters */}
          {movies.map((movie) => (
            <img
              key={movie.id}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Row;
