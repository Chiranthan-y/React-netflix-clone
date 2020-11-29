import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axiso from './axios';
import requests from './requests';
import './Banner.css';

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axiso.get(requests.fetchTreanding);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}>
      <div className='banner__content'>
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>

        <h1 className='banner__description'>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className='banner--fadeBottom' />
    </header>
  );
};

export default Banner;
