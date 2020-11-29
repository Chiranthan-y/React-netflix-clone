import React from 'react';

import './App.css';
import Row from './Row';
import Banner from './Banner';
import request from './requests';
import Navbar from './Navbar';
function App() {
  return (
    <div className='app'>
      <Navbar />
      <Banner />
      <Row
        title='NETFLIX ORIGINAL'
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title='Trending now' fetchUrl={request.fetchTreanding} />
      <Row title='Action movies' fetchUrl={request.fetchActionMovies} />
      <Row title='Comedy movies' fetchUrl={request.fetchComedyMovies} />
      <Row title='Horror movies' fetchUrl={request.fetchHorrorMovies} />
      <Row title='Romantic movies' fetchUrl={request.fetchRomanticMovies} />
      <Row title='Documentries' fetchUrl={request.fetchDocumentries} />
    </div>
  );
}

export default App;
