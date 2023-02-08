import React, { useState, useEffect } from 'react';
import './Banner.css';
import axios from './axios.js';
import requests from './Requests';

const Banner = () => {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgoundSize: 'cover',
        backgroundImage: `url("https://wallpapercave.com/wp/wp8741529.jpg")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(
            `
            This is a test description
            This is a test description
            This is a test description
            This is a test description
            This is a test description
            This is a test description
            This is a test description
            This is a test description
            `,
            150
          )}
        </h1>
      </div>

      <div className="banner-fadeBottom" />
    </header>
  );
};

export default Banner;
